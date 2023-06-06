let modalbutton = document.querySelector('.btnmodal');
const token = localStorage.getItem("token");
let btnajout = document.querySelector('.btnajout');
const modales = document.querySelector('.modales');

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

      const bodyModal = document.querySelector(".modal-body");

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
   })}
   
        
   //MODAL2//

    const mod2 = document.querySelector('#modal2');
    const modalReturn = document.querySelector(".modal-return");


    btnajout.addEventListener('click', function(e){
      e.preventDefault();
       modal2();
    });

      function modal2() {
         let title = document.createElement("p");
         title.innerHTML= 'Ajout photo';
         let ajout = document.createElement('div');
         ajout.classList.add('download');
         let icone = document.createElement("i");
         icone.classList.add('fa-thin', 'fa-image', 'picture');
         let button = document.createElement('button');
         button.classList.add('btnajout');
         button.innerHTML='+ Ajouter Photo';
         let subtitle = document.createElement('p');
         subtitle.innerHTML='jpg,png:4mo max';
         let form = document.createElement('form');
         form.action = '#';
         form.method = 'post';
         form.id = 'pop-up';
         let label = document.createElement('label');
         label.for = 'title';
         label.innerHTML = 'Titre';
         let input = document.createElement('input');
         input.type = 'texte';
         input.name = 'title';
         input.id = 'titre';
         label.for = 'category';
         label.innerHTML ='categories';
         input.type = 'texte';
         input.name = 'category';
         input.id = 'category';
         let modalFooter = document.createElement('div');
         modalFooter.classList.add('modal-footer');
         button.classList.add('btnvalider');
         button.innerHTML = 'Valider';
         ajout.appendChild(icone);
         ajout.appendChild(button);
         ajout.appendChild(subtitle);
         bodyModal.appendChild(ajout);
         form.appendChild(label);
         form.appendChild(input);
         bodyModal.appendChild(form);
         modalFooter.appendChild(button);
         bodyModal.appendChild(modalFooter);
      }
      

