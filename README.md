# Joyn Alloc UI - Industrial Network Visualization Platform

[![React](https://img.shields.io/badge/React-16.12.0-blue.svg)](https://reactjs.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-4.7.1-blue.svg)](https://material-ui.com/)
[![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange.svg)](https://firebase.google.com/)
[![License](https://img.shields.io/badge/License-Private-red.svg)]()

A sophisticated React-based web application for visualizing and managing industrial network infrastructure, featuring interactive diagrams for equipment, tanks, wells, and meters in oil & gas operations.

## 🚀 Features

### Core Functionality
- **Interactive Network Diagrams**: Drag-and-drop interface for creating complex industrial network visualizations
- **Equipment Management**: Visual representation of industrial equipment with customizable properties
- **Tank Monitoring**: Real-time visualization of oil and water storage tanks
- **Well Tracking**: Comprehensive well management with status indicators
- **Meter Integration**: Gas, oil, and water meter monitoring and data visualization

### Technical Features
- **Material-UI Design System**: Modern, responsive interface with consistent theming
- **React Diagrams Engine**: Advanced diagramming capabilities with custom node types
- **Firebase Hosting**: Scalable cloud deployment with automatic SSL
- **Progressive Web App**: Offline capabilities and enhanced performance
- **Custom SVG Icons**: Industry-specific iconography for better UX

## 🛠️ Technology Stack

### Frontend
- **React 16.12.0** - Component-based UI framework
- **Material-UI 4.7.1** - Google's Material Design components
- **React Diagrams** - Advanced diagramming library
- **Emotion** - CSS-in-JS styling solution
- **React Spring** - Animation library for smooth interactions

### Development Tools
- **React Scripts 3.2.0** - Create React App toolchain
- **React App Rewired** - Custom webpack configuration
- **Customize CRA** - Build customization utilities
- **Source Map Explorer** - Bundle analysis tool

### Deployment
- **Firebase Hosting** - Global CDN with automatic deployments
- **Yarn** - Fast, reliable package management

## 📦 Installation

### Prerequisites
- Node.js (v12 or higher)
- Yarn package manager
- Firebase CLI (for deployment)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cra-material-ui
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn start
   ```

4. **Build for production**
   ```bash
   yarn build
   ```

5. **Deploy to Firebase**
   ```bash
   yarn deploy
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Buttons/         # Custom button components
│   ├── Icons/          # SVG icon components
│   ├── Navigation/     # App navigation components
│   └── UI/             # Generic UI components
├── containers/         # Main application containers
│   └── Network/        # Network diagram container
├── assets/             # Static assets (images, icons)
├── styles/             # Theme and styling
├── utils/              # Utility functions and constants
└── hoc/               # Higher-order components
```

## 🎨 Customization

### Theme Configuration
The application uses a custom Material-UI theme with industry-specific color schemes:

- **Equipment**: Grey (#4A4A4A)
- **Gas Meters**: Red (#F66)
- **Oil Tanks**: Green (#6C6)
- **Water Tanks**: Blue (#387DF4)

### Adding New Node Types
1. Create node model, factory, and widget components
2. Register the factory with the diagram engine
3. Add custom styling and properties

## 🚀 Deployment

### Firebase Hosting
The application is configured for Firebase Hosting with:
- Automatic builds from the `build` directory
- SPA routing with fallback to `index.html`
- Global CDN distribution
- SSL certificate management

### Build Optimization
- Bundle analysis with `yarn analyze`
- Source map exploration for debugging
- Production build optimization

## 🔧 Development

### Available Scripts
- `yarn start` - Start development server
- `yarn build` - Create production build
- `yarn test` - Run test suite
- `yarn deploy` - Deploy to Firebase
- `yarn analyze` - Analyze bundle size

### Code Quality
- ESLint configuration with import/export rules
- Custom webpack configuration for advanced features
- TypeScript-ready with JSConfig

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused code elimination
- **Asset Optimization**: Image and icon optimization
- **Caching**: Service worker implementation

### Bundle Analysis
Use `yarn analyze` to visualize bundle composition and identify optimization opportunities.

## 🤝 Contributing

### Development Guidelines
1. Follow Material-UI design principles
2. Maintain component consistency
3. Use semantic commit messages
4. Test thoroughly before submitting

### Code Style
- ESLint configuration enforced
- Material-UI component patterns
- Functional components with hooks
- Custom styling with makeStyles

## 📄 License

This project is private and proprietary. All rights reserved.

## 🔗 Related Projects

- [React Diagrams](https://github.com/projectstorm/react-diagrams) - Diagramming library
- [Material-UI](https://material-ui.com/) - React component library
- [Firebase](https://firebase.google.com/) - Google's app development platform

## 📞 Support

For technical support or questions about this industrial network visualization platform, please contact the development team.

---

**Built with ❤️ for industrial network management and visualization**