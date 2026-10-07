# NAF Studio - Web Portal

Official community web portal and landing page for **NAF Studio**, presenting server connection details, navigation controls, and community links in a responsive static web interface.

---

## 1. Architectural Overview & Structure

```text
web-portal/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.yml
│   │   └── feature_request.yml
│   ├── workflows/
│   │   └── ci.yml
│   └── pull_request_template.md
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── scripts.js
│   └── images/
│       ├── copy-button.png
│       ├── left-button.png
│       ├── right-button.png
│       ├── server-icon.png
│       └── show-button.png
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

- **Separation of Concerns**: Markup (`index.html`), presentation styles (`assets/css/styles.css`), and dynamic behaviors (`assets/js/scripts.js`) maintain clean architectural boundaries.
- **Modern Clipboard Interaction**: Asynchronous clipboard copying via `navigator.clipboard.writeText()` coupled with legacy input fallback for older browsers.
- **Static Assets**: Consolidated static resources under `assets/images/` with standardized lowercase naming.
- **Code Quality Toolchain**: Automated styling with Prettier and code validation using modern ESLint flat configurations (`eslint.config.mjs`).

---

## 2. Local Preview & Development

Because the portal is built with vanilla HTML, CSS, and JavaScript, no build step or bundler is required.

### Local Server Preview

You can preview the portal locally using any lightweight static server:

```bash
# Option A: Using npx serve (Node.js)
npx serve .

# Option B: Using Python's built-in HTTP server
python -m http.server 8000
```

Then navigate to `http://localhost:8000` (or the URL displayed in your terminal) in any web browser.

---

## 3. Code Quality & Formatting

Linting and code style are verified using ESLint and Prettier:

```bash
# Install development dependencies
npm install

# Check code quality with ESLint
npm run lint

# Format files using Prettier
npm run format

# Verify formatting without writing changes
npm run format:check
```

---

## 4. Fonts & Asset Attribution

- **Playfair Display**: Licensed under the [SIL Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL_web).
- **Roboto & Jost**: Licensed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0).

---

## 5. Contributing

Contributions must follow the standards outlined in [CONTRIBUTING.md](CONTRIBUTING.md).

- **Conventional Commits**: Format commits with semantic prefixes (`feat:`, `fix:`, `style:`, `refactor:`, `chore:`).
- **Code Standards**: Write clean JSDoc annotations and format files with Prettier before submitting.

---

## 6. License

This project is licensed under the [MIT License](LICENSE). Copyright &copy; 2024&ndash;2026 [naipret](https://github.com/naipret).
