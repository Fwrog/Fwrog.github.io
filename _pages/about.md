---
permalink: /
title: ""
excerpt: ""
lang: en
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<span class="anchor" id="about-me"></span>

<section class="portfolio-hero">
  <div class="hero-copy">
    <p class="section-kicker">M.Sc. student, Urban Informatics and Smart Cities</p>
    <h1>Yikai Wu</h1>
    <p class="hero-subtitle">Geospatial AI, urban sensing, computer vision / RGB-D, and reproducible remote-sensing workflows for the built environment.</p>
    <p>I am an M.Sc. student at The Hong Kong Polytechnic University, with a B.Eng. background in Remote Sensing Science and Technology from Southwest Jiaotong University. My work is converging on a practical research question: how spatial data, visual sensing, and reproducible computation can support more reliable urban and environmental analysis.</p>
    <div class="hero-actions" aria-label="Primary links">
      <a class="portfolio-button button-primary" href="#featured-projects"><i class="fas fa-layer-group" aria-hidden="true"></i> View projects</a>
      <a class="portfolio-button" href="mailto:yi-kai.wu@connect.polyu.hk"><i class="fas fa-envelope" aria-hidden="true"></i> Email</a>
      <a class="portfolio-button" href="https://github.com/Fwrog"><i class="fab fa-github" aria-hidden="true"></i> GitHub</a>
      <a class="portfolio-button" href="/zh/"><i class="fas fa-globe-asia" aria-hidden="true"></i> 中文</a>
    </div>
  </div>
  <div class="snapshot-grid" aria-label="Research snapshots">
    <article class="snapshot-card">
      <span class="mini-icon"><i class="fas fa-city" aria-hidden="true"></i></span>
      <h2>Urban Sensing & Geospatial AI</h2>
      <p>Street-view, mobile GIS, spatial analytics, and smart-transport questions that connect city-scale data with interpretable evidence.</p>
    </article>
    <article class="snapshot-card">
      <span class="mini-icon"><i class="fas fa-camera-retro" aria-hidden="true"></i></span>
      <h2>Computer Vision & RGB-D</h2>
      <p>RealSense calibration, image/depth alignment, machine vision, and 3D reconstruction workflows for infrastructure and built environments.</p>
    </article>
    <article class="snapshot-card">
      <span class="mini-icon"><i class="fas fa-satellite" aria-hidden="true"></i></span>
      <h2>Remote Sensing Workflows</h2>
      <p>Google Earth Engine, HLS imagery, ecological indicators, GPP inversion, and agent-readable workflows that can be reviewed and rerun.</p>
    </article>
  </div>
</section>

