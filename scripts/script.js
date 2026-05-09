document.addEventListener('DOMContentLoaded', () => {

  /* ── THEME TOGGLE ── */
  const themeToggle = document.getElementById('themeToggle');
  themeToggle.addEventListener('change', () => {
    const on = themeToggle.checked;
    document.documentElement.classList.toggle('light-mode', on);
    document.body.classList.toggle('light-mode', on);
  });

  /* ── PROGRESS BAR ── */
  const progressBar = document.getElementById('progress-bar');
  const updateProgress = () => {
    const scrollTop  = window.scrollY || document.documentElement.scrollTop;
    const docHeight  = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct        = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = pct + '%';
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  /* ── CURSOR (desktop only) ── */
  const cursorDot     = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');

  window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top  = `${posY}px`;
    cursorOutline.animate(
      { left: `${posX}px`, top: `${posY}px` },
      { duration: 500, fill: 'forwards' }
    );
  });

  window.addEventListener('mousedown', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(0.7)';
  });
  window.addEventListener('mouseup', () => {
    cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  /* ── CARD TOGGLE ── */
  document.querySelectorAll('.card-header').forEach(h => {
    h.addEventListener('click', () => {
      const card   = h.closest('.card');
      const isOpen = card.classList.contains('open');
      document.querySelectorAll('.card.open').forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });

  /* ── SCROLL ANIMATIONS ── */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const i = +e.target.dataset.index;
        setTimeout(() => e.target.classList.add('visible'), (i % 3) * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.card').forEach(c => obs.observe(c));

});

/* ── HELPERS ── */
function show(id, msg, err = false) {
  const el = document.getElementById(id);
  el.textContent = msg;
  el.className = 'result show' + (err ? ' error' : '');
}
function val(id) { return document.getElementById(id).value; }
function num(id) { return parseFloat(val(id)); }

/* ── EXERCÍCIOS ── */
function calc01() {
  const v = num('i01');
  if (isNaN(v) || v < 0) return show('r01', '⚠ Informe um valor válido.', true);
  const d = v * 0.15, f = v - d;
  show('r01', `Desconto: R$ ${d.toFixed(2)}\nValor final: R$ ${f.toFixed(2)}`);
}

function calc02() {
  const a = num('i02a'), b = num('i02b');
  if (isNaN(a) || isNaN(b)) return show('r02', '⚠ Informe dois valores.', true);
  if (b === 0) return show('r02', '⚠ Não é possível dividir por zero.', true);
  show('r02', `Resultado: ${a} ÷ ${b} = ${(a / b).toFixed(4).replace(/\.?0+$/, '')}`);
}

function calc03() {
  const i = num('i03');
  if (isNaN(i) || i < 0 || i > 120) return show('r03', '⚠ Informe uma idade válida.', true);
  const d = Math.round(i * 365.25);
  show('r03', `Você viveu aproximadamente ${d.toLocaleString('pt-BR')} dias! 🎉`);
}

function calc04() {
  const d = num('i04');
  if (isNaN(d) || d < 0) return show('r04', '⚠ Informe um número válido.', true);
  const anos   = Math.floor(d / 365);
  const resto1 = d % 365;
  const meses  = Math.floor(resto1 / 30);
  const dias   = resto1 % 30;
  show('r04', `${Math.floor(d)} dias =\n${anos} ano(s), ${meses} mês(es) e ${dias} dia(s)`);
}

function calc05() {
  const km = num('i05a'), l = num('i05b');
  if (isNaN(km) || isNaN(l) || l <= 0 || km < 0) return show('r05', '⚠ Informe valores válidos.', true);
  show('r05', `Média de consumo: ${(km / l).toFixed(2)} km/L`);
}

function calc06() {
  const t = num('i06a'), d = num('i06b');
  if (isNaN(t) || isNaN(d) || t <= 0) return show('r06', '⚠ Informe valores válidos.', true);
  if (d > t) return show('r06', '⚠ O valor com desconto não pode ser maior que o original.', true);
  const pct = ((t - d) / t) * 100;
  show('r06', `Desconto aplicado: ${pct.toFixed(2)}%\nEconomia: R$ ${(t - d).toFixed(2)}`);
}

function calc07() {
  const l = val('i07').trim().toUpperCase();
  if (!l || !/^[A-ZÀ-Ú]$/.test(l)) return show('r07', '⚠ Informe uma letra válida.', true);
  const v = 'AEIOUÁÉÍÓÚÂÊÎÔÛÃÕ'.includes(l);
  show('r07', `"${l}" é uma ${v ? 'VOGAL 🔵' : 'CONSOANTE 🟠'}`);
}

function calc08() {
  const n = num('i08');
  if (isNaN(n) || n < 1 || n > 7) return show('r08', '⚠ Informe um número entre 1 e 7.', true);
  const dias = ['', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'];
  show('r08', `Número ${Math.round(n)} → ${dias[Math.round(n)]}`);
}

function calc09() {
  const n = num('i09');
  if (isNaN(n) || n < 1 || n > 12) return show('r09', '⚠ Informe um número entre 1 e 12.', true);
  const m = [
    ['Janeiro',31],['Fevereiro',28],['Março',31],['Abril',30],['Maio',31],['Junho',30],
    ['Julho',31],['Agosto',31],['Setembro',30],['Outubro',31],['Novembro',30],['Dezembro',31]
  ];
  const [nome, dias] = m[Math.round(n) - 1];
  show('r09', `Mês ${Math.round(n)}: ${nome}\nDias: ${dias} (em ano não bissexto)`);
}

function calc10() {
  const a = num('i10a'), b = num('i10b');
  if (isNaN(a) || isNaN(b)) return show('r10', '⚠ Informe dois números.', true);
  if (a === b) return show('r10', 'Os dois números são iguais.');
  show('r10', `O maior número é: ${a > b ? a : b}`);
}

function calc11() {
  const n = num('i11');
  if (isNaN(n)) return show('r11', '⚠ Informe um número.', true);
  const par   = n % 2 === 0 ? 'Par' : 'Ímpar';
  const sinal = n > 0 ? 'Positivo' : n < 0 ? 'Negativo' : 'Zero';
  show('r11', `${n} → ${par} e ${sinal}`);
}

function calc12() {
  const a = num('i12a'), b = num('i12b'), c = num('i12c');
  if (isNaN(a) || isNaN(b) || isNaN(c)) return show('r12', '⚠ Informe os três ângulos.', true);
  const soma = a + b + c;
  if (soma === 180)
    show('r12', `✓ Triângulo válido! ${a}° + ${b}° + ${c}° = 180°`);
  else
    show('r12', `✗ Não é um triângulo válido.\nSoma dos ângulos: ${soma}° (deveria ser 180°)`, true);
}

function calc13() {
  const a = num('i13a'), b = num('i13b');
  if (isNaN(a) || isNaN(b) || b === 0) return show('r13', '⚠ Informe valores válidos.', true);
  if (a % b === 0)
    show('r13', `✓ ${a} é múltiplo de ${b}. (${a} ÷ ${b} = ${a / b})`);
  else
    show('r13', `✗ ${a} não é múltiplo de ${b}.`, true);
}

function calc14() {
  const i = num('i14');
  if (isNaN(i) || i < 0) return show('r14', '⚠ Informe uma idade válida.', true);
  let cat;
  if      (i <= 5)  cat = 'Infantil (até 5 anos)';
  else if (i <= 10) cat = 'Mirim (6–10 anos)';
  else if (i <= 15) cat = 'Infantil Junior (11–15 anos)';
  else if (i <= 20) cat = 'Junior (16–20 anos)';
  else if (i <= 25) cat = 'Sênior (21–25 anos)';
  else              cat = 'Master (acima de 25 anos)';
  show('r14', `Categoria: ${cat}`);
}

function calc15() {
  const a = num('i15');
  if (isNaN(a) || a < 0 || a > 360) return show('r15', '⚠ Informe um ângulo entre 0° e 360°.', true);
  let tipo;
  if      (a === 0)   tipo = 'Nulo (0°)';
  else if (a < 90)    tipo = 'Agudo (< 90°)';
  else if (a === 90)  tipo = 'Reto (90°)';
  else if (a < 180)   tipo = 'Obtuso (entre 90° e 180°)';
  else if (a === 180) tipo = 'Raso (180°)';
  else                tipo = 'Reentrante (> 180°)';
  show('r15', `${a}° → ${tipo}`);
}
