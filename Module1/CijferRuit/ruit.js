let aantal = prompt("Welk cijfer wil je voor je cijferruit?");
let list = [];
for (let i = 1; i <= aantal; i++){
    list += i;
    document.getElementById("antwoord").innerText += list+ '\n';
    list = i === parseInt(aantal) ? list += "" : list += "-";
}           
for (let i = aantal; i >= 1; i--) {
    list = list.replace(i, '').replace('-', '');
    document.getElementById("antwoord").innerText += list + '\n';
}
