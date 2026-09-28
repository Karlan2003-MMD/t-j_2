"use strict";
const productURl = "https://kea-alt-del.dk/t7/api/categories";

const categoriesList = document.querySelector(".categories_grid");
getData();
function getData() {
  fetch(productURl).then((result) => result.json().then((data) => showData(data)));
}

function showData(data) {
  console.log(data);
  categoriesList.innerHTML = "";
  let myInnerHtml = "";
  data.forEach((tøj) => {
    myInnerHtml += ` <div class="categories_box">
                <a href="produktliste.html">${tøj.category}</a>
            </div>`;
  });
  categoriesList.innerHTML = myInnerHtml;
}
