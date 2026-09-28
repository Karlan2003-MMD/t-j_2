const productURL = "https://kea-alt-del.dk/t7/api/products";
const listContainer = document.querySelector(".product");

function getData(url) {
  fetch(url).then((response) => {
    response.json().then((data) => {
      showProduct(data);
    });
  });
}

function showProduct(products) {
  console.log("First product", products[0]);
  console.log("Number of products", products.length);

  listContainer.innerHTML = "";

  products.forEach((product) => {
    listContainer.innerHTML += `<article class="product_info ${product.soldout ? "soldout" : ""}">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
        <h3>${product.productdisplayname}</h3>
        <p>${product.brandname} - ${product.subcategory}</p>
        <div>
          <p>${product.price}</p>
        </div>
        <p><a href="${product.id}">Read More</a></p>
        ${product.soldout ? "<p class='soldout_tag'>Sold Out</p>" : ""}
      </article>`;
  });
}

getData(productURL);
