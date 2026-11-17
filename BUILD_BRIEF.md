# LUXORA Vision Build

Build the complete LUXORA website in this single initial Build.

IMPORTANT:
This is a ONE-SHOT INITIAL BUILD.
Build the complete website now in this implementation.
Do NOT intentionally simplify, postpone, omit, or leave major sections for future prompts.
Do NOT stop after creating only a landing page, hero, or a few sections.
Do NOT ask me to provide another prompt for the remaining sections.
Make reasonable design and implementation decisions yourself when something is not explicitly specified.

The goal is to create a complete, polished, premium, production-quality website that can be exported/synced to GitHub and maintained manually outside Lovable after this initial build.

Do not create unnecessary backend infrastructure, authentication, database, payments, subscriptions, user accounts, or external integrations.
This is primarily a premium frontend website/prototype.
Forms should have realistic client-side validation and simulated success/error/loading states, with clean handlers prepared for future WhatsApp/email/CRM/backend integration.

==================================================

1. PROJECT
    ==================================================

Brand:
LUXORA

Tagline:
BEAUTY, REDEFINED.

Persian tagline:
زیبایی، با نگاه علمی و ظریف.

Project type:
Premium luxury beauty / aesthetics / wellness clinic website.

The website should feel like a real high-end business website, not a generic medical template.

It should also be adaptable in structure and component quality to:

* dermatology
* dental clinics
* laser clinics
* beauty salons
* wellness centers
* physiotherapy
* doctors
* consultants
* premium personal-care brands

Primary audience:
Premium clients who value:

* quality
* trust
* expertise
* natural-looking results
* privacy
* professionalism
* modern technology
* premium experience

Primary conversion goal:
Book a consultation.

Secondary conversion:
WhatsApp contact.

Third conversion:
Explore services.

==================================================
2. BRAND PERSONALITY

The brand personality must be:

* premium
* elegant
* calm
* confident
* scientific
* modern
* minimal
* feminine without becoming overly decorative
* trustworthy
* editorial
* sophisticated

The visual direction is:

LUXURY + EDITORIAL + MODERN MEDICAL PRECISION + CALM WELLNESS

Avoid:

* generic medical website aesthetics
* hospital-like interfaces
* cheap beauty salon styling
* excessive pink
* excessive floral decoration
* cliché luxury graphics
* overly feminine decoration
* cartoon-like UI
* generic SaaS layouts
* dashboard styling
* gaming aesthetics
* neon colors
* excessive glassmorphism
* excessive gradients
* excessive rounded cards
* excessive shadows

==================================================
3. VISUAL DESIGN SYSTEM

Primary palette:

Warm ivory / off-white
Charcoal / near-black
Muted champagne
Refined soft gold
Subtle warm beige

The overall visual experience should be warm, sophisticated and editorial.

Do NOT use bright yellow.
Do NOT use neon colors.
Do NOT make the website predominantly black.
Do NOT use gold excessively.

Use contrast intentionally between light editorial sections and darker premium sections.

Use generous whitespace.

Use thin borders, refined lines, numbering, captions, arrows and small metadata labels to create an editorial premium feeling.

Typography:
Use one sophisticated display/editorial typeface and one highly readable body typeface.

Persian typography must remain highly readable.

English may be used selectively where it strengthens the premium identity, for example:
LUXORA
BEAUTY, REDEFINED.
THE LUXORA PHILOSOPHY
CLIENT STORIES
YOUR LUXORA JOURNEY

All other content should feel natural in Persian.

==================================================
4. RTL + RESPONSIVE

The website is Persian-first and must use:

lang=“fa”
dir=“rtl”

Create one unified responsive design system.

Mobile-first.

Test and optimize for:

360px
390px
430px
768px
1024px
1280px
1440px+

The mobile version must not simply be a squeezed desktop version.

Mobile must have:

