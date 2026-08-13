---
permalink: /zh/
title: ""
excerpt: ""
lang: zh-CN
nav_key: main_zh
body_class: portfolio-page
author_profile: false
---

<section class="portfolio-hero" id="research" aria-labelledby="research-title">
  <div class="hero-copy">
    <p class="hero-role">硕士生 · 城市信息学与智慧城市</p>
    <h1 id="research-title">从城市到 RGB-D 的<br>地理空间证据。</h1>
    <p class="hero-subtitle">结合地理空间 AI、城市感知、计算机视觉与可复现遥感工作流，研究建成环境中的实际问题。</p>
    <p>我目前就读于香港理工大学 Urban Informatics and Smart Cities 硕士项目，本科毕业于西南交通大学遥感科学与技术专业。我的研究围绕一个持续收束的问题：如何把空间数据、视觉感知和可复现计算结合起来，为更可靠的城市与环境分析提供证据。</p>
    <div class="hero-actions" aria-label="主要链接">
      <a class="portfolio-button button-primary" href="#selected-work">查看代表项目</a>
      <a class="portfolio-button" href="mailto:yi-kai.wu@connect.polyu.hk">联系交流</a>
    </div>
    <p class="hero-links"><a href="https://github.com/Fwrog">GitHub</a><a href="https://orcid.org/0009-0004-2501-7877">ORCID</a><span>中国香港</span></p>
  </div>
  {% include research-atlas.html lang="zh" %}
</section>

<span class="anchor" id="featured-projects"></span>
<section class="portfolio-section selected-work" id="selected-work" aria-labelledby="selected-work-title">
  <header class="section-heading">
    <h2 id="selected-work-title">代表项目</h2>
    <p>优先展示能够把研究问题连接到公开代码、可复现流程或具体研究产出的三项工作。</p>
  </header>

  <article class="project-proof" id="project-gee">
    <figure class="project-visual">
      <img src="/images/projects/gee-agent-workflow.jpg" width="1200" height="675" loading="lazy" alt="GEE Agent 工作流预览">
      <figcaption>计划 → 证据 → 验证 → 显式确认 Earth Engine 导出。</figcaption>
    </figure>
    <div class="project-story">
      <p class="project-domain">01 · 地理空间工作流</p>
      <h3>GEE Agent Skill</h3>
      <p class="project-deck">面向可审查 Earth Engine 分析的计划优先工作流。</p>
      <dl class="evidence-list">
        <div><dt>问题</dt><dd>自然语言提出的空间分析需求，在真正提交导出前，需要变得安全、可审查、可验证且可复现。</dd></div>
        <div><dt>方法</dt><dd>CLI 合约、YAML 计划、证据检索、模板渲染、静态验证、实时 preflight、显式确认导出与任务监控。</dd></div>
        <div><dt>产出</dt><dd>公开的 Python harness，并以 2024 年香港 16 天 NDVI CSV 流程作为已验证的回归式示例。</dd></div>
      </dl>
      <p class="method-line"><span>Python</span><span>Google Earth Engine</span><span>Jinja2</span><span>CLI</span></p>
      <p class="project-links"><a href="https://github.com/Fwrog/gee-agent-skill">GitHub 仓库</a><a href="https://github.com/Fwrog/gee-agent-skill#run-the-demo">示例流程</a></p>
    </div>
  </article>

  <article class="project-proof project-proof--reverse" id="project-rgbd">
    <figure class="project-visual project-visual--portrait">
      <img src="/images/projects/realsense-charuco.png" width="509" height="720" loading="lazy" alt="RealSense ChArUco 打印标定靶">
      <figcaption>标定靶、相机参数、对齐质检与报告。</figcaption>
    </figure>
    <div class="project-story">
      <p class="project-domain">02 · 计算机视觉 / RGB-D</p>
      <h3>RealSense Calibration Tools</h3>
      <p class="project-deck">面向 D435i 实验的可重复标定与质量控制工具包。</p>
      <dl class="evidence-list">
        <div><dt>问题</dt><dd>RGB-D 实验在进入重建、检测或缺陷量化前，需要稳定的相机标定、打印靶标和视觉质量检查。</dd></div>
        <div><dt>方法</dt><dd>OpenCV ChArUco 标定、RealSense 出厂参数导出、深度—彩色对齐检查和 HTML 报告生成。</dd></div>
        <div><dt>产出</dt><dd>面向 Intel RealSense D435i 的开源 Python 工具包，包含 SOP、脚本流程和明确的本地输出边界。</dd></div>
      </dl>
      <p class="method-line"><span>Python</span><span>OpenCV</span><span>RealSense SDK</span><span>RGB-D</span></p>
      <p class="project-links"><a href="https://github.com/Fwrog/realsense_calibration_tools">GitHub 仓库</a><a href="https://github.com/Fwrog/realsense_calibration_tools#typical-workflow">典型流程</a></p>
    </div>
  </article>

  <article class="project-proof" id="project-remote-sensing">
    <figure class="project-visual">
      <img src="/images/projects/gpp-inversion.png" width="900" height="520" loading="lazy" alt="成都市高分辨率 GPP 反演示意图">
      <figcaption>在城市尺度上连接卫星影像与通量观测。</figcaption>
    </figure>
    <div class="project-story">
      <p class="project-domain">03 · 遥感研究</p>
      <h3>成都市高分辨率 GPP 反演</h3>
      <p class="project-deck">利用卫星与地面证据开展细尺度植被生产力制图。</p>
      <dl class="evidence-list">
        <div><dt>问题</dt><dd>细尺度城市生态评估需要把植被生产力估计与卫星影像、地面观测连接起来。</dd></div>
        <div><dt>方法</dt><dd>HLS v2.0 影像、FLUXNET 观测、Google Earth Engine、Python/MATLAB 处理，以及按植被类型组织的 LSTM/SVM 实验。</dd></div>
        <div><dt>产出</dt><dd>本科毕业论文流程和成都市高分辨率 GPP 图；公开代码包装仍是后续任务。</dd></div>
      </dl>
      <p class="method-line"><span>HLS v2.0</span><span>FLUXNET</span><span>GEE</span><span>机器学习</span></p>
      <p class="project-links project-links--muted"><span>毕业论文成果</span><span>代码待公开包装</span></p>
    </div>
  </article>
