const getPhotos = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");

getPhotos.addEventListener("click",fetchImage)

function fetchImage(params) {
 const inputValue = document.getElementById("input").value
 if (inputValue<0||inputValue>10) {    
    errorMessage.style.display="block";
    errorMessage.innerText = "Number should be between 0 and 11";    
    return;
}
fetch(`https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(Math.random()*1000)}&client_id=GV2146OATxwIUAjpTpKgvGjAM_UI-5Iw--7Cag2886w`).then((res)=>res.json().then((data)=>{console.log(data);}))

  
}