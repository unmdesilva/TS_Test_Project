// class Invoice {
//   readonly client: string;
//   private details: string;
//   private amount: number;
//   constructor(c: string, d: string, a: number) {
//     this.client = c;
//     this.details = d;
//     this.amount = a;
//   }
//   format() {
//     return `${this.client} owes Rs. ${this.amount} for ${this.details}`;
//   }
// }
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
// const abc = new Invoice("", "0", 6666);
// console.log(abc);
// interface IPerson {
//   name: string;
//   age: number;
//   speak(text: string): void;
// }
// const cc: IPerson = {
//   name: "nipun",
//   age: 33,
//   speak(text: string):void {
//     console.log(text);
//   },
// };
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
    console.log(doc);
    // const obj = {
    //   type: type.value,
    //   tofrom: tofrom.value,
    //   details: details.value,
    //   amount: amount.valueAsNumber,
    // };
    // console.log(obj);
});
