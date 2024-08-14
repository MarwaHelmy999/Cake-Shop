var allItems = document.querySelectorAll (".content .item")
var selected = document.querySelector(".selected")
var priceShow = document.querySelector(".showPrice")
var displayPrice = document.querySelector(".totalPrice")
var totalPrice = 0
var selectedText = document.querySelector(".selectedTitle")

allItems.forEach(function(item){ 
    item.onclick = function(){
        if (selected.innerHTML == ""){
            // selected.innerHTML = selectedText
        }
        selected.innerHTML += item.querySelector("h4").textContent + "  /  "
        totalPrice += +(item.getAttribute("price"))
        if (selected.innerHTML != ""){
            priceShow.style.display = "block";
            selectedText.style.display = "block";
            selected.style.display = "block";
            priceShow.style.backgroundColor = "gray";
            
        }
    }
    
})
priceShow.onclick = function(){
    displayPrice.innerHTML = "The total price is:   " + totalPrice + "    LE"
}