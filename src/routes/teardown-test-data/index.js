const express = require('express');

/**
 * Batch delete data
 *
 * @param {firebase.firestore.WriteBatch} batch
 * @param {Object} data
 * @param {firebase.firestore.CollectionReference|firebase.firestore.DocumentReference} ref
 * @return {Promise} Resolves once all data have been batched for delete
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
 * Deletes test data
 *
 * @param {admin} admin
 * @return {Promise} Resolves once all data have been deleted
 */
function teardownTestData(admin) {
  const db = admin.firestore();
  const batch = db.batch();
  const data = {
    betaTesters: {},
    comments: {},
    defaultStickerPacks: {},
    facebookIds: {},
    notifications: {},
    pages: {},
    sites: { admins: {}, slugs: {} },
    stickerPacks: {},
    stickers: {},
    userMetaInfos: {},
    usernames: {},
    users: {
      followingComments: {},
      followings: {},
      followers: {},
      sitesAsAdmin: {},
      stickerPacks: {},
    },
  };

  return batchDeleteData(batch, data, db).then(() => batch.commit());
}

/**
 * Handles POST request
 *
 * @param {firebase} admin
 * @return {Function} Handler
 */
function handlePostRequest(admin) {
  return (req, res) => teardownTestData(admin).then(() => res.status(204).send());
}

/**
 * Entry function
 *
 * @param {FirebaseAdmin} admin
 * @return {Router} Express router
 */
function main(admin) {
  const router = new express.Router();

  router.post('/', handlePostRequest(admin));

  return router;
}

module.exports = main;
