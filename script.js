let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let p1 = document.querySelector('p1')


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

})


