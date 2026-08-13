---
permalink: /
title: ""
excerpt: ""
lang: en
nav_key: main_en
body_class: portfolio-page
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<section class="portfolio-hero" id="research" aria-labelledby="research-title">
  <div class="hero-copy">
    <p class="hero-role">M.Sc. student · Urban Informatics and Smart Cities</p>
    <h1 id="research-title">Geospatial evidence,<br>from cities to RGB-D.</h1>
    <p class="hero-subtitle">I combine geospatial AI, urban sensing, computer vision, and reproducible remote-sensing workflows to study the built environment.</p>
    <p>I am an M.Sc. student at The Hong Kong Polytechnic University, with a B.Eng. in Remote Sensing Science and Technology from Southwest Jiaotong University. My work asks how spatial data, visual sensing, and reproducible computation can support more reliable urban and environmental analysis.</p>
    <div class="hero-actions" aria-label="Primary links">
      <a class="portfolio-button button-primary" href="#selected-work">View selected work</a>
      <a class="portfolio-button" href="mailto:yi-kai.wu@connect.polyu.hk">Start a conversation</a>
    </div>
    <p class="hero-links"><a href="https://github.com/Fwrog">GitHub</a><a href="https://orcid.org/0009-0004-2501-7877">ORCID</a><span>Hong Kong</span></p>
  </div>
  {% include research-atlas.html lang="en" %}
</section>

<span class="anchor" id="featured-projects"></span>
<section class="portfolio-section selected-work" id="selected-work" aria-labelledby="selected-work-title">
  <header class="section-heading">
    <h2 id="selected-work-title">Selected work</h2>
    <p>Three projects that connect a research question to inspectable code, a reproducible workflow, or a concrete research output.</p>
  </header>

  <article class="project-proof" id="project-gee">
    <figure class="project-visual">
      <img src="/images/projects/gee-agent-workflow.jpg" width="1200" height="675" loading="lazy" alt="GEE agent workflow preview">
      <figcaption>Plan → evidence → validation → confirmed Earth Engine export.</figcaption>
    </figure>
    <div class="project-story">
      <p class="project-domain">01 · Geospatial workflow</p>
      <h3>GEE Agent Skill</h3>
      <p class="project-deck">A plan-first harness for reviewable Earth Engine analysis.</p>
      <dl class="evidence-list">
        <div><dt>Problem</dt><dd>Natural-language geospatial requests are difficult to make safe, reviewable, and reproducible before a live export.</dd></div>
        <div><dt>Method</dt><dd>CLI contract, YAML plan schema, local evidence notes, template rendering, static validation, live preflight, confirmed export, and monitoring.</dd></div>
        <div><dt>Output</dt><dd>Public Python harness with a verified Hong Kong 2024 16-day NDVI CSV workflow as a regression-style example.</dd></div>
      </dl>
      <p class="method-line"><span>Python</span><span>Google Earth Engine</span><span>Jinja2</span><span>CLI</span></p>
      <p class="project-links"><a href="https://github.com/Fwrog/gee-agent-skill">GitHub repository</a><a href="https://github.com/Fwrog/gee-agent-skill#run-the-demo">Demo workflow</a></p>
    </div>
  </article>

  <article class="project-proof project-proof--reverse" id="project-rgbd">
    <figure class="project-visual project-visual--portrait">
      <img src="/images/projects/realsense-charuco.png" width="509" height="720" loading="lazy" alt="Printable RealSense ChArUco calibration target">
      <figcaption>Calibration target, camera parameters, alignment QC, and report.</figcaption>
    </figure>
    <div class="project-story">
      <p class="project-domain">02 · Computer vision / RGB-D</p>
      <h3>RealSense Calibration Tools</h3>
      <p class="project-deck">A repeatable calibration and quality-control toolkit for D435i experiments.</p>
      <dl class="evidence-list">
        <div><dt>Problem</dt><dd>RGB-D experiments need repeatable camera calibration, printable targets, and visual QC before reconstruction or defect measurement.</dd></div>
        <div><dt>Method</dt><dd>OpenCV ChArUco calibration, RealSense factory-parameter export, depth-to-color alignment checks, and HTML report generation.</dd></div>
        <div><dt>Output</dt><dd>GitHub-ready Python toolkit for Intel RealSense D435i workflows, with SOPs and clear local-output boundaries.</dd></div>
      </dl>
      <p class="method-line"><span>Python</span><span>OpenCV</span><span>RealSense SDK</span><span>RGB-D</span></p>
      <p class="project-links"><a href="https://github.com/Fwrog/realsense_calibration_tools">GitHub repository</a><a href="https://github.com/Fwrog/realsense_calibration_tools#typical-workflow">Typical workflow</a></p>
    </div>
  </article>

  <article class="project-proof" id="project-remote-sensing">
    <figure class="project-visual">
      <img src="/images/projects/gpp-inversion.png" width="900" height="520" loading="lazy" alt="Abstract map representing high-resolution GPP inversion in Chengdu">
      <figcaption>Satellite imagery and flux observations combined at urban scale.</figcaption>
    </figure>
    <div class="project-story">
      <p class="project-domain">03 · Remote-sensing research</p>
      <h3>High-Resolution GPP Inversion for Chengdu</h3>
      <p class="project-deck">Fine-scale vegetation productivity mapping from satellite and ground evidence.</p>
      <dl class="evidence-list">
        <div><dt>Problem</dt><dd>Fine-scale urban ecological assessment needs productivity estimates that connect satellite imagery with ground observations.</dd></div>
        <div><dt>Method</dt><dd>HLS v2.0 imagery, FLUXNET observations, Google Earth Engine, Python/MATLAB processing, and LSTM/SVM experiments by vegetation type.</dd></div>
        <div><dt>Output</dt><dd>Undergraduate thesis workflow and a high-resolution GPP map for Chengdu; public code packaging remains future work.</dd></div>
      </dl>
      <p class="method-line"><span>HLS v2.0</span><span>FLUXNET</span><span>GEE</span><span>Machine learning</span></p>
      <p class="project-links project-links--muted"><span>Thesis artifact</span><span>Code packaging pending</span></p>
    </div>
  </article>
