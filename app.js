const samples = [
  {
    id: "001",
    title: "福里农舍",
    role: "村屋改造与空间机制设计样本",
    tagline: "一间村里的老房子，被重新整理成可以停留、表达和留下痕迹的复合空间。",
    description: "第一展馆｜村屋改造 + 空间机制设计",
    type: "core",
    image: "./assets/fuli-gate.jpg",
    evidence: [
      { title: "旧蕾丝", image: "./assets/fuli-lace.jpg" },
      { title: "白日梦纸", image: "./assets/fuli-daydream-paper.jpg" },
      { title: "三明治", image: "./assets/fuli-sandwich.jpg" }
    ],
    unclear: "福里原本是一间村里的老房子，有乡村日常、旧物和人情味，但一开始并不清楚：它应该只是咖啡馆、亲子空间，还是一个可以让人慢下来、停下来、留下点什么的复合空间。它也需要判断当下用户为什么愿意来乡村空间、为什么愿意拍照分享和再次回来。",
    seen: "我们看见老房子里已经存在的生活痕迹、主理人想保留的人情味，以及市场里对松弛、真实、可参与乡村空间的需求。旧蕾丝、等待时的空隙、孩子画下的纸和客人停留的片刻，都可以成为空间被记住的证据。",
    amplify: "我们的判断是，福里最值得放大的不是新增装饰，也不是单一打卡点，而是“允许人停留、表达、留下痕迹”的空间机制。空间策划与设计要把老房子的生活感整理成消费理由、停留理由和传播理由，而不是包装成另一个标准答案。",
    outcome: "它最后被整理成一个乡村复合小空间：可以喝咖啡、吃东西、停留、画画、看见旧物，也可以把一张白日梦纸留下来。旧蕾丝和孩子的画不是装饰结论，而是这个空间重新被使用之后留下的证据。"
  },
  {
    id: "002",
    title: "铁路公社",
    role: "铁路场地体验转译与空间设计样本",
    tagline: "一组铁路线索，被整理成可以进入、停留、拍照和消费的目的地空间。",
    description: "它不是把铁路符号堆成打卡点，而是把轨道、站台、车厢和路径感转译成一条可被使用的空间体验线。",
    type: "sample",
    image: "",
    visual: "railway",
    unclear: "铁路公社一开始最容易卡在“铁路元素怎么用”这件事上：如果只做怀旧风格或堆放铁路符号，它会变成一个好拍但不一定好停留的主题场景；如果只做漂亮设计，又会失去铁路场地本身的识别度。",
    seen: "我们从场地、主理人想法和市场趋势里看见了几条可以被转译的线索：轨道带来的方向感，站台带来的停留感，车厢窗口带来的观看感，红白色块和信号灯带来的传播记忆点，以及年轻用户对轻打卡、轻游逛、咖啡外摆和户外停留的需求。",
    amplify: "我们的策划与设计判断是，铁路公社不应该只做“铁路主题装饰”，而要把铁路语言变成空间组织方式：用轨道引导路径，用站台组织停留，用车厢和窗口制造拍照记忆点，用咖啡与外摆承接消费，让用户不是只路过拍一张，而是愿意走进去、坐下来、拍下来、再记住这里。",
    outcome: "它最后被整理成一个铁路咖啡目的地空间方案：入口有清晰的铁路识别，路径有轨道和斑马线引导，室内外有站台式停留区和车厢感窗口，红白色彩、信号灯和标识系统共同形成传播记忆点。铁路不只是主题，而成为进入、停留、拍摄和消费的空间线索。"
  },
  {
    id: "003",
    title: "山窑麦叙",
    role: "旧粮仓空间概念与传播设计样本",
    tagline: "一个旧粮仓里的面包项目，从内容堆叠中整理出快乐面包市集的空间主线。",
    description: "山窑不是缺内容，而是需要把旧粮仓、面包、窑火、IP 和乡村场地整理成一条清楚的空间主线。",
    type: "sample",
    image: "",
    unclear: "山窑原本有旧粮仓、面包、窑火、IP、杂货铺和乡村场地，内容很多，但一开始不清楚：它到底是普通面包店、乡村咖啡、亲子打卡点，还是一个有自己气质的复合空间。它也需要判断在面包、乡村和市集类项目里，怎样避免普通化。",
    seen: "我们看见旧粮仓的空间底子、面包的手作感、窑火带来的温度、乡村场地的松弛感，以及市场里对轻松、可拍、可分享、可复访的乡村消费空间需求。面包狗和市集氛围可以作为记忆点，但不能盖过空间主线。",
    amplify: "我们的判断是，山窑最值得放大的不是“漂亮面包店”，而是旧粮仓里的快乐面包市集感。空间策划要先收束主线，再让视觉、IP、动线、陈列和传播都围绕这条主线展开，让内容同时服务体验、传播和后续经营。",
    outcome: "它最后被整理成一个旧粮仓里的快乐面包市集方向：空间气质更清楚，面包、狗、窑火、杂货和乡村场地不再各说各话，而是共同服务一个可体验、可拍摄、可传播的空间记忆。"
  }
];

