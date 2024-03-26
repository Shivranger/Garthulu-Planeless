const { sendComic } = require("../utils/sendComic");
const { randomGarfield } = require("garfieldjs");

const sendRandomComic = () => {
    randomGarfield()
    .then(data => {
        sendComic(data)
    })
    .catch( (error) => console.log(error));
}

module.exports = {sendRandomComic};