* appropriate typography
* correct spacing
* usable touch targets
* simplified layouts where necessary
* functional navigation
* functional sliders
* functional accordion
* responsive gallery
* responsive forms

Desktop should take advantage of:

* asymmetric layouts
* editorial composition
* large typography
* whitespace
* image compositions
* split sections
* refined horizontal relationships

==================================================
5. TECHNICAL FOUNDATION

Use a clean modern React + TypeScript implementation.

Use the standard Lovable-supported modern frontend stack.

Prefer:

* React
* TypeScript
* Tailwind CSS or clean modular CSS
* Lucide icons
* lightweight motion/animation tooling only when useful

Keep dependencies reasonable.

Do not add unnecessary libraries.

Use reusable components.

Avoid monolithic components.

Avoid duplicated markup.

Avoid magic values scattered throughout the project.

Use structured data arrays for:

* services
* specialists
* gallery
* testimonials
* FAQ
* process steps

Centralize:

* design tokens
* image references
* reusable content where practical

Keep the project easy for another developer to continue in GitHub.

==================================================
6. GLOBAL HEADER

Create a premium sticky header.

Desktop navigation:

خدمات
درباره ما
نتایج
متخصصین
سؤالات متداول
تماس

Primary CTA:

رزرو مشاوره

The header should initially work naturally over the hero with a transparent/semi-transparent treatment.

On scroll:

* transition into a refined solid/blurred background
* subtle shadow/border
* smooth transition
* maintain excellent readability

Include:

* LUXORA logo
* navigation
* consultation CTA
* mobile menu trigger

Mobile:
Create a premium full-screen or large overlay menu.

Menu should include:

* navigation links
* consultation CTA
* contact/WhatsApp option

The menu transition should be elegant and smooth.

==================================================
7. HERO

Create a cinematic luxury hero.

Use a sophisticated editorial beauty/wellness image.

The hero should feel:

* calm
* premium
* cinematic
* spacious
* confident
* editorial

Hero content:

LUXORA

BEAUTY, REDEFINED.

زیبایی، با نگاه علمی و ظریف.

Add supporting Persian copy communicating:
scientific expertise, personalized treatment, natural-looking results and premium care.

Primary CTA:
رزرو مشاوره

Secondary CTA:
مشاهده خدمات

Include subtle trust information.

Include a subtle scroll indicator.

Animation:

* elegant text reveal
* image reveal
* subtle entrance motion
* restrained parallax where appropriate

Do NOT over-animate the hero.

==================================================
8. TRUST STRIP

Create a refined trust/statistics section.

Include:

10+ سال تجربه

5000+ مراجعه

98٪ رضایت

تخصص و تکنولوژی

Use editorial typography and subtle separators.

==================================================
9. SERVICES

Create a premium services section.

Main services:

پوست
لیزر
جوانسازی
فرم‌دهی صورت
مراقبت و Wellness

Use editorial image cards.

Desktop:
Use an asymmetric composition rather than a repetitive equal-card grid.

Mobile:
Stack the services elegantly.

Each service should include:

* image
* service name
* short description
* arrow / explore indicator

Interaction:

* image zoom on hover
* subtle overlay
* text movement
* arrow transition

Keep interactions refined and fast.

==================================================
10. FEATURED SERVICE STORY

Create a large editorial split section.

Example:

SKIN RENEWAL

بازسازی و جوانسازی پوست

Explain the approach:

* personalized
* scientific
* natural
* premium
* carefully planned

Use:

* large image
* editorial typography
* supporting copy
* CTA
* subtle motion

==================================================
11. BEFORE / AFTER

Create an interactive Before / After comparison component.

Requirements:

* draggable divider
* before image
* after image
* clear labels
* desktop functionality
* mobile touch functionality
* smooth interaction

Add tasteful disclaimer:

نتایج درمان بسته به شرایط هر فرد متفاوت است.

The component must actually work.

==================================================
12. LUXORA PHILOSOPHY / ABOUT

