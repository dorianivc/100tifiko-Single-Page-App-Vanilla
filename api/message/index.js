module.exports = async function (context, req) {
    const fetch= require('node-fetch');

    let response;
    await fetch('https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random').then(response => response.json()).then(data => response=data).catch(console.log("error"));
    context.res.json({
        text: String(response.phrase)
    });
};