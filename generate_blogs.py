import os
import re

files_to_update = {
    'blog-eid-trends.html': {
        'title': 'Top 10 Bangle Trends for Eid & Weddings - BangleBelle',
        'desc': 'Discover the top 10 handcrafted Bangle trends for Eid and weddings in Bangladesh. Shop luxury jewelry online with BangleBelle.',
        'image': 'bridal-churi.webp',
        'h1': 'Top 10 Bangle Trends for Eid & Weddings',
        'date': 'April 2026',
        'content': '''
            <div style="max-width: 800px; margin: 0 auto; color: #333; font-size: 1.1rem; line-height: 1.8;">
                <p>When the festive season arrives in Bangladesh, nothing completes a traditional outfit quite like the perfect set of bangles. From the vibrant shopping streets of Dhaka to luxury boutiques, the demand for exquisite wristwear skyrockets as Eid and wedding seasons intertwine.</p>
                <img src="bridal-churi.webp" alt="Bridal Bangle Trends" style="width: 100%; border-radius: 8px; margin: 30px 0;">
                <h2 style="color: #ecab34; margin-top: 40px;">1. The Royal Gold Plated Sets</h2>
                <p>Gold-plated bangles have always been a staple for Bangladeshi brides. The modern twist? Intricate filigree work that mimics authentic 22k gold without the heavy price tag.</p>
                <h2 style="color: #ecab34; margin-top: 40px;">2. Resham (Thread) Bangles</h2>
                <p>Perfect for Mehendi nights or morning Eid prayers, colorful silk thread bangles embellished with mirrors and tiny pearls are making a massive comeback among Gen-Z and millennials.</p>
                <h2 style="color: #ecab34; margin-top: 40px;">3. Heavy Bridal Churas</h2>
                <p>Traditionally a North Indian custom, the heavy bridal chura has found a spectacular place in BD wedding fashion, customized with deep maroons, emerald greens, and local motifs.</p>
                
                <h3 style="margin-top: 50px;">Finding the Best Quality in BD</h3>
                <p>At <strong>BangleBelle</strong>, we curate hand-finished bangles that cater perfectly to these exact seasonal demands. <a href="collections?filter=bangles" style="color: #d12027; text-decoration: underline;">Explore our complete Bridal Collection</a> to find the centerpiece of your next festive look.</p>
            </div>
        '''
    },
    'blog-sizing-guide.html': {
        'title': 'Bangle Sizing Guide: How to Measure Your Wrist - BangleBelle',
        'desc': 'Never buy the wrong size again. A comprehensive guide on how to measure your bangle size accurately at home.',
        'image': 'traditional-churi.webp',
        'h1': 'The Ultimate Guide to Bangle Sizing at Home',
        'date': 'April 2026',
        'content': '''
            <div style="max-width: 800px; margin: 0 auto; color: #333; font-size: 1.1rem; line-height: 1.8;">
                <p>One of the biggest hesitations when buying jewelry online in Bangladesh is getting the size wrong. With our simple at-home measuring guide, you can shop confidently at BangleBelle every time.</p>
                <img src="traditional-churi.webp" alt="Measuring Bangles" style="width: 100%; border-radius: 8px; margin: 30px 0;">
                
                <h2 style="color: #ecab34; margin-top: 40px;">Method 1: The String Method</h2>
                <p>1. Bring your thumb and little finger together, as if you are slipping on a bangle.</p>
                <p>2. Wrap a piece of string around the widest part of your hand (the knuckles).</p>
                <p>3. Mark the string, lay it flat, and measure the length with a ruler.</p>
                <p>4. Divide the length by 3.14 (Pi) to get the diameter.</p>

                <h2 style="color: #ecab34; margin-top: 40px;">Method 2: Using an Existing Bangle</h2>
                <p>If you already own a well-fitting bangle, simply place it on a flat surface and use a ruler to measure the inner diameter straight across the middle.</p>
                
                <div style="background: #fff8e1; padding: 20px; border-left: 4px solid #ecab34; margin: 40px 0;">
                    <strong>Standard BD Bangle Sizes:</strong><br>
                    - 2.4 (Small): ~2.25 inches diameter<br>
                    - 2.6 (Medium): ~2.37 inches diameter<br>
                    - 2.8 (Large): ~2.5 inches diameter
                </div>
                
                <p>Ready to shop? <a href="collections" style="color: #d12027; text-decoration: underline;">Browse our beautiful collections with confidence.</a></p>
            </div>
        '''
    },
    'blog-pohela-boishakh.html': {
        'title': 'Pohela Boishakh Jewelry Ideas for a Traditional Look - BangleBelle',
        'desc': 'Style your authentic Bengali New Year look with red and white combinations and traditional jewelry from BangleBelle.',
        'image': 'new-prod-64.webp',
        'h1': 'Pohela Boishakh Jewelry Ideas for a Traditional Bengali Look',
        'date': 'April 2026',
        'content': '''
            <div style="max-width: 800px; margin: 0 auto; color: #333; font-size: 1.1rem; line-height: 1.8;">
                <p>Shubho Noboborsho! As the vibrant festival of Pohela Boishakh approaches, every Bengali woman seeks the perfect red and white combination to celebrate the New Year.</p>
                <img src="new-prod-64.webp" alt="Pohela Boishakh Bangles" style="width: 100%; border-radius: 8px; margin: 30px 0;">
                
                <h2 style="color: #ecab34; margin-top: 40px;">Embracing the Red and White</h2>
                <p>The iconic Laal-Paar-Shada (red border with white base) saree is incomplete without the resonating jingle of glass and metal bangles. This year, we are seeing a shift towards mixing matte glass bangles with heavy metallic kadas.</p>
                
                <h2 style="color: #ecab34; margin-top: 40px;">Must-Haves for Noboborsho:</h2>
                <ul>
                    <li><strong>Terracotta Inspired Sets:</strong> Earthy, rustic designs that symbolize the rural roots of Bengal.</li>
                    <li><strong>Glass Churi:</strong> The quintessential tinkling sound of a dozen red glass bangles.</li>
                    <li><strong>Oxidized Silver:</strong> A beautiful contrast against the bright reds of Boishakh.</li>
                </ul>

                <h3 style="margin-top: 50px;">Complete Your Boishakh Look</h3>
                <p>Prepare for the parades and cultural feasts by securing your jewelry early. Order now from <strong>BangleBelle</strong> and enjoy express delivery within Dhaka! <a href="collections" style="color: #d12027; text-decoration: underline;">Start shopping today.</a></p>
            </div>
        '''
    }
}

