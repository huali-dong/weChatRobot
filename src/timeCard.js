const schedule = require('node-schedule')
const axios = require('axios')
const timeCardCorn = () => {
    schedule.scheduleJob({hour: 17, minute: 10, dayOfWeek: [6, 7]}, () => {
        axios.post(process.env.WECOM_ROBOT_URL, {
            msgtype: "text", text: {
                content: "😜无敌小可爱,来提醒你们填写TimeCard啦"
            }
        }).then(() => {
            console.log('执行成功')
        }).catch((err) => {
            console.log(err, '下次继续')
        })
    })
}

exports.timeCardCorn = timeCardCorn