</section>

<section class="portfolio-section publications-section" id="publications" aria-labelledby="publications-title">
  <header class="section-heading section-heading--compact">
    <h2 id="publications-title">Publications &amp; manuscripts</h2>
    <p>Publication status is stated explicitly.</p>
  </header>
  <div class="publication-groups">
    <div class="status-column">
      <h3>Published · 02</h3>
      <ol class="publication-list">
        <li>W. Fan, J. Xiao, <strong>Y. Wu</strong>, et al., “A Review of Optimization Methods for Low-Altitude Aircraft Operations,” <em>Journal of Transportation Engineering and Information</em>, pp. 1–24, 2025. Chinese. <a href="https://doi.org/10.19961/j.cnki.1672-4747.2025.06.044">DOI</a></li>
        <li><strong>Y. Wu</strong>, “Research Progress of Urban Ecological Evaluation Methods Based on Remote Sensing Indexes,” <em>Highlights in Science, Engineering and Technology</em>, vol. 108, pp. 27–33, 2024. <a href="https://doi.org/10.54097/rm8c6t44">DOI</a></li>
      </ol>
    </div>
    <div class="status-column">
      <h3>In preparation · 01</h3>
      <ol class="publication-list">
        <li>Y. Zhang, <strong>Y. Wu</strong>, R. Ai, Q. Zhang, J. Lin, Z. Liu, L. Kang, and R. Ai, “Machine Learning in Alzheimer's Disease: A Comprehensive Review of Methods, Data Modalities, and Future Directions.”</li>
      </ol>
      <p class="disclaimer">Manuscripts are separated from published work to keep status clear and conservative.</p>
    </div>
  </div>
</section>

