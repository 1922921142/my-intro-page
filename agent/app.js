"use strict";

const demoStages = [
  {
    title: "模拟输入已就绪",
    button: "开始分析",
    html: `
      <div class="demo-grid">
        <article class="demo-card"><h3>参考文案</h3><div class="demo-kv"><span>数量</span><b>10篇有效文案</b></div><div class="demo-kv"><span>字段</span><b>标题 / 正文 / 唯一链接</b></div><div class="demo-kv"><span>状态</span><b>已读取、已去重</b></div></article>
        <article class="demo-card"><h3>产品原始资料</h3><div class="demo-kv"><span>产品名称</span><b>搬家打包袋</b></div><div class="demo-kv"><span>产品品类</span><b>搬家收纳用品</b></div><div class="demo-kv"><span>已确认材质</span><b>PE材质</b></div></article>
      </div>
      <article class="demo-card"><h3>启动门判断</h3><p>10篇有效参考文案 ✓　产品可识别 ✓　正式分析允许启动。价格、规格等未提供事实会被标记，但不会阻断分析。</p></article>`
  },
  {
    title: "自动分析完成",
    button: "查看确认清单",
    html: `
      <article class="demo-card"><h3>从参考内容中提取的分析建议</h3><div class="demo-tags"><span class="inferred">目标用户 · 租房搬家人群</span><span class="inferred">场景 · 衣物被褥打包</span><span class="inferred">痛点 · 纸箱占地易散</span><span class="inferred">任务 · 分类搬运</span><span class="inferred">方向 · 搬家打包避坑与效率</span></div></article>
      <div class="demo-grid"><article class="demo-card"><h3>已确认产品事实</h3><div class="demo-kv"><span>名称</span><b>搬家打包袋</b></div><div class="demo-kv"><span>品类</span><b>搬家收纳用品</b></div><div class="demo-kv"><span>材质</span><b>PE材质</b></div></article><article class="demo-card"><h3>缺失但不阻断</h3><div class="demo-kv"><span>价格</span><b>未提供，禁用</b></div><div class="demo-kv"><span>规格</span><b>未提供，禁用</b></div><div class="demo-kv"><span>容量效果</span><b>未提供，禁用</b></div></article></div>`
  },
  {
    title: "等待第一轮确认",
    button: "模拟确认并写稿",
    html: `
      <article class="demo-card"><h3>候选选题（实际合格2个）</h3><div class="demo-grid"><div class="topic-option"><b>A</b> 搬家不用纸箱怎么打包<small>差异：纸箱替代与打包步骤</small></div><div class="topic-option"><b>B</b> 搬家衣物被褥怎么快速打包<small>差异：软物分类与搬运顺序</small></div></div></article>
      <div class="confirm-banner"><span>✓</span><div><b>第一轮确认范围</b><p>产品事实、缺失事实、分析建议和两个候选选题。确认前不会生成正文。</p></div></div>`
  },
  {
    title: "完整演示稿已生成",
    button: "执行质量检查",
    html: `
      <article class="demo-card"><h3>租房搬家打包衣物别再乱堆纸箱</h3><p class="draft-body">租房搬家整理衣物和被褥时，麻烦的不只是东西多。纸箱占地方又容易破，衣服、床单和厚被子混在一起，装好后不方便区分，搬到新住处还要重新翻找。

开始搬家打包前，可以先按衣物、床品和换季用品分组。常穿的衣服单独留出，新家最先要用的床单和洗漱用品也别压在下面，拆包时就不用把所有东西全部倒出来。

同类物品整理好后，再装进搬家打包袋，放到合适位置后收紧袋口，避免搬运途中散开。还可以按房间或物品类型做简单标记，让每一袋东西都有清楚的去处。

到了新家，先打开常用物品，再按照标记依次整理。这样能减少空纸箱占用，也能让打包、搬运和还原的顺序更清楚，衣物被褥不会反复混在一起。</p><div class="draft-meta"><span>核心关键词：搬家打包</span><span>#搬家打包</span><span>#租房搬家</span><span>#衣物整理</span><span>#搬家收纳</span></div></article>
      <p class="demo-disclaimer"><span>重要说明</span>这是为网页制作的脱敏预置演示稿，不宣称是已完成飞书第二轮确认的真实生产稿。</p>`
  },
  {
    title: "质量检查全部通过",
    button: "进入最终确认",
    html: `
      <article class="demo-card"><h3>检查报告</h3><ul class="check-list"><li><span>产品事实</span><i>通过 · 未使用价格和规格</i></li><li><span>标题长度</span><i>通过 · 14字</i></li><li><span>正文字数</span><i>通过 · 250—300字区间</i></li><li><span>段落结构</span><i>通过 · 4个短段落</i></li><li><span>关键词与话题</span><i>通过 · 同批完整输出</i></li><li><span>语言与合规</span><i>通过 · 无虚构体验</i></li><li><span>参考正文相似度</span><i>通过 · ≤30%</i></li></ul></article>`
  },
  {
    title: "第二轮确认门",
    button: "演示完成",
    html: `
      <div class="confirm-banner"><span>✓</span><div><b>最终内容已具备人工确认条件</b><p>标题、正文、关键词、话题和质量报告完整。真实运行中，只有用户明确完成第二轮确认，且飞书配置和权限可用，才允许按内容ID写入并回读。</p></div></div>
      <article class="demo-card"><h3>本次公开演示到此结束</h3><p>页面不会执行真实写入，也没有任何接口可以调用。你体验到的是 Agent 的流程、规范和控制边界。</p><div class="demo-tags"><span>零API</span><span>零上传</span><span>零权限暴露</span><span>预置脱敏数据</span></div></article>`
  }
];

let currentStep = 0;
const content = document.getElementById("demoContent");
const title = document.getElementById("demoTitle");
const counter = document.getElementById("stepCounter");
const next = document.getElementById("nextDemo");
const reset = document.getElementById("resetDemo");
const stepItems = [...document.querySelectorAll("#stepList li")];

function renderDemo() {
  const stage = demoStages[currentStep];
  title.textContent = stage.title;
  counter.textContent = `步骤 ${currentStep + 1} / ${demoStages.length}`;
  content.innerHTML = stage.html;
  next.innerHTML = currentStep === demoStages.length - 1 ? "重新演示" : `${stage.button} <span aria-hidden="true">→</span>`;
  stepItems.forEach((item, index) => {
    item.classList.toggle("active", index === currentStep);
    item.classList.toggle("done", index < currentStep);
  });
}

next.addEventListener("click", () => {
  currentStep = currentStep === demoStages.length - 1 ? 0 : currentStep + 1;
  renderDemo();
});
reset.addEventListener("click", () => { currentStep = 0; renderDemo(); });
stepItems.forEach((item, index) => item.addEventListener("click", () => { currentStep = index; renderDemo(); }));
renderDemo();

const dialog = document.getElementById("imageDialog");
const dialogImage = document.getElementById("dialogImage");
const dialogCaption = document.getElementById("dialogCaption");
document.querySelectorAll(".image-button").forEach(button => {
  button.addEventListener("click", () => {
    dialogImage.src = button.querySelector("img").src;
    dialogImage.alt = button.dataset.caption;
    dialogCaption.textContent = button.dataset.caption;
    dialog.showModal();
  });
});
document.getElementById("closeDialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
