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
const menuModal = document.getElementById("menu-modal");
const menuContainer = document.getElementById("menu-container");
const closeModalBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");

function configEventListeners(menus) {
    let today = new Date();
    today = today.getDay();

    let breakfast = {};
    let lunch = {};
    let dinner = {};

    for (let btn of diningBtns) {
        btn.addEventListener("click", function(e) {
            let name = e.currentTarget.parentElement.parentElement.getAttribute("id");
            let meal = e.currentTarget.getAttribute("class").split(" ")[0];
            let menuType = menus[name][meal]["days"][today];
            let menuItemAmount = menus[name][meal]["days"][today]["menu_items"].length;
            
            menuModal.style.display = "flex";
            overlay.style.display = "block";
            populateMenu(menuType, menuItemAmount);
        });
    }

    closeModalBtn.addEventListener("click", function() {
        menuModal.style.display = "none";
        overlay.style.display = "none";
    });
}

/* 
Properties of menuType
----------------------
.menu_items -> accesses the list of food
.menu_items[#] -> # is any integer that is the index of menu_items
.menu_items[#].serving_size_amount -> serving amount as an integer
.menu_items[#].serving_size_unit -> serving unit as a string
.menu_items[#].food.ingredients -> list of ingredients as a string
.menu_items[#].food.name -> name of the food

.menu_items[#].food.rounded_nutrition_info -> nutrition info
.menu_items[#].food.rounded_nutrition_info.calories -> calories as an integer
.menu_items[#].food.rounded_nutrition_info.g_carbs -> total carbohydrate as an integer
.menu_items[#].food.rounded_nutrition_info.g_fat -> total fat as an integer
.menu_items[#].food.rounded_nutrition_info.g_protein -> protein as an integer
*/

function createMenuItem(menuType, index) {
    let itemDiv = document.createElement("DIV");
    itemDiv.setAttribute("class", "menu-items");

    let itemName = document.createElement("SPAN");
    itemName.setAttribute("class", "item-names");
    itemName.innerText = menuType.menu_items[index].food.name;
    itemDiv.append(itemName);

    let itemServingInfo = document.createElement("SPAN");
    itemServingInfo.setAttribute("class", "item-servings");
    let servingAmount = menuType.menu_items[index].serving_size_amount;
    let servingUnit = menuType.menu_items[index].serving_size_unit; 
    itemServingInfo.innerText = `${servingAmount} ${servingUnit}`;
    itemDiv.append(itemServingInfo);

    let itemTable = document.createElement("TABLE");
    let nutritionInfo = menuType.menu_items[index].food.rounded_nutrition_info;
    
    itemTable.innerHTML = `
        <tr>
            <th></th>
            <th>Fat</th>
            <th>Carbs</th>
            <th>Protein</th>
        </tr>
        <tr>
            <td data-macro="calories">${nutritionInfo.calories} Cal</td>
            <td data-macro="fat">${nutritionInfo.g_fat}g</td>
            <td data-macro="carbs">${nutritionInfo.g_carbs}g</td>
            <td data-macro="protein">${nutritionInfo.g_protein}g</td>
        </tr>
    `

    itemDiv.append(itemTable);

    return itemDiv;
}

function populateMenu(menuType, menuItemAmount) {
    // clears menu container before repopulating
    menuContainer.innerHTML = "";
    // prevents default scrollbar position memory behavior
    menuContainer.scrollTop = 0;
    console.log(menuItemAmount);
    for (let i = 0; i < menuItemAmount; i++) {
        // some objects are just labels and not actually items
        if (menuType.menu_items[i].food == null) {
            console.log("null");
            continue;
        }

        let newMenuItem = createMenuItem(menuType, i);
        menuContainer.append(newMenuItem);
    }
}

async function initialize() {
    console.log("Loading menu data...");
    const loadedMenus = await storeDiningVariables();
    console.log("Menu data was successfully loaded!");

    configEventListeners(loadedMenus);
}

initialize();
