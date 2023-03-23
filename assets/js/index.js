const getPhotos = document.getElementById("btn");

getPhotos.addEventListener("click",fetchImage)

function fetchImage(params) {
 const inputValue = document.getElementById("input").value
fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=GV2146OATxwIUAjpTpKgvGjAM_UI-5Iw--7Cag2886w`).then((res)=>res.json().then((data)=>{console.log(data);}))
  
}