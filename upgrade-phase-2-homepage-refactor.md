# Upgrade Tracking — Phase 2: Homepage Refactor and CSS Architecture

## Scope

Dokumen ini melacak Phase 12 sampai Phase 19. Fokusnya adalah membersihkan file legacy, menyelaraskan README dan public asset, merapikan CSS ownership, serta menjaga latest light-first design.

## Execution Status — 2026-09-11

- [x] Phase 12 audit selesai; tidak ada active file yang aman untuk dihapus.
- [x] Public assets sudah direferensikan atau diklasifikasikan sebagai deployment-specific.
- [x] README diperbarui dengan struktur `app`, `components`, `features`, `sections`, `pages`, `data`, dan `utils`.
- [x] `IconCarousel.jsx` berada di `src/components/ui/` sebagai reusable UI.
- [x] Semua homepage section sekarang berada di `src/sections/`.
- [x] Pages hanya menjadi composition/page-level content.
- [x] Feature-specific components berada di `src/features/`.
- [x] Import path canonical dan lint/test/build berhasil.
- [~] CSS ownership sudah diaudit dan light-first rules aktif, tetapi cleanup selector/media-query lama masih perlu pass khusus.
- [~] Responsive rules sudah tersedia, tetapi pengujian visual 12 viewport masih pending browser QA.

## Definition of Done Phase 2

- [x] Homepage menjadi composition layer.
- [x] Setiap section berada di `src/sections/`.
- [x] Feature component berada di `src/features/`.
- [x] Global layout berada di `src/components/layout/`.
- [x] Generic UI berada di `src/components/ui/`.
- [x] Tidak ada duplicate old/new component.
- [~] CSS memiliki ownership yang jelas.
- [x] Tidak ada Bootstrap class atau migration leftovers di source; `Bootstrap` yang tersisa adalah teknologi project Student Finance.
- [x] Light-first homepage tetap dipertahankan.
- [x] Semua import path sudah canonical.

## Status Legend

- [ ] Belum dikerjakan
- [~] Sedang dikerjakan
- [x] Selesai
- [!] Perlu keputusan atau perhatian khusus

---

# Phase 12 — Dead File Audit

Sebelum memindahkan atau menghapus file:

- [ ] Search semua import.
- [ ] Search semua JSX reference.
- [ ] Search semua test reference.
- [ ] Search HTML/public/config reference.
- [ ] Search Vite/Netlify/deployment reference.
- [ ] Confirm feature tidak bergantung pada file tersebut.
- [ ] Catat keputusan keep/move/merge/delete.

## `upgrade.md` Decision

- [ ] Tentukan apakah dokumen root masih aktif.
- [ ] Bila hanya temporary note, pindahkan ke `docs/homepage-redesign.md` atau hapus setelah implementasi selesai.
- [ ] Jangan memiliki dua dokumen dengan isi master plan yang saling bertentangan.
- [ ] README menjadi dokumentasi project utama.

## Dead File Log

| File | References checked | Decision | Reason | Date |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |

---

# Phase 13 — README Audit

README hanya boleh berisi dokumentasi jangka panjang:

- [ ] Tujuan project.
- [ ] Fitur utama.
- [ ] Tech stack.
- [ ] Struktur folder terbaru.
- [ ] Local development.
- [ ] Lint.
- [ ] Test.
- [ ] Build.
- [ ] Preview.
- [ ] Deployment.
- [ ] Content update guide.
- [ ] Theme behavior.
- [ ] Contact dan CV information.

Checklist:

- [ ] Hapus struktur lama dari README.
- [ ] Update `src/app/`.
- [ ] Update `components/layout/`.
- [ ] Update `components/ui/`.
- [ ] Update `features/projects/`.
- [ ] Update `features/cyberlab/`.
- [ ] Update `features/terminal/`.
- [ ] Update `sections/`.
- [ ] Update `data/` dan `utils/`.
- [ ] Jangan menduplikasi temporary roadmap di README.

---

# Phase 14 — Public Directory Audit

Klasifikasikan setiap file public:

```text
required
conditionally required
deployment-specific
unused
```

