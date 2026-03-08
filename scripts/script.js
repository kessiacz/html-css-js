document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#checkbox');
    const menuBtn = document.querySelector('.ri-menu-line');
    const closeBtn = document.querySelector('.ri-close-line');
    const menuOverlay = document.querySelector('#menuOverlay');

    // Troca de Tema
    if (checkbox) {
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    // Abrir Menu
    const openMenu = () => {
        menuOverlay.classList.remove('hidden');
        menuBtn.classList.add('hidden');
        closeBtn.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    // Fechar Menu
    const closeMenu = () => {
        menuOverlay.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    // FECHAR AO CLICAR FORA (No fundo do overlay)
    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) {
            closeMenu();
        }
    });

    // Fechar ao clicar em links
    const links = menuOverlay.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', closeMenu));
});

// Exercicio 1: Desconto de 15%
const form1 = document.getElementById('formExercicio1');
const displayResultado1 = document.getElementById('resultado1');
if (form1) {
    form1.addEventListener('submit', (event) => {
        event.preventDefault();
        const valorOriginal = parseFloat(document.getElementById('valorNumerico').value);
        const valorFinal = valorOriginal - (valorOriginal * 0.15);
        displayResultado1.innerHTML = `O valor com 15% de desconto é: R$ ${valorFinal.toFixed(2)}`;
    });
}

// Exercicio 2: Divisão
const form2 = document.getElementById('formExercicio2');
const displayResultado2 = document.getElementById('resultado2');
if (form2) {
    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        const valor1 = parseFloat(document.getElementById('valor1').value);
        const valor2 = parseFloat(document.getElementById('valor2').value);
        const divisao = valor1 / valor2;
        displayResultado2.innerHTML = `A divisão dos valores é igual a: ${divisao.toFixed(2)}`;
    });
}

// Exercicio 3: Dias vividos (Idade * 365)
const form3 = document.getElementById('formExercicio3');
const displayResultado3 = document.getElementById('resultado3');
if (form3) {
    form3.addEventListener('submit', (event) => {
        event.preventDefault();
        const idade = parseFloat(document.getElementById('idade').value);
        const dias_vividos = idade * 365;
        displayResultado3.innerHTML = `Você viveu aproximadamente ${dias_vividos} dias`;
    });
}

// Exercicio 4: Converter dias em anos, meses e dias
const form4 = document.getElementById('formExercicio4');
const displayResultado4 = document.getElementById('resultado4');
if (form4) {
    form4.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputDias = parseInt(document.getElementById('dias').value);
        let totalDias = parseInt(document.getElementById('dias').value);
    
        const anos = Math.floor(totalDias / 365);
        totalDias %= 365;
        const meses = Math.floor(totalDias / 30);
        const dias = totalDias % 30;
        displayResultado4.innerHTML = `${inputDias} dias equivale a ${anos} anos, ${meses} mes(es), ${dias} dia(s)`;
    });
}

// Exercicio 5: Média de consumo (Km/L)
const form5 = document.getElementById('formExercicio5');
const displayResultado5 = document.getElementById('resultado5');
if (form5) {
    form5.addEventListener('submit', (event) => {
        event.preventDefault();
        const km = parseFloat(document.getElementById('km').value);
        const litros = parseFloat(document.getElementById('litros').value);

        const media = km / litros
        displayResultado5.innerHTML = `A média percorrida foi ${media.toFixed(2)} Km/L`;
    });
}

// Exercicio 6: Porcentagem de desconto aplicada
const form6 = document.getElementById('formExercicio6');
const displayResultado6 = document.getElementById('resultado6');
if (form6) {
    form6.addEventListener('submit', (event) => {
        event.preventDefault();
        const valorProduto = parseFloat(document.getElementById('valorProduto').value);
        const valorDesconto = parseFloat(document.getElementById('valorDesconto').value);

        const porcentagem = (valorDesconto / valorProduto) * 100;
        displayResultado6.innerHTML = `O desconto aplicado foi de ${porcentagem.toFixed(2)}%`;
    });
}

// Exercicio 7: Identificar se é consoate
const form7 = document.getElementById('formExercicio7');
const displayResultado7 = document.getElementById('resultado7');

