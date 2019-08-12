var TelegramBot = require('node-telegram-bot-api');
var alexLastGifDocument = null;

var tokenPorohoBota = '832412147:AAHKmUSBgSc6BVAfj0CWeFdfb06MfCfq_3Q';
var porohoBot = new TelegramBot(tokenPorohoBota, {polling: true});


////PorohoBOT
porohoBot.on('message', (msg) => {
    var chatId = msg.chat.id;
    saveAlexLastGif(chatId, msg);
});


function saveAlexLastGif(chatId, msg) {

    if (msg === "hi") {
        porohoBot.sendMessage(chatId, "blabalabla");
    }
    // if (msg.from.last_name != 'Lyubavin') return false; //Lyubavin  Trojan
    // if (msg.document && msg.document.mime_type === "video/mp4") {
    //     alexLastGifDocument = msg.document;
    //     porohoBot.deleteMessage(chatId, msg.message_id);
    //     backAlexGif(chatId);
    // }
}

function backAlexGif(chatId) {
    if (alexLastGifDocument && alexLastGifDocument.file_id != '') {
        porohoBot.sendDocument(chatId, alexLastGifDocument.file_id);
    }
}


// var tokenZeBota = '618735909:AAFKkyDWFLWEfwoh_OQX4UWHdpBVxcPPoqk';
// var zeBot = new TelegramBot(tokenZeBota, {polling: true});

////ZeBOT
// zeBot.on('message',(msg) => {
//     var chatId = msg.chat.id;
//     saveAlexLastGif(chatId, msg);

//     setTimeout(() => {
//         backAlexGif(chatId);
//         //zeBot.sendMessage(chatId, 'ze');
//     }, 2000);
// });