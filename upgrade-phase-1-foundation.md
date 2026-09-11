# Upgrade Tracking — Phase 1: Foundation and Audit

## Scope

Dokumen ini melacak Phase 1 sampai Phase 11 dari master refactor plan. Fokusnya adalah memahami repository, menetapkan ownership setiap file, memindahkan komponen ke arsitektur target, dan menjaga data serta utility tetap terpusat.

## Execution Status — 2026-09-11

- [x] Source, public assets, tests, config, dependencies, dan entry points sudah diaudit.
- [x] Tidak ditemukan file aktif yang aman untuk dihapus pada phase ini.
- [x] Layout dipindahkan ke `src/components/layout/`.
- [x] Generic UI dipindahkan ke `src/components/ui/`.
- [x] Project feature dipindahkan ke `src/features/projects/`.
- [x] Cyber Lab feature dipindahkan ke `src/features/cyberlab/`.
- [x] Terminal feature dipindahkan ke `src/features/terminal/`.
- [x] `src/App.jsx` dipindahkan ke `src/app/App.jsx`.
- [x] Homepage dipecah menjadi section components dan `HomePage.jsx` menjadi composition layer.
- [x] Data ownership tetap berada di `src/data/`.
- [x] Utility ownership tetap berada di `src/utils/`.
- [x] `IconCarousel.jsx` sengaja belum dipindahkan karena akan ditangani pada Phase 2 sebagai homepage-specific section dependency.
- [x] Validation: `npm run lint`, `npm run test`, dan `npm run build` berhasil.

### Current Tree Result

```text
src/
├── app/App.jsx
├── components/
│   ├── IconCarousel.jsx
│   ├── layout/
│   └── ui/
├── features/
│   ├── projects/
│   ├── cyberlab/
│   └── terminal/
├── sections/
├── pages/
├── data/
├── utils/
├── index.css
└── main.jsx
```

## Status Legend

- [ ] Belum dikerjakan
- [~] Sedang dikerjakan
- [x] Selesai
- [!] Perlu keputusan atau perhatian khusus

## Definition of Done Phase 1

- [x] Seluruh source, public asset, test, config, dan dependency sudah diaudit.
- [x] Setiap file memiliki kategori dan owner yang jelas.
- [x] Tidak ada komponen global tercampur dengan feature component.
- [x] App berpindah ke `src/app/App.jsx` tanpa broken import.
- [x] Layout, UI, projects, cyberlab, dan terminal berada di folder yang tepat.
- [x] Data proyek dan lab tetap centralized dan tidak diduplikasi.
- [x] Utility terminal tetap pure dan reusable.
- [x] Semua fitur lama tetap tersedia.

---

# Phase 1 — Full Codebase Audit

## Repository Audit

- [ ] Inspect `src/` secara menyeluruh.
- [ ] Inspect `public/` dan klasifikasikan setiap asset.
- [ ] Inspect `tests/` dan coverage yang sudah ada.
- [ ] Inspect `package.json` dan `package-lock.json`.
- [ ] Inspect `vite.config.js`.
- [ ] Inspect `eslint.config.js`.
- [ ] Inspect `index.html`.
- [ ] Inspect `README.md`.
- [ ] Cari semua import dan reference setiap komponen.
- [ ] Cari reference dari test, HTML, public asset, Vite, dan Netlify.
- [ ] Catat file legacy hanya setelah dependency map selesai.

## Dependency Map

Untuk setiap file, catat:

```text
File
↓
Imported by
↓
Imports
↓
Responsibilities
↓
Keep / Move / Merge / Delete
```

## Audit Questions

- [ ] File mana yang digunakan lebih dari satu halaman?
- [ ] File mana yang hanya digunakan oleh projects?
- [ ] File mana yang hanya digunakan oleh cyberlab?
- [ ] File mana yang hanya digunakan oleh terminal?
- [ ] Utility mana yang pure dan reusable?
- [ ] Apakah ada component dengan tanggung jawab ganda?
- [ ] Apakah ada CSS ownership yang tidak jelas?
- [ ] Apakah ada stale file dari desain lama?
- [ ] Apakah `upgrade.md` atau dokumen lain masih dibutuhkan?

## Evidence Log

| File / Area | Imported by | Responsibility | Decision | Reason |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

---

# Phase 2 — File Classification

Klasifikasikan setiap source file menjadi satu kategori berikut:

- [ ] Global layout
- [ ] UI
- [ ] Feature
- [ ] Page
- [ ] Section
- [ ] Data
- [ ] Utility
- [ ] Test
- [ ] Config
- [ ] Asset
- [ ] Legacy / unused

## Target Classification

### Global Layout

Pindahkan komponen yang digunakan lintas halaman:

