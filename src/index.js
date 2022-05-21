const {standUpCorn} = require("./standUp");
const {timeCardCorn} = require("./timeCard");
const {codeReviewCorn} = require("./codeReview");

const indexCorn = () => {
    codeReviewCorn(), standUpCorn(), timeCardCorn()
}

indexCorn();