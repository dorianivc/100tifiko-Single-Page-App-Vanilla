module.exports = async function (context, req) {
    fetch('https://rick-and-morty-api-phrases.herokuapp.com//phrases/en_us/random')
  .then(response => response.json())
  .then(data => console.log(data));
    context.res.json({
        text: data.phrase
    });
};