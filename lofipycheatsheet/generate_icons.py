#!/usr/bin/env python3
"""
Generate PWA icons for the Python Cheat Sheet app
Requires: pip install Pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

def create_icon(size, output_path):
    """Create a Python-themed icon for the PWA"""
    # Create a new image with a gradient background
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Create a circular background with Python colors
    margin = size // 10
    circle_size = size - 2 * margin
    
    # Python blue gradient
    for i in range(circle_size // 2):
        alpha = int(255 * (1 - i / (circle_size // 2)))
        color = (52, 144, 220, alpha)  # Python blue
        draw.ellipse([margin + i, margin + i, size - margin - i, size - margin - i], 
                    fill=color, outline=color)
    
    # Python yellow accent
    accent_size = size // 3
    accent_x = size - accent_size - margin
    accent_y = margin
    
    for i in range(accent_size // 2):
        alpha = int(200 * (1 - i / (accent_size // 2)))
        color = (255, 212, 59, alpha)  # Python yellow
        draw.ellipse([accent_x + i, accent_y + i, 
                     accent_x + accent_size - i, accent_y + accent_size - i], 
                    fill=color, outline=color)
    
    # Add Python logo-inspired elements
    center_x, center_y = size // 2, size // 2
    
    # Draw stylized "Py" text
    try:
        # Try to use a bold font
        font_size = size // 4
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Draw "Py" text
    text = "Py"
    text_width = draw.textlength(text, font=font)
    text_x = center_x - text_width // 2
    text_y = center_y - font_size // 2
    
    # Text shadow
    draw.text((text_x + 2, text_y + 2), text, fill=(0, 0, 0, 100), font=font)
    # Main text
    draw.text((text_x, text_y), text, fill=(255, 255, 255, 255), font=font)
    
    # Save the icon
    img.save(output_path, 'PNG')
    print(f"Created icon: {output_path} ({size}x{size})")

def create_favicon():
    """Create a favicon.ico file"""
    # Create a 32x32 icon first
    create_icon(32, 'favicon-32.png')
    
    # Convert to ICO format (requires Pillow)
    try:
        img = Image.open('favicon-32.png')
        img.save('favicon.ico', format='ICO', sizes=[(32, 32)])
        os.remove('favicon-32.png')  # Clean up temporary file
        print("Created favicon.ico")
    except Exception as e:
        print(f"Could not create favicon.ico: {e}")

def main():
    """Generate all required PWA icons"""
    print("Generating PWA icons for Python Cheat Sheet...")
    
    # Standard PWA icon sizes
    sizes = [72, 96, 128, 144, 152, 192, 384, 512]
    
    for size in sizes:
        filename = f"icon-{size}x{size}.png"
        create_icon(size, filename)
    
    # Create favicon
    create_favicon()
    
    print("\nAll icons generated successfully!")
    print("Icons created:")
    for size in sizes:
        print(f"  - icon-{size}x{size}.png")
    print("  - favicon.ico")

if __name__ == "__main__":
    main()
