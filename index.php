<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Better CSU Menu</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="modal.css">
    <script src="index.js" defer></script>
    <script src="search.js" defer></script>
</head>
<body>
    <h1 id="title">Better CSU Menu</h1>
    <div id="container">
        <div id="braiden" class="dining-centers">
            <span class="names">Braiden</span>
            <div class="btns-containers">
                <div id="braiden-breakfast" class="breakfast btns">
                    <span class="dining-labels">Breakfast</span>
                    <span class="dining-icons">🥞</span>
                </div>
                <div id="braiden-lunch" class="lunch btns">
                    <span class="dining-labels">Lunch</span>
                    <span class="dining-icons">🥪</span>
                </div>
                <div id="braiden-dinner" class="dinner btns">
                    <span class="dining-labels">Dinner</span>
                    <span class="dining-icons">🍽️</span>
                </div>
            </div>
        </div>
        <div id="durrell" class="dining-centers">
            <span class="names">Durrell</span>
            <div class="btns-containers">
                <div id="durrell-breakfast" class="breakfast btns">
                    <span class="dining-labels">Breakfast</span>
                    <span class="dining-icons">🥞</span>
                </div>
                <div id="durrell-lunch" class="lunch btns">
                    <span class="dining-labels">Lunch</span>
                    <span class="dining-icons">🥪</span>
                </div>
                <div id="durrell-dinner" class="dinner btns">
                    <span class="dining-labels">Dinner</span>
                    <span class="dining-icons">🍽️</span>
                </div>
            </div>
        </div>
        <div id="rams-horn" class="dining-centers">
            <span class="names">Ram's Horn</span>
            <div class="btns-containers">
                <div id="rams-horn-breakfast" class="breakfast btns">
                    <span class="dining-labels">Breakfast</span>
                    <span class="dining-icons">🥞</span>
                </div>
                <div id="rams-horn-lunch" class="lunch btns">
                    <span class="dining-labels">Lunch</span>
                    <span class="dining-icons">🥪</span>
                </div>
                <div id="rams-horn-dinner" class="dinner btns">
                    <span class="dining-labels">Dinner</span>
                    <span class="dining-icons">🍽️</span>
                </div>
            </div>
        </div>
        <div id="the-foundry" class="dining-centers">
            <span class="names">The Foundry</span>
            <div class="btns-containers">
                <div id="the-foundry-breakfast" class="breakfast btns">
                    <span class="dining-labels">Breakfast</span>
                    <span class="dining-icons">🥞</span>
                </div>
                <div id="the-foundry-lunch" class="lunch btns">
                    <span class="dining-labels">Lunch</span>
                    <span class="dining-icons">🥪</span>
                </div>
                <div id="the-foundry-dinner" class="dinner btns">
                    <span class="dining-labels">Dinner</span>
                    <span class="dining-icons">🍽️</span>
                </div>
            </div>
        </div>
    </div>
    <div id="menu-modal" style="display:none;">
        <div id="menu-modal-header">
            <h1>Menu</h1>
            <input type="text" id="search-bar" placeholder="Search">
            <button id="close-modal-btn">&times;</button>
        </div>
        <div id="menu-container"></div>
    </div>
    <div id="overlay"></div>
</body>
</html>
