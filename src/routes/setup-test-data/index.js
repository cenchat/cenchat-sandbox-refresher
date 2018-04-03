const express = require('express');

const fixtureData = require('../../utils/fixture-data');

/**
 * Batch writes a given test data
 *
 * @param {firebase.firestore.WriteBatch} batch
 * @param {Object} data
 * @param {firebase.firestore.CollectionReference} ref
 * @param {string} id
 */
function batchWriteData(batch, data, ref, id) {
  if (id) {
    const doc = Object.assign({}, data);

    delete doc.__collection__;

    batch.set(ref, doc);
  }

  if (data.__collection__) {
    for (const collectionId of Object.keys(data.__collection__)) {
      const docs = data['__collection__'][collectionId]['__doc__'];

      for (const docId of Object.keys(docs)) {
        const newData = docs[docId];
        const newRef = ref.collection(collectionId).doc(docId);

        batchWriteData(batch, newData, newRef, docId);
      }
    }
  }
}

/**
 * Setup test data
 *
 * @param {admin} admin
 * @return {Promise} Resolves once setting up test data completes
 */
function setupTestData(admin) {
  const db = admin.firestore();
  const batch = db.batch();
  const data = fixtureData(db);

  batchWriteData(batch, data, db);

  return batch.commit();
}

/**
 * Handles POST request
 *
 * @param {firebase} admin
 * @return {Function} Handler
 */
function handlePostRequest(admin) {
  return (req, res) => setupTestData(admin).then(() => res.status(204).send());
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
