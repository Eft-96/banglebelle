import os
import re

for f in os.listdir('.'):
    if f.endswith('.html'):
        with open(f, 'r', encoding='utf-8') as file:
            content = file.read()
            
        # Desktop Nav update
        desktop_target = r'<li><a href="contact"'
        desktop_replacement = r'<li><a href="blog">Blog</a></li>\n                <li><a href="contact"'
        if 'href="blog"' not in content:
            content = re.sub(desktop_target, desktop_replacement, content)
            
        # Sidebar Nav update
        sidebar_target = r'<a href="contact">Contact</a>'
        sidebar_replacement = r'<a href="blog">Blog</a>\n            <a href="contact">Contact</a>'
        if '<a href="blog">Blog</a>' not in content:
            content = re.sub(sidebar_target, sidebar_replacement, content)
            
        # Set Active state for Blog on blog pages
        if f.startswith('blog'):
            # First remove active from anything else
            content = re.sub(r'class="active"', '', content)
            # Then add it to blog
            content = re.sub(r'<a href="blog">Blog</a>', '<a href="blog" class="active">Blog</a>', content)
            
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        print(f'Updated Nav in {f}')
