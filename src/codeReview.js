const schedule = require('node-schedule')
const axios = require('axios')
const scheduleCronStyle = () => {
    schedule.scheduleJob({hour: 17, minute: 50, dayOfWeek: [6,7]}, () => {
        axios.post("", {
            msgtype: "text",
            text: {
                content: "😜dev们准备一下，该codeReview啦"
            }
        }).then(() => {
            console.log('执行成功')
        }).catch((err) => {
            console.log(err, '下次继续')
        })
    })
}

scheduleCronStyle();