# Personal Portfolio Website

A modern, responsive personal website built with **React** and **Vite**, deployed via **GitHub Pages**. Features a clean design with project showcases, writings, and a contact form.

## 🚀 Live Demo

Visit the live website: [https://josephyan123.github.io](https://josephyan123.github.io)

## ✨ Features

- **Modern Stack**: Built with React 18 + Vite for optimal performance
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Project Showcase**: Display projects with images and descriptions
- **Writing List**: Display articles related with projects
- **Contact Form**: Functional contact form with message handling
- **Fast Deployment**: Automated deployment via GitHub Pages
- **SEO Optimized**: Proper meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Heroicons (SVG)
- **Deployment**: GitHub Pages
- **Form Handling**:  (To be deployed)

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx           # Hero section
│   ├── Projects.jsx       # Projects showcase
│   ├── Articles.jsx       # Blog/articles section
│   ├── Contact.jsx        # Contact form
│   └── Footer.jsx         # Footer with social links
├── assets/
│   ├── images/            # Project and profile images
│   └── styles/
│       └── main.css       # Global styles
├── App.jsx                # Main app component
└── main.jsx               # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/josephyan123/josephyan123.github.io.git
   cd josephyan123.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📝 Customization Guide

### 1. Personal Information
Edit the following files to add your information:
- `src/components/Hero.jsx` - Your name and headline
- `src/components/Projects.jsx` - Your projects
- `src/components/Articles.jsx` - Your writings/blog posts
- `src/components/Contact.jsx` - Your contact information
- `src/components/Footer.jsx` - Social media links

### 2. Styling
- Modify `src/assets/styles/main.css` for global styles
- Update Tailwind classes in components for specific styling
- Change colors in `tailwind.config.js` for theme customization

### 3. Images
- Add your images to `src/assets/images/`
- Update image paths in respective components
- Optimize images for web for better performance

### 4. Deployment Settings
Update the following for deployment:
- `vite.config.js` - Set correct `base` URL for GitHub Pages
- `package.json` - Update `homepage` field with your GitHub Pages URL

## 🚀 Deployment

The site is configured for automatic deployment to GitHub Pages:

1. **Push changes to main branch**
   ```bash
   git add .
   git commit -m "Update website content"
   git push origin main
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The deployment process:
- Builds the project (`npm run build`)
- Deploys the `dist` folder to the `gh-pages` branch
- Your site is live at `https://yourusername.github.io`

## 🔧 Configuration

### Environment Variables (Optional)

If using form handling or APIs, create a `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a personal portfolio website. Contributions are not expected but if you have suggestions or find issues, please feel free to open an issue or submit a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Author

**Joseph Yan**
- Website: [https://josephyan123.github.io](https://josephyan123.github.io)
- GitHub: [@josephyan123](https://github.com/josephyan123)


## 🎨 Design Notes

- Color scheme: Custom Tailwind palette
- Typography: Inter font family
- Icons: Custom SVG icons
- Layout: Flexbox and CSS Grid

---

⭐ **Star this repo if you found it helpful!**

