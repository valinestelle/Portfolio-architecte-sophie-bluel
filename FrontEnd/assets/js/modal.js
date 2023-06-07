let modalbutton = document.querySelector('.btnmodal');
const token = localStorage.getItem("token");
let btnajout = document.querySelector('.btnajout');
const bodyModal = document.querySelector(".modal-body");
const modalFooter = document.querySelector(".modal-footer");
const titreModal = document.querySelector("#titreModal");
const modalContent = document.querySelector(".modal-content");



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
      modal1();
   });

   function modal1() {
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
   })};
   
        
   //MODAL2//

    btnajout.addEventListener('click', function(e){
      e.preventDefault();
      modal2();
    });

      function modal2() {
         //supprimer body modal//
         //mettre fleche retour//
         //changer titre et body//
         //supprimer body//
         bodyModal.innerHTML = '';
         modalFooter.innerHTML = '';
         titreModal.innerHTML = '';
         let arrowReturn = document.createElement("div")
         arrowReturn.classList.add('modal-return');
         let iconeArrowLeft = document.createElement("i");
         iconeArrowLeft.classList.add('fa-light', 'fa-arrow-left');
         let titlemodal2 = document.createElement("p");
         titlemodal2.innerHTML= 'Ajout photo';
         let ajout = document.createElement('div');
         ajout.classList.add('download');
         let iconedownload = document.createElement("i");
         iconedownload.classList.add('fa-thin', 'fa-image', 'picture');
         let buttonAjoutPhoto = document.createElement('button');
         buttonAjoutPhoto.classList.add('btnajout');
         buttonAjoutPhoto.innerHTML='+ Ajouter Photo';
         let subtitleDownload = document.createElement('p');
         subtitleDownload.innerHTML='jpg,png:4mo max';
         let formulaire = document.createElement('form');
         formulaire.action = '#';
         formulaire.method = 'post';
         formulaire.id = 'pop-up';
         let labelTitle = document.createElement('label');
         labelTitle.for = 'title';
         labelTitle.innerHTML = 'Titre';
         let inputTitle = document.createElement('input');
         inputTitle.type = 'texte';
         inputTitle.name = 'title';
         inputTitle.id = 'titre';
         let labelCategory = document.createElement('label');
         labelCategory.for = 'category';
         labelCategory.innerHTML ='categories';
         let inputCategory = document.createElement('input');
         inputCategory.type = 'texte';
         inputCategory.name = 'category';
         inputCategory.id = 'category';
         let buttonValider = document.createElement('button');
         buttonValider.classList.add('btnvalider');
         buttonValider.innerHTML = 'Valider';
         ajout.appendChild(iconedownload);
         ajout.appendChild(buttonAjoutPhoto);
         ajout.appendChild(subtitleDownload);
         bodyModal.appendChild(ajout);
         formulaire.appendChild(labelTitle);
         formulaire.appendChild(inputTitle);
         formulaire.appendChild(labelCategory);
         formulaire.appendChild(inputCategory);
         bodyModal.appendChild(formulaire);
         modalFooter.appendChild(buttonValider);
         modalContent.appendChild(titlemodal2);
         modalContent.appendChild(bodyModal);
         modalContent.appendChild(modalFooter);
         arrowReturn.appendChild(iconeArrowLeft);
         modalContent.appendChild(arrowReturn);
      }
      

