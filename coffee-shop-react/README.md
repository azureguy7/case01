# Coffee Shop Landing Page - React + Tailwind + Swiper

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd coffee-shop-react
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 3. Build for Production

```bash
npm run build
```

## ✨ Features

### Working Swiper Sliders
- **OUR SPECIAL COFFEE** section with horizontal slider
- **OUR SPECIAL DESSERT** section with horizontal slider
- Mouse drag and touch swipe enabled
- Previous/Next arrow buttons
- Pagination dots indicator
- Responsive breakpoints:
  - Desktop (≥1024px): 4 slides visible
  - Tablet (≥768px): 2 slides visible
  - Mobile (<768px): 1 slide visible

### Complete Sections
✅ Navbar with logo, menu, login, and search  
✅ Hero banner with coffee pour image and overlay  
✅ Icon features row (4 items)  
✅ Special Coffee slider (Swiper)  
✅ Special Dessert slider (Swiper)  
✅ Promotion banner with coffee beans decoration  
✅ Customer testimonials (3 cards)  
✅ Newsletter subscription form  
✅ Footer with multiple columns and social media icons  

### Tech Stack
- **React** 18.2 - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** 3.4 - Utility-first CSS
- **Swiper.js** 11.0 - Touch slider library
- **Lucide React** - Icon library

### Design
- Warm beige background (#efe4d8)
- Custom brown color palette
- Rounded corners and soft shadows
- Smooth hover effects and transitions
- Fully responsive layout

## 📁 Project Structure

```
coffee-shop-react/
├── public/
│   └── images/          # All product and asset images
├── src/
│   ├── App.jsx          # Main component with all sections
│   ├── main.jsx         # React entry point
│   └── index.css        # Global styles + Swiper customization
├── index.html           # HTML entry point
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── postcss.config.js    # PostCSS configuration
```

## 🎨 Customization

### Slider Settings
Edit the Swiper configuration in `src/App.jsx`:

```jsx
<Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={24}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
>
```

### Colors
Modify the color palette in `tailwind.config.js`:

```js
colors: {
  beige: {
    50: '#f8f5f1',
    100: '#efe4d8',
    // ...
  },
  brown: {
    700: '#6b4423',
    // ...
  },
}
```

### Product Data
Update mock data arrays in `src/App.jsx`:
- `coffeeProducts` - Coffee items for slider
- `dessertProducts` - Dessert items for slider
- `testimonials` - Customer reviews

## 🎯 Key Interactions

- **Slider Navigation**: Click arrows or drag to navigate
- **Product Cards**: Hover for lift effect
- **Heart Icon**: Click to favorite (visual feedback)
- **Buttons**: Smooth hover animations
- **Newsletter Form**: Email subscription

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints at 768px and 1024px
- Touch-optimized for mobile devices
- Swiper automatically handles touch gestures

## 🌐 Browser Support

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

---

**Note**: Make sure all images are in the `public/images/` folder before running the app.
