let modalbutton = document.querySelector('.btnmodal');
const token = localStorage.getItem("token");
let btnajout = document.querySelector('.btnajout');

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
        
   //MODAL2//
    btnajout.addEventListener('click', function(e){
      e.preventDefault();
      let modal2 = document.querySelector("#modal2");
      modal2.classList.add('openmodal');

      // let modal = document.querySelector("#modal1");
      // modal.innerHTML = '';

        const modalClose2 = modal2.querySelector('.modal-close');
      modalClose2.addEventListener('click', () => {
          modal2.classList.remove("openmodal");
      });

      modal2.addEventListener('click', () => {
         modal2.classList.remove('openmodal');
      });
      modal2.children[0].addEventListener('click', function(e){
         e.stopPropagation();
      })
    })