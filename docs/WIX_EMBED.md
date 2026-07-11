# Embedding the Texas Map in Wix

The app is live at:

**https://mystery-revealed.github.io/texas-interactive-map/**

You embed that live URL into your Wix page with an iframe. Wix calls this an **HTML iframe / Embed a Widget** element.

## Steps in the Wix Editor
1. Open your Wix site in the **Editor**.
2. Go to the page where the map should appear.
3. Click **Add Elements** (the **+** button) → **Embed Code** → **Embed a Widget** (or **Popular → HTML iframe**).
4. A gray placeholder box appears on the page. Click it, then click **Enter Code**.
5. Choose the **Website Address (URL)** option and paste:
   ```
   https://mystery-revealed.github.io/texas-interactive-map/
   ```
   (If Wix only shows a "Code" box instead of a URL box, paste the iframe snippet below instead.)
6. Drag the box's handles to size it — about **1000 px wide by 720 px tall** works well on desktop. Wix will scroll inside the box if content is taller.
7. Click **Preview** to test, then **Publish**.

## If Wix asks for an iframe code snippet instead of a URL
Paste this:
```html
<iframe
  src="https://mystery-revealed.github.io/texas-interactive-map/"
  title="Interactive Texas Map — Regions and Native People"
  width="1000"
  height="720"
  style="border:0; width:100%; max-width:1000px;"
  loading="lazy">
</iframe>
```

## Deep links (optional)
You can point a Wix button or menu link straight to a specific map or region by adding parameters to the URL:

- Open on the Native People map:
  `https://mystery-revealed.github.io/texas-interactive-map/?mode=native`
- Open with a region already selected:
  `https://mystery-revealed.github.io/texas-interactive-map/?mode=geography&region=great-plains`

Region ids: `coastal-plains`, `north-central-plains`, `great-plains`, `mountains-basins`, `gulf-culture`, `plains-culture`, `puebloan-culture`, `southeastern-culture`.

## Updating the app later
The Wix page always shows whatever is live on GitHub Pages. To change the map or its text:
1. Edit the files in the project (mostly `data/regions.js`, `data/nativePeoples.js`, or `data/mapShapes.js`).
2. Commit and push to GitHub (`git add -A && git commit -m "..." && git push`).
3. GitHub Pages rebuilds in a minute or two; the Wix page updates automatically. You do **not** need to touch Wix again.

## Sizing / mobile note
The layout is responsive: below ~760 px wide it stacks the map on top and the text below. On a phone, viewers may need to scroll within the embed. If the embed feels cramped on mobile in Wix, increase the element's height on the mobile layout in the Wix mobile editor.
