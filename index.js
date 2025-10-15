const filePath = [
    "menus/braiden/breakfast.json",
    "menus/braiden/lunch.json",
    "menus/braiden/dinner.json",
    "menus/durrell/breakfast.json",
    "menus/durrell/lunch.json",
    "menus/durrell/dinner.json",
    "menus/rams-horn/breakfast.json",
    "menus/rams-horn/lunch.json",
    "menus/rams-horn/dinner.json",
    "menus/the-foundry/breakfast.json",
    "menus/the-foundry/lunch.json",
    "menus/the-foundry/dinner.json"
];

let braidenBreakfastObj;
let braidenLunchObj;
let braidenDinnerObj;
let durrellBreakfastObj;
let durrellLunchObj;
let durrellDinnerObj;
let ramsHornBreakfastObj;
let ramsHornLunchObj;
let ramsHornDinnerObj;
let theFoundryBreakfastObj;
let theFoundryLunchObj;
let theFoundryDinnerObj;

async function getText(file, obj) {
    let f = await fetch(file);
    let fileRead = await f.text();
    obj = JSON.parse(fileRead);
}