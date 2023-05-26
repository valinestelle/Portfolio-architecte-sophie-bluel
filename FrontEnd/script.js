


const gallery = document.querySelector(".gallery");
const categories = document.querySelector("#categories");
const tous = document.querySelector("#cat-tous");
let datas = [];
let activeCategories = '';

fetch("http://localhost:5678/api/works")
   .then(response => response.json())
   .then(function (data) {
      datas = data;
      let liste = document.createElement("li");
      liste.classList.add('listes','active');
      liste.innerHTML = 'Tous';
      liste.id = 'cat-tous';
      liste.addEventListener('click', function(){
         changeCategories('tous');
      });
      activeCategories = liste;
      categories.appendChild(liste);
       let categoriesInHtml = [];
        for (let i = 0; i < data.length; i++) {
         if(!categoriesInHtml.includes(data[i].category.name)){
            let liste = document.createElement("li")
            liste.classList = ['listes'];
            liste.id = 'cat-'+data[i].categoryId;
            liste.innerHTML = data[i].category.name;
            categories.appendChild(liste);
            categoriesInHtml.push(data[i].category.name);
            liste.addEventListener('click', function (){
               changeCategories(data[i].categoryId);
            });
         }
       }
        changeCategories('tous')
      })

      function changeCategories(idCategorie){
         activeCategories.classList.remove('active');
         activeCategories = document.querySelector('#cat-'+ idCategorie);
         activeCategories.classList.add('active');
         gallery.innerHTML = '';

            for (let i = 0; i < datas.length; i++) {
               if(datas[i].categoryId == idCategorie || idCategorie == 'tous'){
         let figure = document.createElement("figure");
         let img = document.createElement("img");
         let figcaption = document.createElement("figcaption");
         img.src = datas[i].imageUrl;
         img.alt = datas[i].title;
         figcaption.innerHTML = datas[i].title;
         figure.appendChild(img);
         figure.appendChild(figcaption);
         gallery.appendChild(figure);
      }
   }
}


let modalbutton = document.querySelector('.btnmodal');


   modalbutton.addEventListener('click', function(e){
      e.preventDefault();
      let modal = document.querySelector("#modal1");
      modal.classList.add('openmodal');
   
      const modalClose = modal.querySelector('.modal-close');
      modalClose.addEventListener('click', () => {
          modal.classList.remove("openmodal");
      });

      modal.addEventListener('click', () => {
         modal.classList.remove('openmodal');
      });
   });

      const bodyModal = document.querySelector(".modal-body");

      fetch("http://localhost:5678/api/works")
   .then(response => response.json())
   .then(function (datas) {
       bodyModal.innerHTML = '';
       for (let i = 0; i < datas.length; i++) {
         let figure = document.createElement("figure");
         let img = document.createElement("img");
         let figcaption = document.createElement("figcaption");
         img.src = datas[i].imageUrl;
         img.alt = datas[i].title;
         figcaption.innerHTML = "éditer";
         figure.appendChild(img);
         figure.appendChild(figcaption);
         bodyModal.appendChild(figure);
      };
   })
  

   



   

   

  





