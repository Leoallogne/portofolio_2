# Upgrade Tracking — Phase 3: QA, Integration, and Release

## Scope

Dokumen ini melacak Phase 20 sampai Phase 30. Fokusnya adalah validasi aman sebelum delete, test architecture, dependency/build audit, integrasi semua halaman, responsive QA, dan final acceptance.

## Execution Status — 2026-09-11

- [x] Tidak ada file aktif yang dihapus tanpa evidence.
- [x] Tidak ditemukan duplicate component, `ProjectCardV2`, `BaseCard`, atau abstraction sementara.
- [x] Canonical project schema divalidasi; field `demo` dinormalisasi menjadi `null` bila belum tersedia.
- [x] Skills data dipisahkan ke `src/data/skills.js` dan diberi test integrity.
- [x] `IconCarousel` berada di `src/components/ui/IconCarousel.jsx` sesuai target architecture.
- [x] Canonical lab schema dan command contract divalidasi.
- [x] Test suite bertambah menjadi 13 passing tests.
- [x] Dependency audit: 0 vulnerabilities.
- [x] `npm install --package-lock-only` berhasil dan lockfile tersinkron.
- [x] Lint berhasil.
- [x] Production build berhasil.
- [x] Vite dev server berhasil start di port alternatif `5174` karena `5173` sedang digunakan.
- [x] Production preview berhasil dengan `npx vite preview --host=127.0.0.1` di `http://127.0.0.1:4173/`.
- [~] Browser manual QA untuk 12 viewport dan seluruh keyboard/UI interaction masih pending.
- [~] CSS historical overrides masih memerlukan cleanup khusus sebelum final release.

### Release Evidence

```text
Install: PASS
Audit: 0 vulnerabilities
Lint: PASS
Tests: 12 passed
Build: PASS
Dev server: PASS, http://localhost:5174/
Preview: PASS, http://127.0.0.1:4173/
Manual browser QA: Pending
```

## Definition of Done Phase 3

- [x] Tidak ada file yang dihapus tanpa evidence.
- [x] Semua test utility dan schema penting tersedia.
- [x] Semua page dan section terintegrasi pada build.
- [~] Project system lulus test manual.
- [~] Cyber Lab lulus test manual.
- [x] Theme utility dan persistence contract lulus test.
- [~] Responsive QA selesai.
- [x] Lint, test, dan build berhasil.
- [x] Homepage light-first tetap terjaga pada source dan build.

## Status Legend

- [ ] Belum dikerjakan
- [~] Sedang dikerjakan
- [x] Selesai
- [!] Perlu keputusan atau perhatian khusus

---

# Phase 20 — Delete Only After Validation

Sebelum delete file atau folder:

1. [ ] Search semua import.
2. [ ] Confirm tidak ada reference test.
3. [ ] Confirm tidak ada runtime/config reference.
4. [ ] Confirm tidak ada public/deployment dependency.
5. [ ] Confirm feature berjalan tanpa file tersebut.
6. [ ] Catat alasan delete.
7. [ ] Delete satu kelompok kecil saja.
8. [ ] Jalankan lint/test/build setelah delete.

## Delete Log

| Path | Import search | Runtime/config check | Test check | Decision | Validation |
| --- | --- | --- | --- | --- | --- |
|  |  |  |  |  |  |
|  |  |  |  |  |  |

Jangan menyimpan:

- [ ] Old component implementation.
- [ ] Duplicate component.
- [ ] Temporary migration file.
- [ ] `ProjectCardV2` atau nama sejenis.
- [ ] File “future use” tanpa reference nyata.

---

# Phase 21 — No Duplicate Components

Checklist:

- [ ] Satu canonical `ProjectCard`.
- [ ] Satu canonical `ProjectModal`.
- [ ] Satu canonical `CyberLabCard`.
- [ ] Satu canonical `CyberLabDetail`.
- [ ] Satu canonical `CyberLabTerminal`.
- [ ] Satu canonical profile `Terminal`.
- [ ] Tidak ada old/new pair.
- [ ] Tidak ada duplicate section implementation.
- [ ] Semua import mengarah ke canonical path.

---

# Phase 22 — Do Not Over-Abstract

Review setiap abstraction baru:

- [ ] Dipakai oleh minimal dua consumer nyata.
- [ ] Mengurangi complexity.
- [ ] Tidak menyembunyikan behavior penting.
- [ ] Tidak mengubah public API tanpa alasan.
- [ ] Tidak hanya dibuat untuk mengurangi jumlah baris.

Hindari:

- [ ] `BaseCard`.
- [ ] `BaseButton`.
- [ ] `BaseModal`.
- [ ] `GenericPanel`.
- [ ] `UniversalSection`.
- [ ] `UniversalGrid`.
- [ ] Context tanpa state sharing yang nyata.

---

# Phase 23 — Test Architecture

Pertahankan test ringan berbasis Node tanpa menambah framework besar hanya untuk refactor struktur.

## Data Tests

- [ ] Project IDs unique.
- [ ] Lab IDs unique.
- [ ] Required project fields tersedia.
- [ ] Required lab fields tersedia.
- [ ] Repository cards berasal dari project data.
- [ ] Project filters berasal dari category data.
- [ ] Project stats berasal dari status data.

## Routing Tests

- [ ] `getCurrentPage('/')` → home.
- [ ] `?page=projects` → projects.
- [ ] `?page=cybersecurity-lab` → cybersecurity lab.
- [ ] Unknown page fallback ke home.

## Theme Tests

- [ ] Default theme adalah light.
- [ ] Invalid stored theme fallback ke light.
- [ ] Storage unavailable tidak crash.
- [ ] Valid theme dapat disimpan.
- [ ] `getNextTheme('light')` → dark.
- [ ] `getNextTheme('dark')` → light.
- [ ] Theme state persistence dapat disimulasikan.

## Terminal Tests

- [ ] `help`.
- [ ] `clear`.
- [ ] `whoami`.
- [ ] `pwd`.
- [ ] `ls`.
- [ ] `cat`.
- [ ] `ip addr`.
- [ ] `ping`.
- [ ] `scan`.
- [ ] `history`.
- [ ] Unknown command.
- [ ] Suggestions untuk `p`.
- [ ] Suggestions untuk `ip`.
- [ ] Lab-specific command override.

## UI Interaction Tests

Bila environment mendukung:

- [ ] Navbar drawer open/close.
- [ ] Escape drawer.
- [ ] Focus return drawer.
- [x] Light-only theme is enforced without theme controls or persistence.
- [ ] Project filter.
- [ ] Project modal open/close.
- [ ] Escape modal.
- [ ] Backdrop modal.
- [ ] Focus trap modal.
- [ ] Lab selection.
- [ ] Terminal input.

---

# Phase 24 — Final Dependency Audit

Inspect `package.json`:

Expected runtime dependencies:

```text
react
react-dom
framer-motion
lucide-react
```

Expected build/dev dependencies:

```text
vite
@vitejs/plugin-react
eslint
eslint plugins/config
```

Checklist:

- [ ] Semua dependency digunakan.
- [ ] `bootstrap` tidak ada.
- [ ] `@popperjs/core` tidak ada bila tidak dibutuhkan.
- [ ] Tidak ada unused package.
- [ ] `package-lock.json` tersinkron.
- [ ] `npm install` tidak menghasilkan error.
- [ ] Audit npm diperiksa.

---

# Phase 25 — Vite and Build Validation

Jalankan:

```bash
npm install
npm run lint
npm run test
npm run build
```

Checklist:

- [ ] Install berhasil.
- [ ] Lint berhasil.
- [ ] Test berhasil.
- [ ] Build berhasil.
- [ ] Tidak ada unresolved import.
- [ ] Tidak ada compile warning baru.
- [ ] Tidak ada missing asset.
- [ ] `npm run dev` dapat start.
- [ ] `npm run preview` dapat serve build.
- [ ] Tidak ada console error yang disebabkan refactor.

Catat hasil:

```text
Install:
Lint:
Test:
Build:
Dev server:
Preview:
Notes:
```

---

# Phase 26 — Page Integration Test

## Homepage Flow

- [ ] Home render.
- [ ] About terlihat.
- [ ] Skills terlihat.
- [ ] Experience terlihat.
- [ ] Projects terlihat.
- [ ] Cybersecurity terlihat.
- [ ] Next Chapter terlihat.
- [ ] Activity terlihat.
- [ ] Contact terlihat.
- [ ] Footer terlihat.
- [ ] Navbar menuju setiap anchor.
- [ ] Footer menuju setiap anchor.

## Page Navigation

- [ ] Home → Projects.
- [ ] Home → Cybersecurity Lab.
- [ ] Projects → Home.
- [ ] Cybersecurity Lab → Home.
- [ ] Projects → Cybersecurity Lab bila tersedia.
- [ ] Browser Back.
- [ ] Browser Forward.
- [ ] Refresh pada Home.
- [ ] Refresh pada Projects.
- [ ] Refresh pada Cyber Lab.
- [ ] Direct URL.
- [ ] Mobile navigation close setelah memilih link.

