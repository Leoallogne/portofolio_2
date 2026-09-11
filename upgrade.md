# Homepage Light Editorial Redesign Plan

## Tujuan Utama

Rombak homepage portfolio Muhammad Syafiq menjadi pengalaman yang terang, bersih, profesional, dan terasa seperti editorial portfolio modern.

Arah visual baru:

- Putih sebagai warna dasar.
- Hitam atau charcoal sebagai warna teks dan kontras utama.
- Abu-abu lembut sebagai pemisah section dan surface.
- Hijau sebagai accent teknis yang digunakan secara terbatas.
- Warm amber atau terracotta sebagai accent sekunder.
- Tidak menggunakan neon, glow berlebihan, glassmorphism, atau background gelap sebagai visual dominan homepage.

Fitur yang sudah ada wajib dipertahankan: navigation, anchor sections, CV download, theme toggle, project filtering, project modal, Cybersecurity Lab, interactive terminal, GitHub links, contact links, dan responsive navigation.

Jangan menghapus konten, link, data proyek, data lab, atau fungsi interaktif yang sudah bekerja.

---

# Prinsip Desain

## Light-First

Light theme menjadi pengalaman utama homepage. Dark theme boleh tetap tersedia sebagai varian sekunder, tetapi kualitas light theme harus menjadi prioritas.

Prioritas pengerjaan:

1. Keterbacaan.
2. Kontras.
3. Hierarchy.
4. Spacing.
5. Accent color.

## Editorial Grid

Gunakan container terbatas, grid 12 kolom pada desktop, divider tipis, section numbering, asymmetric composition yang tetap mudah dipindai, dan white space yang terkontrol.

Hindari:

- Semua section terlihat seperti dashboard.
- Semua elemen dibungkus card.
- Card bertingkat di dalam card.
- Border radius terlalu besar.
- Spacing acak.

## Typography

Pertahankan Manrope dan DM Mono bila performanya masih baik.

```text
Display: 72px - 128px
H1: 56px - 96px
H2: 42px - 68px
H3: 18px - 28px
Body large: 18px - 21px
Body: 15px - 17px
Small: 12px - 14px
Mono metadata: 10px - 12px
```

Gunakan `clamp()` tanpa menyebabkan overflow. Body text jangan dipaksa terlalu kecil. Line-height harus nyaman dan letter spacing tidak boleh terlalu rapat.

## Color Tokens

Gunakan token terpusat dan light-first:

```css
:root {
  --page: #f7f7f5;
  --surface: #ffffff;
  --surface-soft: #eeeeea;
  --surface-strong: #e3e3dd;
  --ink: #111111;
  --ink-soft: #333333;
  --muted: #5c5c56;
  --line: #d5d5ce;
  --accent: #157a52;
  --accent-soft: #dcefe5;
  --warm: #b56d32;
  --warm-soft: #f3e2d3;
  --mono: 'DM Mono', monospace;
}
```

Rules:

- Body text memakai `--ink` atau `--ink-soft`.
- Muted text tidak boleh terlalu pucat.
- Link memakai accent dengan contrast yang cukup.
- Jangan memakai text putih di atas background terang.
- Colored surface harus memiliki warna teks yang eksplisit.
- Accent tidak boleh memenuhi seluruh paragraf atau semua card.

## Surface dan Shape

Gunakan radius 6px, 10px, dan 16px. Gunakan shadow ringan seperti `0 12px 32px rgba(17, 17, 17, 0.08)`. Shadow membantu hierarchy, bukan membuat semua elemen tampak melayang.

---

# Struktur Homepage

## 1. Navbar

Desktop:

```text
MS Muhammad Syafiq       About Skills Experience Projects Lab Contact
                                      Download CV  Theme
```

Upgrade:

- Background putih atau `--page`.
- Border bawah tipis.
- Brand hitam dengan accent kecil.
- Active link memakai underline atau accent bar.
- Download CV menjadi outline button.
- Theme toggle memiliki icon, label accessible, dan state aktif yang jelas.
- Tidak ada teks abu-abu yang sulit dibaca.

Mobile:

- Drawer surface putih.
- Backdrop charcoal transparan.
- Target link minimal 44px.
- Escape menutup drawer.
- Focus kembali ke menu button.
- Body scroll terkunci saat drawer terbuka.

## 2. Hero

Hero harus menjadi first impression paling kuat.

```text
Portfolio / 2026
Open to Opportunities

MUHAMMAD
SYAFIQ

Hospitality and operations professional building practical digital skills.

Hospitality / Web Development / Cybersecurity

Description

[ View Projects ] [ Contact Me ] [ Download CV ]

Quick facts                                      Profile terminal
```

