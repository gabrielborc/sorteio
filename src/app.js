const participanteController = new ParticipanteController();

document.querySelector('form').addEventListener('submit', function(e) {
    let nome = e.srcElement[0].value;
    participanteController.adiciona(nome);   

    e.preventDefault();
});

document.querySelector('#btnSoteia').addEventListener('click', function(e) {
    participanteController.sorteia();
});
