# NAF Studio - Web Portal

Official community web portal and landing page for NAF Studio, presenting server connection details, navigation controls, and community links in a responsive static web interface.

---

## 1. Architectural Overview & Structure

```text
web-portal/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   └── pull_request_template.md
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
├── .editorconfig
├── .gitattributes
├── .gitignore
├── .prettierrc
├── CONTRIBUTING.md
├── eslint.config.mjs
├── index.html
├── LICENSE
├── package.json
└── README.md
```

### Key Technical Aspects

- Markup (`index.html`), presentation styles (`assets/css/styles.css`), and dynamic behaviors (`assets/js/scripts.js`) maintain clean architectural boundaries.
- Asynchronous clipboard copying via `navigator.clipboard.writeText()` coupled with legacy input fallback for older browsers.
- Consolidated static resources under `assets/images/` with standardized lowercase naming.
- Automated styling with Prettier and code validation using modern ESLint flat configurations (`eslint.config.mjs`).

---

## 2. Local Preview & Development

Because the portal is built with vanilla HTML, CSS, and JavaScript, no build step or bundler is required.

### Local Server Preview

You can preview the portal locally using any lightweight static server:

```bash
npx serve .

python -m http.server 8000
```

Then navigate to `http://localhost:8000` (or the URL displayed in your terminal) in any web browser.

---

## 3. Code Quality & Formatting

Linting and code style are verified using ESLint and Prettier:

```bash
npm install

npm run lint

npm run format

npm run format:check
```

---

## 4. Fonts & Asset Attribution

- Playfair Display: Licensed under the [SIL Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web).
- Roboto & Jost: Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

---

## 5. Contributing

Contributions must follow the standards outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

---

## 6. License

This project is licensed under the [MIT License](LICENSE). Copyright &copy; 2024 [naipret](https://github.com/naipret).
