const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const { allQuestions, featuredTopics } = require('./data');

// Set region to Hongkong
const func = functions.region('asia-east2');

// Get list of questions
// Params: topic
exports.questions = func.https.onRequest((request, response) => {
  cors(request, response, () => {
    let questions = [...allQuestions];
    const topic = request.query.topic;

    if (topic) {
      questions = questions.filter((ques) => ques.topics.includes(topic));
    }

    response.send(questions);
  });
});

// Get featured topics
exports.topics = func.https.onRequest((request, response) => {
  cors(request, response, () => {
    response.send(featuredTopics);
  });
});