## Expected Assets

- [ ] `Muhammad-Syafiq-CV.pdf` dipakai oleh Download CV.
- [ ] `favicon.svg` dipakai oleh `index.html`.
- [ ] `og-image.svg` dipakai oleh social metadata.
- [ ] `robots.txt` sesuai domain deployment.
- [ ] `sitemap.xml` sesuai domain deployment.
- [ ] `_redirects` dipertahankan bila Netlify masih digunakan.

## Safety Rules

- [ ] Jangan hapus `_redirects` tanpa memeriksa deployment.
- [ ] Jangan hapus robots atau sitemap tanpa memeriksa SEO requirement.
- [ ] Search setiap asset sebelum delete.
- [ ] Pastikan semua public URL valid.

---

# Phase 15 — CSS Ownership

Pertahankan satu global stylesheet `src/index.css` bila project masih kecil.

Susunan stylesheet yang disarankan:

```text
1. Imports
2. Light-first design tokens
3. Explicit dark theme tokens
4. Reset
5. Base typography
6. Layout primitives
7. Buttons and links
8. Layout / Navbar
9. Hero
10. Profile / About
11. Capabilities / Skills
12. Experience
13. Projects
14. Project modal
15. Cybersecurity Lab
16. Terminal
17. Learning / Next Chapter
18. Activity / GitHub
19. Contact
20. Footer
21. Responsive rules
22. Accessibility
23. Reduced motion
```

Checklist:

- [ ] Setiap selector memiliki owner.
- [ ] Token light-first menjadi default.
- [ ] Dark theme hanya override token/surface yang diperlukan.
- [ ] Terminal charcoal tetap intentional.
- [ ] Semua body text memiliki ukuran readable.
- [ ] Semua colored background memiliki text color eksplisit.
- [ ] Project preview tidak memakai dark gradient sebagai default.
- [ ] Contact tidak kembali menjadi card raksasa.
- [ ] Next Chapter memakai roadmap card yang stabil.

---

# Phase 16 — Remove CSS Dead Code

Search dan audit:

- [ ] Unused classes.
- [ ] Duplicate selectors.
- [ ] Duplicate declarations.
- [ ] Old component names.
- [ ] Bootstrap classes.
- [ ] Temporary migration classes.
- [ ] `!important`.
- [ ] Conflicting media queries.
- [ ] Hardcoded dark backgrounds yang tidak intentional.
- [ ] Hardcoded light text di atas light surface.
- [ ] Hardcoded muted text dengan contrast rendah.

Sebelum menghapus selector:

1. [ ] Search class di JSX.
2. [ ] Search class di CSS.
3. [ ] Search class di test atau public file.
5. [ ] Jalankan build setelah penghapusan.

## Forbidden Legacy Patterns

- [ ] `.row`.
- [ ] `.col-*`.
- [ ] `.d-flex`.
- [ ] `.btn-*`.
- [ ] `.card` generic bila bukan semantic application class.
- [ ] `.badge` generic bila bukan skill-specific class.
- [ ] `--bs-*` variables.
- [ ] `modal-dialog` atau utility Bootstrap.
- [ ] Duplicate component class names.

---

# Phase 17 — Responsive Architecture

Uji seluruh homepage pada:

```text
320px
360px
375px
390px
414px
480px
768px
834px
1024px
1280px
1440px
1600px
```

Periksa setiap area:

- [ ] Hero.
- [ ] Navbar.
- [ ] About/Profile.
- [ ] Capabilities.
- [ ] Experience.
- [ ] Projects.
- [ ] Project modal.
- [ ] Cybersecurity Lab.
- [ ] Terminal.
- [ ] Next Chapter.
- [ ] Activity.
- [ ] Contact.
- [ ] Footer.

Acceptance:

- [ ] Tidak ada horizontal overflow.
- [ ] Tidak ada clipped text.
- [ ] Tidak ada broken grid.
- [ ] Tidak ada content tersembunyi tanpa akses.
- [ ] Tidak ada overlap.
- [ ] Semua anchor dapat dijangkau.
- [ ] Modal tidak melebihi viewport.
- [ ] Terminal output wrap.
- [ ] Contact rows tidak memaksa scroll horizontal.
- [ ] Bento berubah menjadi urutan single column yang logis.
- [ ] Button dan menu minimal 44px.

