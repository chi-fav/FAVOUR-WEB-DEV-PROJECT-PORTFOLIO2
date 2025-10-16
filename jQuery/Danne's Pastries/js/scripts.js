const CATEGORIES = ["Vanilla", "Red Velvet", "Chocolate", "Banana", "Specials", "All"];
const PRODUCTS = [
	{
		"name": "Chocolate Slice",
		"price": 1200,
		"image": "1.jpg",
		"category": 2
	},
	{
		"name": "Vanilla Slice",
		"price": 1400,
		"image": "2.jpg",
		"category": 0
	},
	{
		"name": "Double Chocolate Slice",
		"price": 1800,
		"image": "3.jpg",
		"category": 2
	},
	{
		"name": "Banana Slice",
		"price": 1200,
		"image": "4.jpg",
		"category": 3
	},
	{
		"name": "Vanilla Marble Large Slice",
		"price": 2100,
		"image": "5.jpg",
		"category": 0
	},
	{
		"name": "Vanilla Cream Slice",
		"price": 1600,
		"image": "6.jpg",
		"category": 0
	},
	{
		"name": "Red Velvet Cupcake",
		"price": 900,
		"image": "7.jpg",
		"category": 1
	},
	{
		"name": "Decorated Chocolate Cake",
		"price": 10500,
		"image": "8.jpg",
		"category": 4
	},
	{
		"name": "Three Tier Decorated Vanilla Cake",
		"price": 33500,
		"image": "9.jpg",
		"category": 4
	},
	{
		"name": "Chocolate Cupcake",
		"price": 1000,
		"image": "10.jpg",
		"category": 2
	},
	{
		"name": "Decorated Double Chocolate Cake",
		"price": 12500,
		"image": "11.jpg",
		"category": 2
	}
];

const CART_ITEMS = [];

$(function(){
	// populate the categories
	const categoryList = $("#categories ul");
	CATEGORIES.forEach(function(value, index){
		const categoryItem = $("<li></li>").text(value);
		categoryList.append(categoryItem);

		categoryItem.click(function(){
			
		});
	});

	const catalog = $("#catalog");
	PRODUCTS.forEach(function(product, productIndex){
		const img = $("<img>").attr("src", "images/" + product.image);
		const imgContainer = $("<div></div>").addClass("img-container");
		imgContainer.append(img);

		const name = $("<span></span>").text(product.name).addClass("name");
		const price = $("<span></span>").text(product.price).addClass("price");

		const addToCartBtn = $("<button></button>").text("Add to Cart");
		addToCartBtn.click(function(){
			// check if product is already in the cart
			let foundIndex = CART_ITEMS.findIndex(function(cartItem, ind){
				return cartItem.productId === productIndex;
			});

			if(foundIndex > -1)
				return;

			CART_ITEMS.push(
				{
				"productId": productIndex,
				"quantity": 1
				});
			console.log(CART_ITEMS);
		});

		const productContainer = $("<div></div>").addClass("product");
		productContainer.append(imgContainer, name, price, addToCartBtn);

		catalog.append(productContainer);
	});

	$("#cartBtn").click(function(){
		$("section#cart").addClass("showing");
	});
	$("section#cart .close-btn").click(function(){
		$("section#cart").removeClass("showing");
	});
});