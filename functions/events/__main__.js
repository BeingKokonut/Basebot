/**
 * An example typed API that generates a hello world message
 *   Read more about typing at: https://github.com/acode/functionscript
 * @param {string} name The name to say hello to
 * @param {integer} count The number of times to say hello
 * @returns {object} body
 * @ {array} messages A list of messages
 */
module.exports = async (name = 'world', count = 10) => {
  count = Math.min(Math.max(1, count), 100);
  return {
    messages: Array(count).fill(`Hello ${name}, welcome to Autocode ${count} times!`)
  };
};

//HTTPS - Request/Webhook