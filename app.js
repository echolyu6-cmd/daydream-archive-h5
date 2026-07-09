const screens = [...document.querySelectorAll('.screen')];
let hasClueImage = false;

function showScreen(name){
  const target = screens.find(screen => screen.dataset.screen === name);
  if (!target) return;
  screens.forEach(screen => screen.classList.toggle('is-active', screen === target));
  document.body.dataset.screen = name;
}

function makeReceiptCode(){
  const now = new Date();
  const day = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const code = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `DD-${day}-${code}`;
}

document.addEventListener('click', (event) => {
  const open = event.target.closest('[data-open-book]');
  if (open) {
    document.querySelector('#screen-cover')?.classList.add('is-opened');
    window.setTimeout(() => showScreen('cards'), 420);
    return;
  }

  const go = event.target.closest('[data-go]');
  if (go) {
    showScreen(go.dataset.go);
  }
});

const clueInput = document.querySelector('#clue-1');
const cluePreview = document.querySelector('#preview-1');
clueInput?.addEventListener('change', () => {
  const file = clueInput.files?.[0];
  if (!file || !cluePreview) return;
  const reader = new FileReader();
  reader.onload = () => {
    cluePreview.src = reader.result;
    cluePreview.hidden = false;
    clueInput.closest('.clue-upload')?.classList.add('has-image');
    hasClueImage = true;
    document.querySelector('#bag-hint').hidden = true;
  };
  reader.readAsDataURL(file);
});

document.querySelector('#bag-text')?.addEventListener('input', () => {
  document.querySelector('#bag-hint').hidden = true;
});

document.querySelector('#send-bag')?.addEventListener('click', () => {
  const workbench = document.querySelector('#bag-workbench');
  const result = document.querySelector('#receipt-result');
  const text = document.querySelector('#bag-text')?.value.trim() || '';
  const hint = document.querySelector('#bag-hint');

  if (!hasClueImage && !text) {
    hint.hidden = false;
    return;
  }

  document.querySelector('#receipt-code').textContent = makeReceiptCode();
  document.querySelector('#receipt-extra').textContent = '';
  workbench.classList.add('is-sent');
  window.setTimeout(() => {
    workbench.hidden = true;
    result.hidden = false;
    result.classList.add('is-visible');
  }, 380);
});

document.querySelector('#talk-more')?.addEventListener('click', () => {
  const slip = document.querySelector('#contact-slip');
  if (slip) slip.hidden = false;
});
