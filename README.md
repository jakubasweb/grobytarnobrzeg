# Groby Tarnobrzeg — Czysty Pomnik

Statyczna strona wizytówkowa (HTML/CSS/JS, bez backendu) opublikowana za pomocą darmowego GitHub Pages.

## Struktura

- [index.html](index.html) — strona główna
- [styles.css](styles.css) — style
- [script.js](script.js) — skrypty (m.in. obsługa formularza kontaktowego, czysto po stronie klienta)
- [w-budowie/](w-budowie) — pomocnicza podstrona „w budowie”, dostępna pod `/w-budowie/`

## Publikacja (GitHub Pages)

Strona jest publikowana automatycznie z gałęzi `main` (katalog główny `/`):

**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)`**

Adres: `https://jakubasweb.github.io/grobytarnobrzeg/`

## Własna domena (np. czystypomnik.pl)

Gdy domena będzie gotowa:

1. W Settings → Pages wpisz domenę w polu **Custom domain** (GitHub utworzy plik `CNAME` w repozytorium).
2. U rejestratora domeny dodaj rekordy DNS:
   - rekord `CNAME` dla `www` wskazujący na `jakubasweb.github.io`, **lub**
   - rekordy `A` dla domeny głównej wskazujące na adresy IP GitHub Pages:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. Zaznacz **Enforce HTTPS** po zweryfikowaniu domeny przez GitHub.
