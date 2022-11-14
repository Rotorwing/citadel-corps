/** Injects into KA page **/

const loader = document.createElement("div");

loader.innerHTML = `<script src="https://cdn.jsdelivr.net/gh/Rotorwing/citadel-corps@V1.2/web/main.js"></script>
<script src="https://cdn.jsdelivr.net/npm/p5@1.5.0/lib/p5.min.js"></script>`;

const body = document.querySelector("body");
body.appendChild(loader);