<section class="portfolio-section" id="featured-projects">
  <div class="section-heading">
    <p class="section-kicker">Selected evidence</p>
    <h1>Featured Projects</h1>
    <p>Three projects that best connect my research interests with concrete artifacts: public code, reproducible workflows, or research outputs.</p>
  </div>

  <div class="featured-grid">
    <article class="feature-card">
      <img src="/images/projects/gee-agent-workflow.jpg" alt="GEE agent workflow preview">
      <div class="card-body">
        <p class="card-label">Geospatial workflow</p>
        <h2>GEE Agent Skill: Plan-First Earth Engine Harness</h2>
        <p><strong>Problem.</strong> Natural-language geospatial requests are hard to make safe, reviewable, and reproducible before live Earth Engine export.</p>
        <p><strong>Method.</strong> CLI contract, YAML plan schema, local evidence/RAG notes, template rendering, static validation, live preflight, confirmed export, and task monitoring.</p>
        <p><strong>Output.</strong> Public harness with a verified Hong Kong 2024 16-day NDVI CSV workflow as a regression-style example.</p>
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
        <p class="card-label">Computer vision / RGB-D</p>
        <h2>RealSense Calibration Tools</h2>
        <p><strong>Problem.</strong> RGB-D experiments need repeatable camera calibration, printable targets, and visual QC before downstream reconstruction or defect measurement.</p>
        <p><strong>Method.</strong> OpenCV ChArUco calibration, RealSense factory-parameter export, depth-to-color alignment checks, and an HTML calibration report.</p>
        <p><strong>Output.</strong> GitHub-ready Python toolkit for Intel RealSense D435i workflows, with SOPs and local-output boundaries.</p>
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
        <p class="card-label">Remote sensing research</p>
        <h2>High-Resolution GPP Inversion for Chengdu</h2>
        <p><strong>Problem.</strong> Fine-scale urban ecological assessment needs vegetation productivity estimates that connect satellite imagery with ground observations.</p>
        <p><strong>Method.</strong> HLS v2.0 imagery, FLUXNET observations, Google Earth Engine, Python/MATLAB processing, and LSTM/SVM model experiments by vegetation type.</p>
        <p><strong>Output.</strong> Undergraduate thesis workflow and high-resolution GPP map for Chengdu; public packaging is a future portfolio task.</p>
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
    <p class="section-kicker">Path and research formation</p>
    <h1>Academic Journey</h1>
    <p>My path runs from remote sensing and photogrammetry training in Chengdu to urban informatics and geospatial AI work in Hong Kong.</p>
  </div>

  <div class="journey-layout">
    <div class="journey-map-card" aria-label="Interactive academic route map from Chengdu to Hong Kong">
      <div id="journey-map-en" class="leaflet-journey-map" data-map-lang="en">
        <p class="map-fallback">Interactive map: Chengdu, Southwest Jiaotong University to Hong Kong, The Hong Kong Polytechnic University.</p>
      </div>
      <div class="journey-map-meta">
        <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Chengdu / SWJTU</span>
        <span><i class="fas fa-route" aria-hidden="true"></i> Study route</span>
        <span><i class="fas fa-map-marker-alt" aria-hidden="true"></i> Hong Kong / PolyU</span>
      </div>
      <p class="map-caption">A real map is used for location context; the timeline below keeps place-based stages separate from research milestones.</p>
    </div>

    <div class="timeline">
      <article class="timeline-item">
        <span class="timeline-date">2021 - 2025</span>
        <h2>Southwest Jiaotong University, Chengdu</h2>
        <p>B.Eng. in Remote Sensing Science and Technology. Built foundations in digital image processing, photogrammetry, remote sensing, 3D laser scanning, computer vision, and engineering surveying.</p>
      </article>
      <article class="timeline-item">
        <span class="timeline-date">2025 - Present</span>
        <h2>The Hong Kong Polytechnic University, Hong Kong</h2>
        <p>M.Sc. in Urban Informatics and Smart Cities. Current coursework and portfolio work emphasize advanced GIS, urban and geospatial big data analysis, mobile GIS/LBS, remote sensing image processing, and reproducible urban analytics.</p>
      </article>
    </div>
  </div>

  <div class="research-milestones" aria-label="Research milestones">
    <article>
      <span class="milestone-date">2023 - 2024</span>
      <h2>Railway construction machine vision</h2>
      <p>Dataset construction and YOLOv8 experiments for advanced support conduit detection in railway-construction scenarios.</p>
    </article>
    <article>
      <span class="milestone-date">2024</span>
      <h2>NeRF-based heritage reconstruction</h2>
      <p>UAV and robot-car collection strategy with NeRF-based reconstruction tested around Wenshu Monastery in Chengdu.</p>
    </article>
    <article>
      <span class="milestone-date">2024 - 2025</span>
      <h2>Remote-sensing ecology and GPP inversion</h2>
      <p>Review work on remote-sensing ecological indices and undergraduate thesis work on high-resolution GPP mapping for Chengdu.</p>
    </article>
  </div>
</section>

