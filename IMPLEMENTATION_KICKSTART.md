# Nexus Realty Group - Implementation Kickstart Plan

## Project Overview

A high-converting, dark-mode landing page for "Nexus Realty Group" - a real estate brand leveraging predictive AI positioning. Frontend-only implementation using Next.js 16, Tailwind CSS, shadcn/ui, and Lucide React. All data is mock/placeholder. No backend integration required.

---

## 1. Design System & Theming

### Color Palette (4 colors)

| Token              | Hex       | Usage                                    |
| ------------------- | --------- | ---------------------------------------- |
| Background          | `#1A1A1B` | Page background                          |
| Electric Cobalt     | `#2D5BFF` | Primary accent, CTAs, links, highlights  |
| Off-White           | `#F5F5F5` | Body text, headings                      |
| Footer Background   | `#121213` | Footer section                           |

### Typography

| Role     | Font              | Weights       | Usage                          |
| -------- | ----------------- | ------------- | ------------------------------ |
| Headings | Playfair Display  | 700 (Bold)    | All h1-h4 headings             |
| Body     | Inter             | 400, 500, 600 | Body text, buttons, form labels|

### Design Token Overrides (globals.css)

Override the existing shadcn/ui CSS custom properties to implement the dark luxury theme:

- `--background`: Map to `#1A1A1B`
- `--foreground`: Map to `#F5F5F5`
- `--primary`: Map to `#2D5BFF` (Electric Cobalt)
- `--primary-foreground`: White for text on cobalt backgrounds
- `--card`: Slightly lighter than background (`#222224`)
- `--card-foreground`: `#F5F5F5`
- `--muted`: Subtle gray for secondary text
- `--muted-foreground`: Dimmed text color
- `--border`: Subtle border for card edges
- `--input`: Input field background
- `--ring`: Focus ring color (cobalt)
- `--accent`: Secondary interactive color
- `--popover` / `--popover-foreground`: For dialog styling
- `--radius`: `0.75rem` for modern rounded corners

The `.dark` class will NOT be used. Instead, we override the `:root` variables directly since the entire site is dark mode only.

### Font Setup (layout.tsx)

- Import `Playfair_Display` and `Inter` from `next/font/google`
- Apply CSS variables: `--font-playfair` and `--font-inter`
- Register in `tailwind.config.ts` under `fontFamily.sans` (Inter) and `fontFamily.serif` (Playfair Display)
- Apply `font-sans` to `<body>` and use `font-serif` on heading elements

---

## 2. File Architecture

```
app/
  layout.tsx              -- Root layout (fonts, metadata, theme)
  page.tsx                -- Main landing page (composes all sections)
  globals.css             -- Design tokens, custom utilities, marquee animation

components/
  ui/                     -- Existing shadcn/ui components (accordion, dialog, progress)
  sections/
    hero.tsx              -- Hero section with headline, subtext, CTA input
    recently-sold.tsx     -- Horizontal scrolling marquee of property cards
    advantages.tsx        -- 3-column differentiators grid
    services.tsx          -- Bento grid of core services
    faq.tsx               -- Accordion FAQ section
    testimonials.tsx      -- CSS scroll-snap testimonial carousel
    footer.tsx            -- Footer with columns, newsletter, compliance
  lead-capture-dialog.tsx -- Multi-step dialog form (Timeline -> Goal -> Contact)
  property-card.tsx       -- Reusable property card for marquee
  testimonial-card.tsx    -- Reusable testimonial card
```

**Total: ~12 component files + 3 config/style files to modify**

---

## 3. Section-by-Section Implementation Details

### 3.1 Hero Section (`components/sections/hero.tsx`)

- **Layout**: Full viewport height, centered content, flexbox column
- **Headline**: "The Future of Local Living." in Playfair Display, large (`text-5xl` mobile / `text-7xl` desktop)
- **Subtext**: "Leveraging predictive AI to help you buy or sell with confidence." in Inter, muted color
- **CTA**: Address input field (`<input>` with placeholder "Enter your property address...") + Cobalt button "Get 2026 Value Forecast"
- **Behavior**: Button click opens the Lead Capture Dialog (no actual forecast logic)
- **Responsive**: Stack input and button vertically on mobile, inline on desktop

### 3.2 Recently Sold Marquee (`components/sections/recently-sold.tsx`)

