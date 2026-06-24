---
permalink: /zh/
title: ""
excerpt: ""
lang: zh
author_profile: true
---

<span class="anchor" id="about-me"></span>

<section class="portfolio-hero">
  <div class="hero-copy">
    <p class="section-kicker">城市信息学与智慧城市硕士生</p>
    <h1>吴祎凯 Yikai Wu</h1>
    <p class="hero-subtitle">关注地理空间 AI、城市感知、计算机视觉 / RGB-D，以及可复现的遥感与空间计算流程。</p>
    <p>我目前就读于香港理工大学 Urban Informatics and Smart Cities 硕士项目，本科毕业于西南交通大学遥感科学与技术专业。我的研究兴趣正在收束到一个更清晰的问题：如何把空间数据、视觉感知和可复现计算结合起来，服务于更可靠的城市与环境分析。</p>
    <div class="hero-actions" aria-label="主要链接">
      <a class="portfolio-button button-primary" href="#featured-projects"><i class="fas fa-layer-group" aria-hidden="true"></i> 代表项目</a>
      <a class="portfolio-button" href="mailto:yi-kai.wu@connect.polyu.hk"><i class="fas fa-envelope" aria-hidden="true"></i> 邮件</a>
      <a class="portfolio-button" href="https://github.com/Fwrog"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
      <a class="portfolio-button" href="/"><i class="fas fa-globe" aria-hidden="true"></i> English</a>
    </div>
  </div>
  <div class="snapshot-grid" aria-label="研究主线">
    <article class="snapshot-card">
      <span class="mini-icon"><i class="fas fa-city" aria-hidden="true"></i></span>
      <h2>城市感知与地理空间 AI</h2>
      <p>围绕街景影像、移动 GIS、空间分析和智慧交通问题，把城市尺度数据转化为可解释的研究证据。</p>
    </article>
    <article class="snapshot-card">
      <span class="mini-icon"><i class="fas fa-camera-retro" aria-hidden="true"></i></span>
      <h2>计算机视觉与 RGB-D</h2>
      <p>面向建成环境与基础设施场景，关注 RealSense 标定、深度-彩色对齐、机器视觉和三维重建流程。</p>
    </article>
    <article class="snapshot-card">
      <span class="mini-icon"><i class="fas fa-satellite" aria-hidden="true"></i></span>
      <h2>遥感与可复现工作流</h2>
      <p>使用 Google Earth Engine、HLS 影像、生态指标和 GPP 反演，把空间计算流程做成可审查、可复跑的研究工具。</p>
    </article>
  </div>
</section>