</section>

<section class="portfolio-section publications-section" id="publications" aria-labelledby="publications-title">
  <header class="section-heading section-heading--compact">
    <h2 id="publications-title">论文与稿件</h2>
    <p>明确区分正式发表与准备中稿件。</p>
  </header>
  <div class="publication-groups">
    <div class="status-column">
      <h3>已发表 · 02</h3>
      <ol class="publication-list">
        <li>W. Fan, J. Xiao, <strong>Y. Wu</strong>, et al., “A Review of Optimization Methods for Low-Altitude Aircraft Operations,” <em>Journal of Transportation Engineering and Information</em>, pp. 1–24, 2025. Chinese. <a href="https://doi.org/10.19961/j.cnki.1672-4747.2025.06.044">DOI</a></li>
        <li><strong>Y. Wu</strong>, “Research Progress of Urban Ecological Evaluation Methods Based on Remote Sensing Indexes,” <em>Highlights in Science, Engineering and Technology</em>, vol. 108, pp. 27–33, 2024. <a href="https://doi.org/10.54097/rm8c6t44">DOI</a></li>
      </ol>
    </div>
    <div class="status-column">
      <h3>准备中 · 01</h3>
      <ol class="publication-list">
        <li>Y. Zhang, <strong>Y. Wu</strong>, R. Ai, Q. Zhang, J. Lin, Z. Liu, L. Kang, and R. Ai, “Machine Learning in Alzheimer's Disease: A Comprehensive Review of Methods, Data Modalities, and Future Directions.”</li>
      </ol>
      <p class="disclaimer">未发表稿件与正式发表论文分开展示，避免造成状态误解。</p>
    </div>
  </div>
</section>

