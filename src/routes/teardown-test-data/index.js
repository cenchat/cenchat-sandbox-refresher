const express = require('express');

/**
 * @param {firebase.firestore.WriteBatch} batch
 * @param {Object} data
 * @param {firebase.firestore.CollectionReference|firebase.firestore.DocumentReference} ref
 * @return {Promise} Resolves once all data have been batched for delete
 * @function
 */
function batchDeleteData(batch, data, ref) {
  const promises = [];

  for (const docId of Object.keys(data)) {
    const promise = ref.collection(docId).get().then((snapshot) => {
      const docDeletes = [];

      for (const doc of snapshot.docs) {
        batch.delete(doc.ref);

        const newData = data[docId];

        Object.keys(newData).forEach(() => (
          docDeletes.push(batchDeleteData(batch, newData, doc.ref))
        ));
      }

      return Promise.all(docDeletes);
    });

    promises.push(promise);
  }

  return Promise.all(promises);
}

/**
 * @param {admin} admin
 * @return {Promise} Resolves once all test accounts have been deleted
 * @function
 */
async function tearDownTestAccounts(admin) {
  const auth = admin.auth();
  const { users } = await auth.listUsers();
  const userDeleteRequests = users.map(user => auth.deleteUser(user.uid));

  return Promise.all(userDeleteRequests);
}

/**
 * @param {admin} admin
 * @return {Promise} Resolves once all data have been deleted
 * @function
 */
function teardownTestData(admin) {
  const db = admin.firestore();
  const batch = db.batch();
  const data = {
    chats: {},
    notifications: {},
    messages: {},
    pages: {},
    sites: { admins: {}, slugs: {} },
    username: {},
    users: {
      chats: {},
      notificationTokens: {},
      sitesAsAdmin: {},
    },
  };

  return batchDeleteData(batch, data, db).then(() => batch.commit());
}

/**
 * @param {firebase} admin
 * @return {Function} Handler
 * @function
 */
function handlePostRequest(admin) {
  return async (req, res) => {
    await tearDownTestAccounts(admin);
    await teardownTestData(admin);

    return res.status(204).send();
  };
}

/**
 * @param {FirebaseAdmin} admin
 * @return {Router} Express router
 * @function
 */
function main(admin) {
  const router = new express.Router();

  router.post('/', handlePostRequest(admin));

  return router;
}

module.exports = main;
