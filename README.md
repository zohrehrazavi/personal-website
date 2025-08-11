# Zohreh Razavi - Personal Portfolio

A modern, responsive portfolio website showcasing software project and product management work.

## Structure

- **Home** (`/`) - Landing page with flower navigation
- **About** (`/about/`) - Bio, principles, and quick facts
- **Work** (`/work/`) - Case studies and project outcomes
- **Process** (`/process/`) - 5-step project methodology
- **Tools** (`/tools/`) - Technology stack and preferred tools
- **Notes** (`/notes/`) - Short insights and thoughts
- **Contact** (`/contact/`) - Contact form and links

## Features

- **Responsive Design** - Optimized for all screen sizes
- **Accessibility** - Keyboard navigation and screen reader support
- **SEO Optimized** - Meta tags, sitemap, and robots.txt
- **Modern UI** - Clean, professional design with brand colors
- **Fast Loading** - Optimized CSS and minimal JavaScript
- **Pinned Footer** - Thin, consistent footer across all pages

## Directory Organization

```
personal-website/
├── shared/
│   ├── css/
│   │   ├── styles.css      # Global styles and utilities
│   │   ├── header.css      # Header styling
│   │   ├── main.css        # Main content and page-specific styles
│   │   └── footer.css      # Footer styling (thin, pinned)
│   └── js/
│       └── script.js       # Responsive layout management
├── about/
│   ├── index.html
│   ├── css/                # Page-specific styles (if needed)
│   └── js/                 # Page-specific scripts (if needed)
├── work/
│   ├── index.html
│   ├── css/
│   └── js/
├── process/
│   ├── index.html
│   ├── css/
│   └── js/
├── tools/
│   ├── index.html
│   ├── css/
│   └── js/
├── notes/
│   ├── index.html
│   ├── css/
│   └── js/
├── contact/
│   ├── index.html
│   ├── css/
│   └── js/
├── index.html              # Main landing page
├── styles.css              # Landing page specific styles
├── sitemap.xml             # SEO sitemap
├── robots.txt              # Search engine directives
└── resume.pdf              # Resume placeholder (replace with actual file)
```

## Navigation

The main navigation uses a unique flower layout with 6 petals:
- Each petal is an accessible link to a section
- Hover effects and focus states for better UX
- Mobile-optimized with touch-friendly targets

## Colors

- **Primary Pink**: `#d97683`
- **Hover Pink**: `#bb5e6c`
- **Background**: `#fdf2f4`
- **Text**: `#333`
- **Accent**: `#fff0f1`

## CSS Architecture

- **Modular Design** - Separate CSS files for different components
- **Shared Styles** - Common elements (header, footer, typography) in shared files
- **Page-Specific Styles** - Individual page layouts and components
- **Responsive First** - Mobile-first approach with progressive enhancement

## Setup

1. Replace `resume.pdf` with your actual resume
2. Update contact information in all pages
3. Customize content for your experience
4. Deploy to your hosting service

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design for all screen sizes

## Recent Updates

- **Thinner Footer** - Reduced from bulky to 40px height, pinned to bottom
- **Consistent Layout** - Uniform structure across all subpages
- **Better Organization** - Shared CSS files for maintainability
- **Improved Responsiveness** - Better mobile experience
