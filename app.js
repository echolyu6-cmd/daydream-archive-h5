const samples = [
  {
    id: "001",
    title: "福里农舍",
    role: "第一间白日梦展馆",
    tagline: "旧蕾丝被挂起来，新的白日梦被画下来。",
    description: "白日梦计划从这里开始。",
    type: "core",
    unclear: "福里有乡村小空间、旧物和人情味，但一开始说不清楚为什么值得停下来。",
    seen: "我们看见旧蕾丝、孩子画的纸、等待时留下的小痕迹。",
    amplify: "我们判断这些真实痕迹比新增装饰更重要，应该被看见。",
    outcome: "它最后显影成第一间白日梦展馆，旧蕾丝被挂起来，新的白日梦被画下来。"
  },
  {
    id: "002",
    title: "铁路公社",
    role: "空间设计落地样本",
    tagline: "一个旧空间如何被重新组织、重新打开、重新被使用。",
    description: "旧空间重新被组织和使用的样本。",
    type: "sample",
    unclear: "铁路公社是一个旧空间，但一开始说不清楚它应该被怎样重新使用。",
    seen: "我们看见旧空间里的公共感、停留可能和重新组织的机会。",
    amplify: "我们判断需要放大的不是单个装饰，而是空间被重新打开、重新使用的方式。",
    outcome: "它最后会显影成一个旧空间重新被组织和使用的样本。"
  },
  {
    id: "003",
    title: "山窑麦叙",
    role: "空间概念与传播表达样本",
    tagline: "一个旧粮仓，如何从普通面包店，显影成快乐面包市集。",
    description: "山窑原本有旧粮仓、面包、窑火、IP、杂货铺和乡村场地。真正的问题不是没有内容，而是内容太多，主线不清。",
    type: "sample",
    unclear: "山窑有旧粮仓、面包、窑火、IP、杂货铺和乡村场地，但一开始内容太多，主线不清。",
    seen: "我们看见旧粮仓的底子、面包的手作感、窑火和轻松市集感可以连在一起。",
    amplify: "我们判断要放大旧粮仓里的快乐面包市集感，而不是只做漂亮面包店。",
    outcome: "它最后显影成旧粮仓里的快乐面包市集，面包狗只作为容易被记住的彩蛋。"
  }
];

const problemCards = [
  { text: "我的空间有很多东西，但主线还不清楚。", response: "这通常不是内容太少，而是还没有被整理成一条线。\n可以先像福里一样，把已有痕迹和情绪整理出来。" },
  { text: "我的空间不缺好看，但缺少被记住的理由。", response: "好看已经存在，但人为什么停下、为什么记住，还需要被说清。\n可以像铁路公社一样，重新组织空间和使用方式。" },
  { text: "我的空间已经有人喜欢，但还没被好好表达。", response: "这说明空间已经有吸引力，只是故事和气质还没有被准确表达。\n可以像山窑一样，说清空间气质、故事和传播表达。" }
];

const state = { currentPhoto: "", currentText: "", currentNumber: "", sealTimer: null };
const screens = [...document.querySelectorAll(".screen")];
const sampleList = document.querySelector("#sample-list");
const sampleDetail = document.querySelector("#sample-detail");
const photoInput = document.querySelector("#photo-input");
const photoPreview = document.querySelector("#photo-preview");
const dreamText = document.querySelector("#dream-text");
const resultPanel = document.querySelector("#result-panel");
const sealStatus = document.querySelector("#seal-status");
const sealSteps = [...document.querySelectorAll(".seal-steps li")];
const canvas = document.querySelector("#card-canvas");
const ctx = canvas.getContext("2d");

