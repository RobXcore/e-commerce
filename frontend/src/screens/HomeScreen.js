import data from '../data.js' //Import default export from data.js

const HomeScreen = { //Object that will be exported by default
  render: () => { //Method that will render whatever HTML code we put inside
    const {products} = data; //Destructured default object imported from data.js
    return `
        <ul class="products">
            ${products.map(product => //Loop over every index of the products Array inside default object
                `<li>
            <div class="product">
              <a href="/#/product/${product._id}">
                <img src="${product.image}" alt="${product.name}" />
              </a>
              <div class="product-name">
                <a href="/#/product/1">${product.name}</a>
              </div>
              <div class="product-brand">${product.brand}</div>
              <div class="product-price">$${product.price}</div>
            </div>
          </li>
          `
          ).join('\n')}
        `
  },
};


export default HomeScreen;