<section class="portfolio-section" id="featured-projects">
  <div class="section-heading">
    <p class="section-kicker">可验证作品</p>
    <h1>代表项目</h1>
    <p>这里优先展示能体现研究问题、工程实现和可复现能力的项目，而不是简单罗列所有经历。</p>
  </div>

  <div class="featured-grid">
    <article class="feature-card">
      <img src="/images/projects/gee-agent-workflow.jpg" alt="GEE agent workflow preview">
      <div class="card-body">
        <p class="card-label">地理空间工作流</p>
        <h2>GEE Agent Skill：面向 Earth Engine 的计划优先工作流</h2>
        <p><strong>问题。</strong> 自然语言提出的空间分析需求，在真正提交 Earth Engine 导出前，需要变得可审查、可验证、可复现。</p>
        <p><strong>方法。</strong> CLI 合约、YAML 计划、证据检索、模板渲染、静态验证、实时 preflight、显式确认导出与任务监控。</p>
        <p><strong>产出。</strong> 公开的 Python harness，并以 2024 年香港 16 天 NDVI CSV 流程作为已验证示例。</p>
        <div class="tag-row">
          <span>Python</span><span>Google Earth Engine</span><span>Jinja2</span><span>CLI</span>
        </div>
        <div class="card-links">
          <a href="https://github.com/Fwrog/gee-agent-skill">GitHub</a>
          <a href="https://github.com/Fwrog/gee-agent-skill#run-the-demo">Demo workflow</a>
        </div>
      </div>
    </article>

    <article class="feature-card">
      <img src="/images/projects/realsense-charuco.png" alt="RealSense ChArUco calibration target">
      <div class="card-body">
        <p class="card-label">计算机视觉 / RGB-D</p>
        <h2>RealSense Calibration Tools</h2>
        <p><strong>问题。</strong> RGB-D 实验在进入重建、检测或缺陷量化前，需要稳定的相机标定、打印靶标和对齐质量检查。</p>
        <p><strong>方法。</strong> OpenCV ChArUco 标定、RealSense 出厂参数导出、深度-彩色对齐检查和 HTML 报告生成。</p>
        <p><strong>产出。</strong> 面向 Intel RealSense D435i 的 Python 工具包，包含 SOP、脚本流程和本地输出边界。</p>
        <div class="tag-row">
          <span>Python</span><span>OpenCV</span><span>RealSense SDK</span><span>RGB-D</span>
        </div>
        <div class="card-links">
          <a href="https://github.com/Fwrog/realsense_calibration_tools">GitHub</a>
          <a href="https://github.com/Fwrog/realsense_calibration_tools#typical-workflow">Workflow</a>
        </div>
      </div>
    </article>

    <article class="feature-card">
      <img src="/images/projects/gpp-inversion.png" alt="Abstract GPP inversion map">
      <div class="card-body">
        <p class="card-label">遥感研究</p>
        <h2>成都市高分辨率 GPP 反演</h2>
        <p><strong>问题。</strong> 细尺度城市生态评估需要把卫星影像、地面观测和机器学习模型连接起来。</p>
        <p><strong>方法。</strong> HLS v2.0 影像、FLUXNET 观测、Google Earth Engine、Python/MATLAB 处理，以及按植被类型组织的 LSTM/SVM 实验。</p>
        <p><strong>产出。</strong> 本科毕业论文流程和成都市高分辨率 GPP 图；公开代码包装仍是后续任务。</p>
        <div class="tag-row">
          <span>HLS v2.0</span><span>FLUXNET</span><span>GEE</span><span>ML</span>
        </div>
        <div class="card-links">
          <span class="muted-link">Thesis artifact</span>
          <span class="muted-link">Code packaging pending</span>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="portfolio-section journey-section" id="academic-journey">
  <div class="section-heading">
    <p class="section-kicker">学术路径</p>
    <h1>学术旅程</h1>
    <p>从成都的遥感、摄影测量和工程测量训练，到香港的城市信息学与地理空间 AI，我的研究路径逐渐从“数据处理”走向“可复现的城市空间分析”。</p>
  </div>

  <div class="journey-layout">
    <div class="journey-map-card" aria-label="从成都到香港的学术路径">
      <svg class="journey-map" viewBox="0 0 640 420" role="img" aria-labelledby="journey-map-title-zh journey-map-desc-zh">
        <title id="journey-map-title-zh">成都到香港的学术路径</title>
        <desc id="journey-map-desc-zh">一个轻量地图示意图，连接成都和香港两个学习阶段。</desc>
        <path class="map-shape" d="M123 225 C150 168 211 119 279 104 C348 88 430 100 493 135 C551 168 576 220 548 270 C520 323 444 354 362 347 C276 340 204 317 154 280 C128 261 115 244 123 225 Z"/>
        <path class="map-shape inner" d="M253 142 C303 119 378 124 436 151 C493 178 516 220 493 258 C466 304 394 322 325 304 C260 287 222 245 224 201 C225 176 235 154 253 142 Z"/>
        <path class="route-line" d="M209 238 C270 191 351 183 444 276"/>
        <circle class="route-dot" cx="209" cy="238" r="10"/>
        <circle class="route-dot accent" cx="444" cy="276" r="10"/>
        <text x="174" y="225" class="map-label">Chengdu</text>
        <text x="462" y="292" class="map-label">Hong Kong</text>
        <text x="159" y="254" class="map-sub">SWJTU</text>
        <text x="462" y="318" class="map-sub">PolyU</text>
      </svg>
      <p class="map-caption">地图是叙事辅助，不追求复杂 GIS 效果；重点是让访问者快速理解研究路径的形成。</p>
    </div>

    <div class="timeline">
      <article class="timeline-item">
        <span class="timeline-date">2021 - 2025</span>
        <h2>西南交通大学，成都</h2>
        <p>遥感科学与技术工学学士。系统学习数字图像处理、摄影测量与遥感、三维激光扫描、计算机视觉和工程测量。</p>
      </article>
      <article class="timeline-item">
        <span class="timeline-date">2023 - 2025</span>
        <h2>科研训练与毕业论文</h2>
        <p>参与铁路机器视觉、基于 NeRF 的历史建筑三维重建、遥感生态评价综述，以及成都市高分辨率 GPP 反演等工作。</p>
      </article>
      <article class="timeline-item">
        <span class="timeline-date">2025 - Present</span>
        <h2>香港理工大学，香港</h2>
        <p>Urban Informatics and Smart Cities 硕士。当前课程和作品集聚焦高级 GIS、城市与地理空间大数据、移动 GIS/LBS、遥感图像处理和可复现城市分析。</p>
      </article>
    </div>
  </div>
</section>

