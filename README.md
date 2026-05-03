# mwakidenis Next.js Template

This is a modern **portfolio and blog template** built with **Next.js** and **React**, featuring rich animations, interactive components, and Markdown-powered content management. It provides a scalable, performant foundation for creative professionals to showcase their work and publish engaging content.

---

## Features

- Modern UI built with **Next.js** + **React** + **Sass**
- Dynamic animations powered by **GSAP** and **Parallax.js**
- Interactive carousels with **Swiper**
- **Markdown-based content management** for posts and projects
- Component-based architecture (Hero, About, Services, Team, Testimonials, etc.)
- Responsive design and smooth page transitions
- Blog with pagination and dynamic routing
- Project portfolio with masonry and grid layouts
- Contact forms with **Formik** validation
- Date utilities with **date-fns**
- Cursor effects and scroll animations
- SEO-optimized pages

---

## Project Structure

```
mwakidenis-Next.js-Template/
├── src/
│   ├── common/                                    # Shared utilities & hooks
│   │   ├── cursor.js                             # Custom cursor effects
│   │   ├── preloader.js                          # Page preloader
│   │   ├── scrollAnims.js                        # Scroll animations
│   │   ├── sliderProps.js                        # Slider properties
│   │   ├── useClickOutside.js                    # Hook for click outside detection
│   │   ├── useLocalStorage.js                    # Local storage hook
│   │   └── utilits.js                            # Utility functions
│   │
│   ├── components/                               # Reusable UI components
│   │   ├── ImageView.jsx                         # Image viewer component
│   │   ├── PageBanner.jsx                        # Page banner section
│   │   ├── PageBannerDark.jsx                    # Dark theme banner
│   │   ├── PaginatedBlog.jsx                     # Paginated blog posts
│   │   ├── Pagination.jsx                        # Pagination controls
│   │   ├── ProjectInner[One-Six].jsx             # Project detail templates
│   │   ├── ProjectsGrid.jsx                      # Grid layout for projects
│   │   ├── ProjectsMasonry.jsx                   # Masonry layout for projects
│   │   │
│   │   ├── sections/                             # Page sections
│   │   │   ├── About.jsx
│   │   │   ├── CallToAction.jsx
│   │   │   ├── HeroOne.jsx & HeroTwo.jsx
│   │   │   ├── LatestPosts.jsx
│   │   │   ├── PopularPosts.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── RelatedPosts.jsx
│   │   │   ├── RelatedServices.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Subscribe.jsx
│   │   │   └── Team.jsx
│   │   │
│   │   └── sliders/                             # Slider components
│   │       ├── Partners.jsx
│   │       ├── Projects.jsx
│   │       └── Testimonial.jsx
│   │
│   ├── data/                                     # Content & configuration
│   │   ├── app.json                              # App configuration
│   │   ├── posts/                                # Markdown blog posts
│   │   │   └── *.md                              # Individual post files
│   │   ├── projects/                             # Project data
│   │   ├── sections/                             # Section configurations
│   │   ├── services/                             # Services data
│   │   └── sliders/                              # Slider data
│   │
│   ├── layouts/                                  # Layout components
│   │   ├── Layouts.js                            # Main layout wrapper
│   │   ├── back-to-top/                          # Back to top button
│   │   ├── cursor/                               # Cursor layout
│   │   ├── footers/                              # Footer components
│   │   ├── headers/                              # Header components
│   │   ├── pentagon/                             # Pentagon shape layout
│   │   ├── preloader/                            # Preloader component
│   │   ├── scrollbar-progress/                   # Scrollbar progress indicator
│   │   └── svg-icons/                            # SVG icon components
│   │
│   ├── lib/                                      # Helper libraries
│   │   ├── categories.js                         # Category utilities
│   │   ├── date.js                               # Date utilities
│   │   ├── posts.js                              # Blog post utilities
│   │   ├── projects.js                           # Project utilities
│   │   ├── services.js                           # Services utilities
│   │   └── usePagination.js                      # Pagination hook
│   │
│   ├── pages/                                    # Next.js pages
│   │   ├── _app.js                               # App wrapper
│   │   ├── _document.js                          # Document wrapper
│   │   ├── index.jsx                             # Home page
│   │   ├── 404.jsx                               # 404 error page
│   │   ├── blog.jsx                              # Blog listing
│   │   ├── contact.jsx                           # Contact page
│   │   ├── projects.jsx                          # Projects page
│   │   ├── projects-2.jsx & projects-3.jsx       # Project layout variants
│   │   ├── services.jsx                          # Services page
│   │   ├── team.jsx                              # Team page
│   │   ├── home-2.jsx                            # Alternative home layout
│   │   ├── api/                                  # API routes
│   │   ├── blog/                                 # Dynamic blog routes
│   │   ├── projects/                             # Dynamic project routes
│   │   └── services/                             # Dynamic service routes
│   │
│   └── styles/                                   # Styles
│       ├── globals.css                           # Global styles
│       └── scss/                                 # SCSS files
│
├── public/                                       # Static assets
│   ├── css/                                      # CSS assets
│   │   └── plugins/                              # Third-party CSS
│   │       ├── bootstrap-grid.css
│   │       ├── font-awesome.min.css
│   │       ├── magnific-popup.css
│   │       └── swiper.min.css
│   │
│   └── img/                                      # Images
│       ├── blog/                                 # Blog images
│       ├── faces/                                # Profile images
│       ├── icons/                                # Icon assets
│       ├── partners/                             # Partner logos
│       ├── photo/                                # General photos
│       └── works/                                # Portfolio work images
│
├── Documentation/                                # Project documentation
│   ├── index.html
│   ├── css/                                      # Documentation styles
│   ├── fonts/                                    # Fonts
│   ├── img/                                      # Documentation images
│   └── js/                                       # Documentation scripts
│
├── jsconfig.json                                 # JavaScript path aliases
├── next.config.js                               # Next.js configuration
├── package.json                                 # Project dependencies
├── LICENSE                                      # License file
└── SECURITY.md                                  # Security guidelines
```

