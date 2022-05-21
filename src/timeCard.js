const schedule = require('node-schedule')
const axios = require('axios')
const scheduleCronStyle = () => {
    schedule.scheduleJob({hour: 17, minute: 40, dayOfWeek: [6,7]}, () => {
        axios.post("", {
            msgtype: "text",
            text: {
                content: "我是你的无敌小可爱"
            }
        }).then(() => {
            console.log('执行成功')
        }).catch((err) => {
            console.log(err, '下次继续')
        })
    })
}

scheduleCronStyle();