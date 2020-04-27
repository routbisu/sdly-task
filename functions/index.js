const functions = require('firebase-functions');
const { allQuestions, featuredTopics } = require('./data');

// Get list of questions
exports.questions = functions.https.onRequest((_, response) => {
  response.send(allQuestions);
});

// Get featured topics
exports.topics = functions.https.onRequest((_, response) => {
  response.send(featuredTopics);
});
