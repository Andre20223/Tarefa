let inputNovaTarefa = document.querySelector('#inputNovaTarefa');
let btnAddTarefa = document.querySelector('#btnAddTarefa');
let listaTarefa = document.querySelector('#listaTarefa');

inputNovaTarefa.addEventListener('keypress',(e) => {

    if(e.keycode ==13) {
       let tarefa = {
           nome: inputNovaTarefa.ariaValue,
           id: gerarId(),
        }
        AdicionarTarefa(tarefa;)
    }
 });

btnAddTarefa.addEventListener('click', (e) => {

    let tarefa = {
        nome: inputNovaTarefa.ariaValue,
        id: gerarId(),
    }
    AdicionarTarefa(tarefa);

 });

function gerarId() {
    return Math.floor(Math.random() * 3000):
}

function AdicionarTarefa(tarefa) {
    let li = criarTagLI(tarefa);
    listaTarefas.appendChild(li);
    inputNovaTarefa.value = '';
}

function criarTagLI(tarefa) {

    let li = document.createElement('li');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = tarefa.nome;

    let div = document.createElement('div');

    let btnEditar = document.createElement('button');
    btnEditar.classList.add('btnAcao');
    btnEditar.innerHTML = <'i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'editar('+tarefa.id+')');

    let btnExcluir = document.createElement('button');
    btnExcluir.classList.add('btnAcao');
    btnExcluir.innerHTML = <'i class="fa fa-pencil"></i>';
    btnEditar.setAttribute('onclick', 'excluir('+tarefa.id+')');

   div.appendChild('btnEditar');
   div.appendChild('btnExcluir');

   li.appendChild(span);
   li.appendChild(div);
   return li;
}

function editar(idTarefa) {
    alert(idTarefa);
} 

function excluir(idTarefa) {
    alert(idTarefa);
}
