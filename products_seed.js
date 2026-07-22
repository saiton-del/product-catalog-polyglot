use("shop");

db.products.insertMany([
  {
    name: "iPhone 15",
    category: "Electronics",
    price: 999,
    stock: 20,
    tags: ["smartphone", "apple", "ios"],
    ratings: [5, 5, 4, 5]
  },
  {
    name: "Samsung Galaxy S24",
    category: "Electronics",
    price: 899,
    stock: 15,
    tags: ["smartphone", "android"],
    ratings: [5, 4, 5, 4]
  },
  {
    name: "Sony WH-1000XM5",
    category: "Electronics",
    price: 349,
    stock: 30,
    tags: ["headphones", "wireless", "audio"],
    ratings: [5, 5, 5, 4]
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 1299,
    stock: 10,
    tags: ["laptop", "windows"],
    ratings: [5, 5, 4, 5]
  },
  {
    name: "HP Pavilion 15",
    category: "Computers",
    price: 799,
    stock: 12,
    tags: ["laptop"],
    ratings: [4, 4, 5, 4]
  },
  {
    name: "Nike Air Max",
    category: "Fashion",
    price: 180,
    stock: 50,
    tags: ["shoes", "sports"],
    ratings: [5, 4, 4, 5]
  },
  {
    name: "Adidas Hoodie",
    category: "Fashion",
    price: 75,
    stock: 80,
    tags: ["hoodie", "clothing"],
    ratings: [4, 5, 4, 4]
  },
  {
    name: "Office Chair",
    category: "Furniture",
    price: 220,
    stock: 18,
    tags: ["chair", "office"],
    ratings: [4, 5, 5, 4]
  },
  {
    name: "Standing Desk",
    category: "Furniture",
    price: 450,
    stock: 8,
    tags: ["desk", "office"],
    ratings: [5, 5, 4, 5]
  },
  {
    name: "Coffee Maker",
    category: "Home Appliances",
    price: 150,
    stock: 25,
    tags: ["kitchen", "coffee"],
    ratings: [4, 5, 4, 5]
  }
]);