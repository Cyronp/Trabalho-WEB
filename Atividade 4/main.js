const inputNome = document.getElementById('inputNome');
const inputCom = document.getElementById('inputCom');
const form = document.getElementById('formulario');
const comenPost = document.getElementById('comentario-post');

const usuarioComentado = new Set();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const userName = inputNome.value.trim();

    let p = document.createElement('p');
    p.classList = 'p-2  d-flex text-wrap';
    p.innerHTML =  `<strong>${inputNome.value}: </strong> ${inputCom.value}`;
    comenPost.appendChild(p);
    inputNome.value = '';
    inputCom.value = '';
    inputNome.focus();
    
    if (usuarioComentado.has(userName)) {
        p.classList.add('novo-comentario');
    } else {
        p.classList.add('antigo-comentario');
        usuarioComentado.add(userName);
    }
});