<span class="anchor" id="academic-journey"></span>
<section class="portfolio-section journey-section" id="journey" aria-labelledby="journey-title">
  <header class="section-heading">
    <h2 id="journey-title">Academic journey</h2>
    <p>From remote sensing and photogrammetry in Chengdu to urban informatics and geospatial AI in Hong Kong.</p>
  </header>
  <div class="journey-layout">
    <figure class="journey-map-card">
      <div id="journey-map-en" class="leaflet-journey-map" data-map-lang="en" aria-label="Interactive academic route map from Chengdu to Hong Kong">
        <p class="map-fallback">Interactive map: Chengdu, Southwest Jiaotong University to Hong Kong, The Hong Kong Polytechnic University.</p>
      </div>
      <div class="journey-map-meta"><span>Chengdu / SWJTU</span><span>Study route</span><span>Hong Kong / PolyU</span></div>
      <figcaption>A real map gives place context; the timeline keeps location stages separate from research milestones.</figcaption>
    </figure>
    <div class="timeline">
      <article class="timeline-item">
        <span class="timeline-date">2021—2025</span>
        <h3>Southwest Jiaotong University, Chengdu</h3>
        <p>B.Eng. in Remote Sensing Science and Technology. Foundations in digital image processing, photogrammetry, remote sensing, 3D laser scanning, computer vision, and engineering surveying.</p>
      </article>
      <article class="timeline-item">
        <span class="timeline-date">2025—Present</span>
        <h3>The Hong Kong Polytechnic University, Hong Kong</h3>
        <p>M.Sc. in Urban Informatics and Smart Cities. Current work emphasizes advanced GIS, urban and geospatial big-data analysis, mobile GIS/LBS, remote-sensing image processing, and reproducible urban analytics.</p>
      </article>
    </div>
  </div>
  <div class="research-milestones" aria-label="Research milestones">
    <article><span>2023—2024</span><h3>Railway construction machine vision</h3><p>Dataset construction and YOLOv8 experiments for advanced support conduit detection.</p></article>
    <article><span>2024</span><h3>NeRF-based heritage reconstruction</h3><p>UAV and robot-car collection with a NeRF workflow tested around Wenshu Monastery.</p></article>
    <article><span>2024—2025</span><h3>Remote-sensing ecology and GPP inversion</h3><p>Review work on ecological indices and thesis research on high-resolution GPP mapping.</p></article>
  </div>
</section>

<span class="anchor" id="github-highlights"></span>
<span class="anchor" id="methods-skills"></span>
<section class="portfolio-section evidence-ledger" id="methods" aria-labelledby="methods-title">
  <header class="section-heading">
    <h2 id="methods-title">Code &amp; methods evidence</h2>
    <p>Repositories and capabilities are presented as an evidence ledger: what exists, what it demonstrates, and where the boundary remains.</p>
  </header>
  <div class="repo-ledger" aria-label="Public code repositories">
    <article><h3><a href="https://github.com/Fwrog/gee-agent-skill">gee-agent-skill</a></h3><p>Agent-native Earth Engine harness covering planning, evidence search, rendering, validation, preflight, export, monitoring, and trace artifacts.</p><p><span>Python · GEE · Reproducibility</span><strong>Next: more domain recipes.</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/realsense_calibration_tools">realsense_calibration_tools</a></h3><p>Printable targets, D435i parameter export, ChArUco calibration, RGB-D alignment QC, and report generation.</p><p><span>Python · OpenCV · RealSense</span><strong>Next: a privacy-reviewed result gallery.</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/HKFilmMap">HKFilmMap</a></h3><p>Hong Kong film-location Android LBS project with a Python data pipeline, SQLite seed database, Google Maps/Firebase integration, and route logic.</p><p><span>Java · Android · LBS · SQLite</span><strong>Public repository.</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/ChinaChoroKit">ChinaChoroKit</a></h3><p>Configuration-driven province-level choropleth maps with nine-dash-line handling, legends, scale bars, and PNG/SVG export.</p><p><span>Python · GeoPandas · Cartography</span><strong>Public repository.</strong></p></article>
    <article><h3><a href="https://github.com/Fwrog/Academic-Gantt-A-Pythonic-Tool-for-Scholarly-Timelines">Academic Gantt Tool</a></h3><p>CSV/Markdown to academic Gantt charts, with English/Chinese templates and PDF/PNG/SVG export.</p><p><span>Python · Visualization · Writing workflow</span><strong>Supporting workflow evidence.</strong></p></article>
  </div>
  <dl class="capability-ledger">
    <div><dt>Geospatial &amp; remote sensing</dt><dd>Google Earth Engine; HLS/Landsat/Sentinel workflows; ecological indices; GPP inversion; spatial processing; GIS visualization.</dd></div>
    <div><dt>Computer vision &amp; 3D</dt><dd>OpenCV; ChArUco/ArUco calibration; RealSense RGB-D alignment; Labelme datasets; YOLOv8 experiments; NeRF reconstruction.</dd></div>
    <div><dt>Programming &amp; modeling</dt><dd>Python; MATLAB; C/C++; C#; Java/Android; machine-learning experiments; data cleaning; evaluation; report automation.</dd></div>
    <div><dt>Research workflow</dt><dd>Plan-first workflows; reproducible CLI tools; GitHub documentation; LaTeX; Markdown; template-based reports; conservative claim tracking.</dd></div>
  </dl>
