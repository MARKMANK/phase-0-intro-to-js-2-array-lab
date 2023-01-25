// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];

function destructivelyAppendCat(name){
    cats.push("Ralph")
};

function destructivelyPrependCat(name){
    cats.unshift("Bob")
};

function destructivelyRemoveLastCat(name){
    cats.pop()
};

function destructivelyRemoveFirstCat(name){
    cats.shift()
};

function appendCat(name){
    const copyCats = [...cats]
    copyCats.push("Broom")
   return copyCats
};

function prependCat(name){
    const copyCats = [...cats]
    copyCats.unshift("Arnold")
    return copyCats
};

function removeLastCat(){
    const copyCats = [...cats]
    copyCats.pop()
    return copyCats
};

function removeFirstCat(){
    const copyCats = [...cats]
    copyCats.shift()
    return copyCats
};

