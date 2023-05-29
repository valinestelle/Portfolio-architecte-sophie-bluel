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
      modal.children[0].addEventListener('click', function(e){
         e.stopPropagation();
      })
   });

      const bodyModal = document.querySelector(".modal-body");

      fetch("http://localhost:5678/api/works")
   .then(response => response.json())
   .then(function (datas) {
       bodyModal.innerHTML = '';
       for (let i = 0; i < datas.length; i++) {
         let figure = document.createElement("figure");
         figure.classList.add('badge');
         let img = document.createElement("img");
         let figcaption = document.createElement("figcaption");
         img.src = datas[i].imageUrl;
         img.alt = datas[i].title;
         figcaption.innerHTML = "éditer";
         figure.appendChild(img);
         figure.appendChild(figcaption);
         bodyModal.appendChild(figure);
      };
      let supprim = document.querySelector('#supprimer');
      supprim.addEventListener('click', () => {
         bodyModal.innerHTML = '';
      });
   })