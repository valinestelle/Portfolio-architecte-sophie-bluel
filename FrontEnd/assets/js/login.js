const myForm = document.querySelector('#myForm');
const errorMessage = document.querySelector('#message-error');
const buttonConnect = document.querySelector('#connect-button');

const login = async (email, password) => {
  
    const response = await fetch("http://localhost:5678/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).catch(function(error){
      console.log(error);
    });
   }

   buttonConnect.addEventListener('click', (e) => {
    e.preventDefault();
    login(myForm.email.value, myForm.password.value);
   })




 