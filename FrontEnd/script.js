const gallery = document.querySelector(".gallery");

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

   
   
  

  





