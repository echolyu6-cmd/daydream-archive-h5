const screens = [...document.querySelectorAll(".screen")];

const previewItems = {
  fuli: {
    label: "DREAM 001｜已归档",
    title: "福里农舍",
    desc: "一间还在发生的乡村小空间。",
    tags: ["蓝门", "蕾丝", "白日梦纸"],
    stamp: "FILED",
    image: "./assets/placeholder-house.svg",
    action: "打开福里档案",
    target: "overview",
    state: "filed"
  },
  shanyao: {
    label: "DREAM 002｜等待收录",
    title: "山窑麦叙",
    desc: "这份空间档案还在等待收录。",
    tags: ["旧粮仓", "面包", "市集"],
    stamp: "SEALED",
    image: "./assets/placeholder-stay.svg",
    action: "还没归档",
    target: "",
    state: "waiting"
  },
  railway: {
    label: "DREAM 003｜等待收录",
    title: "铁路公社",
    desc: "这份空间档案还在等待收录。",
    tags: ["轨道", "站台", "目的地"],
    stamp: "SEALED",
    image: "./assets/placeholder-lace.svg",
    action: "还没归档",
    target: "",
    state: "waiting"
  },
  receipt: {
    label: "RECEIPT｜可生成",
    title: "塑封我的白日梦",
    desc: "放进一张照片，生成一张白日梦回执。",
    tags: ["照片", "一句话", "档案章"],
    stamp: "RECEIPT",
    image: "./assets/placeholder-dream.svg",
    action: "开始塑封",
    target: "seal",
    state: "receipt"
  },
  dropbox: {
    label: "DROP BOX｜可投递",
    title: "投递空间问题",
    desc: "先发 3 张现场照片和一个问题。",
    tags: ["空间问题", "三张照片", "第一眼"],
    stamp: "DROP",
    image: "./assets/placeholder-reply.svg",
    action: "投递空间问题",
    target: "contact",
    state: "dropbox"
  }
};

const receiptTypes = [
  ["已收录：未完成的角落", "这不是没用的地方，只是还没被安排一个理由。"],
  ["已收录：正在发芽的房间", "它还很小，但已经有了要长出来的方向。"],
  ["已收录：舍不得丢掉的东西", "有些旧物不是负担，是空间还没说完的话。"],
  ["已收录：一扇还没打开的门", "你不一定要立刻完成它，可以先让它被看见。"],
  ["已收录：漂浮中的白日梦", "它还没有落地，但已经开始寻找位置。"]
];

const answers = [
  "你的空间可能不是缺内容，而是缺一个能把内容串起来的主线。\n先发 3 张照片，我们看第一眼。",
  "你的空间可能不是缺内容，而是缺一个能把内容串起来的主线。\n先发 3 张照片，我们看第一眼。",
  "你的空间可能不是缺内容，而是缺一个能把内容串起来的主线。\n先发 3 张照片，我们看第一眼。"
];

function showScreen(name){
  const target = screens.find(screen => screen.dataset.screen === name);
  if (!target) return;
  screens.forEach(screen => screen.classList.toggle("is-active", screen === target));
  document.body.dataset.screen = name;
}

function setPreview(key){
  const item = previewItems[key] || previewItems.fuli;
  const dashboard = document.querySelector("#book-dashboard");
  const label = document.querySelector("#preview-label");
  const title = document.querySelector("#preview-title");
  const desc = document.querySelector("#preview-desc");
  const image = document.querySelector("#preview-image");
  const tags = document.querySelector("#preview-tags");
  const stamp = document.querySelector("#preview-stamp");
  const action = document.querySelector("#preview-action");
  if (!dashboard || !label || !title || !desc || !image || !tags || !stamp || !action) return;

  dashboard.dataset.current = item.state;
  label.textContent = item.label;
  title.textContent = item.title;
  desc.textContent = item.desc;
  image.src = item.image;
  tags.innerHTML = item.tags.map(tag => `<span>${tag}</span>`).join("");
  stamp.textContent = item.stamp;
  action.textContent = item.action;
  action.dataset.previewAction = item.target;
  action.disabled = !item.target;

  document.querySelectorAll("[data-index-entry]").forEach(button => {
    button.classList.toggle("is-selected", button.dataset.indexEntry === key);
  });

  dashboard.classList.remove("is-selecting");
  void dashboard.offsetWidth;
  dashboard.classList.add("is-selecting");
  window.setTimeout(() => dashboard.classList.remove("is-selecting"), 520);
}

document.addEventListener("click", (event) => {
  const seal = event.target.closest("[data-open-seal]");
  if (seal) {
    const opening = document.querySelector("#screen-opening");
    opening.classList.add("is-opened");
    window.setTimeout(() => showScreen("index"), 520);
    return;
  }

  const indexEntry = event.target.closest("[data-index-entry]");
  if (indexEntry) {
    setPreview(indexEntry.dataset.indexEntry);
    return;
  }

  const previewAction = event.target.closest("[data-preview-action]");
  if (previewAction) {
    const target = previewAction.dataset.previewAction;
    if (target) showScreen(target);
    return;
  }

  const go = event.target.closest("[data-go]");
  if (go) {
    showScreen(go.dataset.go);
    return;
  }

  const q = event.target.closest("[data-question]");
  if (q) {
    const card = document.querySelector("#answer-card");
    card.hidden = false;
    card.textContent = answers[Number(q.dataset.question)] || answers[0];
  }
});

const photoInput = document.querySelector("#photo-input");
const receiptPhoto = document.querySelector("#receipt-photo");
photoInput?.addEventListener("change", () => {
  const file = photoInput.files?.[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    receiptPhoto.innerHTML = `<img src="${reader.result}" alt="你的白日梦照片" />`;
  };
  reader.readAsDataURL(file);
});

document.querySelector("#generate-receipt")?.addEventListener("click", () => {
  const text = document.querySelector("#dream-text")?.value.trim();
  const [stamp, line] = receiptTypes[Math.floor(Math.random() * receiptTypes.length)];
  const now = new Date();
  const day = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}`;
  const code = String(Math.floor(Math.random() * 10000)).padStart(4,"0");
  document.querySelector("#receipt-number").textContent = `白日梦回执 DAYDREAM-${day}-${code}`;
  document.querySelector("#receipt-stamp").textContent = stamp;
  document.querySelector("#receipt-line").textContent = line;
  document.querySelector("#receipt-user-line").textContent = text || "留下一句还没说清楚的话。";
  document.querySelector("#receipt-preview").animate([
    { transform: "translateY(10px) scale(.985)", opacity: .72 },
    { transform: "translateY(0) scale(1)", opacity: 1 }
  ], { duration: 420, easing: "cubic-bezier(.16,.74,.22,1)" });
});



