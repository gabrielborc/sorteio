document.querySelector('form').addEventListener('submit', function(e) {
    let tabela = document.querySelector('table tbody');
    let participante = e.srcElement[0].value;

    let tr = document.createElement('tr');
    let td = document.createElement('td');

    td.innerHTML = participante;
    tr.appendChild(td);
    tabela.appendChild(tr);
    

    e.preventDefault();
});