Upgrade visual:

- Background terang dengan grid atau line pattern yang sangat halus.
- H1 hitam dengan satu kata atau underline accent.
- CTA utama hitam dengan text putih.
- CTA sekunder putih dengan border hitam.
- CV memakai accent green atau warm accent.
- Terminal tetap charcoal karena merupakan technical block, dengan text terang yang kontras.
- Quick facts memakai divider, bukan card berlebihan.

Urutan mobile: label, name, positioning, description, CTA, terminal, facts.

## 3. Technical Focus Strip

Icon carousel tetap boleh dipertahankan, tetapi tampil sebagai technical index, bukan neon ticker.

- Background `--surface-soft`.
- Icon memakai hitam dan accent secara terbatas.
- Border tipis.
- Pause button keyboard accessible.
- Label penting minimal 12px.
- Respect `prefers-reduced-motion`.

## 4. Profile / About

Pertahankan bento grid dengan tampilan terang:

```text
┌──────────────────────────┬───────────────┐
│ Intro statement          │ Hospitality   │
│                          ├───────────────┤
│ Work style / strength   │ Development   │
│                          ├───────────────┤
│                          │ Security      │
└──────────────────────────┴───────────────┘
```

- Intro panel white dengan border charcoal tipis.
- Quote accent tidak boleh mengganggu body text.
- Capability tiles memiliki soft color yang berbeda.
- Semua panel memiliki heading dan body text yang jelas.
- Mobile menjadi satu kolom.

Copy harus langsung menjawab siapa Syafiq, pengalaman utamanya, dan nilai kombinasi hospitality plus technology.

## 5. Capabilities / Skills

Section 02 harus tampil sebagai skill system, bukan wall of badges.

```text
Operational & Hospitality     Web Development

Backend & Database             Tools

Networking & Cybersecurity     Learning signal
```

Upgrade:

- Gunakan bento grid editorial.
- Category title menjadi elemen dominan.
- Skill count menjadi metadata.
- Badge tidak memenuhi seluruh panel.
- Gunakan grouping yang jelas.
- Text hitam pada white atau soft surface.
- Accent hanya untuk index, icon, dan status.
- Hover hanya mengubah border atau background secara halus.
- Hindari background hijau pekat.

Content grouping:

```text
Operational & Hospitality
Customer Service, Teamwork, Communication, SOP Compliance,
Time Management, Attention to Detail, Adaptability

Web Development
React, JavaScript, HTML5, CSS3, Responsive Design, REST APIs

Backend & Database
PHP, Node.js, MySQL, PostgreSQL, Supabase, SQL

Tools
Git, GitHub, Vite, NPM, VS Code, Netlify, Excel, Office

Networking & Cybersecurity
TCP/IP, IP Addressing, Subnetting, DNS, DHCP, Linux,
HTTP/HTTPS, Web Security Fundamentals, Metasploit Fundamentals
```

## 6. Experience

Gunakan timeline editorial terang:

- Date dan metadata menggunakan DM Mono yang readable.
- Role title besar dan hitam.
- Company memakai warm accent yang tidak terlalu pucat.
- Training card white dengan border.
- Bullet text minimal 15px.
- Timeline line `--line` dan dot accent green.

## 7. Selected Projects

Project section harus terlihat seperti selected case studies.

- Project card memakai white atau soft-gray surface.
- Visual preview spesifik per project.
- Tidak ada background gelap dominan pada light homepage.
- Body card memakai text hitam.
- Status Live, Concept, dan Experimental memiliki soft colors berbeda.
- `View details`, GitHub, dan demo memiliki label yang jelas.
- Archive statistic dihitung dari data.

Preview yang disarankan:

- TelegramKW: chat window dan message bubbles.
- Student Finance: balance dan chart.
- Business Lead Finder: lead table dan filter.
- Security Operations Dashboard: alert list dan severity.
- Threat Intelligence Notebook: notes dan IOC table.

## 8. Cybersecurity Lab

Cyber Lab tetap teknis, tetapi berada di dalam homepage light.

- Section background light.
- Terminal charcoal dengan contrast tinggi.
- Lab card white atau soft gray.
- Controlled laboratory messaging tetap terlihat.
- Progress bar memakai accent green.
- Status dan difficulty memakai text plus border, bukan warna saja.
- Lab navigator keyboard accessible.

## 9. Next Chapter / Learning Roadmap

Section 06 menjadi roadmap belajar:

```text
01 Networking       02 Linux
03 Web Development  04 Cybersecurity
```

