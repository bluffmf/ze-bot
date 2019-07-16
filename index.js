var TelegramBot = require('node-telegram-bot-api');
var token = '618735909:AAFKkyDWFLWEfwoh_OQX4UWHdpBVxcPPoqk';
var bot = new TelegramBot(token, {polling: true});

var alexLastGifId = '';

bot.on('message', (msg) => {
    var chatId = msg.chat.id;

    // bot.deleteMessage(chatId, msg.message_id);
    
    if (msg.from.first_name === "Alex") { // || msg.from.first_name === "Alex"
        saveAlexLastGif(chatId, msg);
    }
    if (msg.from.is_bot === true) {
        backAlexGif(chatId);
    }
});

function saveAlexLastGif(chatId, msg) {
    if (msg.document && msg.document.mime_type === "video/mp4") {
        alexLastGifId = msg.document.file_id;
    }
}

function backAlexGif(chatId) {
    if (alexLastGifId != '') {
        bot.sendDocument(chatId, alexLastGifId);
    }
}