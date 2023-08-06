// === SUPERCLASS ===

class MailService {
    constructor (sender){
        this.sender = sender;
    }

    sendMessage (message, receiver){
        console.log(`${this.sender} send ${message} to ${receiver}`);
    }
}
// === SUBCLASS ===
class WhatAppService extends MailService{
    sendBroadcastMessage(message, receivers){
        for (const receiver of receivers){
            this.sendMessage(message, receiver);
        }
    }
}
// === SUBCLASS ===
class EmailService extends MailService{
    sendDelayMessage(message, receiver, delay){
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay)
    }
}
const whatsapp = new WhatAppService('+6285366330664');
const email = new EmailService('andre.uniska@hotmail.com');

email.sendDelayMessage('Hello risma', 'risma@hotmail.com', 1000);
email.sendDelayMessage("Hello maira", "maira@hotmail.com", 2000);
email.sendDelayMessage("Hello maira", "arif@hotmail.com", 3000);
email.sendDelayMessage("Hello rahmadani", "rahmadani@hotmail.com", 4000);
email.sendDelayMessage("Hello zeteranga", "zeteranga@hotmail.com", 5000);
email.sendDelayMessage("Hello eosageng", "eosageng@hotmail.com", 6000);

whatsapp.sendMessage('Hello', '+6289876543210');
whatsapp.sendBroadcastMessage('Hello', ['+6289876543210', '+6282234567890']);


//  === TANPA MENGGUNAKAN CLASS ===
function MailService(sender) {
  this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
  console.log(`${this.sender} sent ${message} to ${receiver}`);
};

function WhatsAppService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;

WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
  for (const receiver of receivers) {
    this.sendMessage(message, receiver);
  }
};

function EmailService(sender) {
  MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (
  message,
  receiver,
  delay
) {
  setTimeout(() => {
    this.sendMessage(message, receiver);
  }, delay);
};

// const whatsapp = new WhatsAppService("+6281234567890");
// const email = new EmailService("dimas@dicoding.com");
whatsapp.sendMessage("Hello", "+6289876543210");
whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello", "john@doe.com", 3000);

























