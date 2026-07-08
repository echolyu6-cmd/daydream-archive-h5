const shell = document.querySelector("#app-shell");
const screens = [...document.querySelectorAll(".screen")];

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
  target.scrollIntoView({behavior:"smooth", block:"start"});
}

document.addEventListener("click", (event) => {
  const seal = event.target.closest("[data-open-seal]");
  if (seal) {
    const opening = document.querySelector("#screen-opening");
    opening.classList.add("is-opened");
    window.setTimeout(() => showScreen("index"), 520);
    return;
  }

  const go = event.target.closest("[data-go]");
  if (go) {
    showScreen(go.dataset.go);
    return;
  }

  const locked = event.target.closest("[data-locked]");
  if (locked) {
    const note = document.querySelector(".locked-note");
    note.textContent = "这份白日梦还在漂，晚点再来捞。";
    locked.animate([
      { transform: "translateX(0) rotate(0deg)" },
      { transform: "translateX(-4px) rotate(-2deg)" },
      { transform: "translateX(4px) rotate(2deg)" },
      { transform: "translateX(0) rotate(0deg)" }
    ], { duration: 260, easing: "ease-out" });
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
  document.querySelector("#receipt-stamp").textContent = stamp;
  document.querySelector("#receipt-line").textContent = line;
  document.querySelector("#receipt-user-line").textContent = text || "留下一句还没说清楚的话。";
  document.querySelector("#receipt-preview").animate([
    { transform: "translateY(10px) scale(.985)", opacity: .72 },
    { transform: "translateY(0) scale(1)", opacity: 1 }
  ], { duration: 420, easing: "cubic-bezier(.16,.74,.22,1)" });
});

shell?.addEventListener("scroll", () => {
  const current = screens.reduce((nearest, screen) => {
    const distance = Math.abs(screen.getBoundingClientRect().top - shell.getBoundingClientRect().top);
    return distance < nearest.distance ? {screen, distance} : nearest;
  }, {screen:screens[0], distance:Infinity}).screen;
  document.body.dataset.screen = current?.dataset.screen || "opening";
}, {passive:true});
