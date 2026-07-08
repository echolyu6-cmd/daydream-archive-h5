const samples = [
  {
    id: "001",
    title: "福里农舍",
    role: "村屋改造与空间机制设计样本",
    tagline: "一间村里的老房子，被重新整理成可以停留、表达和留下痕迹的复合空间。",
    description: "白日梦计划从这间老房子的空间改造里长出来。",
    type: "core",
    unclear: "福里原本是一间村里的老房子，有乡村日常、旧物和人情味，但一开始并不清楚：它应该只是咖啡馆、亲子空间，还是一个可以让人慢下来、停下来、留下点什么的复合空间。",
    seen: "我们看见老房子里已经存在的生活痕迹：院子、旧蕾丝、等待时的空隙、孩子画下的纸、客人停留的片刻，以及乡村空间里天然松弛的人情关系。",
    amplify: "我们的判断是，福里最值得放大的不是新增装饰，也不是单一打卡点，而是“允许人停留、表达、留下痕迹”的空间机制。空间策划与设计要做的不是把老房子包装成另一个标准答案，而是把原本的生活感整理成可以被体验、被记住、被持续使用的场景。",
    outcome: "它最后被整理成一个乡村复合小空间：可以喝咖啡、吃东西、停留、画画、看见旧物，也可以把一张白日梦纸留下来。旧蕾丝和孩子的画不是装饰结论，而是这个空间重新被使用之后留下的证据。"
  },
  {
    id: "002",
    title: "铁路公社",
    role: "旧场地更新与空间设计转译样本",
    tagline: "一个带有铁路记忆的旧场地，从怀旧风格里重新长出可以停留、传播和再来的空间。",
    description: "它不是普通旧改，而是让一个被闲置 / 被忽略的空间重新被打开。",
    type: "sample",
    unclear: "铁路公社原本有铁路和旧场地线索，但一开始的问题不是“没有元素”，而是这些线索还不知道该怎么被使用。它很容易被做成只有怀旧风格的旧改空间，或者只是一个漂亮但不知道怎么停留的设计场景。",
    seen: "我们看见铁路元素、地方记忆、公共感、社区感，以及一种可以停留、闲逛、聚集的空间可能。它真正有价值的，不只是旧符号本身，而是这些旧线索还能继续长出新的使用方式。",
    amplify: "我们的判断是，铁路公社不应该只做怀旧风格，也不应该只做漂亮设计。它需要先梳理空间主线，判断哪些旧元素值得保留，再把铁路和旧场地线索转译成用户可以进入、停留、拍照、记住的体验叙事。",
    outcome: "它最后被整理成一个旧场地更新方向：从怀旧风格出发，但不止于怀旧；从铁路记忆出发，但不止于铁路符号。空间最终要成为一个可停留、可传播、可再来的复合场所，让被忽略的旧空间重新被打开。"
  },
  {
    id: "003",
    title: "山窑麦叙",
    role: "旧粮仓空间概念与传播设计样本",
    tagline: "一个旧粮仓里的面包项目，从内容堆叠中整理出快乐面包市集的空间主线。",
    description: "山窑不是缺内容，而是需要把旧粮仓、面包、窑火、IP 和乡村场地整理成一条清楚的空间主线。",
    type: "sample",
    unclear: "山窑原本有旧粮仓、面包、窑火、IP、杂货铺和乡村场地，内容很多，但一开始不清楚：它到底是普通面包店、乡村咖啡、亲子打卡点，还是一个有自己气质的复合空间。",
    seen: "我们看见旧粮仓的空间底子、面包的手作感、窑火带来的温度、乡村场地的松弛感，以及可以被转译成记忆点的面包狗和市集氛围。",
    amplify: "我们的判断是，山窑最值得放大的不是“漂亮面包店”，而是旧粮仓里的快乐面包市集感。空间策划要先收束主线，再让视觉、IP、动线、陈列和传播都围绕这条主线展开。",
    outcome: "它最后被整理成一个旧粮仓里的快乐面包市集方向：空间气质更清楚，面包、狗、窑火、杂货和乡村场地不再各说各话，而是共同服务一个可体验、可拍摄、可传播的空间记忆。"
  }
];

const problemCards = [
  { text: "我有一个老房子 / 场地 / 小店，但还不清楚它应该被做成什么。", response: "你现在最需要的可能不是马上开始设计，而是先判断这个空间的主线。\n我们可以从场地条件、主理人想法、使用人群、停留方式和未来经营目标开始梳理。" },
  { text: "我的空间有很多元素，但感觉散，缺少一个能被记住的核心。", response: "你可能不需要继续增加内容，而是先判断哪些元素值得被放大，哪些会让空间跑偏。\n我们可以一起整理空间概念、体验线索、动线关系和传播记忆点。" },
  { text: "我已经准备做设计了，但担心做完只是好看，不知道用户为什么停留。", response: "空间设计不只解决好看，也要解决人怎么进入、怎么停留、怎么拍照、怎么消费、怎么记住。\n我们可以从前期策划到设计方向，一起搭好这条线。" }
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
      <p>柜门还合着。打开它，翻看几个真实空间从模糊到清晰的过程。</p>
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
      ${renderThemePoint("space-question", "这个空间一开始卡在哪里？", sample.unclear)}
      ${renderThemePoint("seen", "我们从场地和主理人想法里看见了什么？", sample.seen)}
      ${renderThemePoint("judgment", "我们的策划与设计判断是什么？", sample.amplify)}
      ${renderThemePoint("outcome", "它最后被整理成了什么空间方案？", sample.outcome)}
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
