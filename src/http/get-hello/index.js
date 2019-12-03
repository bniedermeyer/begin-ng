// Enable secure sessions, express-style middleware, and more:
// https://docs.begin.com/en/functions/http/
//
// let begin = require('@architect/functions')

// HTTP function
exports.handler = async function http(req) {
  console.log(req);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Serverless Functions Are Go!'
    })
  };
};
