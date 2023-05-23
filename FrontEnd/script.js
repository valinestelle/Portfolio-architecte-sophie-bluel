const gallery = document.querySelector(".gallery");
const categories = document.querySelector("#categories");
const tous = document.querySelector("#cat-tous");
//  let datas = [];

fetch("http://localhost:5678/api/works")
   .then(response => response.json())
   .then(function (data) {
      for (let i = 0; i < data.length; i++) {
         let figure = document.createElement("figure");
         let img = document.createElement("img");
         let figcaption = document.createElement("figcaption");
         img.src = data[i].imageUrl;
         img.alt = data[i].title;
         figcaption.innerHTML = data[i].title;
         figure.appendChild(img);
         figure.appendChild(figcaption);
         gallery.appendChild(figure);
      }
   })

   fetch("http://localhost:5678/api/works")
   .then(response => response.json())
   .then(function (data) {
      // datas = data;
       
       let categoriesInHtml = [];
        for (let i = 0; i < data.length; i++) {
         if(!categoriesInHtml.includes(data[i].category.name)){
            let liste = document.querySelector("li")
            liste.classList = ['listes'];
            liste.innerHTML = data[i].category.name;
            categoriesInHtml.push(data[i].category.name);
            categories.appendChild(liste);
         }
       }
      })



   

  





