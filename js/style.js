const buttons=document.querySelectorAll('.modale');
const modal = document.querySelector(".modal");

for(let i=0; i<  buttons.length ; i++){
    const button= buttons[i]

    button.addEventListener("click", openModal);
}
document.querySelector(".txt_modal").addEventListener("click", closeModal)

function openModal(){
    modal.classList.add('visible');
}

function closeModal(){
    modal.classList.remove('visible');
}