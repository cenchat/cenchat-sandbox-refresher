const express = require('express');

const fixtureData = require('../../utils/fixture-data');
const testAccounts = require('../../utils/test-accounts');

/**
 * @param {firebase.firestore.WriteBatch} batch
 * @param {Object} data
 * @param {firebase.firestore.CollectionReference} ref
 * @param {string} id
 * @function
 */
function batchWriteData(batch, data, ref, id) {
  if (id) {
    const doc = Object.assign({}, data);

    delete doc.__collection__;

    batch.set(ref, doc);
  }

  if (data.__collection__) {
    for (const collectionId of Object.keys(data.__collection__)) {
      const docs = data.__collection__[collectionId].__doc__;

      for (const docId of Object.keys(docs)) {
        const newData = docs[docId];
        const newRef = ref.collection(collectionId).doc(docId);

        batchWriteData(batch, newData, newRef, docId);
      }
    }
  }
}

/**
 * @param {admin} admin
 * @return {Promise} Resolves once all test accounts have been created
 * @function
 */
function setupTestAccounts(admin) {
  const accounts = testAccounts();
  const accountCreateRequests = accounts.map(account => admin.auth().createUser(account));

  return Promise.all(accountCreateRequests);
}

/**
 * @param {admin} admin
 * @return {Promise} Resolves once setting up test data completes
 * @function
 */
function setupTestData(admin) {
  const db = admin.firestore();
  const batch = db.batch();
  const data = fixtureData(db);

  batchWriteData(batch, data, db);

  return batch.commit();
}

/**
 * @param {firebase} admin
 * @return {Function} Handler
 * @function
 */
function handlePostRequest(admin) {
  return async (req, res) => {
    await setupTestAccounts(admin);
    await setupTestData(admin);

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
