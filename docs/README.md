# Site files

Static HTML/CSS/JS with no build step. Open `index.html` in a browser, or deploy this folder as-is (GitHub Pages, Netlify, etc.).

- `index.html` — home page
- `syred.html`, `ditto.html`, `maju.html`, `sona.html` — case studies (Next links run SyRED → ditto → MAJU → SoNA → SyRED)
- `assets/modernist.css` — the Modernist design-system sheet, copied unchanged from the Claude Design bundle
- `assets/site.css` — the page layer
- `assets/site.js` — the KR/EN toggle. The choice is saved across pages, and `?lang=en` in the URL overrides it.

## Adding images

Every image box is a `<figure class="slot …">` with a caption. To fill one, put an `<img>` inside it:

```html
<figure class="slot grayscale phone phone-315">
  <span class="slot-cap">위험 징후 확인</span>
  <img src="images/syred-s1.png" alt="위험 징후 확인 화면">
</figure>
```

The image fills the box and the caption and dashed outline hide themselves. `grayscale` prints it in black and white, as the design system requires.
