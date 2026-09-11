# Muhammad Syafiq Portfolio

Professional single-page portfolio for Muhammad Syafiq, presenting hospitality and operational experience alongside web development, networking, Linux, and cybersecurity fundamentals.

## Overview

This portfolio is designed for applications across:

- Hospitality, front office, barista, and F&B roles
- Production, warehouse, and general operational roles
- Entry-level web development and IT opportunities
- Networking and cybersecurity learning opportunities

The positioning is professional first and technical second, with real project work and controlled cybersecurity learning clearly separated from professional experience.

## Features

- Responsive single-page layout for desktop, tablet, and mobile
- Dark and light themes with `localStorage` persistence
- Sticky navigation with active-section indicator
- Mobile navigation with accessible ARIA states
- Project filtering with graceful empty states
- Project previews, GitHub links, and live demo links
- Experience timeline and hospitality training section
- Cybersecurity learning lab with controlled-environment wording
- Static technical activity and repository cards
- Email, phone, WhatsApp, GitHub, and CV download links
- Back-to-top control
- Motion transitions with reduced-motion support
- SEO, Open Graph, Twitter metadata, favicon, and social preview asset

## Tech Stack

- React
- Vite
- JavaScript
- Framer Motion
- Lucide React
- Modern CSS
- ESLint

No API keys, backend services, or runtime environment variables are required.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Installation

```bash
git clone https://github.com/Leoallogne/portofolio_2.git
cd portofolio_2
npm install
```

## Development

```bash
npm run dev
```

The development server will print the local URL in the terminal.

## Quality Checks

```bash
npm run lint
npm run test
npm run build
npm run preview
```

## Netlify Deployment

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |
| Base directory | Leave empty |

The project does not require a server-side function or environment variable.

## Project Structure

```text
src/
	app/
		App.jsx
	components/
		layout/
			BackToTop.jsx
			Footer.jsx
			Navbar.jsx
		ui/
			SectionHeading.jsx
	features/
		projects/
			ProjectCard.jsx
			ProjectModal.jsx
		cyberlab/
			CyberLabCard.jsx
			CyberLabDetail.jsx
			CyberLabTerminal.jsx
		terminal/
			Terminal.jsx
	sections/
		HeroSection.jsx
		TechnicalFocusSection.jsx
		AboutSection.jsx
		SkillsSection.jsx
		ExperienceSection.jsx
		ProjectsSection.jsx
		CybersecuritySection.jsx
		LearningSection.jsx
		ActivitySection.jsx
		ContactSection.jsx
	pages/
		HomePage.jsx
		ProjectsPage.jsx
		CyberLabPage.jsx
	data/
		projects.js
		skills.js
		cyberLabs.js
	utils/
		portfolio.js
		terminal.js
	index.css
	main.jsx
public/
	favicon.svg
	og-image.svg
	Muhammad-Syafiq-CV.pdf
```

## Updating Content

Update portfolio composition in `src/app/App.jsx` and footer content in `src/components/layout/Footer.jsx`. Add or edit projects, repositories, skills, and cybersecurity lab data in `src/data/projects.js` and `src/data/cyberLabs.js`.

Each project supports:

```js
{
	id: '04',
	title: 'Project name',
	subtitle: 'Short project type',
	category: 'Web Development',
	preview: 'Short visual label',
	description: 'Concise project description',
	technologies: ['React', 'JavaScript'],
	features: ['Feature one', 'Feature two'],
	github: 'https://github.com/username/repository',
	demo: 'https://example.com'
}
```

Use `null` for unavailable links instead of placeholder URLs.

### CV

Place the final PDF at `public/Muhammad-Syafiq-CV.pdf`. Existing Download CV links already point to this deployment-safe path.

## Contact

- Email: [leoallogne@gmail.com](mailto:leoallogne@gmail.com)
- GitHub: [github.com/Leoallogne](https://github.com/Leoallogne)
- Location: Karawang, West Java, Indonesia

## License

This is a personal portfolio project. Content and personal branding belong to Muhammad Syafiq.