- [ ] `Navbar.jsx` → `src/components/layout/Navbar.jsx`
- [ ] `Footer.jsx` → `src/components/layout/Footer.jsx`
- [ ] `BackToTop.jsx` → `src/components/layout/BackToTop.jsx`

### UI

- [ ] `SectionHeading.jsx` → `src/components/ui/SectionHeading.jsx`
- [ ] Pastikan folder UI hanya berisi komponen generik.
- [ ] Jangan memasukkan project atau cyberlab component ke UI.

### Feature

- [ ] Project components diklasifikasikan sebagai projects feature.
- [ ] Cyber Lab components diklasifikasikan sebagai cyberlab feature.
- [ ] Profile terminal diklasifikasikan sebagai terminal feature.

### Pages

- [ ] `HomePage.jsx` tetap menjadi page composition layer.
- [ ] `ProjectsPage.jsx` tetap menjadi archive page.
- [ ] `CyberLabPage.jsx` tetap menjadi lab archive page.

### Data

- [ ] `projects.js` tetap menjadi owner semua project data.
- [ ] `cyberLabs.js` tetap menjadi owner semua lab data.

### Utilities

- [ ] `portfolio.js` tetap menyimpan theme, routing, dan project helpers.
- [ ] `terminal.js` tetap menyimpan command resolver dan suggestion logic.

---

# Phase 3 — Projects Feature

Pindahkan:

```text
src/components/ProjectCard.jsx
src/components/ProjectModal.jsx
```

menjadi:

```text
src/features/projects/ProjectCard.jsx
src/features/projects/ProjectModal.jsx
```

## Preserve Behavior

- [ ] Project card tetap render semua project.
- [ ] Project filter tetap berfungsi.
- [ ] Project status tetap tampil.
- [ ] Technologies tetap tampil.
- [ ] Features tetap tampil.
- [ ] GitHub link tetap benar.
- [ ] Live demo link hanya tampil bila tersedia.
- [ ] Repository pending state tetap ada.
- [ ] Modal tetap terbuka dari card.
- [ ] Modal close button berfungsi.
- [ ] Escape menutup modal.
- [ ] Backdrop menutup modal.
- [ ] Focus masuk ke modal.
- [ ] Focus kembali ke trigger.
- [ ] Background modal tetap inert.
- [ ] Reduced motion tetap didukung.

## Import Audit

- [ ] Update import di `HomePage.jsx` atau `ProjectsSection.jsx`.
- [ ] Update import di `ProjectsPage.jsx`.
- [ ] Update import internal `ProjectCard` → `ProjectModal`.
- [ ] Search repository untuk old import path.
- [ ] Pastikan tidak ada `ProjectCardNew`, `ProjectCardV2`, atau duplicate.

---

# Phase 4 — Cyber Lab Feature

Pindahkan:

```text
src/components/CyberLabCard.jsx
src/components/CyberLabDetail.jsx
src/components/CyberLabTerminal.jsx
```

menjadi:

```text
src/features/cyberlab/CyberLabCard.jsx
src/features/cyberlab/CyberLabDetail.jsx
src/features/cyberlab/CyberLabTerminal.jsx
```

## Preserve Lab Behavior

- [ ] Lab selection tetap bekerja.
- [ ] Active lab state tetap benar.
- [ ] Title berubah sesuai lab.
- [ ] Progress berubah sesuai lab.
- [ ] Difficulty berubah sesuai lab.
- [ ] Objective berubah sesuai lab.
- [ ] Scenario berubah sesuai lab.
- [ ] Topics berubah sesuai lab.
- [ ] Tools berubah sesuai lab.
- [ ] Checkpoints berubah sesuai lab.
- [ ] Learning outcome berubah sesuai lab.
- [ ] Result berubah sesuai lab.
- [ ] Terminal intro berubah sesuai lab.
- [ ] Terminal state reset saat lab berganti.
- [ ] History reset saat lab berganti.
- [ ] Input reset saat lab berganti.
- [ ] Lab-specific commands tetap bekerja.

## Accessibility

- [ ] Lab button memiliki `aria-pressed`.
- [ ] Active state tidak hanya bergantung pada warna.
- [ ] Progress memiliki `role="progressbar"` bila digunakan.
- [ ] Terminal input memiliki label.
- [ ] Output memiliki `aria-live`.

---

# Phase 5 — Terminal Feature

Pindahkan:

```text
src/components/Terminal.jsx
```

menjadi:

```text
src/features/terminal/Terminal.jsx
```

## Rules

- [ ] Jangan menggabungkan profile terminal dengan Cyber Lab terminal secara paksa.
- [ ] Share visual tokens, bukan state implementation.
- [ ] Pertahankan profile terminal.
- [ ] Pertahankan security terminal.
- [ ] Pastikan terminal feature tidak bergantung pada page-specific data.
- [ ] Buat primitive baru hanya bila ada reuse nyata.