<section class="portfolio-section" id="github-highlights">
  <div class="section-heading">
    <p class="section-kicker">公开代码与可复现性</p>
    <h1>GitHub 项目亮点</h1>
    <p>这里展示的是最能证明能力结构的仓库：空间计算、RGB-D 标定、GIS 制图、Android LBS 和研究工具包装。</p>
  </div>

  <div class="repo-grid">
    <article class="repo-card">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>gee-agent-skill</h2></div>
      <p>面向 Google Earth Engine 的 agent-native CLI harness，覆盖计划、证据检索、模板渲染、验证、preflight、导出、监控和 trace artifacts。</p>
      <div class="tag-row"><span>Python</span><span>GEE</span><span>Reproducibility</span></div>
      <p class="repo-note"><strong>后续包装：</strong>在香港 NDVI 示例之外，继续补更多领域 recipe。</p>
      <a href="https://github.com/Fwrog/gee-agent-skill">Open repository</a>
    </article>

    <article class="repo-card">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>realsense_calibration_tools</h2></div>
      <p>RealSense D435i 标定工具：打印靶标、参数导出、ChArUco 彩色相机标定、RGB-D 对齐 QC 和报告生成。</p>
      <div class="tag-row"><span>Python</span><span>OpenCV</span><span>RealSense</span></div>
      <p class="repo-note"><strong>后续包装：</strong>在确认隐私边界后补一组真实标定结果截图。</p>
      <a href="https://github.com/Fwrog/realsense_calibration_tools">Open repository</a>
    </article>

    <article class="repo-card image-repo-card">
      <img src="/images/projects/hk-film-map.jpg" alt="HKFilmMap concept banner">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>HKFilmMap</h2></div>
      <p>香港电影地点 Android LBS 项目，包含 Python 数据管线、本地 SQLite seed database、Google Maps/Firebase 集成和路线规划逻辑。</p>
      <div class="tag-row"><span>Java</span><span>Android</span><span>LBS</span><span>SQLite</span></div>
      <a href="https://github.com/Fwrog/HKFilmMap">Open repository</a>
    </article>

    <article class="repo-card image-repo-card">
      <img src="/images/projects/china-chorokit.png" alt="ChinaChoroKit choropleth map preview">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>ChinaChoroKit</h2></div>
      <p>配置驱动的中国省级分级设色图工具，支持九段线处理、图例、比例尺、指北针，并导出 PNG/SVG。</p>
      <div class="tag-row"><span>Python</span><span>GeoPandas</span><span>Cartography</span></div>
      <a href="https://github.com/Fwrog/ChinaChoroKit">Open repository</a>
    </article>

    <article class="repo-card">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>Academic Gantt Tool</h2></div>
      <p>将 CSV/Markdown 模板转成学术风格甘特图的小工具，支持中英文模板和 PDF/PNG/SVG 输出。</p>
      <div class="tag-row"><span>Python</span><span>Visualization</span><span>Writing workflow</span></div>
      <p class="repo-note"><strong>定位：</strong>适合作为研究写作与工具化能力的补充证据，而不是主线研究项目。</p>
      <a href="https://github.com/Fwrog/Academic-Gantt-A-Pythonic-Tool-for-Scholarly-Timelines">Open repository</a>
    </article>
  </div>
</section>

<section class="portfolio-section" id="publications">
  <div class="section-heading compact-heading">
    <p class="section-kicker">论文与写作</p>
    <h1>Publications & Manuscripts</h1>
  </div>

  <div class="publication-groups">
    <div class="status-column">
      <h2>Published</h2>
      <ol class="publication-list">
        <li>
          W. Fan, J. Xiao, <strong>Y. Wu</strong>, et al., "A Review of Optimization Methods for Low-Altitude Aircraft Operations," <em>Journal of Transportation Engineering and Information</em>, pp. 1-24, 2025. Chinese.
          <a href="https://doi.org/10.19961/j.cnki.1672-4747.2025.06.044">DOI</a>
        </li>
        <li>
          <strong>Y. Wu</strong>, "Research Progress of Urban Ecological Evaluation Methods Based on Remote Sensing Indexes," <em>Highlights in Science, Engineering and Technology</em>, vol. 108, pp. 27-33, 2024.
          <a href="https://doi.org/10.54097/rm8c6t44">DOI</a>
        </li>
      </ol>
    </div>
    <div class="status-column">
      <h2>In preparation</h2>
      <ol class="publication-list">
        <li>
          Y. Zhang, <strong>Y. Wu</strong>, R. Ai, Q. Zhang, J. Lin, Z. Liu, L. Kang, and R. Ai, "Machine Learning in Alzheimer's Disease: A Comprehensive Review of Methods, Data Modalities, and Future Directions."
        </li>
      </ol>
      <p class="disclaimer">未发表稿件与正式发表论文分开展示，避免给访问者造成状态误解。</p>
    </div>
  </div>
</section>

