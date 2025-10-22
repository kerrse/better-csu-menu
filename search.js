const searchBar = document.getElementById("search-bar");
let query = [];

searchBar.addEventListener("keyup", function(e) {
    if (e.key == "Backspace") {
        query.pop();
    }

    if (e.key != "Backspace") {
        query.push(e.key);
    }

    let str = "";

    for (let char of query) {
        str += char;
    }

    console.log(str);
});