<span class="anchor" id="academic-journey"></span>
<section class="portfolio-section journey-section" id="journey" aria-labelledby="journey-title">
  <header class="section-heading">
    <h2 id="journey-title">学术旅程</h2>
    <p>从成都的遥感与摄影测量训练，到香港的城市信息学与地理空间 AI。</p>
  </header>
  <div class="journey-layout">
    <figure class="journey-map-card">
      <div id="journey-map-zh" class="leaflet-journey-map" data-map-lang="zh" aria-label="从成都到香港的互动学术路径地图">
        <p class="map-fallback">互动地图：成都，西南交通大学；香港，香港理工大学。</p>
      </div>
      <div class="journey-map-meta"><span>成都 / 西南交大</span><span>学习路径</span><span>香港 / 理大</span></div>
      <figcaption>真实地图表达地点关系；时间线只保留地点阶段，研究项目节点单独列出。</figcaption>
    </figure>
    <div class="timeline">
      <article class="timeline-item">
        <span class="timeline-date">2021—2025</span>
        <h3>西南交通大学，成都</h3>
        <p>遥感科学与技术工学学士。系统学习数字图像处理、摄影测量与遥感、三维激光扫描、计算机视觉和工程测量。</p>
      </article>
      <article class="timeline-item">
        <span class="timeline-date">2025—至今</span>
        <h3>香港理工大学，香港</h3>
        <p>Urban Informatics and Smart Cities 硕士。当前课程和作品集聚焦高级 GIS、城市与地理空间大数据、移动 GIS/LBS、遥感图像处理和可复现城市分析。</p>
      </article>
    </div>
  </div>
  <div class="research-milestones" aria-label="研究节点">
    <article><span>2023—2024</span><h3>铁路施工机器视觉</h3><p>围绕铁路施工场景中的超前小导管识别，开展数据集构建与 YOLOv8 实验。</p></article>
    <article><span>2024</span><h3>基于 NeRF 的历史建筑重建</h3><p>结合 UAV 与智能小车采集，在成都文殊院场景中验证 NeRF 重建流程。</p></article>
    <article><span>2024—2025</span><h3>遥感生态评价与 GPP 反演</h3><p>完成遥感生态指数综述，并开展成都市高分辨率 GPP 制图本科毕业论文工作。</p></article>
  </div>
</section>

<span class="anchor" id="github-highlights"></span>
<span class="anchor" id="methods-skills"></span>
<section class="portfolio-section evidence-ledger" id="methods" aria-labelledby="methods-title">
  <header class="section-heading">
    <h2 id="methods-title">代码与方法证据</h2>
    <p>以证据账本呈现仓库和能力：已有的产物、能够证明的能力，以及仍然存在的边界。</p>
  </header>
  <div class="repo-ledger" aria-label="公开代码仓库">
    <article><h3><a href="https://github.com/Fwrog/gee-agent-skill">gee-agent-skill</a></h3><p>面向 Earth Engine 的 agent-native harness，覆盖计划、证据检索、模板渲染、验证、preflight、导出、监控和 trace artifacts。</p><p><span>Python · GEE · 可复现性</span><strong>下一步：补充更多领域 recipe。</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/realsense_calibration_tools">realsense_calibration_tools</a></h3><p>打印标定靶、D435i 参数导出、ChArUco 标定、RGB-D 对齐 QC 和报告生成。</p><p><span>Python · OpenCV · RealSense</span><strong>下一步：补充隐私审查后的结果画廊。</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/HKFilmMap">HKFilmMap</a></h3><p>香港电影地点 Android LBS 项目，包含 Python 数据管线、SQLite seed database、Google Maps/Firebase 集成和路线逻辑。</p><p><span>Java · Android · LBS · SQLite</span><strong>公开仓库。</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/ChinaChoroKit">ChinaChoroKit</a></h3><p>配置驱动的中国省级分级设色图工具，支持九段线、图例、比例尺，以及 PNG/SVG 导出。</p><p><span>Python · GeoPandas · Cartography</span><strong>公开仓库。</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/Academic-Gantt-A-Pythonic-Tool-for-Scholarly-Timelines">Academic Gantt Tool</a></h3><p>将 CSV/Markdown 转为学术风格甘特图，支持中英文模板及 PDF/PNG/SVG 导出。</p><p><span>Python · 可视化 · 写作流程</span><strong>研究工具化的补充证据。</strong></p></article>
  </div>
  <dl class="capability-ledger">
    <div><dt>地理空间与遥感</dt><dd>Google Earth Engine；HLS/Landsat/Sentinel 工作流；生态指标；GPP 反演；空间数据处理；GIS 可视化。</dd></div>
    <div><dt>计算机视觉与三维</dt><dd>OpenCV；ChArUco/ArUco 标定；RealSense RGB-D 对齐；Labelme 数据集；YOLOv8 实验；NeRF 重建。</dd></div>
    <div><dt>编程与建模</dt><dd>Python；MATLAB；C/C++；C#；Java/Android；机器学习实验；数据清洗；模型评估；报告自动化。</dd></div>
    <div><dt>研究工作流</dt><dd>计划优先流程；可复现命令行工具；GitHub 文档；LaTeX；Markdown；模板化报告；审慎的 claim tracking。</dd></div>
  </dl>
