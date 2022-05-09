
const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}



const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});


function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    e.preventDefault();

    
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    
    e.target.appendChild(draggable);

    
    draggable.classList.remove('hide');
}


















// const cajas = document.querySelectorAll('#item');

// const contenedor = document.querySelector('#contenedor');

// contenedor.addEventListener('dragenter', e => {
//     console.log('drag enter');
// })


// contenedor.addEventListener('dragover', e => {
//     console.log('drag over');
//     e.preventDefault();
// })

// contenedor.addEventListener('drop', e => {
//     console.log('drop');
//     contenedor.appendChild(item);
// })



// caja.addEventListener('dragstart', e => {
//     console.log('drag start');
// })

// caja.addEventListener('dragend', e => {
//     console.log('drag end');
// })

// caja.addEventListener('drag', e => {
//     console.log('drag');
// })

// contenedor.addEventListener('dragleave', e => {
//     console.log('drag leave');
// })

