const problemCards = [
  { text: "我有一个老房子 / 场地 / 小店，但还不清楚它应该被做成什么。", response: "你现在最需要的可能不是马上开始设计，而是先判断这个空间的主线。\n我们可以从场地条件、主理人想法、市场趋势、使用人群、停留方式和未来经营目标开始梳理。" },
  { text: "我的空间有很多元素，但感觉散，缺少一个能被记住的核心。", response: "你可能不需要继续增加内容，而是先判断哪些元素值得被放大，哪些会让空间跑偏。\n我们可以一起整理空间概念、体验线索、动线关系、传播记忆点和市场中的差异化位置。" },
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
      <p>打开档案柜，从第一展馆开始。</p>
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
  const visualClass = sample.visual ? ` is-${sample.visual}` : "";
  const imageMarkup = sample.image
    ? `<img src="${sample.image}" alt="${sample.title}空间素材" />`
    : `<span>${sample.type === "core" ? "第一间白日梦展馆" : "档案位置"}</span>`;
  return `
    <button class="sample-card${coreClass}${pendingClass}${visualClass}" data-sample="${sample.id}">
      <span class="archive-label">DREAM ${sample.id}</span>
      <div class="photo-frame">${imageMarkup}</div>
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

  const visualClass = sample.visual ? ` is-${sample.visual}` : "";
  const heroMarkup = sample.image
    ? `<figure class="detail-hero"><img src="${sample.image}" alt="${sample.title}空间素材" /><figcaption>${sample.description}</figcaption></figure>`
    : `<div class="detail-hero is-placeholder${visualClass}"><span>${sample.description}</span></div>`;
  const evidenceMarkup = sample.evidence?.length
    ? `<div class="evidence-strip">${sample.evidence.map((item) => `
        <figure>
          <img src="${item.image}" alt="${item.title}素材" />
          <figcaption>${item.title}</figcaption>
        </figure>
      `).join("")}</div>`
    : "";

  sampleDetail.innerHTML = `
    <button class="text-action" data-go="archive">返回档案室</button>
    <button class="text-action" data-go="index">返回房间索引</button>
    ${heroMarkup}
    <span class="archive-label">DREAM ${sample.id}</span>
    <h2>${sample.title}</h2>
    <p class="subtitle">${sample.role}</p>
    <p class="detail-lead">${sample.tagline}</p>
    ${renderThemePoint("judgment is-featured", "我们的策划与设计判断是什么？", sample.amplify)}
    ${evidenceMarkup}
    <details class="detail-drawer">
      <summary>展开完整档案判断</summary>
      <div class="theme-structure">
        ${renderThemePoint("space-question", "这个空间一开始卡在哪里？", sample.unclear)}
        ${renderThemePoint("seen", "我们从场地、主理人想法和市场趋势里看见了什么？", sample.seen)}
        ${renderThemePoint("outcome", "它最后被整理成了什么空间方案？", sample.outcome)}
      </div>
    </details>
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

function drawElephantSlideStamp(x, y, scale = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(scale, scale);
  ctx.strokeStyle = "rgba(168, 70, 53, 0.72)";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(8, 52);
  ctx.bezierCurveTo(8, 28, 23, 15, 45, 15);
  ctx.bezierCurveTo(68, 15, 82, 29, 82, 48);
  ctx.bezierCurveTo(96, 47, 104, 38, 101, 27);
  ctx.moveTo(31, 29);
  ctx.bezierCurveTo(27, 36, 26, 44, 27, 55);
  ctx.moveTo(63, 31);
  ctx.bezierCurveTo(67, 39, 68, 48, 66, 58);
  ctx.moveTo(8, 55);
  ctx.bezierCurveTo(35, 61, 76, 61, 108, 55);
  ctx.moveTo(47, 17);
  ctx.bezierCurveTo(48, 9, 55, 7, 61, 13);
  ctx.stroke();
  ctx.restore();
}

function drawCardText(text, number, today) {
  ctx.fillStyle = "#a84635";
  ctx.font = "25px Microsoft YaHei, sans-serif";
  ctx.fillText(number, 155, 208);
  ctx.fillStyle = "#24211d";
  ctx.font = "44px Microsoft YaHei, sans-serif";
  ctx.fillText("白日梦档案", 155, 278);
  ctx.fillStyle = "#837a70";
  ctx.font = "24px Microsoft YaHei, sans-serif";
  ctx.fillText(`日期 ${today}`, 155, 318);

  ctx.fillStyle = "#24211d";
  ctx.font = "34px Microsoft YaHei, sans-serif";
  drawWrappedText(text, 155, 850, 575, 54, 4);

  ctx.fillStyle = "#a84635";
  ctx.font = "23px Microsoft YaHei, sans-serif";
  ctx.fillText("DAYDREAM PROJECT", 155, 1060);
  ctx.fillStyle = "#837a70";
  ctx.font = "20px Microsoft YaHei, sans-serif";
  ctx.fillText("transparent archive sleeve / local only", 155, 1096);
  drawElephantSlideStamp(636, 1014, 0.85);

  ctx.fillStyle = "rgba(255,255,255,0.34)";
  ctx.beginPath();
  ctx.moveTo(104, 78);
  ctx.lineTo(308, 78);
  ctx.lineTo(714, 1190);
  ctx.lineTo(511, 1190);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.22)";
  ctx.beginPath();
  ctx.moveTo(640, 62);
  ctx.lineTo(804, 62);
  ctx.lineTo(340, 1200);
  ctx.lineTo(238, 1200);
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

  ctx.fillStyle = "rgba(36, 33, 29, 0.10)";
  ctx.fillRect(78, 86, 758, 1128);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.fillRect(58, 54, 780, 1148);
  ctx.strokeStyle = "rgba(36, 33, 29, 0.18)";
  ctx.lineWidth = 3;
  ctx.strokeRect(58, 54, 780, 1148);
  ctx.strokeStyle = "rgba(255,255,255,0.76)";
  ctx.lineWidth = 2;
  ctx.strokeRect(84, 86, 728, 1084);

  ctx.fillStyle = "rgba(255, 250, 243, 0.86)";
  ctx.fillRect(125, 150, 650, 960);
  ctx.strokeStyle = "rgba(36, 33, 29, 0.14)";
  ctx.strokeRect(125, 150, 650, 960);
  ctx.fillStyle = "rgba(235, 225, 213, 0.44)";
  ctx.fillRect(125, 150, 650, 72);

  ctx.fillStyle = "rgba(36,33,29,0.12)";
  [158, 222, 286].forEach((dotY) => {
    ctx.beginPath();
    ctx.arc(94, dotY, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,255,255,0.64)";
    ctx.stroke();
  });
  ctx.strokeStyle = "rgba(36,33,29,0.07)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(104, 402);
  ctx.bezierCurveTo(180, 386, 263, 430, 344, 408);
  ctx.bezierCurveTo(470, 374, 590, 438, 776, 398);
  ctx.moveTo(98, 706);
  ctx.bezierCurveTo(238, 680, 432, 732, 792, 690);
  ctx.moveTo(122, 1010);
  ctx.bezierCurveTo(312, 990, 484, 1032, 764, 1012);
  ctx.stroke();

  const imageX = 155;
  const imageY = 358;
  const imageW = 590;
  const imageH = 410;
  ctx.fillStyle = "#ebe1d5";
  ctx.fillRect(imageX, imageY, imageW, imageH);
  ctx.strokeStyle = "rgba(36,33,29,0.16)";
  ctx.strokeRect(imageX, imageY, imageW, imageH);
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
      drawCardText(text, number, today);
    };
    image.src = state.currentPhoto;
  } else {
    ctx.fillStyle = "#837a70";
    ctx.font = "28px Microsoft YaHei, sans-serif";
    ctx.fillText("照片位置", 390, 575);
    drawCardText(text, number, today);
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
  if (goTarget?.hasAttribute("data-open-archive")) {
    const gateScreen = document.querySelector("#screen-gate");
    gateScreen.classList.add("is-opening");
    setTimeout(() => {
      gateScreen.classList.remove("is-opening");
      showScreen(goTarget.dataset.go);
    }, 360);
    return;
  }
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