if (form7) {
    form7.addEventListener('submit', (event) => {
        event.preventDefault();

        const letra = document.getElementById('letra').value.toLowerCase();

        if (typeof letra === "string" && letra.length === 1) {

            switch (letra) {
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                    displayResultado7.innerHTML = 'É VOGAL!';
                    break;

                default:
                    displayResultado7.innerHTML = 'É CONSOANTE!';
            }

        } else {
            displayResultado7.innerHTML = 'DIGITE UM VALOR VÁLIDO!';
        }
    });
}

// Exercicio 8: Numero e dia correspondente
const form8 = document.getElementById('formExercicio8');
const displayResultado8 = document.getElementById('resultado8');
if (form8) {
    form8.addEventListener('submit', (event) => {
        event.preventDefault();

        const valorSemana = Number(document.getElementById("valor").value);

        if (!isNaN(valorSemana)){

            switch (valorSemana) {
                case 1: 
                    displayResultado8.innerHTML = 'DOMINGO';
                    break;
                case 2:
                    displayResultado8.innerHTML = 'SEGUNDA-FEIRA';
                    break;
                case 3:
                    displayResultado8.innerHTML = 'TERÇA-FEIRA';
                    break;
                case 4:
                    displayResultado8.innerHTML = 'QUARTA-FEIRA';
                    break;
                case 5:
                    displayResultado8.innerHTML = 'QUINTA-FEIRA';
                    break;

                case 6:
                    displayResultado8.innerHTML = 'SEXTA-FEIRA';
                    break;

                case 7:
                    displayResultado8.innerHTML = 'SÁBADO';
                    break;

                default:
                    displayResultado8.innerHTML = 'VALOR INVÁLIDO';
            }

        } else {
            displayResultado8.innerHTML = 'VALOR INVÁLIDO';
        }
    });
}

// Exercicio 9: Descobrir o mês e os dias
const form9 = document.getElementById('formExercicio9');
const displayResultado9 = document.getElementById('resultado9');

if (form9) {
    form9.addEventListener('submit', (event) => {
        event.preventDefault();

        const valorMes = parseInt(document.getElementById("valorMes").value.trim());

        const meses = [
            { nome: 'JANEIRO', dias: 31 },
            { nome: 'FEVEREIRO', dias: 28 },
            { nome: 'MARÇO', dias: 31 },
            { nome: 'ABRIL', dias: 30 },
            { nome: 'MAIO', dias: 31 },
            { nome: 'JUNHO', dias: 30 },
            { nome: 'JULHO', dias: 31 },
            { nome: 'AGOSTO', dias: 31 },
            { nome: 'SETEMBRO', dias: 30 },
            { nome: 'OUTUBRO', dias: 31 },
            { nome: 'NOVEMBRO', dias: 30 },
            { nome: 'DEZEMBRO', dias: 31 }
        ];

        if (!isNaN(valorMes) && valorMes >= 1 && valorMes <= 12) {
            const mesSelecionado = meses[valorMes - 1];
            displayResultado9.innerHTML = `${mesSelecionado.nome} TEM ${mesSelecionado.dias} DIAS`;
        } else {
            displayResultado9.innerHTML = 'VALOR INVÁLIDO';
        }
    });
}

// Exercicio 10: Numero maior
const form10 = document.getElementById('formExercicio10');
const displayResultado10 = document.getElementById('resultado10');

if (form10) {
    form10.addEventListener('submit', (event) => {
        event.preventDefault();

        const valorA = parseFloat(document.getElementById('valorA').value);
        const valorB = parseFloat(document.getElementById('valorB').value);

        if(valorA > valorB){
            displayResultado10.innerHTML = `O PRIMEIRO (${valorA}) VALOR É MAIOR`;
        }
        else if(valorA < valorB){
            displayResultado10.innerHTML = `O SEGUNDO (${valorB}) VALOR É MAIOR`;
        }
        else{
            displayResultado10.innerHTML = `OS DOIS VALORES SÃO IGUAIS`;
        }
    });
}

// Exercicio 11: Numero par, impar, positivo e negativo
const form11 = document.getElementById('formExercicio11');
const displayResultado11 = document.getElementById('resultado11');

