<?php

// ini_set("display_errors", 1);
// ini_set("display_startup_errors", 1);
// error_reporting(E_ALL);

date_default_timezone_set("America/Denver");
$year = date("Y");
$month = date("m");
$day = date("d");

$url = [
    $braidenBreakfastUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/braiden-dining-center/menu-type/breakfast/$year/$month/$day/?format=json",
    $braidenLunchUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/braiden-dining-center/menu-type/lunch/$year/$month/$day/?format=json",
    $braidenDinnerUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/braiden-dining-center/menu-type/dinner/$year/$month/$day/?format=json",
    $durrellBreakfastUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/durrell-dining-center/menu-type/breakfast/$year/$month/$day/?format=json",
    $durrellLunchUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/durrell-dining-center/menu-type/lunch/$year/$month/$day/?format=json",
    $durrellDinnerUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/durrell-dining-center/menu-type/dinner/$year/$month/$day/?format=json",
    $ramsHornBreakfastUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/rams-horn-dining-center/menu-type/breakfast/$year/$month/$day/?format=json",
    $ramsHornLunchUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/rams-horn-dining-center/menu-type/lunch/$year/$month/$day/?format=json",
    $ramsHornDinnerUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/rams-horn-dining-center/menu-type/dinner/$year/$month/$day/?format=json",
    $theFoundryBreakfastUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/the-foundry/menu-type/breakfast/$year/$month/$day/?format=json",
    $theFoundryLunchUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/the-foundry/menu-type/lunch/$year/$month/$day/?format=json",
    $theFoundryDinnerUrl = "https://csumenus.api.nutrislice.com/menu/api/weeks/school/the-foundry/menu-type/dinner/$year/$month/$day/?format=json"
];

$diningList = [
    ["braiden", "breakfast"],
    ["braiden", "lunch"],
    ["braiden", "dinner"],
    ["durrell", "breakfast"],
    ["durrell", "lunch"],
    ["durrell", "dinner"],
    ["rams-horn", "breakfast"],
    ["rams-horn", "lunch"],
    ["rams-horn", "dinner"],
    ["the-foundry", "breakfast"],
    ["the-foundry", "lunch"],
    ["the-foundry", "dinner"]
];

for ($i = 0; $i < count($url); $i++) {
    $apiResponse = file_get_contents($url[$i]);

    $location = $diningList[$i][0];
    $menuType = $diningList[$i][1];
    $filePath = "menus/$location/$menuType.json";

    // in the rare event that the json files aren't on the server
    $directory = dirname($filePath);
    if (!is_dir($directory)) {
        mkdir($directory, 0777, true);
    }

    file_put_contents($filePath, $apiResponse);
}

?>