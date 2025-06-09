let ProductNames = [];
const ProductImages = {
    "iphone": "https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg",
    "samsung": "https://cdn.tgdd.vn/Products/Images/42/303891/samsung-galaxy-s24-ultra-grey-thumb-600x600.jpg",
    "xiaomi": "https://cdn.tgdd.vn/Products/Images/42/299024/xiaomi-redmi-note-13-pro-5g-thumb-den-600x600.jpg"
  };
  const Price = {
    "iphone" : "28.000.000VND",

  };
function Add(){
    let newProduct = document.getElementById("newProd").value;
    ProductNames.push(newProduct);
    getAll();
    document.getElementById("newProd").value="";
}

function getAll(){
    let html = ``;
    for(let i = 0; i < ProductNames.length;i++){
        html += `
        <tr>
        <td>${ProductNames[i]}</td>
        <td><button onclick = "ShowEdit(${i})">Edit</button></td>
        <td><button onclick = "Del(${i})">Delete</button></td>
        <td><button onclick = ShowImg(${i})>Image</button></td>
        <td><button onclick = ShowGia(${i})>Price</button></td>
        `
    }
    document.getElementById("items").innerHTML = html;
}


function Del(index){
    let isConfirm = confirm("Are you sure?");
    if(isConfirm){
        ProductNames.splice(index,1);
        getAll();
    }
}

function Edit(index){
    let newProduct = document.getElementById("newProd").value;
    if(newProduct){
        ProductNames[index] = newProduct;
        getAll();
    }
    document.getElementById("newProd").value="";
    document.getElementById("action").innerHTML= ` <button onclick="add()">Add</button>`;
}

function ShowEdit(index){
    document.getElementById("newProd").value= ProductNames[index]; 
    document.getElementById("action").innerHTML = `<button onclick="Edit(${index})">Save</button>`;
}

function ShowImg(index) {
    let productName = ProductNames[index].toLowerCase();
    let imageUrl = ProductImages[productName];
  
    if (imageUrl) {
      document.getElementById("imageDisplay").innerHTML = `
        <h4>${ProductNames[index]}</h4>
        <img src="${imageUrl}" alt="${ProductNames[index]}" style="max-width: 300px; border: 1px solid #ccc; padding: 5px;">
      `;
    } else {
      document.getElementById("imageDisplay").innerHTML = `<p style="color:red;">Không tìm thấy hình ảnh cho sản phẩm "${ProductNames[index]}"</p>`;
    }
  }
function ShowGia(index){
  let priceItems = ProductNames[index].toLowerCase();
  let priceI = Price[priceItems];
  if(priceI){
    document.getElementById("priceDisplay").innerHTML =`
     <h4>${ProductNames[index]}</h4>
    <h4>${priceI}</h4>
    ` 
  } else{
    document.getElementById("priceDisplay").innerHTML = "<p>Không có sản phẩm nào</p>"

  }
}