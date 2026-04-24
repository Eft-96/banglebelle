import re

def fix_extensions():
    # Update HTML files
    for html_file in ['index.html', 'collections.html', 'script.js']:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Use raw string for backreference \1
            content = re.sub(r'([a-zA-Z0-9_\-\s]+)\.jpeg', r'\1.webp', content, flags=re.IGNORECASE)
            content = re.sub(r'([a-zA-Z0-9_\-\s]+)\.jpg', r'\1.webp', content, flags=re.IGNORECASE)
            
            # For png, don't rename logo or favicon
            for img in set(re.findall(r'([a-zA-Z0-9_\-\s]+)\.png', content, flags=re.IGNORECASE)):
                if img.lower() not in ['logo', 'favicon']:
                    content = re.sub(rf'{img}\.png', f'{img}.webp', content, flags=re.IGNORECASE)
                    
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed {html_file}")
            
        except FileNotFoundError:
            print(f"{html_file} not found.")

if __name__ == '__main__':
    fix_extensions()
