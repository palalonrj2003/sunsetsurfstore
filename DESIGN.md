# 🌅 Sunset Surf Apparel — Storefront Redesign & Architecture Spec (DESIGN.md)

---

## 1. Executive Summary & Brand Direction

**Brand Identity**: Sunset Surf Apparel ([sunsetsurfstore.com](https://www.sunsetsurfstore.com/))  
**Design Philosophy**: **Industrial Luxury × Summer Surf Editorial**  
**Core Goal**: Transform the Sunset Surf Shopify store into an ultra-premium, high-conversion, editorial shopping experience based on the minimalist Northline design system—preserving brand identity while dramatically elevating visual aesthetics, micro-interactions, responsive fluidity, and performance.

---

## 2. Brand Identity & Assets

### 2.1 Logo & Favicon
- **Primary Logo**: High-res Sunset Surf Apparel brand badge
  - URL: `https://www.sunsetsurfstore.com/cdn/shop/files/IMG-8718.png?v=1790864615`
  - Max Display Height: `32px` (Desktop) / `26px` (Mobile)
  - Treatment: Clean rendering on both light (`#ffffff`) and dark hero overlay backgrounds.
- **Favicon**: Sunset Surf round badge icon
  - URL: `https://www.sunsetsurfstore.com/cdn/shop/files/SunsetSurfLogo_32x32.jpg?v=1777710594`

### 2.2 Typography System
| Role | Font Family | Fallback | Weights | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Headings** | `'Outfit'` | `sans-serif` | `300`, `400`, `500`, `600`, `700` | Section titles, hero jumbo headings, card labels, product titles |
| **Body / UI / Meta** | `'Figtree'` | `sans-serif` | `400`, `500`, `600` | Navigation, descriptions, button labels, price tags, accordions |

---

## 3. Color Tokens & Palette Matrix

All color tokens are strictly calibrated to preserve high contrast, WCAG 2.1 AA accessibility, and a sleek modern surf feel.

```css
:root {
  /* Surfaces & Backgrounds */
  --nl-bg-primary: #ffffff;
  --nl-bg-secondary: #fafafa;
  --nl-bg-card: #f5f5f5;
  --nl-bg-card-hover: #f0f0f0;
  --nl-bg-dark: #121212;
  --nl-bg-dark-surface: #1a1a1a;
  --nl-hero-overlay: #1c1d1d;

  /* Typography & Foreground */
  --nl-text-primary: #000000;
  --nl-text-secondary: #666666;
  --nl-text-muted: #8c8c8c;
  --nl-text-inverse: #ffffff;
  --nl-text-inverse-muted: #b3b3b3;

  /* Borders & Dividers */
  --nl-border-subtle: #e8e8e1;
  --nl-border-strong: #d0d0c8;
  --nl-border-dark: #2a2a2a;

  /* Accent & Status */
  --nl-accent-orange: #ff4f33;      /* Cart notification dot, active states */
  --nl-accent-sale: #da3217;        /* Sale badges & discount callouts */
  --nl-accent-summer: #d97706;      /* Golden hour surf highlights */

  /* Radii & Elevation */
  --nl-radius-sm: 2px;
  --nl-radius-md: 4px;
  --nl-radius-lg: 8px;
  --nl-radius-full: 9999px;
  --nl-shadow-soft: 0 4px 20px rgba(0, 0, 0, 0.06);
  --nl-shadow-float: 0 12px 36px rgba(0, 0, 0, 0.12);
}
```

---

## 4. Homepage Layout Architecture & Section Hierarchy

```
┌──────────────────────────────────────────────────────────────┐
│ 1. Minimal Announcement Strip ("COMPLIMENTARY SHIPPING...")  │
├──────────────────────────────────────────────────────────────┤
│ 2. Sticky Minimal Header (Logo | Shop Menu | Cart Badge)     │
├──────────────────────────────────────────────────────────────┤
│ 3. Full-Screen Editorial Hero (Video/Image + Scroll Line)    │
├──────────────────────────────────────────────────────────────┤
│ 4. Shop By Category (3 Department Showcase Cards)            │
│    - Outerwear (Men) | Tops (Women) | Caps & Bags (Acc.)     │
│    - CTA: "View All Categories →"                            │
├──────────────────────────────────────────────────────────────┤
│ 5. Best Sellers / "Most Loved"                               │
│    - 4 Products Desktop / 2 Products Mobile                  │
│    - Social proof & instant quick-add                        │
│    - CTA: "Shop Best Sellers"                                │
├──────────────────────────────────────────────────────────────┤
│ 6. Brand Story ("Built for Modern Explorers")                │
│    - 2-Column Split: Image Left, Narrative Text Right        │
│    - CTA: "Learn Our Story →"                                │
├──────────────────────────────────────────────────────────────┤
│ 7. Featured Collections (Max 3 Curated Collections)          │
│    - Outerwear | Bottoms | Accessories                       │
│    - CTA: "View All Collections →"                           │
├──────────────────────────────────────────────────────────────┤
│ 8. Promotional Banner ("New Season Arrivals")                │
│    - Full-width hero imagery + Atmospheric Overlay           │
│    - CTA: "Shop Now"                                         │
├──────────────────────────────────────────────────────────────┤
│ 9. Why Choose Us (4 Trust Signals)                           │
│    - 🚚 Fast Shipping | 🔒 Secure Checkout                   │
│    - ↩ Easy Returns  | ⭐ Premium Quality                    │
├──────────────────────────────────────────────────────────────┤
│ 10. Instagram / Lifestyle Gallery ("Wear It Anywhere")       │
│     - 6-Image Community & Travel Photo Grid with Hover Icons │
├──────────────────────────────────────────────────────────────┤
│ 11. Newsletter Block ("Join The Community")                  │
│     - High-contrast email sign-up box before footer          │
├──────────────────────────────────────────────────────────────┤
│ 12. Industrial Minimalist Footer (Jumbo Title & Quick Links) │
└──────────────────────────────────────────────────────────────┘
```

---

## 5. Detailed Section Specifications

### 5.1 Sticky Minimal Header (`sections/northline-header.liquid`)
- **Sticky Behavior**: Blurs background on scroll (`backdrop-filter: blur(20px)` + `rgba(255,255,255,0.94)`).
- **Navigation**: Clean uppercase with subtle line-expand hover effect.
- **Cart Button**: Real-time counter badge with pulsing orange dot (`#ff4f33`) when items > 0.
- **Mobile Menu**: Full-height minimal slide-over drawer with oversized links.

### 5.2 Editorial Hero (`sections/northline-hero.liquid`)
- **Height**: Near-full-screen `calc(100vh - 40px)` with background lifestyle image/video.
- **Display Typography**: `clamp(2.5rem, 7vw, 5.5rem)` font size with `-0.03em` tracking.
- **Motion**: Staggered fade-up animation (`reveal-up`) on entry and pulsing vertical scroll indicator line (`line-grow`).

### 5.3 Shop By Category (`sections/northline-categories.liquid`)
- **Grid Layout**: 3 Cards desktop, single column mobile.
- **Card Aspect Ratio**: `4:5` portrait framing with dark gradient bottom overlay.
- **Hover Micro-Interaction**: Image scales subtly (`scale(1.06)`) + arrow shifts right (`translateX(6px)`).
- **Underneath Action**: Centered `"View All Categories →"` editorial link.

### 5.4 Best Sellers / "Most Loved" (`sections/northline-best-sellers.liquid`)
- **Display Count**: 4 products desktop / 2 products mobile.
- **Card Aspect Ratio**: `3:4` with secondary hover photo crossfade.
- **Controls**: Instant "+ Quick Add" or variant selector on card hover.
- **Header**: Centered title `"Most Loved"` with subtitle *"Customer favorites chosen for comfort, quality, and style."*

### 5.5 Brand Story Section (`sections/northline-brand-story.liquid`)
- **Layout**: 2-Column Split (Image Left, Story Text Right).
- **Typography**: Display headline `"Built for Modern Explorers"` with body narrative and `"Learn Our Story →"` editorial button.

### 5.6 Featured Collections (`sections/northline-featured-collections.liquid`)
- **Cap**: Maximum 3 featured collection cards (e.g. Outerwear, Bottoms, Accessories).
- **Aspect Ratio**: `3:4` portrait cards with hover zoom and product counts.
- **Footer**: `"View All Collections →"` button.

### 5.7 Promotional Banner (`sections/northline-promo-banner.liquid`)
- **Layout**: Full-width atmospheric background image with adjustable overlay opacity.
- **Copy**: `"New Season Arrivals"` / *"Fresh styles inspired by the outdoors."*
- **CTA**: High-contrast white button `"Shop Now"`.

### 5.8 Why Choose Us (`sections/northline-why-choose-us.liquid`)
- **Grid**: 4 Columns (Desktop) / 2 Columns (Tablet) / 1 Column (Mobile).
- **Trust Elements**:
  1. 🚚 **Fast Shipping**: Dispatched within 24-48 hours globally.
  2. 🔒 **Secure Checkout**: 256-bit SSL encrypted payment processing.
  3. ↩ **Easy Returns**: 30-day hassle-free exchange & return policy.
  4. ⭐ **Premium Quality**: Heavyweight fabrics built for everyday durability.

### 5.9 Instagram & Lifestyle Gallery (`sections/northline-lifestyle-gallery.liquid`)
- **Grid**: 6 Photos (Desktop: 6 cols, Tablet: 3 cols, Mobile: 2 cols).
- **Aspect Ratio**: Square `1:1`.
- **Interactions**: Dark hover overlay with Instagram icon and photo location caption.
- **Handle**: `"@sunsetsurfstore on Instagram →"` footer link.

### 5.10 Newsletter Block (`sections/northline-newsletter.liquid`)
- **Placement**: Directly above the footer.
- **Theme**: Minimalist dark box (`#111111`) with single-line email input and `"Subscribe"` arrow button.

### 5.11 Minimalist Dark Footer (`sections/northline-footer.liquid`)
- **Surface**: High-contrast `#121212` with `#ffffff` text.
- **Elements**: Oversized brand watermark ("SUNSET SURF"), quick navigation links, copyright, and payment trust badges.

---

## 6. Motion & Micro-Interactions

| Animation Name | Timing Function | Duration | Target Elements |
| :--- | :--- | :--- | :--- |
| `reveal-up` | `cubic-bezier(0.16, 1, 0.3, 1)` | `700ms` | Headlines, section titles, card appearances |
| `image-reveal` | `cubic-bezier(0.25, 1, 0.5, 1)` | `900ms` | Story & hero imagery on scroll |
| `line-grow` | `ease-in-out` | `1500ms (infinite)` | Hero scroll-down indicator line |
| `button-scale` | `ease-out` | `150ms` | Active state on all primary CTA buttons |

---
