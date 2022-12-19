exports.sendText = (event) => {
    let msg

    let msgText = event.message.text.toLowerCase().trim()
    
    if (msgText === "มีไรบ้าง") {
        msg = { type: "text", text: "ไม่มี" }
    } else if (msgText === "แม่ง") {
        msg = { type: "text", text: "..." }
    } else if (msgText === "1") {
        msg = {
            "type": "sticker",
            "packageId": "446",
            "stickerId": "2006"
        }
    }
    else {
        msg = { type: "text", text: "สวัสดี กรุณาพิมพ์ข้อความอีกครั้ง" }
    }
    return msg
}