Section title:

THE LUXORA PHILOSOPHY

Persian concept:

نگاه ما به زیبایی

Explain the philosophy:

Scientific expertise + modern technology + subtle aesthetic treatment.

The message should emphasize:

* natural results
* individuality
* scientific decision-making
* modern technology
* careful aesthetic judgment
* premium patient experience

Include:

* editorial image
* statistics
* thin decorative line
* subtle scroll reveal
* 10+ YEARS badge

==================================================
13. SPECIALISTS

Create 3–4 fictional specialists.

Use fictional but realistic information.

Each specialist should include:

* portrait
* name
* specialty
* credentials
* profile interaction

Interaction:

* elegant hover
* image movement/zoom
* name transition
* arrow

The profiles should feel premium and credible.

Do not imply these are real people.

==================================================
14. RESULTS / GALLERY

Create an editorial results gallery.

Use varied image proportions.

Do NOT use a boring uniform grid.

Create an asymmetric editorial composition.

Filters:

همه
پوست
لیزر
صورت
Wellness

Filtering must actually work.

Gallery interaction:

* image zoom
* subtle overlay
* category indication
* smooth transition

Images should feel:

* natural
* premium
* sophisticated
* medically tasteful

Avoid:

* unrealistic skin
* excessive retouching
* cheesy stock imagery
* overly sexualized imagery
* low-quality images

==================================================
15. TESTIMONIALS

Section:

CLIENT STORIES

Persian concept:

تجربه مراجعین

Create 4–5 fictional testimonials.

Each should include:

* quote
* fictional client name
* service
* rating

Create a working responsive carousel.

Desktop:
Elegant horizontal presentation.

Mobile:
Touch-friendly carousel.

==================================================
16. PROCESS

Section:

YOUR LUXORA JOURNEY

Create four steps:

01
مشاوره

02
ارزیابی شخصی

03
برنامه درمانی

04
پیگیری و مراقبت

Each step should include a Persian explanation.

Use:

* numbering
* editorial lines
* subtle scroll reveal
* refined transitions

==================================================
17. FAQ

Create an accessible FAQ accordion.

Questions should cover:

آیا برای دریافت خدمات نیاز به مشاوره اولیه است؟

جلسه مشاوره چقدر طول می‌کشد؟

ماندگاری نتایج چقدر است؟

قبل از درمان چه نکاتی را باید رعایت کرد؟

دوره نقاهت چگونه است؟

چطور بهترین روش درمانی را انتخاب کنم؟

Requirements:

* keyboard accessible
* semantic buttons
* visible focus states
* smooth open/close
* one or a small number open at once
* mobile friendly

==================================================
18. BOOKING / LEAD GENERATION

Create a premium booking section.

Title:

START YOUR JOURNEY

Persian:

شروع مسیر شما

Form fields:

نام
شماره تماس
خدمت موردنظر
زمان ترجیحی
پیام

Requirements:

* validation
* focus states
* error states
* loading state
* success state
* accessible labels
* keyboard navigation

For this initial build:
Use a simulated client-side submission.

Prepare the handler cleanly so it can later connect to:

* WhatsApp
* email
* CRM
* backend

Do NOT create a real backend/database for this initial build.

==================================================
19. WHATSAPP / CONTACT

Create clear WhatsApp/contact CTAs.

Use a reusable button pattern.

Prepare a centralized future WhatsApp URL placeholder.

Do not hard-code the WhatsApp link in multiple components.

==================================================
20. CONTACT INFORMATION

Use the following fictional contact information:

تهران، ایران

۰۲۱-۱۲۳۴۵۶۷۸

hello@luxora.ir

@luxora.clinic

شنبه تا پنجشنبه، ۹ تا ۲۰

Clearly treat these as fictional/demo business details.

==================================================
21. FOOTER

Create a premium footer.

Include:

* LUXORA logo
* brand statement
* navigation
* services
* contact
* Instagram
* privacy
* terms

