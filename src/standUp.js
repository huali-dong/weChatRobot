const schedule = require('node-schedule')
const axios = require('axios')
const standUpCorn = () => {
    schedule.scheduleJob({hour: 18, minute: 6, dayOfWeek: [6, 7]}, () => {
        axios.post(process.env.WECOM_ROBOT_URL, {
            msgtype: "text", text: {
                content: "😜该站会啦", mentioned_list: '@all'
            }
        }).then(() => {
            console.log('执行成功')
        }).catch((err) => {
            console.log(err, '下次继续')
        })
    })
}
exports.standUpCorn = standUpCorn