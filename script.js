const notes = {
  noise: "混乱不是敌人，它只是还没有被命名的现实。第一步是承认它足够复杂。",
  choice: "每个选择都在交换东西。看见显性收益，也看见隐性成本和机会成本。",
  time: "把时间尺度拉长，很多选择会自动重新排序。短期更亮的，不一定长期更值钱。",
  compound: "人生复利来自能持续积累的变量：能力、作品、关系、认知、信誉和身体。",
  clear: "清晰不是没有不确定性，而是知道自己为什么走这条路，并愿意持续校准。"
};

const note = document.querySelector("[data-map-note]");
const pins = [...document.querySelectorAll(".map-pin")];

pins.forEach((pin) => {
  pin.addEventListener("click", () => {
    pins.forEach((item) => item.classList.remove("is-active"));
    pin.classList.add("is-active");
    note.textContent = notes[pin.dataset.step];
  });
});
