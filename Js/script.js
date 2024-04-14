

function toggleOpcoesAluguel() {
    var opcoesAluguel = document.getElementById('opcoesAluguel');
    var alugarVeiculosButton = document.getElementById('alugarVeiculosButton')
    var body = document.body;

    if (opcoesAluguel.style.opacity === '1') {
        opcoesAluguel.style.opacity = '0';
        body.style.overflowY = 'auto';
    } else {
        opcoesAluguel.style.opacity = '1';
        body.style.overflowY = 'hidden';
        alugarVeiculosButton.style.display = 'none'

    }
}

function continuarAluguel() {
    alert('AGUARDE ENQUANTO CARREGAMOS SUAS INFORMAÇÕES...');
}

