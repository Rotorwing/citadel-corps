/** Injects into KA page **/

const loader = document.createElement("div");

loader.innerHTML = `<link  rel="stylesheet" href="style.css">
<script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.js"></script>
<script src="https://cdn.jsdelivr.net/gh/Rotorwing/citadel-orps@lastest/main.js"></script>`;

const body = document.querySelector("body");
body.appendChild(loader);
