# lichtus.github.io

Moja strona-portfolio (Data Analysis), hostowana na GitHub Pages.

**Adres:** https://lichtus.github.io

## Jak edytować

Cała strona to jeden plik: `index.html` — układ bento (siatka kafelków),
paleta „grafit i limonka". Otwórz go w edytorze, zmień tekst, zapisz.

Kolory są zebrane w jednym miejscu, w bloku `:root` na górze pliku —
zmiana jednej wartości przemalowuje całą stronę.

W `warianty/` leżą odrzucone koncepcje i `palety.html` z przełącznikiem kolorów
(do porównania, gdybyś chciał wrócić do innej palety). Ten katalog można usunąć.

Podgląd lokalny — otwórz plik w przeglądarce:

```bash
open index.html
```

## Jak opublikować zmiany

```bash
git add .
git commit -m "Aktualizacja portfolio"
git push
```

Po ~1 minucie zmiany są widoczne pod adresem strony.

## Do uzupełnienia przed publikacją

- [ ] Imię i nazwisko w `<h1>` (teraz jest hasło, brak nazwiska)
- [ ] Sekcja „O mnie" — obecnie tekst-instrukcja, do zastąpienia własnym
- [ ] Zdecydować, czy zostawiać e-mail publicznie
- [ ] Link do LinkedIn (odkomentować w `index.html`)
- [ ] CV jako `cv.pdf` + odkomentować przycisk

## Później

- [ ] Upublicznić repo `CV-Fit-Analyzer` i/lub `Production_analysis`, żeby karty
      projektów prowadziły do kodu (teraz są bez linku, oznaczone „Repo prywatne")
- [ ] Wrzucić aplikacje na Streamlit Community Cloud i dodać przyciski „Demo na żywo"
