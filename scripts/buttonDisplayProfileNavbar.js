// Get the modal
var modalProfile = document.getElementById("myModalProfile");
        
// Get the button that opens the modal
var btnProfile = document.getElementById("btnProfile");

// When the user clicks the button, open the modal 
btnProfile.onclick = function() {
    modalProfile.style.display = "block";
}

let bodyTwo = document.body;

bodyTwo.addEventListener("click", (e) => {
    let data = e.target.parentNode.parentNode.className;

    if(data !== "modal_notification_profile"){
        modalProfile.style.display = "none";
    }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalProfile.style.display = "none";
  }
}