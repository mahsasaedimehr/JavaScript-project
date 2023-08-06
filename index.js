const array = [];

const random = () => {
const randomNumber = Math.floor(Math.random() * 10);

const string = ['eat', 'word', 'rest'];
let array = Array.from({length: 3}, () =>{
    let randomIndex = Math.floor(Math.random() * 26);
    return string.charAt(randomIndex);
});
console.log(array);

const date = (1585259848).toString() + randomIntFromInterval (10, 100);
return{
    randomNumber,
    randomIndex,
    date: new Date(+date)
}
};

const generateArrayItem =() =>{
  arr.push(random())
}

generateArrayItem();
generateArrayItem();

console.log(arr);