Also include:

LUXORA NOTES

with newsletter copy and email subscription field.

Newsletter can use a simulated client-side success state.

==================================================
22. MICRO-INTERACTION SYSTEM

Create a consistent interaction language throughout the website.

Include subtle interactions for:

* buttons
* arrows
* image zoom
* text reveal
* navigation
* card hover
* accordion
* carousel
* before/after slider
* form focus
* sticky header
* section entrances

Buttons should feel tactile and premium.

Use:

* subtle lift
* subtle press
* controlled shadow
* small translation
* refined transitions

Do NOT make buttons look like gaming UI.

==================================================
23. SCROLL ANIMATION

Use restrained premium motion.

Allowed patterns:

* fade-up
* image reveal
* masked text reveal
* subtle horizontal movement
* parallax on selected sections
* scale-in

Motion must support the editorial experience.

Do not animate everything.

Do not make the website feel like a demo of animation effects.

Parallax:
Use only in selected sections.

On mobile:
reduce or disable heavy parallax.

Respect:

prefers-reduced-motion

and provide a reduced-motion experience.

==================================================
24. IMAGE DIRECTION

Use high-quality temporary editorial imagery.

Image direction:

* natural skin
* sophisticated lighting
* premium interiors
* beauty/wellness lifestyle
* professional specialists
* subtle medical environment
* neutral cinematic tones
* elegant compositions

Avoid:

* cheesy stock photos
* unrealistic skin
* heavy filters
* low-quality images
* excessive retouching
* overly sexualized imagery
* generic hospital photography

Centralize image references so they can easily be replaced later from GitHub.

==================================================
25. ACCESSIBILITY

Implement:

* semantic HTML
* correct heading hierarchy
* alt text
* keyboard navigation
* visible focus states
* sufficient contrast
* accessible buttons
* accessible accordion
* accessible form labels
* touch-friendly controls
* reduced motion support

Do not sacrifice accessibility for visual effects.

==================================================
26. PERFORMANCE

Keep the site performant.

Avoid:

* unnecessarily huge images
* excessive DOM complexity
* unnecessary animations
* unnecessary dependencies
* excessive JavaScript
* heavy WebGL
* unnecessary backend services

Use responsive image behavior where practical.

Keep components reusable.

==================================================
27. SEO

Implement basic SEO.

Include:

* meaningful page title
* meta description
* Open Graph metadata where appropriate
* semantic HTML
* correct lang and dir attributes
* useful heading structure
* descriptive image alt text

Use a natural Persian SEO-oriented title and description for LUXORA.

==================================================
28. DESIGN TOKENS

Create reusable design tokens for:

colors
typography
spacing
radius
borders
shadows
transitions
container widths

Keep the visual system consistent.

Do not randomly choose different values throughout the project.

==================================================
29. PAGE COMPOSITION

The final page should flow approximately as:

HEADER

HERO

TRUST STRIP

SERVICES

FEATURED SERVICE STORY

BEFORE / AFTER

LUXORA PHILOSOPHY

SPECIALISTS

RESULTS / GALLERY

CLIENT STORIES

YOUR LUXORA JOURNEY

FAQ

START YOUR JOURNEY / BOOKING

CONTACT

FOOTER

The transitions between sections must feel intentional.

Use alternating light/dark visual rhythm where appropriate.

Do not make every section look identical.

==================================================
30. PREMIUM EDITORIAL DETAIL

Use sophisticated details such as:

* thin rules
* section numbering
* small uppercase English labels
* Persian editorial captions
* arrows
* metadata
* whitespace
* asymmetric layouts
* large display typography
* controlled image crops
* subtle borders
* refined hover states

The design should feel intentionally art-directed.

It should NOT feel like:

* a template
* a Shopify clone
* a generic AI-generated website
* a generic medical website
* a generic Tailwind starter

==================================================
31. BUSINESS CONVERSION

