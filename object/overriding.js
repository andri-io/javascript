class MailService {
    constructor (sender){
        this.sender = sender;
    }
}

class whatsappService extends MailService {
    // overring constructor

    constructor(sender, isBusines){
        super (sender);

        this.isBusines = isBusines;
    }
}