const weightMark = prompt("Markning vaznini kriting");
const heightMark = prompt("Markning uzunligini kriting");

const weightJon = prompt("Jonning vaznini kriting");
const heightJon = prompt("Jonnning uzunligini kriting");

const heightMarkMetr = (heightMark/100);
const heightJonMetr = (heightJon/100);

const markBmi = (Math.round(weightMark/(heightMarkMetr**2)));
const jonBmi = (Math.round(weightJon/(heightJonMetr**2)));

if(markBmi >= jonBmi){
  console.log(`Markning ${markBmi} bu katta Jonnikidan, uniki ${jonBmi}`);
}else{
  console.log(`Jonning ${jonBmi} bu kotta marknikidan, uniki ${markBmi}`);
}