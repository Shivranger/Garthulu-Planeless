const { sendComic } = require("../utils/sendComic");
const { todayGarfield } = require("garfieldjs");

const sendTodaysComic = () => {
    todayGarfield()
    .then(data => {
        sendComic(data)
    })
    .catch( (error) => console.log(error));
}

module.exports = {sendTodaysComic};