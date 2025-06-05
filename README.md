# HTML to CSS & JavaScript Generator

A modern React application that automatically generates CSS and JavaScript code skeletons from HTML content. Simply paste your HTML snippet and get ready-to-use CSS selectors and JavaScript DOM selection statements with a clean, intuitive interface.

## ✨ Features

### 🎯 **Dual Code Generation**

- **CSS Generation**: Creates CSS selectors for all classes and IDs found in your HTML
- **JavaScript Generation**: Generates DOM selection statements in multiple syntax formats
- **Smart Detection**: Recognizes both `class` and `className` attributes (React-friendly)

### 🎨 **Advanced CSS Features**

- **Formatting Toggle**: Switch between compact and formatted CSS output
- **Live Statistics**: Shows selector count and character count
- **Copy to Clipboard**: One-click copying with visual feedback
- **Syntax Highlighting**: Monospace fonts for better code readability

### ⚡ **JavaScript Flexibility**

- **Multiple Output Modes**:
  - Vanilla JavaScript (`document.getElementById`, `document.getElementsByClassName`)
  - Query Selector (`document.querySelector`, `document.querySelectorAll`)
  - jQuery (`$('#id')`, `$('.class')`)
- **Statement Counter**: Track the number of generated statements
- **Real-time Conversion**: Instantly switch between different JavaScript syntaxes

### 🎨 **User Experience**

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Neumorphic UI**: Modern, elegant design with subtle shadows and gradients
- **Visual Feedback**: Animated borders, hover effects, and loading states
- **Accessibility**: Proper focus states and keyboard navigation

## 🚀 How It Works

1. **Input HTML**: Paste your HTML content into the input area
2. **Generate Code**: Click the "Generate" button to process your HTML
3. **View Results**:
   - CSS selectors appear in the CSS Output panel
   - JavaScript statements appear in the JS Output panel
4. **Customize Output**:
   - Format CSS for better readability
   - Switch JavaScript syntax modes
   - Copy code to clipboard with one click

## 📋 Example Usage

### Input HTML:

```html
<div class="hero-section">
  <h1 id="main-title" class="page-title">Welcome</h1>
  <button className="cta-button primary-btn">Get Started</button>
</div>
```

### Generated CSS:

```css
.hero-section {
}

.page-title {
}

.cta-button {
}

.primary-btn {
}

#main-title {
}
```

### Generated JavaScript (Vanilla):

```javascript
document.getElementById("main-title");
document.getElementsByClassName("hero-section");
document.getElementsByClassName("page-title");
document.getElementsByClassName("cta-button");
document.getElementsByClassName("primary-btn");
```

### Generated JavaScript (jQuery):

```javascript
$("#main-title");
$(".hero-section");
$(".page-title");
$(".cta-button");
$(".primary-btn");
```

## 🛠️ Technical Features

- **React 18** with TypeScript for type safety
- **CSS Custom Properties** for consistent theming
- **CSS Grid & Flexbox** for responsive layouts
- **Modern CSS** with backdrop filters and animations
- **Regex-based Parsing** for accurate HTML attribute extraction
- **Clipboard API** with fallback for broad browser support

## 🎯 Use Cases

- **Rapid Prototyping**: Quickly scaffold CSS and JS for new projects
- **Component Development**: Generate selectors for React, Vue, or Angular components
- **Code Migration**: Convert between different JavaScript DOM selection methods
- **Learning Tool**: Understand the relationship between HTML structure and CSS/JS
- **Design Systems**: Create consistent selector patterns across projects

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd html-to-css

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

## 🎨 Design System

The application uses a carefully crafted design system with:

- **Color Palette**: Cream, sage, navy, terracotta, and accent blue
- **Typography**: Bodoni Moda SC for headings, Arial for body text
- **Spacing**: Consistent rem-based spacing scale
- **Shadows**: Neumorphic design with subtle depth
- **Animations**: Smooth transitions and micro-interactions

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using React, TypeScript, and modern CSS**
