# Stomatologia Wizytówka — Claude Instructions

## Projekt
Wizytówka internetowa dla gabinetu stomatologicznego. Statyczna strona one-page lub multi-page z sekcjami: hero, usługi, o nas, galeria, kontakt.

## Stack
- **Astro v6** + **Tailwind CSS v4**
- Komponenty w `src/components/`
- Strony w `src/pages/`
- Bazowy layout: `src/layouts/Layout.astro`
- Obrazy: `public/images/`

## Komendy
```bash
npm run dev    # dev server http://localhost:4321
npm run build  # produkcyjny build do dist/
npm run preview # podgląd buildu
```

## Deployment — Hetzner VPS + Coolify
- **Serwer:** Hetzner VPS z Coolify (self-hosted)
- **Metoda:** Docker (multi-stage build → Nginx)
- **Plik:** `Dockerfile` w katalogu głównym
- Coolify podpina repozytorium Git i buduje przez `docker build`
- Output: statyczne pliki w `/usr/share/nginx/html` obsługiwane przez Nginx
- Brak Vercel adaptera — Astro buduje do czystego `dist/` (domyślne `output: 'static'`)

## Aktywne skille
- `/clone-design` — pixel-perfect replication z referencji / zdjęcia
- `/frontend-skill` — OpenAI landing page playbook
- `/frontend-design` — UI/UX production interfaces
- `/full-page-screenshot` — screenshot strony przez CDP
- `/web-design-guidelines` — Vercel design standards
- `/zyte-screenshot` — screenshot dowolnego URL (wymaga ZYTE_API_KEY)

## Zasady kodowania
- Tylko Tailwind utility classes, zero inline styles
- Komponenty Astro (.astro), nie frameworki JS jeśli nie potrzeba
- Mobile-first responsive
- Polskie treści (lang="pl")
- Zero komentarzy w kodzie chyba że nioczywiste

## Workflow przy replicacji
1. Użytkownik dostarcza zdjęcie/screenshot referencji
2. Uruchom `/clone-design` skill
3. Wyciągnij design tokens, buduj sekcja po sekcji
4. Screenshot → porównanie → fix → repeat