---

## Installation

1. **Clone the repository**

   ```bash
  git clone https://github.com/AymaneMehdi/mwakidenis-Next.js-Template.git
  cd mwakidenis-Next.js-Template
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

---

## Running the Project

```bash
npm run dev
```

Runs the project on **http://localhost:3000**

---

## Building for Production

```bash
npm run build
npm start
```

---

## Tech Stack

| Tool / Library         | Version  | Description                                    |
|------------------------|----------|------------------------------------------------|
| **Next.js**            | 13.4.3   | React framework for production apps           |
| **React**              | 18.2.0   | UI library                                     |
| **Sass**               | 1.49.7   | CSS preprocessor for styling                  |
| **GSAP**               | 3.11.5   | Animation library for smooth effects          |
| **Parallax.js**        | 3.1.0    | Parallax scrolling effects                    |
| **Swiper**             | 9.0.0    | Modern carousel/slider component              |
| **Formik**             | 2.4.2    | Form management and validation                |
| **Gray-matter**        | 4.0.3    | Markdown frontmatter parser                   |
| **Remark**             | 14.0.3   | Markdown processor                            |
| **Remark-HTML**        | 15.0.2   | Convert Markdown to HTML                      |
| **date-fns**           | 2.30.0   | Modern date utility library                   |

---

## Scripts

| Command           | Description                     |
|------------------|---------------------------------|
| `npm run dev`     | Run development server          |
| `npm run build`   | Build for production            |
| `npm start`       | Start production server         |
| `npm run lint`    | Run ESLint for code quality     |

---

## Content Management

### Blog Posts

Blog posts are written in **Markdown** format and stored in `src/data/posts/`. Each post file includes:

- **Frontmatter** (title, date, author, category, image, etc.)
- **Markdown content** for the post body

Example: `src/data/posts/my-blog-post.md`

```markdown
---
title: "My Blog Post Title"
date: "2024-01-15"
author: "Author Name"
category: "Design"
image: "/img/blog/post-image.jpg"
description: "Post description..."
---

# Blog content goes here...
```

### Projects

Projects are stored in `src/data/projects/` with similar structure to blog posts, supporting both grid and masonry layouts.

### Services

Service information is managed in `src/data/services/` for the services page.

---

## Customization

### Adding Custom Animations

Use GSAP in your components:

```jsx
import { useEffect } from 'react';
import gsap from 'gsap';

export default function MyComponent() {
  useEffect(() => {
    gsap.to('.element', { duration: 1, opacity: 1 });
  }, []);

  return <div className="element">Animated content</div>;
}
```

### Styling with Sass

Global styles are in `src/styles/scss/`. Create component-specific styles and import them into your components.

### Custom Hooks

Use provided hooks in `src/common/`:

- `useClickOutside()` - Detect clicks outside elements
- `useLocalStorage()` - Manage local storage

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Copyright© Aymane Mehdi
