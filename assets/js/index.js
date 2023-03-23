const getPhotos = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");
const input = document.getElementById("input");
const galleryEl=document.getElementById("gallery");

getPhotos.addEventListener("click", fetchImage);

async function fetchImage(params) {
  const inputValue = input.value;
  if (inputValue < 0 || inputValue > 10) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Number should be between 0 and 11";
    return;
  }
  imgs="";
  try { 
     await fetch(
    `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
      Math.random() * 1000
    )}&client_id=GV2146OATxwIUAjpTpKgvGjAM_UI-5Iw--7Cag2886w`
  ).then((res) =>
    res.json().then((data) => {
      if (data) 
      {
       data.forEach((pic) => {

       imgs+= `<img src=${pic.urls.small} alt="image" /> `;
       galleryEl.style.display="block";
       galleryEl.innerHTML=imgs;    
       }); 
      }
    })
  );

  errorMessage.style.display = "none";
    
  } catch (error) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "An error occured , please  try again later";    
  }

}
