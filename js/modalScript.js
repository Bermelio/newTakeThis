// Getting modal from html

const modal = document.getElementById("modal");
const triggerModal = document.getElementById("triggerModal");

const span = document.getElementsByClassName("close")[0];

triggerModal.onclick = function(){
    modal.style.display = "block";
}

span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