The primary user journey should be:

Discover LUXORA
→ Understand expertise
→ Explore services
→ See results
→ Build trust
→ Understand process
→ Book consultation

Make CTAs clear without becoming aggressive.

Primary CTA:
رزرو مشاوره

Secondary:
تماس در واتساپ

Third:
مشاهده خدمات

==================================================
32. FUNCTIONALITY REQUIREMENTS

The following must actually work in the initial build:

* desktop navigation
* mobile navigation
* sticky header
* smooth section navigation
* service interactions
* gallery filters
* before/after slider
* testimonial carousel
* FAQ accordion
* booking form validation
* booking form success state
* newsletter interaction
* responsive layout
* buttons and CTAs
* WhatsApp CTA placeholder
* scroll animations
* reduced-motion behavior

Do not leave these as visual-only mockups.

==================================================
33. CONTENT QUALITY

Write natural, polished Persian copy.

Do not use obvious AI filler.

Do not repeat the same sentence structure throughout the site.

Keep English terminology only where it improves the premium identity.

All fictional people, testimonials and clinic information must remain clearly fictional/demo content.

==================================================
34. OUT OF SCOPE

Do NOT implement:

* advanced 3D
* WebGL
* Three.js-heavy scenes
* AI generation features
* authentication
* user dashboards
* payment processing
* subscriptions
* database
* admin panel
* real patient records
* real medical claims
* real booking backend
* real CRM integration
* unnecessary cloud services

The goal is an exceptional premium frontend experience.

Advanced interactive 3D / AI / WebGL belongs to a future project/version and should NOT compromise this build.

==================================================
35. CODE QUALITY

The final code must be:

* maintainable
* modular
* readable
* reusable
* portable
* GitHub-friendly
* easy for another developer to understand

Prefer components such as:

Header
MobileMenu
Hero
TrustStrip
Services
ServiceStory
BeforeAfter
About
Specialists
Gallery
Testimonials
Process
FAQ
BookingForm
Contact
Footer
Button
SectionHeading

Do not create one giant monolithic component.

==================================================
36. FINAL SELF-REVIEW BEFORE FINISHING

Before considering the Build complete, internally review the entire implementation.

Verify:

1. The site builds successfully.
2. There are no obvious TypeScript errors.
3. There are no obvious broken imports.
4. The main page renders correctly.
5. All major sections exist.
6. Mobile navigation works.
7. Gallery filters work.
8. Before/after interaction works.
9. Testimonials carousel works.
10. FAQ works.
11. Booking form validation works.
12. Responsive behavior is coherent.
13. RTL direction is correct.
14. Persian typography is readable.
15. Buttons have consistent interaction behavior.
16. Animations are restrained.
17. Reduced-motion behavior exists.
18. Images do not destroy the layout.
19. No unnecessary backend/database/authentication was added.
20. The visual result feels premium, editorial, modern and sophisticated.
21. The result does not look like a generic template.
22. The code remains portable and easy to continue in GitHub.

If you detect an obvious implementation problem during this initial Build, fix it as part of this same Build before finishing.

==================================================
37. FINAL QUALITY BAR

The final result should feel like a website designed by:

* a premium brand designer
* an experienced UX designer
* a senior frontend developer
* an art director

working together.

It must be:

PREMIUM
EDITORIAL
MODERN
CALM
SCIENTIFIC
ELEGANT
RESPONSIVE
FUNCTIONAL
FAST
ACCESSIBLE
CONVERSION-FOCUSED

Do not optimize for the smallest possible implementation.

Optimize for the strongest complete first-pass website that can realistically be produced in this single initial Build.

After this Build, the project will be maintained manually through GitHub, so prioritize clean architecture, portable code, centralized content/image references, and maintainability.

BUILD THE COMPLETE LUXORA WEBSITE NOW.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d2f6b3b4-c332-4696-86c1-98993037bbf1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
