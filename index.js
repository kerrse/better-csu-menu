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

async function getJson(file) {
    let f = await fetch(file);
    
    return f.json();
}

async function storeDiningVariables() {
    const promises = filePath.map(paths => getJson(paths));
    const diningObjects = await Promise.all(promises);
    const allMenus = {};

    for (let i = 0; i < filePath.length; i++) {
        const parts = filePath[i].split("/");
        const diningCenter = parts[1];
        const menuType = parts[2].replace(".json", "");

        if (!allMenus[diningCenter]) {
            allMenus[diningCenter] = {};
        }

        allMenus[diningCenter][menuType] = diningObjects[i];
    }

    return allMenus;
}

const diningBtns = document.getElementsByClassName("btns");
const braidenModal = document.getElementById("braiden-modal");
const durrellModal = document.getElementById("durrell-modal");
const ramsHornModal = document.getElementById("rams-horn-modal");
const theFoundryModal = document.getElementById("the-foundry-modal");

function configEventListeners(menus) {
    let today = new Date();
    today = today.getDay();

    let breakfast = {};
    let lunch = {};
    let dinner = {};

    for (let btn of diningBtns) {
        btn.addEventListener("click", function(e) {
            let name = e.currentTarget.parentElement.parentElement.getAttribute("id");
            breakfast = menus[name]["breakfast"]["days"][today];
            lunch = menus[name]["lunch"]["days"][today];
            dinner = menus[name]["dinner"]["days"][today];
            // console.log(breakfast, lunch, dinner);
        });
    }
}

async function initialize() {
    console.log("Loading menu data...");
    const loadedMenus = await storeDiningVariables();
    console.log("Menu data was successfully loaded!");

    configEventListeners(loadedMenus);
}

initialize();