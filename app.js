(function () {
  const SVG_NS = 'http://www.w3.org/2000/svg';

  const modeSelect = document.getElementById('mode-select');
  const mapTitle = document.getElementById('map-title');
  const outlineLayer = document.getElementById('outline-layer');
  const regionsLayer = document.getElementById('regions-layer');
  const subregionsLayer = document.getElementById('subregions-layer');
  const regionLabelsLayer = document.getElementById('region-labels-layer');
  const citiesLayer = document.getElementById('cities-layer');
  const infoPanel = document.getElementById('info-panel');

  const DATASETS = {
    geography: { data: GEOGRAPHY_DATA, shapes: GEOGRAPHY_SHAPES, showSubregions: true },
    native: { data: NATIVE_PEOPLES_DATA, shapes: NATIVE_SHAPES, showSubregions: false }
  };

  let activeRegionId = null;

  function el(tag, attrs) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const key in attrs) {
      node.setAttribute(key, attrs[key]);
    }
    return node;
  }

  function renderOutline() {
    outlineLayer.innerHTML = '';
    outlineLayer.appendChild(el('path', { d: TEXAS_OUTLINE }));
  }

  function renderCities() {
    citiesLayer.innerHTML = '';
    CITIES.forEach(function (city) {
      const anchor = city.anchor || 'start';
      const dot = el('circle', { class: 'city-dot', cx: city.x, cy: city.y, r: 3.2 });
      const label = el('text', {
        class: 'city-label',
        x: anchor === 'end' ? city.x - 5 : city.x + 5,
        y: city.y + 3 + (city.dy || 0),
        'text-anchor': anchor
      });
      label.textContent = city.name;
      citiesLayer.appendChild(dot);
      citiesLayer.appendChild(label);
    });
  }

  function renderSubregionLines(show) {
    subregionsLayer.innerHTML = '';
    if (!show) return;
    SUBREGION_LINES.forEach(function (line) {
      if (line.d) {
        subregionsLayer.appendChild(el('path', { class: 'subregion-line', d: line.d }));
      }
      if (line.label) {
        const label = el('text', {
          class: line.landform ? 'landform-label' : 'subregion-label',
          x: line.labelX,
          y: line.labelY,
          'text-anchor': line.anchor || 'start'
        });
        label.textContent = line.label;
        subregionsLayer.appendChild(label);
      }
    });
  }

  function renderRegionLabels(modeKey) {
    regionLabelsLayer.innerHTML = '';
    (REGION_LABELS[modeKey] || []).forEach(function (item) {
      const label = el('text', { class: 'region-name-label', x: item.x, y: item.y });
      label.textContent = item.text;
      regionLabelsLayer.appendChild(label);
    });
  }

  function renderInfoDefault(modeConfig) {
    infoPanel.classList.remove('has-content');
    infoPanel.innerHTML =
      '<div class="info-panel-default">' +
      '<h2>Pick a region</h2>' +
      '<p>Click any colored region on the map to see facts about it here.</p>' +
      '</div>';
  }

  function renderInfoForRegion(region, modeKey) {
    const tagLabel = modeKey === 'native' ? region.tribes : region.cities;
    const tagHeading = modeKey === 'native' ? 'Tribes' : 'Major cities in this region';
    const tags = (tagLabel || [])
      .map(function (t) { return '<span class="tag">' + t + '</span>'; })
      .join('');
    const paragraphs = region.paragraphs
      .map(function (p) { return '<p>' + p + '</p>'; })
      .join('');

    infoPanel.innerHTML =
      '<h2><span class="region-swatch" style="background:' + region.color + '"></span>' + region.name + '</h2>' +
      '<div>' +
      '<div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:4px;">' + tagHeading + '</div>' +
      '<div class="tag-row">' + tags + '</div>' +
      '</div>' +
      paragraphs;
  }

  function setActiveRegion(regionId, region, modeKey) {
    const shapes = regionsLayer.querySelectorAll('.region-shape');
    if (activeRegionId === regionId) {
      // Clicking the active region again resets to the overview state.
      activeRegionId = null;
      regionsLayer.classList.remove('has-active');
      shapes.forEach(function (s) {
        s.classList.remove('is-active');
        s.setAttribute('aria-pressed', 'false');
      });
      renderInfoDefault();
      return;
    }
    activeRegionId = regionId;
    regionsLayer.classList.add('has-active');
    shapes.forEach(function (s) {
      const isActive = s.dataset.regionId === regionId;
      s.classList.toggle('is-active', isActive);
      s.setAttribute('aria-pressed', String(isActive));
    });
    renderInfoForRegion(region, modeKey);
  }

  function renderRegions(modeKey) {
    const config = DATASETS[modeKey];
    regionsLayer.innerHTML = '';
    regionsLayer.classList.remove('has-active');
    activeRegionId = null;

    config.data.regions.forEach(function (region) {
      const d = config.shapes[region.shapeId];
      const path = el('path', {
        class: 'region-shape',
        d: d,
        fill: region.color,
        tabindex: '0',
        role: 'button',
        'aria-label': region.name,
        'aria-pressed': 'false'
      });
      path.dataset.regionId = region.id;
      path.addEventListener('click', function () {
        setActiveRegion(region.id, region, modeKey);
      });
      path.addEventListener('keydown', function (evt) {
        if (evt.key === 'Enter' || evt.key === ' ') {
          evt.preventDefault();
          setActiveRegion(region.id, region, modeKey);
        }
      });
      regionsLayer.appendChild(path);
    });

    renderSubregionLines(config.showSubregions);
    renderRegionLabels(modeKey);
    renderInfoDefault();
    mapTitle.textContent = config.data.label;
  }

  function init() {
    // Optional deep-link params: ?mode=native|geography&region=<region-id>
    const params = new URLSearchParams(window.location.search);
    const modeParam = params.get('mode');
    if (modeParam && DATASETS[modeParam]) {
      modeSelect.value = modeParam;
    }

    renderOutline();
    renderRegions(modeSelect.value);
    renderCities();

    const regionParam = params.get('region');
    if (regionParam) {
      const modeKey = modeSelect.value;
      const region = DATASETS[modeKey].data.regions.find(function (r) {
        return r.id === regionParam;
      });
      if (region) {
        setActiveRegion(region.id, region, modeKey);
      }
    }

    modeSelect.addEventListener('change', function () {
      renderRegions(modeSelect.value);
    });
  }

  init();
})();