function showScreen(name) {
  screens.forEach((screen) => screen.classList.toggle("is-active", screen.dataset.screen === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderSamples() {
  const core = samples.find((sample) => sample.type === "core");
  const secondary = samples.filter((sample) => sample.type !== "core");
  sampleList.innerHTML = `
    <div class="cabinet-gate" id="cabinet-gate">
      <span class="archive-label">ARCHIVE CABINET</span>
      <p>柜门还合着。先打开，再抽出档案。</p>
      <button class="primary-action" id="open-cabinet">打开档案柜</button>
    </div>
    <div id="cabinet-content" class="cabinet-content" hidden>
      ${renderSampleCard(core)}
      <div class="side-samples">${secondary.map(renderSampleCard).join("")}</div>
    </div>
  `;
}

function renderSampleCard(sample) {
  const coreClass = sample.type === "core" ? " is-core" : "";
  const pendingClass = sample.type === "pending" ? " is-pending" : "";
  return `
    <button class="sample-card${coreClass}${pendingClass}" data-sample="${sample.id}">
      <span class="archive-label">DREAM ${sample.id}</span>
      <div class="photo-frame"><span>${sample.type === "core" ? "第一间白日梦展馆" : "档案位置"}</span></div>
      <h3>${sample.title}</h3>
      <strong class="sample-role">${sample.role}</strong>
      <p>${sample.tagline}</p>
      <small>${sample.description}</small>
    </button>
  `;
}

function renderDetail(sampleId) {
  const sample = samples.find((item) => item.id === sampleId) || samples[0];
  if (sample.type === "pending") {
    sampleDetail.innerHTML = `
      <button class="text-action" data-go="archive">返回档案室</button>
      <button class="text-action" data-go="index">返回房间索引</button>
      <span class="archive-label">DREAM ${sample.id} / 未完成档案</span>
      <h2>${sample.title}</h2>
      <p class="subtitle">${sample.tagline}</p>
      <div class="pending-card">内容占位中。</div>
    `;
    showScreen("detail");
    return;
  }

  sampleDetail.innerHTML = `
    <button class="text-action" data-go="archive">返回档案室</button>
    <button class="text-action" data-go="index">返回房间索引</button>
    <span class="archive-label">DREAM ${sample.id}</span>
    <h2>${sample.title}</h2>
    <p class="subtitle">${sample.role}</p>
    <p class="quiet-copy">${sample.tagline}</p>
    <div class="theme-structure">
      ${renderThemePoint("space-question", "这个空间一开始说不清楚什么？", sample.unclear)}
      ${renderThemePoint("seen", "我们看见了什么？", sample.seen)}
      ${renderThemePoint("judgment", "我们判断什么值得被放大？", sample.amplify)}
      ${renderThemePoint("outcome", "它最后显影成了什么？", sample.outcome)}
    </div>
  `;
  showScreen("detail");
}

function renderThemePoint(type, title, text) {
  return `
    <section class="theme-point ${type}">
      <h3>${title}</h3>
      <p>${text}</p>
    </section>
  `;
}

function makeDaydreamNumber() {
  const now = new Date();
  const date = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  return `DAYDREAM-${date}-${String(Math.floor(Math.random() * 10000)).padStart(4, "0")}`;
}

function setSealStep(step, label) {
  sealSteps.forEach((item) => item.classList.toggle("is-active", item.dataset.step === step));
  sealStatus.textContent = label;
}

function startSealFlow() {
  resultPanel.hidden = true;
  state.currentText = dreamText.value.trim();
  if (!state.currentText) {
    setSealStep("text", "先留下一句还没说清楚的话。");
    return;
  }
  if (!state.currentNumber) {
    state.currentNumber = makeDaydreamNumber();
  }
  clearTimeout(state.sealTimer);
  setSealStep("start", "正在把照片和这句话放入透明档案袋。");
  state.sealTimer = setTimeout(() => {
    setSealStep("stamp", "盖章中。编号已经生成。");
    state.sealTimer = setTimeout(() => {
      setSealStep("done", "塑封完成。可以保存这张档案。");
      drawCard();
      resultPanel.hidden = false;
      resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 800);
  }, 900);
}

function drawWrappedText(text, x, y, maxWidth, lineHeight, maxLines = 4) {
  let line = "";
  const lines = [];
  [...text].forEach((char) => {
    const test = line + char;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((lineText, index) => ctx.fillText(lineText, x, y + index * lineHeight));
}

function drawCardText(text) {
  ctx.fillStyle = "rgba(255,255,255,0.36)";
  ctx.fillRect(105, 105, 700, 1060);
  ctx.fillStyle = "#24211d";
  ctx.font = "36px Microsoft YaHei, sans-serif";
  drawWrappedText(text, 120, 930, 650, 58, 4);
  ctx.fillStyle = "#a84635";
  ctx.font = "24px Microsoft YaHei, sans-serif";
  ctx.fillText("DAYDREAM PROJECT", 120, 1115);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.beginPath();
  ctx.moveTo(140, 70);
  ctx.lineTo(830, 70);
  ctx.lineTo(520, 1190);
  ctx.lineTo(250, 1190);
  ctx.closePath();
  ctx.fill();
}

function drawCard() {
  const number = state.currentNumber || makeDaydreamNumber();
  state.currentNumber = number;
  const today = new Date().toLocaleDateString("zh-CN");
  const text = state.currentText || "一句还没说清楚的白日梦。";
  ctx.fillStyle = "#f3eee7";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fffaf3";
  ctx.fillRect(70, 70, 760, 1120);
  ctx.strokeStyle = "rgba(36, 33, 29, 0.18)";
  ctx.lineWidth = 3;
  ctx.strokeRect(70, 70, 760, 1120);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.78)";
  ctx.strokeRect(95, 95, 710, 1070);
  ctx.fillStyle = "#a84635";
  ctx.font = "28px Microsoft YaHei, sans-serif";
  ctx.fillText(number, 120, 150);
  ctx.fillStyle = "#24211d";
  ctx.font = "46px Microsoft YaHei, sans-serif";
  ctx.fillText("白日梦档案卡", 120, 235);
  ctx.fillStyle = "#837a70";
  ctx.font = "26px Microsoft YaHei, sans-serif";
  ctx.fillText(`日期 ${today}`, 120, 290);
  const imageX = 120;
  const imageY = 340;
  const imageW = 660;
  const imageH = 500;
  ctx.fillStyle = "#ebe1d5";
  ctx.fillRect(imageX, imageY, imageW, imageH);
  if (state.currentPhoto) {
    const image = new Image();
    image.onload = () => {
      const ratio = Math.max(imageW / image.width, imageH / image.height);
      const width = image.width * ratio;
      const height = image.height * ratio;
      ctx.save();
      ctx.beginPath();
      ctx.rect(imageX, imageY, imageW, imageH);
      ctx.clip();
      ctx.drawImage(image, imageX + (imageW - width) / 2, imageY + (imageH - height) / 2, width, height);
      ctx.restore();
      drawCardText(text);
    };
    image.src = state.currentPhoto;
  } else {
    ctx.fillStyle = "#837a70";
    ctx.font = "28px Microsoft YaHei, sans-serif";
    ctx.fillText("照片位置", 390, 600);
    drawCardText(text);
  }
}

function renderProblemCards() {
  const grid = document.querySelector("#problem-grid");
  if (!grid) return;
  grid.innerHTML = problemCards.map((card, index) => `
    <button class="problem-card" data-problem="${index}">
      <span>问题卡 ${index + 1}</span>
      ${card.text}
    </button>
  `).join("");
}

function chooseProblem(index) {
  const card = problemCards[Number(index)];
  if (!card) return;
  const response = document.querySelector("#problem-response");
  const contact = document.querySelector("#tail-contact");
  response.hidden = false;
  response.textContent = card.response;
  contact.hidden = false;
}

document.addEventListener("click", (event) => {
  const goTarget = event.target.closest("[data-go]");
  if (goTarget) return showScreen(goTarget.dataset.go);
  const sampleTarget = event.target.closest("[data-sample]");
  if (sampleTarget) return renderDetail(sampleTarget.dataset.sample);
  const problemTarget = event.target.closest("[data-problem]");
  if (problemTarget) return chooseProblem(problemTarget.dataset.problem);
  if (event.target.id === "open-cabinet") {
    document.querySelector("#cabinet-gate").hidden = true;
    document.querySelector("#cabinet-content").hidden = false;
  }
});

photoInput.addEventListener("change", () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    state.currentPhoto = reader.result;
    photoPreview.innerHTML = `<img src="${state.currentPhoto}" alt="用户选择的照片预览" />`;
    setSealStep("photo", "照片已经选好，像一张待封存的证物。接着写下一句话。");
  };
  reader.readAsDataURL(file);
});

dreamText.addEventListener("input", () => {
  if (dreamText.value.trim()) setSealStep("text", "这一句已经写下。可以放入透明档案袋。");
});

document.querySelector("#generate-card").addEventListener("click", startSealFlow);

document.querySelector("#download-card").addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${state.currentNumber || "daydream-card"}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
});

document.querySelector("#show-contact-placeholder").addEventListener("click", () => {
  const contactPlaceholder = document.querySelector("#contact-placeholder");
  const status = document.querySelector("#contact-status");
  contactPlaceholder.hidden = false;
  status.textContent = "联系方式占位已展开。";
});

renderSamples();
renderProblemCards();
