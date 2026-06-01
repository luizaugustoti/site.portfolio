const titles = {
  dashboard: 'Dashboard',
  agenda: 'Agenda',
  pacientes: 'Pacientes',
  prontuarios: 'Prontuários',
  internacoes: 'Internações',
  exames: 'Exames & Laboratório',
  prescricoes: 'Prescrições',
  estoque: 'Controle de Estoque',
  financeiro: 'Financeiro',
  equipe: 'Equipe Médica',
  relatorios: 'Relatórios',
  config: 'Configurações'
};

function showModule(id, el) {
  document.querySelectorAll('.module').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('mod-' + id).classList.add('active');
  el.classList.add('active');
  document.getElementById('module-title').textContent = titles[id];
}

function buildCalendar() {
  const container = document.getElementById('calendar-days');
  if (!container) return;

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const today = 9;
  const busy = [5, 9, 12, 14, 19, 22, 26];

  days.forEach(d => {
    const div = document.createElement('div');
    const isBusy = busy.includes(d);
    const isToday = d === today;
    div.style.cssText = `padding:6px 2px;border-radius:6px;font-size:12px;cursor:pointer;transition:background 0.1s;${
      isToday
        ? 'background:#0F6E56;color:white;font-weight:600'
        : isBusy
        ? 'background:#E1F5EE;color:#0F6E56;font-weight:500'
        : 'color:#1a1a1a'
    }`;
    div.textContent = d;
    div.onmouseover = () => { if (!isToday) div.style.background = '#f3f4f6'; };
    div.onmouseout  = () => { if (!isToday) div.style.background = isBusy ? '#E1F5EE' : 'transparent'; };
    container.appendChild(div);
  });
}

function setDate() {
  const d = new Date();
  document.getElementById('top-date').textContent = d.toLocaleDateString('pt-BR', {
    weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setDate();
  buildCalendar();
});
