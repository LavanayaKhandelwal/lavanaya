# 🖼️ Portfolio Image Integration & Asset Mapping Plan

> **Note**: As instructed, this plan preserves **100% of all existing tactile designs, washi tape accents, polaroid shadows, and color palettes**. Reference images are used solely for copywriting accuracy and image placement mapping.

---

## 1. Directory Structure & Ingestion Status
All 51 files from `/Users/yswnth/Downloads/Portfolio Images ` have been copied into the project directory at:
```
public/portfolio-assets/
```
- **HEIC conversion completed**: Browser-compatible `.jpg` versions of Apple HEIC photos (`IMG_2187.jpg`, `IMG_4453.jpg`) were generated using `sips` so they render properly across Chrome, Safari, and Firefox.
- Total files available: **53 assets** (15 JPEGs, 34 PNGs, 2 MP4 Reels, 2 converted HEIC images).

---

## 2. Asset Classification & Mapping

The 53 assets fall into **two distinct categories**:
1. **Reference / Source Slides**: Screenshots of Canva pitch decks, text outlines, and WhatsApp logs that were used to write the copywriting. (Kept safely in `/public/portfolio-assets/` for audit trail).
2. **Actual Showcase Media**: Photos, videos, mockups, and fabrication steps to be rendered inside the pages.

---

### Section A: Internship — AADIYA JEWELS
**Page 1: Social Media (`/internship/experience` — Tab 1)**
| Asset File | Type | Target Placement | Description |
| :--- | :--- | :--- | :--- |
| `f54639f8-2182-461e-bc6b-63ce3787f763.mp4` | Video (Reel) | Page 1 "Videos Also" Showcase | Fine jewellery product reel with autoplay/loop |
| `B7E707CC-CED2-43AE-A2AD-C2B28D50CD10.mp4` | Video (Reel) | Page 1 Video Production Grid | Studio video demonstrating product styling & shine |
| `IMG_1559.PNG` / `IMG_1560.PNG` | Image | Social Media Grid & Storytelling | Instagram feed planning & jewellery product styling |
| `WhatsApp Image 2026-09-13 at 19.42.18.jpeg` | Image | On-set Jewellery Photography | Close-up macro jewellery lighting & photography |

**Page 2: E-Commerce & My Learning (`/internship/experience` — Tab 2)**
| Asset File | Type | Target Placement | Description |
| :--- | :--- | :--- | :--- |
| `Screenshot 2026-09-13 at 6.31.18 PM.png` | Banner Image | "Website Banners" Feature | Wide desktop e-commerce hero banner designed for Aadiya Jewels |
| `Screenshot 2026-09-13 at 6.34.14 PM.png` | Banner Image | Mobile / Collection Banner | Promotional category banner for jewellery collection |
| `Screenshot 2026-09-13 at 6.31.58 PM.png` | UI Image | Product Listing & Catalogue | Shopify product detail page layout & specification tags |

---

### Section B: Project 1 — Marketing Management (UNIQLO Fragrance)
**Target Page**: `/projects/marketing`
| Asset File | Target Placement | Description |
| :--- | :--- | :--- |
| `01_UNIQLO_main.jpg` | Page 1 & 2: Cover Hero | UNIQLO LifeWear brand extension fragrance hero |
| `02_market_trends.jpg` | Page 1: Market Context | Market trends & category expansion diagram |
| `Screenshot 2026-09-15 at 7.50.52 PM.png` | Page 3: 4 Variants & Minimal Packaging | 4 Japanese variant bottles (minimalist packaging design) |
| `Screenshot 2026-09-15 at 8.11.17 PM.png` | Page 4: Strategy (STP / 7Ps) | Marketing mix & BCG growth-share architecture |
| `Screenshot 2026-09-15 at 8.11.34 PM.png` | Page 4: Physical Evidence / Retail | In-store sensory tester display rendering |

---

### Section C: Project 2 — Visual Merchandising (Cover Story — Future Florals)
**Target Page**: `/projects/visual-merchandising`
| Asset File | Target Placement | Description |
| :--- | :--- | :--- |
| `BRAND BOOK  - 1.png` | Page 1: Cover Page | Cover Story Spring/Summer window identity cover |
| `BRAND BOOK  - 16.png` | Page 3: Mood Board | Feminine · Dreamy · Soft · Futuristic mood collage |
| `BRAND BOOK  - 18.png` | Page 3: Colour Board | Blush, lavender, sky blue, holographic swatch matrix |
| `1e36b3dd-85f2-438b-b90a-e7143dbd03cd.jpg` | Page 4: Image 1 | **Crafting the Details**: Holographic sheets shaped with wire |
| `6fa49fa5-d790-4c76-9f00-69ca01bfcdc2.jpg` | Page 4: Image 2 | **The concept takes form**: First floral element structure |
| `7eee7676-2ce8-4667-9ef7-abf624ba1833.jpg` | Page 4: Image 3 | **Refining the Form**: Careful folding & sculpting of petals |
| `97e20f9d-778d-44a3-bc5f-d32b6c39b7a3.jpg` | Page 4: Image 4 | **Building the Collection**: Multiple floral elements grouped |
| `DD05B299-B533-4126-B54A-3B48CD3AA413.jpg` | Page 4: Image 5 | **Creating the environment**: Backdrop and drapes installed |
| `f72aff62-4ccf-4668-9ba7-1a88dc9a9eab.jpg` | Page 5: Final Installation | Full window display with mannequin focal point |

---

### Section D: Project 3 — Start Up (Athleisure Hybrid: Structured × Relaxed)
**Target Page**: `/projects/project-3`
| Asset File | Target Placement | Description |
| :--- | :--- | :--- |
| `Screenshot 2026-09-18 at 7.51.59 PM.png` | Page 1: Cover | Start-up venture identity and concept cover |
| `Screenshot 2026-09-18 at 7.12.03 PM.png` | Page 2: Survey Insights | User feedback chart (comfort vs style, gym versatility) |
| `Screenshot 2026-09-18 at 7.03.12 PM.png` | Page 3: 01 Design | Structured crop top & relaxed joggers technical flats |
| `Screenshot 2026-09-18 at 7.03.20 PM.png` | Page 3: 02 Material | Lycra & Terry Cotton swatch & breathability specs |
| `Screenshot 2026-09-18 at 7.03.30 PM.png` | Page 3: 03 Final Prototype | Physical MVP prototype photo (Structured × Relaxed) |
| `Screenshot 2026-09-18 at 8.44.29 PM.png` | Page 4: Feedback Loop | Feedback → Iteration → Impact graphic |

---

## 3. Implementation Steps (After Your Approval)

1. **Update Data Model ([`src/data/portfolioData.ts`](file:///Users/yswnth/Downloads/curio-—-ai-creative-collaborator/src/data/portfolioData.ts))**:
   - Add image paths for each section, project, and step referencing `/portfolio-assets/<filename>`.
2. **Embed Media into Existing Styled Cards**:
   - Render the real video reels in `InternshipExperiencePage.tsx` with mute/loop controls.
   - Render the desktop/mobile website banners in Page 2 of the internship.
   - Embed the 5 numbered fabrication photos into Page 4 of `ProjectVisualMerchandisingPage.tsx`.
   - Embed the prototype photos and survey charts into `ProjectThreePage.tsx`.
   - Embed the fragrance product bottles and marketing diagrams into `ProjectMarketingPage.tsx`.
3. **Verify Build**:
   - Run `npm run lint` and `npm run build` to ensure all assets load with zero runtime errors.
