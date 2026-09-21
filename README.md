# SHUSHI RAMEN

An animated Japanese food landing page built with vanilla HTML, CSS, JavaScript, Vite, and AOS. The experience combines a bold sushi-inspired visual system with a responsive food catalogue, category filters, Indian pricing, and item detail popups.

![SHUSHI RAMEN hero and catalogue](.github/images/img_main.png)

## Highlights

- AOS-powered entrance animations across the landing page.
- Responsive hero, about, trending food, newsletter, and footer sections.
- Popular Food filters for Sushi, Ramen, Udon, Danggo, and Others.
- Clickable food cards with image, rating, description, and INR pricing details.
- Keyboard-accessible cards and dialogs with `Enter`, `Space`, and `Escape` support.
- Image assets and layout optimized for desktop and mobile browsing.

## Food Catalogue

| Category | Items | Price range |
| --- | --- | --- |
| Sushi | Chezu Sushi, Original Sushi | ₹1,499 - ₹1,699 |
| Ramen | Ramen Legendo | ₹1,199 |
| Udon | Udon Haru | ₹999 |
| Danggo | Danggo Mizu | ₹799 |

## Screenshots

### Desktop hero and navigation

The full-width opening section establishes the visual direction with the Japanese food hero, primary actions, social proof, and animated composition.

![Desktop hero](.github/images/img_main.png)

### Popular food filters

The catalogue lets visitors switch between food categories while keeping the original animated visual language intact.

![Popular food filters](.github/images/img2.png)

### Food details

Selecting any catalogue card opens a focused detail view with the selected dish, rating, description, and rupee price.

![Food details](.github/images/img1.png)

### Responsive mobile layout

The mobile view keeps the same content hierarchy, touch-friendly controls, and responsive spacing for a comfortable small-screen experience.

![Mobile layout](.github/images/img3.png)

## Run Locally

### Requirements

- Node.js 18 or newer
- npm

### Setup

```bash
git clone https://github.com/Ishant6565/SHUSHI-RAMEN.git
cd SHUSHI-RAMEN
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173/`.

## Production Build

```bash
npm run build
npm run preview
```

## Project Structure

```text
assets/       Images and icons used by the experience
css/          Global styles and section-level styles
js/           AOS setup and food catalogue interactions
index.html    Page structure and content
```

## Credits and License

This repository preserves the original MIT license and attribution included with the source project. See [LICENSE.md](LICENSE.md) for the applicable terms.

Project repository: [Ishant6565/SHUSHI-RAMEN](https://github.com/Ishant6565/SHUSHI-RAMEN)
