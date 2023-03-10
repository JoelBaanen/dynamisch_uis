let x = true
let totaal = 0
while (x = true){
bestelling = prompt(`Wat wilt u bestellen? (Type 'stop' om te stoppen.)\n`).toLowerCase()
bon = {"bier":4.00 , "fris":3.00,"wijn":5.50}
if (bestelling == "stop"){
    x = false
}
}
print("----------------------------------")
print(bon)
print("----------------------------------")