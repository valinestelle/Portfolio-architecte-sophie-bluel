const gallery = document.querySelectorAll("gallery");

fetch("http://localhost:5678/api/works")
   .then(response => response.json())
   .then(data => gallery.src = data[0].imageUrl)
   
  

  