for file, data in files_to_update.items():
    with open(file, 'r', encoding='utf-8') as f:
        html = f.read()
    
    html = re.sub(r'<title>.*?</title>', f'<title>{data["title"]}</title>', html)
    html = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{data["title"]}">', html)
    html = re.sub(r'<meta name="description"\s*content=".*?">', f'<meta name="description" content="{data["desc"]}">', html, flags=re.DOTALL)
    html = re.sub(r'<meta property="og:description"\s*content=".*?">', f'<meta property="og:description" content="{data["desc"]}">', html, flags=re.DOTALL)
    html = re.sub(r'<meta property="og:image" content=".*?">', f'<meta property="og:image" content="https://banglebelle.shop/{data["image"]}">', html)
    
    # Replace Main Content
    main_pattern = r'<main.*?</main>'
    new_main = f'''
    <main style="background-color: #fcf9f2; padding-bottom: 80px;">
        <section class="page-header" style="background-color: #A6A098; padding: 80px 20px; text-align: center; margin-bottom: 40px;">
            <div class="page-header-content reveal">
                <h1 style="color: #ecab34; font-size: 2.5rem; max-width: 900px; margin: 0 auto;">{data["h1"]}</h1>
                <p style="color: white; margin-top: 15px;">Published: {data["date"]}</p>
            </div>
        </section>
        <section class="container">
            {data["content"]}
        </section>
    </main>
    '''
    html = re.sub(main_pattern, new_main, html, flags=re.DOTALL)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(html)
        
print('Done writing blog posts')
