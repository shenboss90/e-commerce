
document.addEventListener('DOMContentLoaded', function() {
  let product = document.querySelector('#product');
async function fetchProduct(url){
let data = await fetch(url);
let response = await data.json()
let Newproducts = response.products
console.log(Newproducts)
Newproducts.forEach((ind) => {
    let product_title = ind.title;
    product.innerHTML += `
    <div class="card" style="width: 25rem; ">
    <h3 class="product-category">${ind.category}</h3>
    <h5 class="card-title">${product_title}</h5>
  <img src="${ind.images[1]}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${ind.description /*>10 ? description.substring(0 , 10).concat('...more') : description*/}</p>
    <h2 class="product-price">$${ind.price}</h2>
  </div>
  <div class="card-body px-2">
        <span><a href="#" class="btn card-link">Add To Cart</a></span>
      </div>
    </div>
    </div>`
 
})
 
}
fetchProduct('https://dummyjson.com/products') 
})





 function seac() {
  let products2 = document.querySelector('#products2');
  const inputValue = document.querySelector('.form-control').value
  async function fetchseac(url){
    let data = await fetch(url);
    let res = await data.json()
    console.log(res)
    let filterProduct = res.products
    filterProduct.forEach((product) => {
      products2.innerHTML +=  `
      <div class="card" style="width: 25rem; ">
      <h3 class="product-category">${product.category}</h3>
      <h5 class="card-title">${product.title}</h5>
    <img src="${product.images[1]}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${product.description /*>10 ? description.substring(0 , 10).concat('...more') : description*/}</p>
      <h2 class="product-price">$${product.price}</h2>
    </div>
    <div class="card-body px-2">
          <span><a href="#" class="btn card-link">Add To Cart</a></span>
        </div>
      </div>
      </div>
   `;

    })

    
};

fetchseac(`https://dummyjson.com/products/search?q=${inputValue}`)
}

// function dontshowdiv(){
//   let products = document.querySelector('#product');
//   products.style.display = 'none'
// }                                                                                              
//   let products2 = document.querySelector('#products2');
//   products2.style.display = 'block'

// dontshowdiv()


