class MailService {
    constructor (sender){
        this.sender = sender;
    }

    sendMessage(message, receiver){
        console.log(`${this.sender} send ${message} to ${receiver}`);
    }
}

class WhatsappService extends MailService {
    // overring constructor
    constructor(sender, isBusines){
        super (sender);
        this.isBusines = isBusines;
    }
    // overriding method
    sendMessage(message, receiver){
        console.log(`${this.sender} send ${message} to ${receiver} via whatsapp`)
    }
}

const mailService = new MailService ('someSender');
const whatsappService = new WhatsappService('+623874843993',false);

mailService.sendMessage('Hai, apa kabar?','Somereceiver');
whatsappService.sendMessage('Hai, apa kabar?','+62394756383');