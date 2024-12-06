var totalItem = 0;
let cart = document.querySelector(".cart")



let count = document.createElement("div")
count.innerHTML = totalItem
cart.append(count)



let button = document.querySelectorAll(".add")




button.forEach(e => {
    e.addEventListener("click", () => {
        totalItem++;
        count.innerHTML = totalItem
    })
});