</section>

<span class="anchor" id="updates-education"></span>
<section class="portfolio-section education-section" id="education" aria-labelledby="education-title">
  <header class="section-heading section-heading--compact"><h2 id="education-title">Education &amp; updates</h2></header>
  <div class="two-column-list">
    <div>
      <h3>Education and internships</h3>
      <ul class="clean-list">
        <li><strong>The Hong Kong Polytechnic University</strong><span>M.Sc. in Urban Informatics and Smart Cities · 2025—Present</span></li>
        <li><strong>Southwest Jiaotong University</strong><span>B.Eng. in Remote Sensing Science and Technology · 2021—2025 · Average 84.44/100</span></li>
        <li><strong>Faculty of Geosciences and Engineering, SWJTU</strong><span>Engineering survey internship: total station, RTK, CP III processing, and C# coordinate/database tooling.</span></li>
        <li><strong>Zhengzhou Metro Line 8 Project</strong><span>Subway-construction data-collection internship.</span></li>
      </ul>
    </div>
    <div>
      <h3>Recent updates</h3>
      <ul class="clean-list">
        <li><strong>Sep 2025</strong><span>Started the M.Sc. program in Urban Informatics and Smart Cities at PolyU.</span></li>
        <li><strong>Jul 2025</strong><span>Completed undergraduate thesis work on high-resolution GPP inversion for Chengdu.</span></li>
        <li><strong>Jun 2025</strong><span>Received the B.Eng. in Remote Sensing Science and Technology from SWJTU.</span></li>
        <li><strong>2024—2025</strong><span>Research writing across transportation optimization, remote-sensing ecological assessment, and medical AI review work.</span></li>
      </ul>
    </div>
  </div>
</section>

<span class="anchor" id="additional-research"></span>
<section class="portfolio-section adjacent-section" id="adjacent-work" aria-labelledby="adjacent-title">
  <header class="section-heading">
    <h2 id="adjacent-title">Earlier &amp; adjacent work</h2>
    <p>Context for the main research image, with lower visual weight than the selected work above.</p>
  </header>
  <div class="adjacent-list">
    <article><img src="/images/projects/railway-vision.png" width="900" height="520" loading="lazy" alt="Railway construction vision detection illustration"><div><h3>Machine Vision for Railway Construction</h3><p>Labelme dataset construction, YOLOv8 testing, and visual inspection workflows for advanced support conduits in railway construction.</p><p class="method-line"><span>Computer vision</span><span>YOLOv8</span><span>Dataset</span></p></div></article>
    <article><img src="/images/projects/nerf-heritage.png" width="900" height="520" loading="lazy" alt="NeRF historic building reconstruction illustration"><div><h3>NeRF-Based Historic Building Modeling</h3><p>UAV and robot-car collection strategy with a NeRF reconstruction workflow verified at Wenshu Monastery in Chengdu.</p><p class="method-line"><span>NeRF</span><span>3D reconstruction</span><span>Heritage</span></p></div></article>
    <article><img src="/images/projects/remote-sensing-indexes.png" width="900" height="520" loading="lazy" alt="Remote-sensing ecological index illustration"><div><h3>Remote-Sensing Indexes for Urban Ecology</h3><p>Review work on urban ecological evaluation methods using remote-sensing indexes, connected to broader urban environmental monitoring.</p><p class="method-line"><span>Review</span><span>Urban ecology</span><span>Remote sensing</span></p></div></article>
    <article><img src="/images/projects/medical-ai.png" width="900" height="520" loading="lazy" alt="Medical AI multimodal diagnosis illustration"><div><h3>Machine Learning in Medical Research</h3><p>Literature synthesis, figure design, transfer-learning exploration, and prompt-based diagnostic benchmarking as adjacent AI research experience.</p><p class="method-line"><span>Medical AI</span><span>Review</span><span>Benchmarking</span></p></div></article>
  </div>
</section>