- **Layout**: Full-width horizontal scrolling marquee using CSS animation (`@keyframes marquee`)
- **Implementation**: Duplicate the card list to create seamless infinite scroll via `translateX` animation
- **Cards**: `property-card.tsx` - Each shows:
  - Placeholder property image (generated with GenerateImage tool)
  - Address text
  - Sale price
  - Badge: "Sold: [X]% Forecast Accuracy" (cobalt badge)
- **Mock Data**: 6-8 property cards with realistic addresses, prices ($350K-$1.2M range), accuracy badges (91-97%)
- **Responsive**: Same marquee behavior on all sizes, cards scale down on mobile
- **Interaction**: `hover` pauses the marquee animation (`animation-play-state: paused`)

### 3.3 The Nexus Advantage (`components/sections/advantages.tsx`)

- **Layout**: 3-column grid on desktop, single column on mobile (`grid md:grid-cols-3`)
- **Items**:
  1. **Predictive Analytics** - Icon: `TrendingUp` (Lucide) - Description about AI-powered market forecasting
  2. **Hyper-Local Data** - Icon: `MapPin` (Lucide) - Description about neighborhood-level insights
  3. **Frictionless Digital Closing** - Icon: `FileCheck` (Lucide) - Description about streamlined digital transactions
- **Style**: Card-style containers with subtle border, icon in cobalt, heading in serif, body in sans
- **Responsive**: Single column stack on mobile with consistent spacing

### 3.4 Core Services Bento Grid (`components/sections/services.tsx`)

- **Layout**: Asymmetric bento grid using CSS Grid
  - Desktop: 2x2 grid where item 1 spans full left column, items 2 and 3 stack on right
  - Mobile: Single column stack
- **Items**:
  1. **Smart Listing Suite** (large card, spans 2 rows on desktop) - Icon: `Sparkles` - Description about AI-optimized listing strategies
  2. **Buyer Priority Access** - Icon: `Key` - Description about early access to off-market opportunities
  3. **Investment Advisory** - Icon: `BarChart3` - Description about data-driven investment guidance
- **Style**: Cards with subtle gradient borders or border hover effects, cobalt accent icons

### 3.5 FAQ / Objection Removal (`components/sections/faq.tsx`)

- **Title**: "Common Questions." in Playfair Display
- **Component**: shadcn/ui `Accordion` (already available in project)
- **Type**: `single` collapsible accordion
- **Items** (4 total - content provided in spec):
  1. "How accurate is the 2026 forecast?"
  2. "Is my data sold to third parties?"
  3. "Is there an obligation to list?"
  4. "Do you work with buyers?"
- **Style**: Override accordion trigger to remove default underline hover, use cobalt chevron, add `border-border` between items
- **Responsive**: Full width on all breakpoints, generous padding

### 3.6 Testimonials Carousel (`components/sections/testimonials.tsx`)

- **Title**: "Data-Driven Results." in Playfair Display
- **Implementation**: CSS scroll-snap horizontal carousel
  - Container: `overflow-x-auto`, `scroll-snap-type: x mandatory`, `scroll-behavior: smooth`
  - Cards: `scroll-snap-align: start`, fixed width with responsive sizing
  - Navigation: Left/right arrow buttons using Lucide `ChevronLeft`/`ChevronRight`
  - Optional: Dot indicators showing current position
- **Cards** (`testimonial-card.tsx`): Each contains:
  - Client name (fake)
  - Role/context (e.g., "First-Time Buyer", "Seller in Maplewood")
  - Quote text
  - Star rating (5 stars using Lucide `Star` icon)
- **Mock Data**: 5-6 testimonials with realistic quotes about data-driven results
- **Responsive**: Single card visible on mobile, 2-3 visible on desktop, swipe-enabled on touch

### 3.7 Lead Capture Dialog (`components/lead-capture-dialog.tsx`)

