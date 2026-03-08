document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.querySelector('#checkbox');
    const menuBtn = document.querySelector('.ri-menu-line');
    const closeBtn = document.querySelector('.ri-close-line');
    const menuOverlay = document.querySelector('#menuOverlay');

    // --- LÓGICA DE INTERFACE (TEMA E MENU) ---

    if (checkbox) {
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('light-mode');
        });
    }

    const openMenu = () => {
        menuOverlay.classList.remove('hidden');
        menuBtn.classList.add('hidden');
        closeBtn.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
        menuOverlay.classList.add('hidden');
        menuBtn.classList.remove('hidden');
        closeBtn.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    if (menuBtn) menuBtn.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    menuOverlay.addEventListener('click', (event) => {
        if (event.target === menuOverlay) closeMenu();
    });

    const links = menuOverlay.querySelectorAll('a');
    links.forEach(link => link.addEventListener('click', closeMenu));


    // --- LÓGICA DOS EXERCÍCIOS ---

    // Função auxiliar para configurar os eventos de formulário
    const handleForm = (id, callback) => {
        const form = document.getElementById(`formExercicio${id}`);
        const resultArea = document.getElementById(`resultado${id}`);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                callback(form, resultArea);
            });
        }
    };

    // 01: Desconto de 15%
    handleForm(1, (form, res) => {
        const valor = parseFloat(document.getElementById('valorNumerico').value);
        const final = valor * 0.85;
        res.innerHTML = `O valor com 15% de desconto é: <strong>R$ ${final.toFixed(2)}</strong>`;
    });

    // 02: Divisão
    handleForm(2, (form, res) => {
        const v1 = parseFloat(document.getElementById('valor1').value);
        const v2 = parseFloat(document.getElementById('valor2').value);
        res.innerHTML = v2 !== 0 ? `Resultado: <strong>${(v1 / v2).toFixed(2)}</strong>` : "Erro: Divisão por zero!";
    });

    // 03: Dias vividos
    handleForm(3, (form, res) => {
        const idade = parseInt(document.getElementById('idade').value);
        res.innerHTML = `Você viveu aproximadamente <strong>${idade * 365} dias</strong>.`;
    });

    // 04: Converter dias
    handleForm(4, (form, res) => {
        let total = parseInt(document.getElementById('dias').value);
        const anos = Math.floor(total / 365);
        total %= 365;
        const meses = Math.floor(total / 30);
        const dias = total % 30;
        res.innerHTML = `<strong>${anos} anos, ${meses} meses e ${dias} dias.</strong>`;
    });

    // 05: Km/L
    handleForm(5, (form, res) => {
        const km = parseFloat(document.getElementById('km').value);
        const l = parseFloat(document.getElementById('litros').value);
        res.innerHTML = `Média: <strong>${(km / l).toFixed(2)} Km/L</strong>`;
    });

    // 06: % de Desconto
    handleForm(6, (form, res) => {
        const total = parseFloat(document.getElementById('valorProduto').value);
        const desc = parseFloat(document.getElementById('valorDesconto').value);
        const perc = ((total - desc) / total) * 100;
        res.innerHTML = `O desconto aplicado foi de <strong>${perc.toFixed(2)}%</strong>`;
    });

    // 07: Vogal ou Consoante
    handleForm(7, (form, res) => {
        const letra = document.getElementById('letra').value.toLowerCase();
        const vogais = ['a', 'e', 'i', 'o', 'u'];
        if (!/[a-z]/.test(letra)) res.innerHTML = "Por favor, digite uma letra.";
        else res.innerHTML = vogais.includes(letra) ? "É uma <strong>VOGAL</strong>" : "É uma <strong>CONSOANTE</strong>";
    });

    // 08: Dia da Semana
    handleForm(8, (form, res) => {
        const dias = ["", "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
        const num = parseInt(document.getElementById('valor').value);
        res.innerHTML = dias[num] || "Valor inválido";
    });

    // 09: Mês e Dias
    handleForm(9, (form, res) => {
        const meses = [
            null, {n: "Janeiro", d: 31}, {n: "Fevereiro", d: 28}, {n: "Março", d: 31}, 
            {n: "Abril", d: 30}, {n: "Maio", d: 31}, {n: "Junho", d: 30}, 
            {n: "Julho", d: 31}, {n: "Agosto", d: 31}, {n: "Setembro", d: 30}, 
            {n: "Outubro", d: 31}, {n: "Novembro", d: 30}, {n: "Dezembro", d: 31}
        ];
        const num = parseInt(document.getElementById('valorMes').value);
        res.innerHTML = meses[num] ? `${meses[num].n} tem ${meses[num].d} dias.` : "Mês inválido";
    });

    // 10: Maior número
    handleForm(10, (form, res) => {
        const a = parseFloat(document.getElementById('valorA').value);
        const b = parseFloat(document.getElementById('valorB').value);
        if (a === b) res.innerHTML = "Os números são iguais.";
        else res.innerHTML = `O maior é <strong>${Math.max(a, b)}</strong>`;
    });

    // 11: Paridade e Sinal
    handleForm(11, (form, res) => {
        const n = parseFloat(document.getElementById('valor11').value);
        const sinal = n >= 0 ? "Positivo" : "Negativo";
        const paridade = n % 2 === 0 ? "Par" : "Ímpar";
        res.innerHTML = `O número é <strong>${sinal}</strong> e <strong>${paridade}</strong>`;
    });

    // 12: Triângulo
    handleForm(12, (form, res) => {
        const a = parseFloat(document.getElementById('valorA_12').value);
        const b = parseFloat(document.getElementById('valorB_12').value);
        const c = parseFloat(document.getElementById('valorC_12').value);
        res.innerHTML = (a + b + c === 180) ? "É um triângulo <strong>VÁLIDO</strong>" : "<strong>NÃO</strong> é um triângulo válido";
    });

    // 13: Múltiplos
    handleForm(13, (form, res) => {
        const a = parseFloat(document.getElementById('valorA_13').value);
        const b = parseFloat(document.getElementById('valorB_13').value);
        res.innerHTML = a % b === 0 ? `${a} <strong>é múltiplo</strong> de ${b}` : `${a} <strong>não é múltiplo</strong> de ${b}`;
    });

    // 14: Nadador
    handleForm(14, (form, res) => {
        const idade = parseInt(document.getElementById('valor14').value);
        let cat = "";
        if (idade >= 18) cat = "Adulto";
        else if (idade >= 14) cat = "Juvenil B";
        else if (idade >= 11) cat = "Juvenil A";
        else if (idade >= 8) cat = "Infantil B";
        else if (idade >= 5) cat = "Infantil A";
        else cat = "Sem categoria (Mínimo 5 anos)";
        res.innerHTML = `Categoria: <strong>${cat}</strong>`;
    });

    // 15: Ângulos
    handleForm(15, (form, res) => {
        const ang = parseFloat(document.getElementById('valor15').value);
        let tipo = "";
        if (ang < 90) tipo = "AGUDO";
        else if (ang === 90) tipo = "RETO";
        else if (ang < 180) tipo = "OBTUSO";
        else if (ang === 180) tipo = "RASO";
        else tipo = "Completo ou Côncavo";
        res.innerHTML = `Classificação: <strong>${tipo}</strong>`;
    });
});