<section class="portfolio-section" id="github-highlights">
  <div class="section-heading">
    <p class="section-kicker">Public code and reproducibility</p>
    <h1>GitHub / Repo Highlights</h1>
    <p>These repositories are selected for evidence quality rather than quantity. They show data pipelines, calibration workflows, GIS rendering, Android LBS design, and research-tool packaging.</p>
  </div>

  <div class="repo-grid">
    <article class="repo-card">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>gee-agent-skill</h2></div>
      <p>Agent-native command-line harness for Google Earth Engine: plan, evidence search, template render, validation, preflight, export, monitor, and trace artifacts.</p>
      <div class="tag-row"><span>Python</span><span>GEE</span><span>Reproducibility</span></div>
      <p class="repo-note"><strong>Next polish:</strong> add more domain recipes beyond the Hong Kong NDVI regression examples.</p>
      <a href="https://github.com/Fwrog/gee-agent-skill">Open repository</a>
    </article>

    <article class="repo-card">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>realsense_calibration_tools</h2></div>
      <p>Toolkit for printable calibration targets, D435i parameter export, ChArUco color calibration, RGB-D alignment QC, and report generation.</p>
      <div class="tag-row"><span>Python</span><span>OpenCV</span><span>RealSense</span></div>
      <p class="repo-note"><strong>Next polish:</strong> add a compact result gallery from a real calibration package after privacy review.</p>
      <a href="https://github.com/Fwrog/realsense_calibration_tools">Open repository</a>
    </article>

    <article class="repo-card image-repo-card">
      <img src="/images/projects/hk-film-map.jpg" alt="HKFilmMap concept banner">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>HKFilmMap</h2></div>
      <p>Android LBS project for Hong Kong film locations with a Python data pipeline, local SQLite seed database, Google Maps/Firebase integration, and route planning logic.</p>
      <div class="tag-row"><span>Java</span><span>Android</span><span>LBS</span><span>SQLite</span></div>
      <a href="https://github.com/Fwrog/HKFilmMap">Open repository</a>
    </article>

    <article class="repo-card image-repo-card">
      <img src="/images/projects/china-chorokit.png" alt="ChinaChoroKit choropleth map preview">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>ChinaChoroKit</h2></div>
      <p>Configuration-driven Python toolkit for province-level China choropleth maps with nine-dash-line handling, legends, scale bars, and PNG/SVG export.</p>
      <div class="tag-row"><span>Python</span><span>GeoPandas</span><span>Cartography</span></div>
      <a href="https://github.com/Fwrog/ChinaChoroKit">Open repository</a>
    </article>

    <article class="repo-card">
      <div class="repo-title"><i class="fab fa-github" aria-hidden="true"></i><h2>Academic Gantt Tool</h2></div>
      <p>Small Python utility that turns CSV/Markdown templates into academic-style Gantt charts, with English/Chinese templates and PDF/PNG/SVG export.</p>
      <div class="tag-row"><span>Python</span><span>Visualization</span><span>Writing workflow</span></div>
      <p class="repo-note"><strong>Best role:</strong> a supporting workflow/tooling example, not a main research project.</p>
      <a href="https://github.com/Fwrog/Academic-Gantt-A-Pythonic-Tool-for-Scholarly-Timelines">Open repository</a>
    </article>
  </div>
</section>

<section class="portfolio-section" id="publications">
  <div class="section-heading compact-heading">
    <p class="section-kicker">Research writing</p>
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
      <p class="disclaimer">Manuscripts are separated from published work to keep publication status clear and conservative.</p>
    </div>
  </div>
</section>

<section class="portfolio-section" id="methods-skills">
  <div class="section-heading compact-heading">
    <p class="section-kicker">Methods and tools</p>
    <h1>Skills as Research Capabilities</h1>
  </div>

  <div class="method-grid">
    <article>
      <h2><i class="fas fa-map-marked-alt" aria-hidden="true"></i> Geospatial & Remote Sensing</h2>
      <p>Google Earth Engine, HLS/Landsat/Sentinel workflows, ecological indices, GPP inversion, spatial data processing, GIS visualization.</p>
    </article>
    <article>
      <h2><i class="fas fa-cube" aria-hidden="true"></i> Computer Vision & 3D</h2>
      <p>OpenCV, ChArUco/ArUco calibration, RealSense RGB-D alignment, Labelme datasets, YOLOv8 experiments, NeRF-based reconstruction.</p>
    </article>
    <article>
      <h2><i class="fas fa-code" aria-hidden="true"></i> Programming & Modeling</h2>
      <p>Python, MATLAB, C/C++, C#, Java/Android, machine-learning experiments, data cleaning, model evaluation, report automation.</p>
    </article>
    <article>
      <h2><i class="fas fa-vial" aria-hidden="true"></i> Research Workflow</h2>
      <p>Plan-first workflows, reproducible command-line tools, GitHub documentation, LaTeX, Markdown, template-based reports, conservative claim tracking.</p>
    </article>
  </div>
