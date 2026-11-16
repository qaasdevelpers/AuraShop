const productContainer = document.getElementById("product-container");
// AuraShop ke tamam products ka data

const products = [
    {
        id: 1,
        name: "Classic White T-Shirt",
        price: 25,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
        id: 2,
        name: "Premium Sneakers",
        price: 65,
        category: "Shoes",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 3,
        name: "Modern Watch",
        price: 90,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 4,
        name: "Stylish Backpack",
        price: 45,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    }
];


let cart = [];

// Products ka data console mein check karna
products.forEach(function (product) {
     productContainer.innerHTML +=`<div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">

                <div class="overflow-hidden bg-slate-100">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                    >

                </div>

                <div class="p-5">

                    <p class="text-xs text-slate-400">
                    ${product.category}</p>

                    <h3 class="font-bold text-lg mt-1">
                        ${product.name}
                    </h3>

                    <div class="flex items-center gap-2 mt-3">

                        <span class="text-indigo-600 font-bold text-xl">${product.price}</span>

                    </div>

                    <button data-id ="${product.id}" class="add-to-cart-btn w-full mt-5 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition">
                        Add to Cart
                    </button>

                </div>

            </div>`;




    
});
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");


addToCartButtons.forEach(function (product) {
    product.addEventListener("click", function () {
        const productid = Number(product.dataset.id);

        const selectproduct = products.find(function (product) {
            return product.id === productid;
        });
        cart.push(selectproduct);
        console.log(cart);
    });
    
});