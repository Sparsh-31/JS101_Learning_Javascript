let name = "Sparsh Kotwani";
let school = "St. Michael's Senior Secondary School";
let grade = 1;
let section = "c";
let rollno = "fw23_0588";
let accounts = 78,business= 88,computer = 85;
grade = ((accounts  + business + computer) /300)*100;
// console.log(grade);
// console.log(business);
let report =`🆁 🅴 🅿 🅾 🆁 🆃  🅲 🅰 🆁 🅳`
console.log("      "+report);
console.log("   "+school);
console.log(name+"      "+rollno);
console.log("accounts:"+" "+ accounts+" "+"business:"+" "+ business+"computer:"+ computer);

if(grade>=85)
  console.log("grade:"+" A");
else if(grade>=70)
  console.log("grade:"+" B");
else if(grade>=55)
  console.log("grade:"+" C");
else
  console.log("grade:"+" D");