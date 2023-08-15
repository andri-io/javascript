function buyTollRoadCard(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money >= 10) {
        console.log("Buying card..");
        resolve({ trollRoadCard: true, balance: 0 });
        return;
      }
      reject(new Error("not enough money to buy card"));
    }, 1000);
  });
}

function topUpBalance (card, amount) {
    return new Promise((resolve, reject) =>{
       setTimeout(() =>{

        if(card){
            console.log('Top up Balance');
            resolve({...card, balance : card.balance + amount});
            return;
        }
        reject (new Error('No Card'))        
       },1000) 
    });
}

function useTollRoad(card){
    const TOLL_PRICE = 10;

    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(card.balance < TOLL_PRICE){
                reject(new Error('Not Enought Balance'));
                return;
            }

            card.balance -= TOLL_PRICE;
            console.log('Using Troll Road');

            resolve();
        },1000);
    });
}
module.exports = {
  buyTollRoadCard,
  topUpBalance,
  useTollRoad,
};