</section>

<span class="anchor" id="updates-education"></span>
<section class="portfolio-section education-section" id="education" aria-labelledby="education-title">
  <header class="section-heading section-heading--compact"><h2 id="education-title">教育与动态</h2></header>
  <div class="two-column-list">
    <div>
      <h3>教育与实习</h3>
      <ul class="clean-list">
        <li><strong>香港理工大学</strong><span>Urban Informatics and Smart Cities 硕士 · 2025—至今</span></li>
        <li><strong>西南交通大学</strong><span>遥感科学与技术工学学士 · 2021—2025 · 平均分 84.44/100</span></li>
        <li><strong>西南交通大学地球科学与工程学院</strong><span>工程测量实习：全站仪、RTK、CP III 处理和 C# 坐标 / 数据库工具。</span></li>
        <li><strong>郑州地铁 8 号线项目</strong><span>地下工程场景数据采集实习。</span></li>
      </ul>
    </div>
    <div>
      <h3>近期动态</h3>
      <ul class="clean-list">
        <li><strong>2025 年 9 月</strong><span>开始香港理工大学 Urban Informatics and Smart Cities 硕士项目。</span></li>
        <li><strong>2025 年 7 月</strong><span>完成成都市高分辨率 GPP 反演本科毕业论文工作。</span></li>
        <li><strong>2025 年 6 月</strong><span>获得西南交通大学遥感科学与技术工学学士学位。</span></li>
        <li><strong>2024—2025</strong><span>持续参与交通优化、遥感生态评估和医学 AI 综述相关写作。</span></li>
      </ul>
    </div>
  </div>
</section>

<span class="anchor" id="additional-research"></span>
<section class="portfolio-section adjacent-section" id="adjacent-work" aria-labelledby="adjacent-title">
  <header class="section-heading">
    <h2 id="adjacent-title">早期与相邻工作</h2>
    <p>这些经历补充主线研究图景，但视觉权重低于上方代表项目。</p>
  </header>
  <div class="adjacent-list">
    <article><img src="/images/projects/railway-vision.png" width="900" height="520" loading="lazy" alt="铁路施工视觉检测示意图"><div><h3>铁路施工机器视觉</h3><p>围绕超前小导管识别，开展 Labelme 数据集构建、YOLOv8 测试和视觉检测流程探索。</p><p class="method-line"><span>计算机视觉</span><span>YOLOv8</span><span>数据集</span></p></div></article>
    <article><img src="/images/projects/nerf-heritage.png" width="900" height="520" loading="lazy" alt="NeRF 历史建筑重建示意图"><div><h3>基于 NeRF 的历史建筑建模</h3><p>结合 UAV 与智能小车采集策略，探索 NeRF 三维重建流程，并在成都文殊院场景中验证。</p><p class="method-line"><span>NeRF</span><span>三维重建</span><span>文化遗产</span></p></div></article>
    <article><img src="/images/projects/remote-sensing-indexes.png" width="900" height="520" loading="lazy" alt="遥感生态指数示意图"><div><h3>遥感指数与城市生态评价</h3><p>围绕遥感指数在城市生态评价中的应用进行综述写作，与城市环境监测和地理空间分析主线相连。</p><p class="method-line"><span>综述</span><span>城市生态</span><span>遥感</span></p></div></article>
    <article><img src="/images/projects/medical-ai.png" width="900" height="520" loading="lazy" alt="医学 AI 多模态诊断示意图"><div><h3>医学 AI 研究写作</h3><p>参与文献综述、图表设计、迁移学习探索和提示词诊断基准实验，作为相邻 AI 研究经历。</p><p class="method-line"><span>医学 AI</span><span>综述</span><span>基准测试</span></p></div></article>
  </div>
</section>
