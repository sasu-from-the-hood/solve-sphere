# Solve Sphere Portfolio Website

A modern, professional portfolio website built with React, Tailwind CSS, and shadcn/ui components.

## Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Fast loading times and smooth interactions
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Built with accessibility best practices
- **Component-Based**: Modular React components for easy maintenance

## Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible UI components
- **Lucide React** - Beautiful, customizable icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd solve-sphere
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── Header.jsx    # Navigation header
│   ├── Hero.jsx      # Hero section
│   ├── About.jsx     # About section
│   ├── Services.jsx  # Services section
│   ├── Projects.jsx  # Portfolio section
│   ├── Contact.jsx   # Contact form
│   └── Footer.jsx    # Footer
├── lib/
│   └── utils.js      # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Customization

### Colors and Styling

The website uses CSS custom properties for theming. You can modify the color scheme in `src/index.css`:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other color variables */
}
```

### Content

Update the content in each component file:

- **Hero.jsx** - Main headline and call-to-action
- **About.jsx** - Company description and values
- **Services.jsx** - Service offerings
- **Projects.jsx** - Portfolio items
- **Contact.jsx** - Contact information and form

### Images

Replace the Unsplash placeholder images in `Projects.jsx` with your actual project images.

## Deployment

This website can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## License

This project is licensed under the MIT License.

## Support

For questions or support, please contact us at hello@solvesphere.com