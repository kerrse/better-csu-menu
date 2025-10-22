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
