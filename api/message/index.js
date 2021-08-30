module.exports = async function (context, req) {
  const fetch = require("node-fetch");

  try {
    const request = await fetch(
      "https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random"
    );
    const body = await request.json();

    context.res.json({
      text: String(body.phrase),
    });
  } catch (e) {
    console.log(
      `An error ocurred while fetching a random phrase: ${e.message}`,
      e
    );
  }
};
