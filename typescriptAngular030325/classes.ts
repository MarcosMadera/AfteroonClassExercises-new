class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    displayDetails() {
      return `Product: ${this.name}, Price: $${this.price}`;
    }
  }
  
  class Electronics extends Product {
    constructor(name, price, warranty) {
      super(name, price);
      this.warranty = warranty;
    }
  
    displayDetails() {
      return `${super.displayDetails()}, Warranty: ${this.warranty} years`;
    }
  }
  
  const product = new Product("Notebook", 5);
  console.log(product.displayDetails()); // Product: Notebook, Price: $5
  
  const laptop = new Electronics("Laptop", 1200, 2);
  console.log(laptop.displayDetails()); // Product: Laptop, Price: $1200, Warranty: 2 years