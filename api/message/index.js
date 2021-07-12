module.exports = async function (context, req) {
    let response;
    fetch('https://rick-and-morty-api-phrases.herokuapp.com/phrases/en_us/random').then(response => response.json()).then(data => response=data).catch(console.log("error"));
    context.res.json({
        text: response.phrase
    });
};