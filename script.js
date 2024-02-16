// console.log('====================================');
// console.log("Connected");
// console.log('====================================');
const url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448"
const main_img = document.querySelector("#main_image");
const thmb_img = document.querySelectorAll(".thmb_img");

const vendor = document.querySelector("#vendor");
const title = document.querySelector("#title");
const discounted_price = document.querySelector("#discounted-price");
const original_price = document.querySelector("#original-price");
const color1 = document.querySelector("#color-1");
const color2 = document.querySelector("#color-2");
const color3 = document.querySelector("#color-3");
const color4 = document.querySelector("#color-4");
const btn_border_yellow = document.getElementById("btn-border-yellow");
const btn_border_green = document.getElementById("btn-border-green");
const btn_border_blue = document.getElementById("btn-border-blue");
const btn_border_pink = document.getElementById("btn-border-pink");
const check1 = document.querySelector("#check1");
const check2 = document.querySelector("#check2");
const check3 = document.querySelector("#check3");
const check4 = document.querySelector("#check4");
const small_size = document.querySelector("#small");
const medium_size = document.querySelector("#medium");
const large_size = document.querySelector("#large");
const xl_size = document.querySelector("#xl");
const xxl_size = document.querySelector("#xxl");
const small_label = document.querySelector("#small-label")
const medium_label = document.querySelector("#medium-label")
const large_label = document.querySelector("#large-label")
const xl_label = document.querySelector("#xl-label")
const xxl_label = document.querySelector("#xxl-label")
const countElement = document.getElementById('count');
const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const btn = document.getElementById("btn");
const msg = document.querySelector("#msg");

const description_container = document.querySelector("#description-container");
description_container.classList.add("description");
(async () => {
    const responce = await fetch(url);
    data = await responce.json();
    vendor.textContent = data.product.vendor;
    title.textContent = data.product.title;
    discounted_price.textContent = `$ ${calculateFinalPrice()}`;
    original_price.innerHTML = `<del>${data.product.compare_at_price}</del>`;
    const firstcolor = data.product.options[0].values[0].Yellow;
    const secondcolor = data.product.options[0].values[1].Green;
    const thirdcolor = data.product.options[0].values[2].Blue;
    const fourthcolor = data.product.options[0].values[3].Pink;
    color1.style.backgroundColor = firstcolor;
    color2.style.backgroundColor = secondcolor;
    color3.style.backgroundColor = thirdcolor;
    color4.style.backgroundColor = fourthcolor;
    small_label.textContent = data.product.options[1].values[0];
    medium_label.textContent = data.product.options[1].values[1];
    large_label.textContent = data.product.options[1].values[2];
    xl_label.textContent = data.product.options[1].values[3];
    xxl_label.textContent = data.product.options[1].values[4];
    description_container.innerHTML = data.product.description;

    function calculateFinalPrice() {
        product_price = parseInt(data.product.compare_at_price.substring(1));
        let discountAmount = (product_price * 35) / 100;
        let finalPrice = product_price - discountAmount;
        return Math.round(finalPrice).toFixed(2);
    }
})();

thmb_img.forEach((element) => {
    element.addEventListener("click", () => {
        thmb_img.forEach((el) => {
            el.style.border = "none";
        });
        main_img.src = element.src;
        element.style.border = "2px solid black";
    })

})

let count = 1;

decreaseButton.addEventListener('click', () => {
    if (count > 1) {
        count--;
        countElement.textContent = count;
    }
});

increaseButton.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
});


btn.addEventListener("click", () => {
    let size = getSize();
    if (selectcolor === "null" || !size) {
        msg.classList.add("msg");
        msg.textContent = "Please select a color and a size before adding to cart";
    }
    else {
        msg.classList.add("msg");
        msg.textContent = `${data.product.title} with color ${selectcolor} and size ${size} added to cart`;
    }
})

function getSize() {
    if (small_size.checked || medium_size.checked || large_size.checked || xl_size.checked || xxl_size.checked) {
        let size = document.querySelector('input[name="size"]:checked').value;
        return size
    }
}
let selectcolor = "null";
color1.addEventListener("click", () => {
    // color1.style.border = "2px solid black";
    btn_border_yellow.style.border = "3px solid #ECDECC"
    btn_border_green.style.border = "none"
    btn_border_blue.style.border = "none"
    btn_border_pink.style.border = "none"
    color2.style.border = "none";
    color3.style.border = "none";
    color4.style.border = "none";
    check1.style.display = "block";
    check2.style.display = "none";
    check3.style.display = "none";
    check4.style.display = "none";
    selectcolor = color1.value;
})
color2.addEventListener("click", () => {
    // color2.style.border = "2px solid black";
    btn_border_green.style.border = "3px solid #BBD278"
    btn_border_yellow.style.border = "none"
    btn_border_blue.style.border = "none"
    btn_border_pink.style.border = "none"
    color1.style.border = "none";
    color3.style.border = "none";
    color4.style.border = "none";
    check1.style.display = "none";
    check2.style.display = "block";
    check3.style.display = "none";
    check4.style.display = "none";
    selectcolor = color2.value;
})
color3.addEventListener("click", () => {
    // color3.style.border = "2px solid black";
    btn_border_blue.style.border = "3px solid #BBC1F8"
    btn_border_yellow.style.border = "none"
    btn_border_green.style.border = "none"
    btn_border_pink.style.border = "none"
    color1.style.border = "none";
    color2.style.border = "none";
    color4.style.border = "none";
    check1.style.display = "none";
    check2.style.display = "none";
    check3.style.display = "block";
    check4.style.display = "none";
    selectcolor = color3.value;
})
color4.addEventListener("click", () => {
    // color4.style.border = "2px solid black";
    btn_border_pink.style.border = "3px solid #FFD3F8"
    btn_border_yellow.style.border = "none"
    btn_border_green.style.border = "none"
    btn_border_blue.style.border = "none"
    color1.style.border = "none";
    color2.style.border = "none";
    color3.style.border = "none";
    check1.style.display = "none";
    check2.style.display = "none";
    check3.style.display = "none";
    check4.style.display = "block";
    selectcolor = color4.value;
})

// border: ;