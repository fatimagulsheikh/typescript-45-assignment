"use strict";
// Task # 16 : More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestArr = ["Nadeem", "Fatima", "Ali", "Uzma"];
let canNotAttend = "Ali";
let newGuest = "Jawad";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)
// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner so I am invited more people.`)
// );
// part 2 Began
let guestBeg = "Umer";
guestArr.unshift(guestBeg);
// console.log(guestArr)
// part 3 Middle
let middleGust = "Zainab";
let middleindex = guestArr.length / 3;
guestArr.splice(middleindex, 0, middleGust);
// console.log(guestArr)
// part 4 append
guestArr.push("Irfan");
// console.log(guestArr)
//part 5 
guestArr.map((items) => console.log(` Dear ${items}, you are invited in the more people list on dinner`));
