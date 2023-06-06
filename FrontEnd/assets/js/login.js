const myForm = document.querySelector('#myForm');
const errorMessage = document.querySelector('#message-error');
const buttonConnect = document.querySelector('#connect-button');


const login = async (email,password) => {

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
  }).then(function(response){
    if(response.status == 200){
     return response.json();

    }else{
      errorMessage.innerHTML = "Email ou mot de passe incorrect";
      buttonConnect.classList.add("animationbtn");
    }})
      .then(function(ResponseJson){
      const token = ResponseJson.token;
      localStorage.setItem("token", token);
      window.location.href = "./index.html";
      })
      console.log(token)
    .catch(function(error){
      console.log(error);
    });
  }

buttonConnect.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('click');
  login(myForm.email.value, myForm.password.value);
});





 