</section>

<section class="portfolio-section" id="updates-education">
  <div class="section-heading compact-heading">
    <p class="section-kicker">Current status</p>
    <h1>Education, Updates & Experience</h1>
  </div>

  <div class="two-column-list">
    <div>
      <h2>Recent updates</h2>
      <ul class="clean-list">
        <li><strong>Sep 2025:</strong> Started the M.Sc. program in Urban Informatics and Smart Cities at The Hong Kong Polytechnic University.</li>
        <li><strong>Jul 2025:</strong> Completed undergraduate thesis work on high-resolution GPP inversion for Chengdu.</li>
        <li><strong>Jun 2025:</strong> Received the B.Eng. degree in Remote Sensing Science and Technology from Southwest Jiaotong University.</li>
        <li><strong>2024-2025:</strong> Continued research writing across transportation optimization, remote-sensing ecological assessment, and medical AI review work.</li>
      </ul>
    </div>
    <div>
      <h2>Education and internships</h2>
      <ul class="clean-list">
        <li><strong>The Hong Kong Polytechnic University:</strong> M.Sc. in Urban Informatics and Smart Cities, 2025 - Present.</li>
        <li><strong>Southwest Jiaotong University:</strong> B.Eng. in Remote Sensing Science and Technology, 2021 - 2025. Average marks: 84.44/100.</li>
        <li><strong>Faculty of Geosciences and Engineering, SWJTU:</strong> engineering-survey internship with total station, RTK, CP III processing, and C# coordinate/database tooling.</li>
        <li><strong>Zhengzhou Metro Line 8 Project:</strong> subway-construction data collection internship.</li>
      </ul>
    </div>
  </div>
</section>

<section class="portfolio-section" id="additional-research">
  <div class="section-heading compact-heading">
    <p class="section-kicker">Earlier and adjacent work</p>
    <h1>Additional Research Experience</h1>
    <p>These projects are useful context, but they support the main research image rather than expanding it in every direction.</p>
  </div>

  <div class="compact-project-grid">
    <article>
      <img src="/images/projects/railway-vision.png" alt="Railway construction vision detection illustration">
      <h2>Machine Vision for Railway Construction</h2>
      <p>Labelme dataset construction, YOLOv8 testing, and visual inspection workflows for advanced support conduits in railway construction contexts.</p>
      <div class="tag-row"><span>Computer vision</span><span>YOLOv8</span><span>Dataset</span></div>
    </article>
    <article>
      <img src="/images/projects/nerf-heritage.png" alt="NeRF historic building reconstruction illustration">
      <h2>NeRF-Based Historic Building Modeling</h2>
      <p>UAV and robot-car collection strategy with NeRF-based reconstruction workflow verified on Wenshu Monastery in Chengdu.</p>
      <div class="tag-row"><span>NeRF</span><span>3D reconstruction</span><span>Heritage</span></div>
    </article>
    <article>
      <img src="/images/projects/remote-sensing-indexes.png" alt="Remote sensing ecological index illustration">
      <h2>Remote Sensing Indexes for Urban Ecology</h2>
      <p>Review work on urban ecological evaluation methods using remote-sensing indexes, connected to broader urban environmental monitoring interests.</p>
      <div class="tag-row"><span>Review</span><span>Urban ecology</span><span>Remote sensing</span></div>
    </article>
    <article>
      <img src="/images/projects/medical-ai.png" alt="Medical AI multimodal diagnosis illustration">
      <h2>Machine Learning in Medical Research</h2>
      <p>Literature synthesis, figure design, transfer-learning exploration, and prompt-based diagnostic benchmarking. Kept as adjacent AI research experience.</p>
      <div class="tag-row"><span>Medical AI</span><span>Review</span><span>Benchmarking</span></div>
    </article>
  </div>
</section>
