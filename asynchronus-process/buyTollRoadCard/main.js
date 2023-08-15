const { buyTollRoadCard, topUpBalance, useTollRoad } = require("./util");


async function getTollAccess() {
  try {
    const cardAfterPurchase = await buyTollRoadCard(25);
    const cardAfterTopUp = await topUpBalance(cardAfterPurchase, 10);
    await useTollRoad(cardAfterTopUp);
  } catch (error) {
    console.log(error.message);
  }
  return;
}

getTollAccess();

