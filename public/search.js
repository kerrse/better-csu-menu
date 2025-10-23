// search logic
const searchBar = document.getElementById("search-bar");
let menuItemDivs = document.getElementsByClassName("menu-items");

searchBar.addEventListener("input", function(e) {
    let query = searchBar.value.toLowerCase();

    for (let div of menuItemDivs) {
        // children[0] is the span element containing the name of the food
        let foodName = div.children[0].innerText.toLowerCase();

        if (!foodName.includes(query)) {
            div.style.display = "none";
        } else {
            div.style.display = "";
        }
    }
});

// filter logic
const filter = document.getElementById("filter");

filter.addEventListener("change", function(e) {
    let filterValue = e.target.value;
    let divArr = Array.from(menuItemDivs);

    divArr.sort(function(divA, divB) {
        // first value to compare
        let macrosA = divA.querySelector(`td[data-macro="${filterValue}"]`);
        let valueA;

        // make sure macrosA isn't null
        if (macrosA) {
            if (filterValue == "calories") {
                valueA = parseFloat(macrosA.innerText.split(" ")[0]);
            } else {
                valueA = parseFloat(macrosA.innerText.replace("g", ""));
            }
        } else {
            valueA = -Infinity;
        }

        if (isNaN(valueA)) {
            valueA = -Infinity;
        }

        // second value to compare
        let macrosB = divB.querySelector(`td[data-macro="${filterValue}"]`);
        let valueB;

        // make sure macrosB isn't null
        if (macrosB) {
            if (filterValue == "calories") {
                valueB = parseFloat(macrosB.innerText.split(" ")[0]);
            } else {
                valueB = parseFloat(macrosB.innerText.replace("g", ""));
            }
        } else {
            valueB = -Infinity;
        }

        if (isNaN(valueB)) {
            valueB = -Infinity;
        }

        // sort from largest to smallest
        return valueB - valueA;
    });

    for (let i = 0; i < divArr.length; i++) {
        menuContainer.appendChild(divArr[i]);
    }
});