Setiap card berisi nomor, icon, status, judul, deskripsi, dan `Explore focus`.

Design:

- White cards di atas soft-gray section.
- Accent stripe tipis.
- Status memakai text dan indicator.
- Icon berada di soft color tile.
- Hover ringan.
- Tinggi card stabil.
- Mobile satu kolom.

## 10. Technical Activity dan GitHub

- Callout tidak menggunakan dark background sebagai default.
- GitHub CTA black dengan white text.
- Repository cards white.
- Description minimal 15px.
- Link pending tetap menjadi state yang jelas.
- Jangan memakai text pucat di atas white.

## 11. Contact

Kembalikan Contact ke layout sederhana seperti versi sebelumnya:

```text
Contact copy and CTA                 Email card
                                     Phone card
                                     WhatsApp card
                                     GitHub card
```

Upgrade tanpa mengubah bentuk dasarnya:

- Jangan memakai panel hero besar atau card raksasa.
- Background section putih atau page background.
- Heading hitam dan besar.
- Description memakai `--ink-soft`.
- Contact links berupa row cards sederhana.
- Icon memakai accent.
- Value utama memakai `--ink`.
- Email menjadi black button dengan white text.
- WhatsApp menjadi white atau soft button dengan border.
- Semua link minimal 44px.
- Mobile menjadi stack.

## 12. Footer

- Footer boleh memakai charcoal atau black sebagai penutup visual.
- Jika background gelap digunakan, text wajib white atau gray terang.
- Link penting minimal 14px.
- Availability tetap accent green.
- Back to top memiliki label accessible.

---

# Theme Strategy

## Light Theme

Light adalah default utama:

- Gunakan soft gray untuk pemisah section.
- Text utama hampir hitam.
- Muted text tetap contrast.
- White card berbeda dari page background.
- Border terlihat tetapi tidak berat.
- Green dan warm accent tidak terlalu terang.
- Terminal dan modal tetap readable.
- Focus ring jelas.

## Dark Theme

Dark tetap didukung bila tidak merusak fitur lama:

- Text utama putih lembut.
- Text secondary abu-abu terang.
- Accent tidak berubah menjadi neon berlebihan.
- Card dan page background dapat dibedakan.
- Contact dan Capabilities tetap memiliki hierarchy.

## Theme Toggle

Implementasikan melalui satu sumber state di `App.jsx`:

- Mengubah `data-theme` pada `document.documentElement`.
- Menyimpan state ke `localStorage`.
- Refresh mempertahankan theme.
- Invalid value kembali ke default light.
- Storage unavailable tidak menyebabkan crash.
- Button memiliki `aria-label`, `aria-pressed`, dan focus state.
- Icon dan label menjelaskan action berikutnya.
- Transition singkat dan tidak mengganggu.

---

# Responsive Requirements

Uji pada:

```text
320px, 360px, 375px, 390px, 414px, 480px,
768px, 834px, 1024px, 1280px, 1440px, 1600px
```

Rules:

- Tidak ada horizontal overflow.
- Tidak ada text keluar atau terpotong.
- Button minimal 44px.
- Body text tidak terlalu kecil.
- Bento grid berubah menjadi single column secara logis.
- Contact cards tidak memaksa horizontal scroll.
- Terminal output wrap di mobile.
- Drawer tidak menutup content secara aneh.
- Hero tidak memiliki empty space yang tidak berguna.

---

# Accessibility Requirements

Periksa:

- Semantic HTML dan heading order.
- Contrast text/background.
- Focus ring semua interactive elements.
- Keyboard navigation.
- Escape pada drawer dan modal.
- `aria-current` navigation.
- `aria-expanded` menu.
- `aria-pressed` filter, lab tab, carousel, dan theme toggle.
- `aria-live` terminal.
- Label pada icon-only controls.
- Modal focus trap dan focus return.
- Reduced motion.
- Touch target minimal 44px.

Jangan menambahkan ARIA yang tidak diperlukan.

---

# Recommended File Changes

## `src/index.css`

- Ubah token menjadi light-first.
- Gunakan `--page`, `--surface`, `--ink`, `--muted`, `--line`, `--accent`, dan `--warm`.
- Audit semua hardcoded dark colors.
- Hilangkan selector duplikat.
- Tambahkan light surface per section.
- Tetapkan ukuran body text minimum.
- Rapikan media query.
- Tambahkan reduced-motion rules.

## `src/pages/HomePage.jsx`

- Pertahankan semua data dan fungsi.
- Upgrade class structure Hero, Capabilities, Projects, Lab, Next Chapter, Activity, dan Contact.
- Pastikan anchor link tetap bekerja.
- Hindari konten hardcoded yang seharusnya berasal dari data.

