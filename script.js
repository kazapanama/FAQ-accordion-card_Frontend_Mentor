const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {

    box.addEventListener('click',()=>{
        if (box.classList.contains('active')){
            removeActiveClasses();
        } else {
            removeActiveClasses();
                
            box.classList.add('active');
        }
    })
})

function removeActiveClasses(){
    boxes.forEach((box)=>{
        box.classList.remove('active');
    })
}