- **Trigger**: Any CTA button on page ("Get 2026 Value Forecast", hero input button, section CTAs)
- **Component**: shadcn/ui `Dialog` (already available)
- **Progress Bar**: shadcn/ui `Progress` component at top showing 33% / 66% / 100%
- **Steps**:

  **Step 1 - Timeline** (33%):
  - Question: "When are you looking to make a move?"
  - Options (radio/button group): "Immediate", "3-6 Months", "6-12 Months", "12+ Months"
  - All required

  **Step 2 - Goal** (66%):
  - Question: "What's your primary goal?"
  - Options (radio/button group): "Buy", "Sell"
  - All required

  **Step 3 - Contact Info** (100%):
  - Fields: Full Name, Email Address, Phone Number
  - All fields required
  - Email: Standard email format validation
  - Phone: Basic phone format validation (digits, dashes, parentheses allowed)
  - Submit button: "Get My Forecast"

- **Navigation**: "Back" button on steps 2/3, "Next" button on steps 1/2
- **Validation**: Client-side using `zod` + `react-hook-form` (both in package.json)
- **On Submit**: Close dialog, show success confirmation via `sonner` toast: "Thank you! Your 2026 forecast is being prepared."
- **Responsive**: Dialog takes full width on mobile (`max-w-md` on desktop)

### 3.8 Footer (`components/sections/footer.tsx`)

- **Background**: `#121213`
- **Layout**: 3-column grid on desktop, stacked on mobile
  - **Column 1**: Nexus Realty Group logo/wordmark + tagline slogan
  - **Column 2**: Quick Links (Home, Services, About, Contact - all `#` placeholder hrefs)
  - **Column 3**: Newsletter signup (email input + "Subscribe" button, frontend only - no submission logic)
- **Bottom Bar**: 
  - Copyright text: "2026 Nexus Realty Group. All rights reserved."
  - Compliance text: "Equal Housing Opportunity" and "REALTOR" text marks (plain text, not logos since this is mock)
- **Responsive**: Single column stack on mobile

---

## 4. Technical Implementation Details

### 4.1 CSS Marquee Animation (globals.css)

