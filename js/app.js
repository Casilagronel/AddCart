var app = angular.module("myModule", [])
				.controller("myController", function($scope){
				$scope.carts=[];
				$scope.products = [
					
					{p_id: "1", p_name: "T-Shirt", p_image: "images/shirt.png", p_price: 500},
					{p_id: "2", p_name: "Laptop", p_image: "images/Laptop.png", p_price: 25000},
					{p_id: "3", p_name: "Dress", p_image: "images/dress.png", p_price: 800},
					{p_id: "4", p_name: "Cap", p_image: "images/cap.png", p_price: 300},
					{p_id: "5", p_name: "Short", p_image: "images/short.png", p_price: 500},
					{p_id: "6", p_name: "Jogging Pants", p_image: "images/joggingpants.png", p_price: 300},
					{p_id: "7", p_name: "Slippers", p_image: "images/slippers.png", p_price: 200},
					{p_id: "8", p_name: "Watch", p_image: "images/watch.png", p_price: 500},
					{p_id: "9", p_name: "Umbrella", p_image: "images/umbrella.png", p_price: 290},
					{p_id: "10", p_name: "Rubber Shoes", p_image: "images/shoes.png", p_price: 1000},
					{p_id: "11", p_name: "Black Sando", p_image: "images/Black Sando.png", p_price: 250},
					{p_id: "12", p_name: "Black Shoes", p_image: "images/black shoes.png", p_price: 900},
					{p_id: "13", p_name: "Headphones", p_image: "images/headphones-home.png", p_price: 1000},
					{p_id: "14", p_name: "Cellphone Charger", p_image: "images/cellphone-charger.png", p_price: 200},
					{p_id: "15", p_name: "Power Bank", p_image: "images/Power bank.png", p_price: 350},
					{p_id: "16", p_name: "Shoulder Bag", p_image: "images/shoulder-bag.png", p_price: 550},
					{p_id: "17", p_name: "Backpack Bag", p_image: "images/backpack-bag.png", p_price: 1500},
					{p_id: "18", p_name: "Wallet", p_image: "images/wallet-for-men.png", p_price: 500},
					{p_id: "19", p_name: "Jacket", p_image: "images/jacket.png", p_price: 680},
					{p_id: "20", p_name: "Beach Sandal", p_image: "images/sandals.png", p_price: 590},
					{p_id: "21", p_name: "Socks", p_image: "images/socks.png", p_price: 200},
					{p_id: "22", p_name: "Nike Shoes", p_image: "images/nikeshoes.png", p_price: 1500},
					{p_id: "23", p_name: "Television", p_image: "images/tv.png", p_price: 35000},
					{p_id: "24", p_name: "Samsung Phone", p_image: "images/cellphone.jpg", p_price: 10000},
				];
				
				$scope.add_cart = function(product){
					if(product){
						$scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
					}	
				}
						
					
				$scope.total = 0;
				
				$scope.setTotals = function(cart){
					if(cart){
						$scope.total += cart.p_price;
					}
				}
				
				$scope.remove_cart = function(cart){
					if(cart){
						$scope.carts.splice($scope.carts.indexOf(cart), 1);
						$scope.total -= cart.p_price;
					}
				}
	});