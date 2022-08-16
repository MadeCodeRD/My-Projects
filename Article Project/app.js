//store share and imagenes in variables
const share=document.querySelector('.share');
const shareIcon=document.querySelector('.share-img');

shareIcon.addEventListener('click', e=>{
    if(e.target===shareIcon){
        if(window.innerWidth<=750){
            share.classList.toggle('active-share-mobile');
            return;
        }

        share.classList.toggle('active-share-desktop');
    }   
});