## `src/components/Navbar.jsx`

- Pertahankan drawer dan focus behavior.
- Perjelas visual theme toggle.
- Pastikan active section terbaca pada background light.

## `src/components/ProjectCard.jsx`

- Buat preview lebih spesifik dan terang.
- Pastikan status dan action link readable.

## `src/components/ProjectModal.jsx`

- Pertahankan focus trap, Escape, backdrop close, dan body scroll lock.
- Sesuaikan modal dengan light-first surface.
- Pastikan close button terlihat di mobile.

## `src/components/Terminal.jsx`

- Pertahankan terminal charcoal sebagai technical contrast block.
- Audit warna command dan result.
- Pastikan output tetap readable.

## `src/components/CyberLabTerminal.jsx`

- Pertahankan command resolver dan reset state.
- Pastikan input, suggestions, history, dan output tetap readable.

## `src/utils/portfolio.js`

- Pertahankan helper theme, routing, dan project stats.
- Ubah default theme menjadi light bila keputusan produk final adalah light-only.

## `tests/portfolio.test.js`

Tambahkan test untuk:

- Default theme light.
- Toggle dark/light.
- Persistence setelah refresh simulation.
- Invalid theme fallback.
- Project filters dan stats.
- Lab required fields.
- Terminal commands.

---

# Implementation Order

```text
PHASE 1
Light-first tokens and global typography
        ↓
PHASE 2
Navbar and Hero redesign
        ↓
PHASE 3
Profile and Capabilities bento layout
        ↓
PHASE 4
Experience, Projects, and visual previews
        ↓
PHASE 5
Cybersecurity Lab and Next Chapter
        ↓
PHASE 6
Contact and Footer polish
        ↓
PHASE 7
Theme toggle, accessibility, responsive QA
        ↓
PHASE 8
Tests, lint, build, and production review
```

Setelah setiap phase jalankan:

```bash
npm run lint
npm run test
npm run build
```

---

# Visual QA Checklist

## Light Theme

- [ ] Homepage default terlihat terang.
- [ ] Tidak ada text putih di atas background putih.
- [ ] Tidak ada muted text yang terlalu pucat.
- [ ] Semua card memiliki distinction dari background.
- [ ] Contact terbaca jelas.
- [ ] Capabilities terbaca jelas.
- [ ] Next Chapter terbaca jelas.
- [ ] Terminal tetap readable.
- [ ] CTA memiliki contrast kuat.

## Dark Theme

- [ ] Text utama tidak tenggelam.
- [ ] Text secondary tidak terlalu gelap.
- [ ] Green accent tidak berlebihan.
- [ ] Contact tetap memiliki hierarchy.
- [ ] Next Chapter tetap terbaca.
- [ ] Modal tetap readable.

## Responsive

- [ ] 320px tidak overflow.
- [ ] 375px tidak ada text clipped.
- [ ] 480px cards tetap stabil.
- [ ] Tablet tidak memiliki grid kosong.
- [ ] Desktop tidak terlalu melebar.
- [ ] Mobile CTA mudah disentuh.
- [ ] Mobile contact links mudah dipilih.

## Interaction

- [ ] Theme toggle berubah setiap kali diklik.
- [ ] Theme tersimpan setelah refresh.
- [ ] Navbar drawer bekerja.
- [ ] Anchor navigation bekerja.
- [ ] Project filter bekerja.
- [ ] Project modal bekerja.
- [ ] Cyber Lab selection bekerja.
- [ ] Terminal commands bekerja.
- [ ] Back to top bekerja.

---

# Definition of Done

Homepage redesign selesai apabila:

1. Homepage menggunakan light-first design dengan dominasi putih, hitam, dan soft gray.
2. Green dan warm accent digunakan secara terkontrol.
3. Semua tulisan terbaca jelas pada background masing-masing.
4. Tidak ada horizontal overflow pada breakpoint yang ditentukan.
5. Contact kembali menggunakan layout sederhana yang rapi dan profesional.
6. Capabilities memiliki hierarchy bento yang jelas.
7. Next Chapter memiliki roadmap cards yang mudah dipahami.
8. Theme toggle benar-benar berfungsi dan persistence bekerja.
9. Semua fungsi portfolio lama tetap tersedia.
10. Accessibility keyboard dan reduced motion tetap aman.
11. Test, lint, dan production build berhasil.
12. Tidak ada console error akibat redesign.

Final impression:

```text
bright
clear
professional
human
technically curious
easy to read
```