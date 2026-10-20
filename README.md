# Groby Tarnobrzeg — Czysty Pomnik

Statyczna strona wizytówkowa (HTML/CSS/JS, bez backendu) opublikowana za pomocą darmowego GitHub Pages.

## Struktura

- [index.html](index.html) — strona główna
- [styles.css](styles.css) — style
- [script.js](script.js) — skrypty (m.in. obsługa formularza kontaktowego, czysto po stronie klienta)
- [w-budowie/](w-budowie) — pomocnicza podstrona „w budowie”, dostępna pod `/w-budowie/`
- [robots.txt](robots.txt) — blokuje indeksowanie całej strony przez wyszukiwarki (strona jest w budowie)

## Strona w budowie — blokada wyszukiwarek

Dopóki strona nie jest gotowa do publikacji, indeksowanie jest celowo zablokowane:

- `robots.txt` zawiera `Disallow: /` dla wszystkich robotów.
- `index.html` oraz `w-budowie/index.html` mają znacznik `<meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">`.

**Przed publikacją gotowej strony koniecznie:**
1. Usuń (lub złagodź) `Disallow: /` w [robots.txt](robots.txt).
2. Usuń znacznik `<meta name="robots" ...>` z `<head>` w [index.html](index.html).

Uwaga: GitHub Pages nie pozwala ustawiać nagłówków HTTP (np. `X-Robots-Tag`), dlatego powyższe dwa mechanizmy (robots.txt + meta tag) to najskuteczniejszy dostępny sposób ukrycia strony przed wyszukiwarkami na tym hostingu. Nie uniemożliwia to jednak wejścia na stronę osobom znającym bezpośredni adres URL.

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