if (form11) {
    form11.addEventListener('submit', (event) => {
        event.preventDefault();

        const valor = Number(document.getElementById('valor11').value);

        if (valor === 0) {
            displayResultado11.innerHTML = 'O NÚMERO É ZERO';
            return;
        }

        const tipo = valor > 0 ? "POSITIVO" : "NEGATIVO";
        const paridade = valor % 2 === 0 ? "PAR" : "ÍMPAR";

        displayResultado11.innerHTML = `O NÚMERO (${valor}) É ${tipo} E ${paridade}`;
    });
}

// Exercicio 12: Verificar se é um triangulo
const form12 = document.getElementById('formExercicio12');
const displayResultado12 = document.getElementById('resultado12');

if (form12) {
    form12.addEventListener('submit', (event) => {
        event.preventDefault();

        const valorA = Number(document.getElementById('valorA_12').value);
        const valorB = Number(document.getElementById('valorB_12').value);
        const valorC = Number(document.getElementById('valorC_12').value);


        if (valorA > 0 && valorB > 0 && valorC > 0 && (valorA + valorB + valorC) === 180) {
            displayResultado12.innerHTML = 'É UM TRIÂNGULO VÁLIDO';
        } else {
            displayResultado12.innerHTML = 'NÃO É UM TRIÂNGULO VÁLIDO';
        }
    });
}

// Exercicio 13: Verificar se o valor é multiplo
const form13 = document.getElementById('formExercicio13');
const displayResultado13 = document.getElementById('resultado13');

if (form13) {
    form13.addEventListener('submit', (event) => {
        event.preventDefault();

        const valorA = Number(document.getElementById('valorA_13').value);
        const valorB = Number(document.getElementById('valorB_13').value);


        if ((valorA % valorB) == 0) {
            displayResultado13.innerHTML = `O NÚMERO (${valorA}) É MULTIPLO DE ${valorB}`;
            return;
        } else {
            displayResultado13.innerHTML = `O NÚMERO (${valorA}) NÃO É MULTIPLO DE ${valorB}`;
        }
    });
}

// Exercicio 14: Verificar categoria de nadador
const form14 = document.getElementById('formExercicio14');
const displayResultado14 = document.getElementById('resultado14');

if (form14) {
    form14.addEventListener('submit', (event) => {
        event.preventDefault();

        const valorIdade = Number(document.getElementById('valor14').value);


        if (valorIdade >= 5 && valorIdade <= 7) {
            displayResultado14.innerHTML = `CATEGORIA: INFANTIL A`;
            return;
        } 
        
        else if(valorIdade >= 8 && valorIdade <= 10) {
            displayResultado14.innerHTML = `CATEGORIA: INFANTIL B`;
            return;
        }
        
        else if(valorIdade >= 11 && valorIdade <= 13) {
            displayResultado14.innerHTML = `CATEGORIA: JUVENIL A`;
            return;
        }
        
        else if(valorIdade >= 14 && valorIdade <= 17) {
            displayResultado14.innerHTML = `CATEGORIA: JUVENIL B`;
            return;
        }

        else {
            displayResultado14.innerHTML = 'CATEGORIA: ADULTO';
        }
    });
}

// Exercicio 15: Classificação de angulo
const form15 = document.getElementById('formExercicio15');
const displayResultado15 = document.getElementById('resultado15');

if (form15) {
    form15.addEventListener('submit', (event) => {
        event.preventDefault();

        const valor = Number(document.getElementById('valor15').value);

        if(valor == 0 || valor == 180) {
            displayResultado15.innerHTML = `ÂNGULO RADO`;
            return;
        }

        else if(valor == 90) {
            displayResultado15.innerHTML = `ÂNGULO RETO`;
            return;
        }

        else if(valor == 360) {
            displayResultado15.innerHTML = `ÂNGULO COMPLETO`;
            return;
        }

        else if (valor > 0 && valor < 90) {
            displayResultado15.innerHTML = `ÂNGULO AGUDO`;
            return;
        } 
        
        else if(valor > 90 && valor < 180) {
            displayResultado15.innerHTML = `ÂNGULO OBTUSO`;
            return;
        }

        else if(valor > 180 && valor < 360) {
            displayResultado15.innerHTML = `ÂNGULO CÔNCAVO`;
            return;
        }

        else {
            displayResultado15.innerHTML = 'VALOR INCORRETO';
        }
    });
}