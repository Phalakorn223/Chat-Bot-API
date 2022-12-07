const config = require('../config/line')

exports.handleMessage = (event) => {
    let msg
    let msgText = event.message.text.toLowerCase().trim()
    if (msgText === "มีไรบ้าง") {
        msg = { type: "text", text: "มีโปรโมชั่น ราคา 1,500 บาท" }
    }else if(msgText === "555"){
        msg = { type: "text", text: "ตลก" }
    }else if(msgText === "111"){
        msg = {
            "type": "sticker",
            "packageId": "446",
            "stickerId": "2023"
        }
    }
    else{
        msg = { type: "text", text: "สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง" }
    }
    return config.client.replyMessage(event.replyToken, msg)
}