---

# Phase 18 — Component Responsibility Rule

## `pages/`

Hanya composition level:

- [ ] `HomePage.jsx`.
- [ ] `ProjectsPage.jsx`.
- [ ] `CyberLabPage.jsx`.

## `sections/`

Homepage sections:

- [ ] `HeroSection.jsx`.
- [ ] `AboutSection.jsx`.
- [ ] `SkillsSection.jsx`.
- [ ] `ExperienceSection.jsx`.
- [ ] `ProjectsSection.jsx`.
- [ ] `CybersecuritySection.jsx`.
- [ ] `LearningSection.jsx`.
- [ ] `ActivitySection.jsx`.
- [ ] `ContactSection.jsx`.

## `features/`

Feature-specific UI and behavior:

- [ ] Projects.
- [ ] Cyber Lab.
- [ ] Terminal.

## `components/layout/`

- [ ] Navbar.
- [ ] Footer.
- [ ] BackToTop.

## `components/ui/`

- [ ] SectionHeading saja, kecuali generic UI lain benar-benar reusable.

Rules:

- [ ] Jangan membuat `BaseCard` tanpa reuse nyata.
- [ ] Jangan membuat `UniversalSection`.
- [ ] Jangan membuat `ProjectCardV2`.
- [ ] Jangan membuat duplicate feature folder.
- [ ] Satu responsibility, satu canonical component.

---

# Phase 19 — Import Path Cleanup

Setelah move:

- [ ] Update import App ke `./app/App` dari `main.jsx`.
- [ ] Update layout imports.
- [ ] Update UI imports.
- [ ] Update project feature imports.
- [ ] Update cyberlab feature imports.
- [ ] Update terminal feature imports.
- [ ] Update section imports.
- [ ] Update page imports.
- [ ] Search old `../components/ProjectCard`.
- [ ] Search old `../components/Navbar`.
- [ ] Search old `../components/CyberLabTerminal`.
- [ ] Search old `./App`.
- [ ] Pastikan tidak ada unresolved import.
- [ ] Jalankan ESLint.
- [ ] Jalankan build.

---

# Homepage Composition Target

`HomePage.jsx` harus sesingkat composition layer:

```jsx
export default function HomePage(props) {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CybersecuritySection />
      <LearningSection />
      <ActivitySection />
      <ContactSection />
    </>
  )
}
```

Checklist:

- [ ] Tidak ada implementasi UI panjang di HomePage.
- [ ] Props state hanya diteruskan ke section yang memerlukan.
- [ ] Shared data tetap berasal dari `data/`.
- [ ] Latest light-first design tidak berubah menjadi desain lama.
- [ ] Anchor IDs tetap unik dan benar.

---

# Light-First Design Preservation

Refactor tidak boleh mengembalikan:

- [ ] Old dark homepage.
- [ ] Bootstrap styling.
- [ ] Legacy card layout.
- [ ] Obsolete spacing.
- [ ] Old responsive behavior.
- [ ] Dark gradient pada semua preview.
- [ ] Text abu-abu pucat pada white background.
- [ ] Neon accent berlebihan.

Design yang wajib dipertahankan:

- [ ] Bright.
- [ ] Editorial.
- [ ] Minimal.
- [ ] Professional.
- [ ] Technical tetapi tidak agresif.
- [ ] Clean grid.
- [ ] Controlled accents.
- [ ] Large typography.
- [ ] Subtle borders.
- [ ] Restrained cards.
- [ ] Technical terminal blocks.

---

# Phase 2 Validation

```bash
npm run lint
npm run test
npm run build
```

Acceptance:

- [ ] Homepage sections terpisah.
- [ ] Import path canonical.
- [ ] CSS tidak memiliki dead code yang diketahui.
- [ ] Tidak ada Bootstrap residual.
- [ ] Light-first design preserved.
- [ ] Responsive structure tidak rusak.
- [ ] Build berhasil.
