# Python Cheat Sheet PWA

A comprehensive Progressive Web App (PWA) for Python reference, built with Semantic UI and featuring offline functionality.

## Features

- 📱 **Progressive Web App**: Install on any device for offline access
- 🔍 **Search Functionality**: Quick search across all Python concepts
- 📱 **Mobile Responsive**: Optimized for all screen sizes
- 🎨 **Modern UI**: Beautiful design with Semantic UI framework
- ⚡ **Fast Performance**: Cached resources for quick loading
- 📋 **Copy Code**: One-click code copying to clipboard
- ⌨️ **Keyboard Shortcuts**: Ctrl+K to search, ESC to clear
- 🌓 **Theme Support**: Automatic dark/light theme detection
- 🔄 **Offline Support**: Works without internet connection

## Content Sections

- **General**: Comments and basic Python concepts
- **Print & Input**: Output and input handling
- **Variables**: Variable creation and operations
- **Strings**: String manipulation and methods
- **Numbers**: Numeric operations and functions
- **Data Conversion**: Type conversion between data types
- **If/Else**: Conditional statements and logic
- **Lists**: List operations and methods
- **Dictionaries**: Dictionary handling and iteration
- **Dates**: Date and time manipulation
- **Functions**: Function definition and usage
- **Object-Oriented Programming**: Classes, inheritance, and methods
- **File Manipulation**: File I/O operations
- **Plotting**: Data visualization with Matplotlib

## Installation

### As a PWA (Recommended)

1. Open the app in a modern web browser
2. Look for the install prompt or click the install button
3. The app will be installed on your device with offline support

### Local Development

1. Clone or download the project files
2. Ensure all files are in the same directory:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `manifest.json`
   - `sw.js`
   - `generate_icons.py`

3. Generate PWA icons (optional):
   ```bash
   pip install Pillow
   python generate_icons.py
   ```

4. Serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

5. Open your browser and navigate to `http://localhost:8000`

## Usage

### Search
- Use the search bar at the top to find specific Python concepts
- Use `Ctrl+K` (or `Cmd+K` on Mac) as a keyboard shortcut to focus the search
- Press `ESC` to clear the search

### Navigation
- Click on the tab menu items to navigate between different sections
- Each section contains related Python concepts with code examples

### Code Examples
- All code examples are syntax highlighted for better readability
- Click the copy button (📋) in the top-right corner of any code block to copy to clipboard
- Code examples include comments and expected outputs

### Installation as PWA
- The app will prompt you to install it after a few seconds of usage
- Once installed, you can access it from your device's home screen
- The app works offline after installation

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup and PWA features
- **CSS3**: Modern styling with Semantic UI framework
- **JavaScript (ES6+)**: Interactive functionality and PWA features
- **Service Worker**: Offline caching and background functionality
- **Web App Manifest**: PWA configuration and metadata

### Browser Support
- Chrome 67+
- Firefox 63+
- Safari 11.3+
- Edge 79+
- Mobile browsers with PWA support

### Performance Features
- Service Worker caching for offline support
- Lazy loading for optimal performance
- Minified external resources via CDN
- Optimized images and assets

## Customization

### Adding New Content
1. Edit `index.html` to add new sections following the existing pattern
2. Use the same HTML structure with Semantic UI classes
3. Update the navigation menu with new tab items

### Styling Changes
1. Modify `styles.css` for custom styling
2. The app uses CSS custom properties (variables) for easy theme customization
3. Semantic UI classes can be overridden in the custom CSS

### Adding Features
1. Add new JavaScript functionality in `app.js`
2. Update the Service Worker (`sw.js`) if new resources need caching
3. Modify `manifest.json` for PWA-related changes

## Content Credits

This cheat sheet is based on the excellent Python reference from [She Codes](https://www.shecodes.io/cheatsheets/python), adapted and enhanced for PWA functionality.

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or issues for:
- Additional Python concepts
- Bug fixes
- Performance improvements
- UI/UX enhancements
- New features

## Support

If you find this cheat sheet helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features or improvements
- 📱 Sharing with other Python developers

---

**Made with ❤️ for the Python community**
