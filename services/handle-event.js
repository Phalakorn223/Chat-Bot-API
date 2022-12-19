const config = require('../config/line')
const service = require('../services/handle_message')

// event handler
exports.handleEvent = (event)=> {
    switch(event.type){
        case "message" :
            switch(event.message.type){
                case "text" :
                    //console.log("text message")
                   service.handleMessage(event)
                    break;
                    case "sticker" :
                        console.log("Sticker message")
                        break;
                    case "image":
                        console.log("Image message")
                        console.log(event.message)
                        break;
                    default:
                        throw new Error("Unknow message" + JSON.stringify(event.message.type))
            }
            break;
        case "postback" :
            console.log("postback")
            break;
        default:
            throw new Error("Unkonw event" + JSON.stringify(event))
    }
}