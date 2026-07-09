const screens = [...document.querySelectorAll('.screen')];
const clueState = { 1: false, 2: false, 3: false };

function showScreen(name){
  const target = screens.find(screen => screen.dataset.screen === name);
  if (!target) return;
  screens.forEach(screen => screen.classList.toggle('is-active', screen === target));
  document.body.dataset.screen = name;
  closeContact();
}

function makeReceiptCode(){
  const now = new Date();
  const day = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const code = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `DD-${day}-${code}`;
}

function clueCount(){
  return Object.values(clueState).filter(Boolean).length;
}

function openContact(){
  const overlay = document.querySelector('#contact-overlay');
  if (!overlay) return;
  overlay.hidden = false;
}

function closeContact(){
  const overlay = document.querySelector('#contact-overlay');
  if (!overlay) return;
  overlay.hidden = true;
}

document.addEventListener('click', (event) => {
  const contactOpen = event.target.closest('[data-open-contact]');
  if (contactOpen) {
    openContact();
    return;
  }

  const contactClose = event.target.closest('[data-close-contact]');
  if (contactClose) {
    closeContact();
    return;
  }

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

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeContact();
});

[1, 2, 3].forEach((id) => {
  const input = document.querySelector(`#clue-${id}`);
  const preview = document.querySelector(`#preview-${id}`);
  input?.addEventListener('change', () => {
    const file = input.files?.[0];
    if (!file || !preview) return;
    const reader = new FileReader();
    reader.onload = () => {
      preview.src = reader.result;
      preview.hidden = false;
      input.closest('.clue-upload')?.classList.add('has-image');
      clueState[id] = true;
      document.querySelector('#bag-hint').hidden = true;
    };
    reader.readAsDataURL(file);
  });
});

document.querySelector('#bag-text')?.addEventListener('input', () => {
  document.querySelector('#bag-hint').hidden = true;
});

document.querySelector('#send-bag')?.addEventListener('click', () => {
  const workbench = document.querySelector('#bag-workbench');
  const result = document.querySelector('#receipt-result');
  const text = document.querySelector('#bag-text')?.value.trim() || '';
  const hint = document.querySelector('#bag-hint');
  const count = clueCount();

  if (!count && !text) {
    hint.hidden = false;
    return;
  }

  const lines = [];
  if (count) lines.push(`已放入 ${count} 条线索。`);
  if (text) lines.push(`你留下的话：\n「${text}」`);
  else lines.push('有些话还没写下。\n也没关系。');
  if (count < 3) lines.push('还可以慢慢补充。');

  document.querySelector('#receipt-code').textContent = makeReceiptCode();
  document.querySelector('#receipt-extra').textContent = lines.join('\n');
  workbench.classList.add('is-sent');
  window.setTimeout(() => {
    workbench.hidden = true;
    result.hidden = false;
    result.classList.add('is-visible', 'is-scrollable');
    document.querySelector('#screen-bag')?.classList.add('has-receipt');
  }, 380);
});

const deliveryText = `你好，我想聊聊这个空间梦。
我可以补充：
1）几张空间照片
2）一句卡住的话`;

document.querySelectorAll('[data-copy-note]').forEach((button) => {
  button.addEventListener('click', async () => {
    const scope = button.closest('.contact-slip, .contact-paper');
    const status = scope?.querySelector('.copy-status');
    const fallback = scope?.querySelector('.copy-fallback');
    if (!status || !fallback) return;

    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(deliveryText);
      status.textContent = '已复制。';
      status.hidden = false;
      fallback.hidden = true;
    } catch (error) {
      status.textContent = '可以长按复制下面这段话。';
      status.hidden = false;
      fallback.hidden = false;
      fallback.value = deliveryText;
      fallback.focus();
      fallback.select();
    }
  });
});
