
import os
import re
from PIL import Image

def optimize_images():
    directory = '.'
    replaced_count = 0
    for filename in os.listdir(directory):
        if filename.lower().endswith(('.jpg', '.jpeg', '.png')) and filename != 'logo.png':
            filepath = os.path.join(directory, filename)
            try:
                with Image.open(filepath) as img:
                    # Convert to webp
                    new_filename = os.path.splitext(filename)[0] + '.webp'
                    new_filepath = os.path.join(directory, new_filename)
                    
                    # Convert RGBA to RGB if needed (for webp)
                    if img.mode in ('RGBA', 'LA'):
                        background = Image.new('RGB', img.size, (255, 255, 255))
                        background.paste(img, mask=img.split()[3]) # alpha channel
                        img = background
                        
                    # Resize if too large
                    max_size = (1000, 1000)
                    img.thumbnail(max_size, Image.Resampling.LANCZOS)
                    
                    img.save(new_filepath, 'webp', quality=85)
                    
                    # Delete old file
                    os.remove(filepath)
                    replaced_count += 1
            except Exception as e:
                print(f'Error processing {filename}: {e}')
                
    print(f'Processed {replaced_count} images.')

    # Update script.js
    with open('script.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace extensions (ignoring logo.png if it exists in script.js but logo is usually index.html)
    content = re.sub(r'([a-zA-Z0-9_\-\s]+)\.jpeg', r'.webp', content, flags=re.IGNORECASE)
    content = re.sub(r'([a-zA-Z0-9_\-\s]+)\.jpg', r'.webp', content, flags=re.IGNORECASE)
    content = re.sub(r'([a-zA-Z0-9_\-\s]+)\.png', r'.webp', content, flags=re.IGNORECASE)
    
    with open('script.js', 'w', encoding='utf-8') as f:
        f.write(content)

    # Update index.html and others
    for html_file in ['index.html', 'collections.html', 'product-details.html']:
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                hcontent = f.read()
            hcontent = re.sub(r'([a-zA-Z0-9_\-\s]+)\.jpeg', r'.webp', hcontent, flags=re.IGNORECASE)
            hcontent = re.sub(r'([a-zA-Z0-9_\-\s]+)\.jpg', r'.webp', hcontent, flags=re.IGNORECASE)
            # exclude logo.png and favicon.png
            for img in set(re.findall(r'([a-zA-Z0-9_\-\s]+)\.png', hcontent, flags=re.IGNORECASE)):
                if img.lower() not in ['logo', 'favicon']:
                    hcontent = re.sub(f'{img}\.png', f'{img}.webp', hcontent, flags=re.IGNORECASE)
            
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(hcontent)
        except FileNotFoundError:
            pass
            
if __name__ == '__main__':
    optimize_images()
