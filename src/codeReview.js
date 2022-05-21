const schedule = require('node-schedule')
const axios = require('axios')
const codeReviewCorn = () => {
    schedule.scheduleJob({hour: 18, minute: 05, dayOfWeek: [6, 7]}, () => {
        axios.post(process.env.WECOM_ROBOT_URL, {
            msgtype: "text", text: {
                content: "😜dev们准备一下，该codeReview啦"
            }
        }).then(() => {
            console.log('执行成功')
        }).catch((err) => {
            console.log(err, '下次继续')
        })
    })
}
exports.codeReviewCorn = codeReviewCorn