---

# Phase 27 — Project System Test

Untuk setiap project:

- [ ] Card render.
- [ ] Preview render.
- [ ] Category render.
- [ ] Description render.
- [ ] Features render.
- [ ] Technologies render.
- [ ] Status render.
- [ ] Filter bekerja.
- [ ] Empty state bekerja.
- [ ] Detail button membuka modal.
- [ ] Close button bekerja.
- [ ] Escape bekerja.
- [ ] Backdrop close bekerja.
- [ ] Tab focus trap bekerja.
- [ ] Focus kembali ke trigger.
- [ ] GitHub link benar.
- [ ] Live demo hanya tampil bila valid.
- [ ] Mobile modal dapat di-scroll.
- [ ] Close button mobile tetap terlihat.
- [ ] Body scroll terkunci saat modal terbuka.

---

# Phase 28 — Cyber Lab Test

Untuk setiap lab:

- [ ] Networking Fundamentals.
- [ ] Linux Fundamentals.
- [ ] Web Security.
- [ ] Metasploit Fundamentals.

Verifikasi:

- [ ] Selection.
- [ ] Active state.
- [ ] Progress.
- [ ] Difficulty.
- [ ] Objective.
- [ ] Scenario.
- [ ] Topics.
- [ ] Tools.
- [ ] Commands.
- [ ] Learning outcomes.
- [ ] Checkpoints.
- [ ] Result.
- [ ] Terminal intro.
- [ ] Terminal reset setelah switch lab.

Command matrix:

| Command | Expected |
| --- | --- |
| `help` | Menampilkan command list |
| `clear` | Mereset output ke intro |
| `whoami` | Menampilkan identity lab |
| `pwd` | Menampilkan workspace |
| `ls` | Menampilkan simulated files |
| `cat` | Menampilkan lab note |
| `ip addr` | Menampilkan simulated interface |
| `ping` | Menampilkan simulated response |
| `scan` | Menampilkan controlled lab result |
| `history` | Menampilkan command history |
| unknown | Fallback tanpa crash |

---

# Phase 29 — Home Design Preservation

Refactor arsitektur tidak boleh merusak latest homepage design:

- [ ] Light-first.
- [ ] Editorial.
- [ ] Minimal.
- [ ] Professional.
- [ ] Technical tanpa agresif.
- [ ] Clean grid.
- [ ] Controlled accent colors.
- [ ] Large typography.
- [ ] Subtle borders.
- [ ] Restrained cards.
- [ ] Technical terminal blocks.

Pastikan tidak kembali ke:

- [ ] Old dark homepage.
- [ ] Bootstrap template.
- [ ] Legacy card styles.
- [ ] Obsolete spacing.
- [ ] Old responsive behavior.
- [ ] Neon overload.
- [ ] Muted text yang terlalu pucat.
- [ ] Dark background di semua section.

---

# Phase 30 — Final Target and Acceptance

Target architecture:

```text
src/
├── app/App.jsx
├── components/
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

Final acceptance:

- [ ] No unnecessary source file remains.
- [ ] No duplicate component remains.
- [ ] No obsolete implementation remains.
- [ ] `components/` hanya berisi reusable/global components.
- [ ] Feature-specific components berada di `features/`.
- [ ] Homepage sections berada di `sections/`.
- [ ] Pages hanya compose page content.
- [ ] Data tetap centralized.
- [ ] Utility logic tetap centralized.
- [ ] Bootstrap tidak kembali.
- [ ] Tidak ada broken import.
- [ ] Tidak ada unused import.
- [ ] Tidak ada dead code baru.
- [ ] Tidak ada functionality loss.
- [ ] Homepage redesign preserved.
- [ ] Projects page bekerja.
- [ ] Cyber Lab bekerja.
- [ ] Interactive terminal bekerja.
- [ ] Project modal bekerja.
- [x] Light-only theme remains consistent.
- [ ] Navbar bekerja.
- [ ] Footer bekerja.
- [ ] Responsive behavior bekerja.
- [ ] Tests pass.
- [ ] Lint pass.
- [ ] Production build pass.

Final commands:

```bash
npm run lint
npm run test
npm run build
```

Final notes:

```text
Completed by:
Date:
Files moved:
Files deleted:
Tests added:
Known residual risks:
Deployment status:
```

## Final Principle

Jangan mengorganisasi codebase berdasarkan jumlah file. Organisasikan berdasarkan responsibility.

Tujuannya bukan membuat banyak folder, tetapi memastikan setiap file memiliki satu home, satu owner, dan satu alasan yang jelas untuk tetap ada.
