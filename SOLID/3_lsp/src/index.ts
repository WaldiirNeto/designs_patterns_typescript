import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import NubanlRewards from "./NubankRewards";

// const card = new CreditCard();
// const card = new DebitCard();
const card = new NubanlRewards();


card.validate();
card.collectPayment();