```css
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

- Duplicated card list creates seamless loop
- `animation: marquee 30s linear infinite`
- `hover:` pauses via `animation-play-state: paused`

### 4.2 CSS Scroll-Snap Carousel (testimonials)

```css
.testimonial-scroll {
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}
.testimonial-scroll > * {
  scroll-snap-align: start;
}
```

- No external library needed
- JavaScript handles nav button clicks via `scrollBy({ left: cardWidth, behavior: 'smooth' })`

### 4.3 Form Validation Schema (zod)

```ts
const contactSchema = z.object({
  timeline: z.enum(["Immediate", "3-6 Months", "6-12 Months", "12+ Months"]),
  goal: z.enum(["Buy", "Sell"]),
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(7, "Valid phone number required"),
})
```

### 4.4 SEO & Metadata (layout.tsx)

```ts
export const metadata: Metadata = {
  title: "Nexus Realty Group | AI-Powered Real Estate Insights",
  description: "Leveraging predictive AI to help you buy or sell with confidence. Get your free 2026 property value forecast from Nexus Realty Group.",
  keywords: ["real estate", "AI", "property forecast", "buy", "sell", "Nexus Realty"],
  openGraph: {
    title: "Nexus Realty Group | The Future of Local Living",
    description: "Leveraging predictive AI to help you buy or sell with confidence.",
    type: "website",
    locale: "en_US",
    siteName: "Nexus Realty Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Realty Group | AI-Powered Real Estate",
    description: "Get your free 2026 property value forecast.",
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### 4.5 Accessibility Requirements

- All interactive elements keyboard-navigable
- Proper ARIA labels on carousel navigation buttons
- `sr-only` text for icon-only buttons
- Focus-visible rings on all interactive elements
- Semantic HTML: `<main>`, `<header>`, `<section>`, `<footer>`, `<nav>`
- Alt text on all property images
- `role="region"` and `aria-label` on carousel
- Dialog properly traps focus (handled by Radix)

---

## 5. Mock Data Specifications

### Property Cards (6 items)

| Address                    | Price      | Accuracy |
| -------------------------- | ---------- | -------- |
| 742 Evergreen Terrace      | $485,000   | 96%      |
| 1204 Maple Drive           | $720,000   | 94%      |
| 38 Birchwood Lane          | $395,000   | 97%      |
| 501 Oceanview Blvd         | $1,150,000 | 93%      |
| 89 Cedarwood Court         | $540,000   | 95%      |
| 2200 Parkside Avenue       | $875,000   | 96%      |

### Testimonials (5 items)

| Name            | Context               | Rating |
| --------------- | --------------------- | ------ |
| Sarah Mitchell  | Seller in Oakridge     | 5      |
| James Thornton  | First-Time Buyer       | 5      |
| Maria Gonzalez  | Investor               | 5      |
| David Chen      | Seller in Maplewood    | 5      |
| Emily Parker    | Buyer in Riverside     | 5      |

---

## 6. Files to Modify (Existing)

| File                    | Changes                                                   |
| ----------------------- | --------------------------------------------------------- |
| `app/globals.css`       | Override `:root` CSS variables for dark theme, add marquee keyframes, scroll-snap utilities |
| `app/layout.tsx`        | Add Playfair Display + Inter fonts, update metadata/SEO, apply font CSS vars |
| `tailwind.config.ts`    | Add `fontFamily.serif` (Playfair) and update `fontFamily.sans` (Inter), add marquee animation keyframe, add custom colors if needed |
| `app/page.tsx`          | Compose all section components into the landing page       |

## 7. Files to Create (New)

| File                                       | Purpose                              |
| ------------------------------------------ | ------------------------------------ |
| `components/sections/hero.tsx`             | Hero section                         |
| `components/sections/recently-sold.tsx`    | Marquee of sold properties           |
| `components/sections/advantages.tsx`       | 3-column differentiators             |
| `components/sections/services.tsx`         | Bento grid services                  |
| `components/sections/faq.tsx`              | Accordion FAQ                        |
| `components/sections/testimonials.tsx`     | Scroll-snap testimonial carousel     |
| `components/sections/footer.tsx`           | Footer with links and compliance     |
| `components/lead-capture-dialog.tsx`       | Multi-step lead capture form         |
| `components/property-card.tsx`             | Reusable property card               |
| `components/testimonial-card.tsx`          | Reusable testimonial card            |

---

## 8. Image Generation Plan

Generate the following placeholder images using the GenerateImage tool:

1. **6 property images** - Modern residential homes, luxury aesthetic, photographed at dusk/golden hour for consistency with dark theme
2. Optional: Hero background texture or subtle pattern if needed

---

## 9. Implementation Order

| Step | Task                                                   | Dependencies          |
| ---- | ------------------------------------------------------ | --------------------- |
| 1    | Update design tokens in `globals.css`                  | None                  |
| 2    | Configure fonts in `layout.tsx` + update `tailwind.config.ts` | Step 1          |
| 3    | Generate property placeholder images                   | None (parallel with 1-2) |
| 4    | Build `property-card.tsx` and `testimonial-card.tsx`   | Steps 1-2             |
| 5    | Build Hero section                                     | Steps 1-2             |
| 6    | Build Recently Sold marquee                            | Steps 3-4             |
| 7    | Build Advantages section                               | Steps 1-2             |
| 8    | Build Services bento grid                              | Steps 1-2             |
| 9    | Build FAQ section                                      | Steps 1-2             |
| 10   | Build Testimonials carousel                            | Step 4                |
| 11   | Build Lead Capture Dialog                              | Steps 1-2             |
| 12   | Build Footer                                           | Steps 1-2             |
| 13   | Compose `page.tsx` with all sections                   | Steps 5-12            |
| 14   | Final responsive pass and polish                       | Step 13               |

---

## 10. Confirmed Decisions Summary

| Decision                    | Resolution                                          |
| --------------------------- | --------------------------------------------------- |
| Forecast CTA                | Placeholder - opens lead capture dialog             |
| Lead capture destination    | Frontend only - toast confirmation on submit         |
| Data source                 | All mock/hardcoded                                   |
| Property images             | Generated placeholder images                         |
| Testimonials                | Fake data, realistic quotes                          |
| Form fields                 | All required                                         |
| Timeline options            | Immediate, 3-6 Months, 6-12 Months, 12+ Months     |
| Goal options                | Buy, Sell                                            |
| Form submission             | Toast confirmation message                           |
| Marquee implementation      | Custom CSS animation (infinite translateX)            |
| Testimonial carousel        | Custom CSS scroll-snap                               |
| Mobile strategy             | Fully responsive, single column on mobile            |
| Legal/compliance            | Mock text only, no real logos needed                  |
| SEO                         | Full meta tags, Open Graph, Twitter cards, robots     |
| Backend                     | None - purely frontend                               |