<section class="portfolio-section" id="methods-skills">
  <div class="section-heading compact-heading">
    <p class="section-kicker">方法能力</p>
    <h1>技能不是“关键词云”</h1>
  </div>

  <div class="method-grid">
    <article>
      <h2><i class="fas fa-map-marked-alt" aria-hidden="true"></i> 地理空间与遥感</h2>
      <p>Google Earth Engine，HLS/Landsat/Sentinel 工作流，生态指标，GPP 反演，空间数据处理，GIS 可视化。</p>
    </article>
    <article>
      <h2><i class="fas fa-cube" aria-hidden="true"></i> 计算机视觉与三维</h2>
      <p>OpenCV，ChArUco/ArUco 标定，RealSense RGB-D 对齐，Labelme 数据集，YOLOv8 实验，NeRF 重建。</p>
    </article>
    <article>
      <h2><i class="fas fa-code" aria-hidden="true"></i> 编程与建模</h2>
      <p>Python，MATLAB，C/C++，C#，Java/Android，机器学习实验，数据清洗，模型评估，报告自动化。</p>
    </article>
    <article>
      <h2><i class="fas fa-vial" aria-hidden="true"></i> 研究工作流</h2>
      <p>计划优先的实验流程，可复现命令行工具，GitHub 文档，LaTeX，Markdown，模板化报告，审慎的 claim tracking。</p>
    </article>
  </div>
</section>

<section class="portfolio-section" id="updates-education">
  <div class="section-heading compact-heading">
    <p class="section-kicker">当前阶段</p>
    <h1>教育、动态与经历</h1>
  </div>

  <div class="two-column-list">
    <div>
      <h2>近期动态</h2>
      <ul class="clean-list">
        <li><strong>2025 年 9 月：</strong>开始香港理工大学 Urban Informatics and Smart Cities 硕士项目。</li>
        <li><strong>2025 年 7 月：</strong>完成成都市高分辨率 GPP 反演相关本科毕业论文工作。</li>
        <li><strong>2025 年 6 月：</strong>获得西南交通大学遥感科学与技术工学学士学位。</li>
        <li><strong>2024-2025：</strong>持续参与交通优化、遥感生态评估和医学 AI 综述相关写作。</li>
      </ul>
    </div>
    <div>
      <h2>教育与实习</h2>
      <ul class="clean-list">
        <li><strong>香港理工大学：</strong>Urban Informatics and Smart Cities 硕士，2025 至今。</li>
        <li><strong>西南交通大学：</strong>遥感科学与技术工学学士，2021 - 2025。平均分 84.44/100。</li>
        <li><strong>西南交通大学地球科学与工程学院：</strong>工程测量实习，涉及全站仪、RTK、CP III 处理和 C# 坐标 / 数据库工具。</li>
        <li><strong>郑州地铁 8 号线项目：</strong>参与地下工程场景的数据采集实习。</li>
      </ul>
    </div>
  </div>
</section>

<section class="portfolio-section" id="additional-research">
  <div class="section-heading compact-heading">
    <p class="section-kicker">补充研究经历</p>
    <h1>Additional Research Experience</h1>
    <p>这些经历能补充说明能力边界，但不会把主页叙事扩散成“什么都做”。</p>
  </div>

  <div class="compact-project-grid">
    <article>
      <img src="/images/projects/railway-vision.png" alt="Railway construction vision detection illustration">
      <h2>铁路施工机器视觉</h2>
      <p>围绕铁路施工场景中的超前小导管识别，进行 Labelme 数据集构建、YOLOv8 测试和视觉检测流程探索。</p>
      <div class="tag-row"><span>Computer vision</span><span>YOLOv8</span><span>Dataset</span></div>
    </article>
    <article>
      <img src="/images/projects/nerf-heritage.png" alt="NeRF historic building reconstruction illustration">
      <h2>基于 NeRF 的历史建筑建模</h2>
      <p>结合 UAV 与智能小车采集策略，探索 NeRF 方式的三维重建流程，并在成都文殊院场景中验证。</p>
      <div class="tag-row"><span>NeRF</span><span>3D reconstruction</span><span>Heritage</span></div>
    </article>
    <article>
      <img src="/images/projects/remote-sensing-indexes.png" alt="Remote sensing ecological index illustration">
      <h2>遥感指数与城市生态评价</h2>
      <p>围绕遥感指数在城市生态评价中的应用进行综述写作，与城市环境监测和地理空间分析主线相连。</p>
      <div class="tag-row"><span>Review</span><span>Urban ecology</span><span>Remote sensing</span></div>
    </article>
    <article>
      <img src="/images/projects/medical-ai.png" alt="Medical AI multimodal diagnosis illustration">
      <h2>医学 AI 研究写作</h2>
      <p>参与文献综述、图表设计、迁移学习探索和提示词诊断基准实验。作为 AI 研究经历补充展示。</p>
      <div class="tag-row"><span>Medical AI</span><span>Review</span><span>Benchmarking</span></div>
    </article>
  </div>
</section>