---

# Phase 6 — Homepage Section Refactor Preparation

Siapkan folder:

```text
src/sections/
```

Target file:

- [ ] `HeroSection.jsx`
- [ ] `AboutSection.jsx`
- [ ] `SkillsSection.jsx`
- [ ] `ExperienceSection.jsx`
- [ ] `ProjectsSection.jsx`
- [ ] `CybersecuritySection.jsx`
- [ ] `LearningSection.jsx`
- [ ] `ActivitySection.jsx`
- [ ] `ContactSection.jsx`

Aturan:

- [ ] Satu section memiliki satu responsibility.
- [ ] Section menerima props yang diperlukan.
- [ ] Section tidak mengelola global routing.
- [ ] Section tidak menduplikasi data.
- [ ] Section tidak membuat nested `<main>`.
- [ ] Section tetap memakai latest light-first design.

---

# Phase 7 — Home Page State Audit

State application-level yang dipertahankan:

- [ ] `theme`
- [ ] `view`
- [ ] `pendingSection`

State page-level yang boleh tetap di HomePage:

- [ ] `filter`
- [ ] `activeLab`

Rules:

- [ ] Jangan menambahkan Context tanpa prop drilling nyata.
- [ ] Jangan memindahkan state ke section hanya demi memecah file.
- [ ] State yang memengaruhi lebih dari satu section tetap berada pada owner terdekat.
- [ ] Routing tetap berada di app layer dan utility.

---

# Phase 8 — App Location

Pindahkan:

```text
src/App.jsx → src/app/App.jsx
```

Checklist:

- [ ] Buat `src/app/`.
- [ ] Move App tanpa membuat duplicate.
- [ ] Update `src/main.jsx` menjadi `import App from './app/App'`.
- [ ] Update seluruh relative imports di App.
- [ ] Pastikan Vite entry tetap bekerja.
- [ ] Search old `./App` imports.

---

# Phase 9 — Routing Preservation

Pertahankan URL:

```text
/
?page=projects
?page=cybersecurity-lab
```

Checklist:

- [ ] Home route.
- [ ] Projects route.
- [ ] Cyber Lab route.
- [ ] Browser back.
- [ ] Browser forward.
- [ ] Direct URL.
- [ ] Refresh.
- [ ] Anchor section navigation.
- [ ] Pending section scrolling.
- [ ] Mobile menu closes after navigation.
- [ ] No React Router unless benar-benar dibutuhkan.

Routing ownership:

- [ ] App state di `src/app/App.jsx`.
- [ ] Parsing/helper di `src/utils/portfolio.js`.
- [ ] Tidak ada routing logic di section visual.

---

# Phase 10 — Data Ownership

Project schema canonical:

```js
{
  id,
  title,
  subtitle,
  category,
  preview,
  description,
  technologies,
  features,
  overview,
  problem,
  solution,
  role,
  challenges,
  status,
  github,
  demo,
  repository
}
```

Cyber Lab schema canonical:

```js
{
  id,
  title,
  status,
  difficulty,
  progress,
  objective,
  scenario,
  topics,
  tools,
  checkpoints,
  result,
  whatIlearned,
  commands,
  terminalIntro
}
```

Checklist:

- [ ] Tidak ada project content duplicate di JSX.
- [ ] Tidak ada lab content duplicate di JSX.
- [ ] Tidak ada competing schema.
- [ ] Missing link menggunakan `null`.
- [ ] Empty state tersedia untuk data yang hilang.
- [ ] Repository cards berasal dari project data.

---

# Phase 11 — Utility Audit

`src/utils/portfolio.js`:

- [ ] `getStoredTheme()`.
- [ ] `storeTheme()`.
- [ ] `getNextTheme()`.
- [ ] `getCurrentPage()`.
- [ ] `getProjectFilters()`.
- [ ] `getProjectStats()`.
- [ ] Semua function pure kecuali storage boundary.

`src/utils/terminal.js`:

- [ ] `safeCommands`.
- [ ] `defaultResponses`.
- [ ] `getCommandSuggestions()`.
- [ ] `resolveCommand()`.
- [ ] Tidak ada duplicate resolver di React component.
- [ ] Unknown command tidak crash.
- [ ] Clear dan history memiliki behavior yang konsisten.

---

# Phase 1 Validation

Jalankan setelah Phase 1:

```bash
npm run lint
npm run test
npm run build
```

Acceptance:

- [ ] No broken import.
- [ ] No duplicate component.
- [ ] No functionality loss.
- [ ] No Bootstrap dependency.
- [ ] No unresolved lint error.
- [ ] Build berhasil.
