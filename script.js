const products = [
    // BANGLES (b1 - b39)
    { id: 'b1', name: 'Bangle Set 1', category: 'bangles', price: 550, image: 'traditional-churi.jpg', images: ['traditional-churi.jpg'], hasSize: true },
    { id: 'b2', name: 'Bangle 2 Per Piece', category: 'bangles', price: 125, image: 'custom-churi.jpg', images: ['custom-churi.jpg'], hasSize: true },
    { id: 'b3', name: 'Bangle Set 3', category: 'bangles', price: 350, image: 'babypink1.jpg', images: ['babypink1.jpg', 'babaypink2.jpg', 'babypink3.jpg'], hasSize: true },
    { id: 'b4', name: 'Bangle Set 4', category: 'bangles', price: 550, image: 'white1.jpg', images: ['white1.jpg', 'new-prod-132.jpg', 'new-prod-134.jpg', 'new-prod-130.jpg'], hasSize: true },
    { id: 'b5', name: 'Bangle 5  Per Piece', category: 'bangles', price: 99, image: 'new-prod-81.jpg', images: ['new-prod-81.jpg'], hasSize: true },
    { id: 'b6', name: 'Bangle Set 6', category: 'bangles', price: 400, image: 'new-prod-82.jpg', images: ['new-prod-82.jpg'], hasSize: true },
    { id: 'b7', name: 'Bangle Set 7', category: 'bangles', price: 350, image: 'new-prod-83.jpg', images: ['new-prod-83.jpg'], hasSize: true },
    { id: 'b8', name: 'Bangle Set 8', category: 'bangles', price: 280, image: 'new-prod-84.jpg', images: ['new-prod-84.jpg'], hasSize: true },
    { id: 'b9', name: 'Bangle Set 9', category: 'bangles', price: 250, image: 'new-prod-85.jpg', images: ['new-prod-85.jpg'], hasSize: true },
    { id: 'b10', name: 'Bangle 10  Per Piece', category: 'bangles', price: 99, image: 'new-prod-80.jpg', images: ['new-prod-80.jpg'], hasSize: true },
    { id: 'b11', name: 'Bangle Set 11', category: 'bangles', price: 550, image: 'new-prod-86.jpg', images: ['new-prod-86.jpg', 'new-prod-87.jpg'], hasSize: true },
    { id: 'b12', name: 'Bangle Set 12', category: 'bangles', price: 280, image: 'new-prod-95.jpg', images: ['new-prod-95.jpg'], hasSize: true },
    { id: 'b13', name: 'Bangle Set 13', category: 'bangles', price: 250, image: 'new-prod-96.jpg', images: ['new-prod-96.jpg'], hasSize: true },
    { id: 'b14', name: 'Bangle Set 14', category: 'bangles', price: 250, image: 'new-prod-97.jpg', images: ['new-prod-97.jpg'], hasSize: true },
    { id: 'b15', name: 'Bangle Set 15', category: 'bangles', price: 320, image: 'new-prod-98.jpg', images: ['new-prod-98.jpg'], hasSize: true },
    { id: 'b16', name: 'Bangle Set 16', category: 'bangles', price: 450, image: 'new-prod-99.jpg', images: ['new-prod-99.jpg', 'new-prod-100.jpg'], hasSize: true },
    { id: 'b17', name: 'Bangle Set 17', category: 'bangles', price: 320, image: 'new-prod-101.jpg', images: ['new-prod-101.jpg'], hasSize: true },
    { id: 'b18', name: 'Bangle 18', category: 'bangles', price: 180, image: 'new-prod-104.jpg', images: ['new-prod-104.jpg', 'new-prod-106.jpg'], hasSize: true },
    { id: 'b19', name: 'Bangle 19  Per Piece', category: 'bangles', price: 99, image: 'new-prod-108.jpg', images: ['new-prod-108.jpg'], hasSize: true },
    { id: 'b20', name: 'Bangle Set 20', category: 'bangles', price: 450, image: 'new-prod-110.jpg', images: ['new-prod-110.jpg', 'new-prod-111.jpg', 'new-prod-102.jpg', 'new-prod-69.jpg', 'new-prod-70.jpg'], hasSize: true },
    { id: 'b21', name: 'Bangle Set 21', category: 'bangles', price: 280, image: 'new-prod-112.jpg', images: ['new-prod-112.jpg'], hasSize: true },
    { id: 'b22', name: 'Bangle Set 22', category: 'bangles', price: 475, image: 'new-prod-114.jpg', images: ['new-prod-114.jpg'], hasSize: true },
    { id: 'b23', name: 'Bangle Set 23', category: 'bangles', price: 280, image: 'new-prod-115.jpg', images: ['new-prod-115.jpg'], hasSize: true },
    { id: 'b24', name: 'Bangle 24  Per Piece', category: 'bangles', price: 89, image: 'new-prod-116.jpg', images: ['new-prod-116.jpg', 'new-prod-117.jpg'], hasSize: true },
    { id: 'b25', name: 'Bangle Set 25', category: 'bangles', price: 380, image: 'new-prod-118.jpg', images: ['new-prod-118.jpg'], hasSize: true },
    { id: 'b26', name: 'Bangle Set 26', category: 'bangles', price: 480, image: 'new-prod-119.jpg', images: ['new-prod-119.jpg'], hasSize: true },
    { id: 'b27', name: 'Bangle 27  Per Piece', category: 'bangles', price: 89, image: 'new-prod-120.jpg', images: ['new-prod-120.jpg'], hasSize: true },
    { id: 'b28', name: 'Bangle 28  Per Piece', category: 'bangles', price: 89, image: 'new-prod-121.jpg', images: ['new-prod-121.jpg', 'new-prod-122.jpg'], hasSize: true },
    { id: 'b29', name: 'Bangle 29  Per Piece', category: 'bangles', price: 89, image: 'new-prod-123.jpg', images: ['new-prod-123.jpg'], hasSize: true },
    { id: 'b30', name: 'Bangle 30 Per Piece', category: 'bangles', price: 99, image: 'new-prod-124.jpg', images: ['new-prod-124.jpg'], hasSize: true },
    { id: 'b31', name: 'Bangle 31 Per Piece', category: 'bangles', price: 120, image: 'new-prod-127.jpg', images: ['new-prod-127.jpg', 'new-prod-126.jpg'], hasSize: true },
    { id: 'b32', name: 'Bangle Set 32', category: 'bangles', price: 480, image: 'new-prod-125.jpg', images: ['new-prod-125.jpg'], hasSize: true },
    { id: 'b33', name: 'Bangle Set 33', category: 'bangles', price: 400, image: 'new-prod-128.jpg', images: ['new-prod-128.jpg'], hasSize: true },
    { id: 'b34', name: 'Bangle Set 34', category: 'bangles', price: 480, image: 'new-prod-129.jpg', images: ['new-prod-129.jpg'], hasSize: true },
    { id: 'b35', name: 'Bangle 35 Per Piece', category: 'bangles', price: 110, image: 'new-prod-131.jpg', images: ['new-prod-131.jpg'], hasSize: true },
    { id: 'b37', name: 'Bangles Set 37', category: 'bangles', price: 180, image: 'new-prod-9.jpg', images: ['new-prod-9.jpg'], hasSize: true },

    { id: 'b38', name: 'Bangle Pair 38', category: 'bangles', price: 250, image: 'new-prod-48.jpg', images: ['new-prod-48.jpg', 'new-prod-49.jpg'], hasSize: true },
    { id: 'b39', name: 'Bangle Set 39', category: 'bangles', price: 900, image: 'new-prod-56.jpg', images: ['new-prod-56.jpg', 'new-prod-60.jpg', 'new-prod-68.jpg'], hasSize: true },

    // New BangleBelle Sets (b40 - b51)
    { id: 'b40', name: 'Bangle Set 40', category: 'bangles', price: 400, image: '8.jpeg', images: ['8.jpeg', '9.jpeg', '17.jpeg', '18.jpeg'], hasSize: true },
    { id: 'b41', name: 'Bangle Set 41', category: 'bangles', price: 350, image: '19.jpeg', images: ['19.jpeg', '20.jpeg'], hasSize: true },
    { id: 'b42', name: 'Bangle Set 42', category: 'bangles', price: 420, image: '10.jpeg', images: ['10.jpeg', '15.jpeg', '16.jpeg'], hasSize: true },
    { id: 'b43', name: 'Bangle Set 43', category: 'bangles', price: 400, image: '11.jpeg', images: ['11.jpeg', '12.jpeg'], hasSize: true },
    { id: 'b44', name: 'Bangle Set 44', category: 'bangles', price: 350, image: '13.jpeg', images: ['13.jpeg', '14.jpeg'], hasSize: true },

    // Single Image Sets
    { id: 'b45', name: 'Bangle Set 45', category: 'bangles', price: 450, image: '1.jpeg', images: ['1.jpeg'], hasSize: true },
    { id: 'b46', name: 'Bangle Set 46', category: 'bangles', price: 160, image: '2.jpeg', images: ['2.jpeg'], hasSize: true },
    { id: 'b47', name: 'Bangle Set 47', category: 'bangles', price: 450, image: '3.jpeg', images: ['3.jpeg'], hasSize: true },
    { id: 'b48', name: 'Bangle Set 48', category: 'bangles', price: 180, image: '4.jpeg', images: ['4.jpeg'], hasSize: true },
    { id: 'b49', name: 'Bangle Set 49', category: 'bangles', price: 450, image: '5.jpeg', images: ['5.jpeg'], hasSize: true },
    { id: 'b50', name: 'Bangle Set 50', category: 'bangles', price: 160, image: '6.jpeg', images: ['6.jpeg'], hasSize: true },
    { id: 'b51', name: 'Bangle Set 51', category: 'bangles', price: 450, image: '7.jpeg', images: ['7.jpeg'], hasSize: true },
    { id: 'b52', name: 'Bangle Set 52', category: 'bangles', price: 175, image: 'new-prod-30.jpg', images: ['new-prod-30.jpg'], hasSize: true },

    // New Bulk Bangles (b53 - b86)
    { id: 'b53', name: 'Bangle 53 Per Piece', category: 'bangles', price: 90, image: '21.jpeg', images: ['21.jpeg', '22.jpeg', '23.jpeg', '24.jpeg', '25.jpeg'], hasSize: true },
    { id: 'b54', name: 'Bangle Set 54', category: 'bangles', price: 480, image: '31.jpeg', images: ['31.jpeg', '32.jpeg'], hasSize: true },
    { id: 'b55', name: 'Bangle 55', category: 'bangles', price: 180, image: '40.jpeg', images: ['40.jpeg', '39.jpeg'], hasSize: true },
    { id: 'b56', name: 'Bangle Set 56', category: 'bangles', price: 450, image: '42.jpeg', images: ['42.jpeg', '43.jpeg', '44.jpeg', '45.jpeg', '46.jpeg'], hasSize: true },
    { id: 'b57', name: 'Bangle Set 57', category: 'bangles', price: 350, image: '47.jpeg', images: ['47.jpeg', '48.jpeg'], hasSize: true },
    { id: 'b58', name: 'Bangle Set 58', category: 'bangles', price: 350, image: '49.jpeg', images: ['49.jpeg', '50.jpeg'], hasSize: true },
    { id: 'b59', name: 'Bangle Set 59', category: 'bangles', price: 180, image: '62.jpeg', images: ['62.jpeg', '63.jpeg', '64.jpeg'], hasSize: true },

    // Singles
    { id: 'b60', name: 'Bangle Set 60', category: 'bangles', price: 160, image: '26.jpeg', images: ['26.jpeg'], hasSize: true },
    { id: 'b61', name: 'Bangle Set 61', category: 'bangles', price: 250, image: '27.jpeg', images: ['27.jpeg'], hasSize: true },
    { id: 'b62', name: 'Bangle Set 62', category: 'bangles', price: 480, image: '28.jpeg', images: ['28.jpeg'], hasSize: true },
    { id: 'b63', name: 'Bangle Set 63', category: 'bangles', price: 200, image: '33.jpeg', images: ['33.jpeg'], hasSize: true },
    { id: 'b64', name: 'Bangle Set 64', category: 'bangles', price: 180, image: '34.jpeg', images: ['34.jpeg'], hasSize: true },
    { id: 'b65', name: 'Bangle Set 65', category: 'bangles', price: 380, image: '35.jpeg', images: ['35.jpeg'], hasSize: true },
    { id: 'b66', name: 'Bangle Set 66', category: 'bangles', price: 90, image: '36.jpeg', images: ['36.jpeg'], hasSize: true },
    { id: 'b67', name: 'Bangle Set 67', category: 'bangles', price: 90, image: '37.jpeg', images: ['37.jpeg'], hasSize: true },
    { id: 'b68', name: 'Bangle Set 68', category: 'bangles', price: 90, image: '38.jpeg', images: ['38.jpeg'], hasSize: true },
    { id: 'b69', name: 'Bangle 69 Per Piece', category: 'bangles', price: 180, image: '41.jpeg', images: ['41.jpeg'], hasSize: true },
    { id: 'b70', name: 'Bangle Set 70', category: 'bangles', price: 400, image: '51.jpeg', images: ['51.jpeg'], hasSize: true },
    { id: 'b71', name: 'Bangle Set 71', category: 'bangles', price: 400, image: '53.jpeg', images: ['53.jpeg'], hasSize: true },
    { id: 'b72', name: 'Bangle Set 72', category: 'bangles', price: 500, image: '54.jpeg', images: ['54.jpeg'], hasSize: true },
    { id: 'b73', name: 'Bangle Set 73', category: 'bangles', price: 500, image: '56.jpeg', images: ['56.jpeg'], hasSize: true },
    { id: 'b74', name: 'Bangle 74', category: 'bangles', price: 180, image: '57.jpeg', images: ['57.jpeg'], hasSize: true },
    { id: 'b75', name: 'Bangle 75', category: 'bangles', price: 125, image: '58.jpeg', images: ['58.jpeg'], hasSize: true },
    { id: 'b76', name: 'Bangle 76', category: 'bangles', price: 125, image: '59.jpeg', images: ['59.jpeg'], hasSize: true },
    { id: 'b77', name: 'Bangle 77', category: 'bangles', price: 125, image: '60.jpeg', images: ['60.jpeg'], hasSize: true },
    { id: 'b78', name: 'Bangle 78', category: 'bangles', price: 200, image: '61.jpeg', images: ['61.jpeg'], hasSize: true },
    { id: 'b79', name: 'Bangle Set 79', category: 'bangles', price: 550, image: '65.jpeg', images: ['65.jpeg'], hasSize: true },
    { id: 'b80', name: 'Bangle Set 80', category: 'bangles', price: 350, image: '66.jpeg', images: ['66.jpeg'], hasSize: true },
    { id: 'b81', name: 'Bangle Set 81', category: 'bangles', price: 400, image: '67.jpeg', images: ['67.jpeg'], hasSize: true },
    { id: 'b82', name: 'Bangle Set 82', category: 'bangles', price: 150, image: '68.jpeg', images: ['68.jpeg'], hasSize: true },
    { id: 'b83', name: 'Bangle Set 83', category: 'bangles', price: 320, image: '69.jpeg', images: ['69.jpeg'], hasSize: true },
    { id: 'b84', name: 'Bangle Set 84', category: 'bangles', price: 400, image: '70.jpeg', images: ['70.jpeg'], hasSize: true },

    // BRACELET BANGLES (bb1 - bb6)
    { id: 'bb1', name: 'Bracelet Bangle 1', category: 'bracelet-bangles', price: 175, image: 'mordern-churi.jpg', images: ['mordern-churi.jpg'], hasSize: true },
    { id: 'bb2', name: 'Bracelet Bangle 2', category: 'bracelet-bangles', price: 180, image: 'new-prod-21.jpg', images: ['new-prod-21.jpg', 'new-prod-24.jpg'], hasSize: true },
    { id: 'bb3', name: 'Bracelet Bangle 3', category: 'bracelet-bangles', price: 250, image: 'new-prod-8.jpg', images: ['new-prod-8.jpg'], hasSize: true },

    { id: 'bb6', name: 'Bracelet Bangle 4', category: 'bracelet-bangles', price: 200, image: 'new-prod-113.jpg', images: ['new-prod-113.jpg'], hasSize: true },
    { id: 'bb7', name: 'Bracelet Bangle 5', category: 'bracelet-bangles', price: 180, image: 'bb1.jpeg', images: ['bb1.jpeg'], hasSize: true },
    { id: 'bb8', name: 'Bracelet Bangle 6', category: 'bracelet-bangles', price: 180, image: 'bb2.jpeg', images: ['bb2.jpeg'], hasSize: true },

    // RINGS (r1 - r12)
    { id: 'r1', name: 'Ring Collection 1', category: 'rings', price: 49, image: 'new-prod-71.jpg', images: ['new-prod-71.jpg', 'new-prod-78.jpg'], hasSize: true },
    { id: 'r2', name: 'Ring Collection 2', category: 'rings', price: 70, image: 'new-prod-72.jpg', images: ['new-prod-72.jpg', 'new-prod-76.jpg'], hasSize: true },
    { id: 'r3', name: 'Ring Collection 3', category: 'rings', price: 49, image: 'new-prod-79.jpg', images: ['new-prod-79.jpg', 'new-prod-73.jpg'], hasSize: true },
    { id: 'r4', name: 'Ring Collection 4', category: 'rings', price: 49, image: 'new-prod-92.jpg', images: ['new-prod-92.jpg', 'new-prod-88.jpg'], hasSize: true },
    { id: 'r5', name: 'Ring Collection 5', category: 'rings', price: 75, image: 'new-prod-93.jpg', images: ['new-prod-93.jpg'], hasSize: true },
    { id: 'r6', name: 'Ring Collection 6', category: 'rings', price: 75, image: 'new-prod-94.jpg', images: ['new-prod-94.jpg'], hasSize: true },
    { id: 'r7', name: 'Ring Collection 7', category: 'rings', price: 60, image: 'new-prod-74.jpg', images: ['new-prod-74.jpg'], hasSize: true },
    { id: 'r8', name: 'Ring Collection 8', category: 'rings', price: 75, image: 'new-prod-75.jpg', images: ['new-prod-75.jpg'], hasSize: true },
    { id: 'r10', name: 'Ring Collection 10', category: 'rings', price: 100, image: 'ring 3.jpeg', images: ['ring 3.jpeg'], hasSize: true },
    { id: 'r11', name: 'Ring Collection 11', category: 'rings', price: 100, image: 'ring 4.jpeg', images: ['ring 4.jpeg'], hasSize: true },
    { id: 'r12', name: 'Ring Collection 12', category: 'rings', price: 75, image: 'ring 5.jpeg', images: ['ring 5.jpeg'], hasSize: true },

    // EARRINGS (e1 - e5)
    { id: 'e1', name: 'Earring Set 1', category: 'earrings', price: 180, image: 'new-prod-1.jpg', images: ['new-prod-1.jpg'] },
    { id: 'e2', name: 'Earring Set 2', category: 'earrings', price: 99, image: 'new-prod-10.jpg', images: ['new-prod-10.jpg'] },
    { id: 'e3', name: 'Earring Set 3', category: 'earrings', price: 99, image: 'new-prod-11.jpg', images: ['new-prod-11.jpg'] },
    { id: 'e4', name: 'Earring Set 4', category: 'earrings', price: 99, image: 'new-prod-13.jpg', images: ['new-prod-13.jpg'] },
    { id: 'e5', name: 'Earring Set 5', category: 'earrings', price: 99, image: 'new-prod-14.jpg', images: ['new-prod-14.jpg'] },
    { id: 'e6', name: 'Earring Set 6', category: 'earrings', price: 200, image: 'ear ring1.jpeg', images: ['ear ring1.jpeg', 'ear ring2.jpeg'] },
    { id: 'e7', name: 'Earring Set 7', category: 'earrings', price: 150, image: 'Earring Set 7.jpg.jpeg', images: ['Earring Set 7.jpg.jpeg'] },
    { id: 'e8', name: 'Earring Set 8', category: 'earrings', price: 150, image: 'Earring Set 8.jpg.jpeg', images: ['Earring Set 8.jpg.jpeg'] },
    { id: 'e9', name: 'Earring Set 9', category: 'earrings', price: 200, image: 'Earring Set 9.jpg.jpeg', images: ['Earring Set 9.jpg.jpeg'] },
    { id: 'e10', name: 'Earring Set 10', category: 'earrings', price: 250, image: 'Earring Set 10.jpg.jpeg', images: ['Earring Set 10.jpg.jpeg'] },
    { id: 'e11', name: 'Earring Set 11', category: 'earrings', price: 120, image: 'Earring Set 11.jpg.jpeg', images: ['Earring Set 11.jpg.jpeg'] },
    { id: 'e12', name: 'Earring Set 12', category: 'earrings', price: 120, image: 'Earring Set 12.jpg.jpeg', images: ['Earring Set 12.jpg.jpeg'] },
    { id: 'e13', name: 'Earring Set 13', category: 'earrings', price: 120, image: 'Earring Set 13.jpg.jpeg', images: ['Earring Set 13.jpg.jpeg'] },
    { id: 'e14', name: 'Earring Set 14', category: 'earrings', price: 250, image: 'Earring Set14.jpg.jpeg', images: ['Earring Set14.jpg.jpeg'] },
    { id: 'e15', name: 'Earring Set 15', category: 'earrings', price: 120, image: 'Earring Set 15.jpg.jpeg', images: ['Earring Set 15.jpg.jpeg'] },


    // NEW ARRIVALS (n1 - n7)
    { id: 'n1', name: 'New Arrival 1', category: 'new-arrivals', price: 220, image: 'new-prod-2.jpg', images: ['new-prod-2.jpg'] },
    { id: 'n2', name: 'New Arrival 2 Per Piece', category: 'new-arrivals', price: 180, image: 'new-prod-4.jpg', images: ['new-prod-4.jpg'] },
    { id: 'n3', name: 'New Arrival 3', category: 'new-arrivals', price: 250, image: 'new-prod-5.jpg', images: ['new-prod-5.jpg'] },
    { id: 'n4', name: 'New Arrival 4', category: 'new-arrivals', price: 80, image: 'new-prod-12.jpg', images: ['new-prod-12.jpg'] },

    { id: 'n6', name: 'New Arrival 6 Pair', category: 'new-arrivals', price: 180, image: 'new-prod-50.jpg', images: ['new-prod-50.jpg', 'new-prod-52.jpg'] },
    { id: 'n7', name: 'New Arrival 7', category: 'new-arrivals', price: 250, image: 'new-prod-64.jpg', images: ['new-prod-64.jpg', 'new-prod-66.jpg', 'new-prod-67.jpg'] },
];

const searchCategories = {
    'new-arrivals': ['new', 'arrival', 'latest', 'recent', 'just in'],
    'bangles': ['bangle', 'churi', 'traditional', 'modern', 'bridal', 'custom', 'set', 'classic'],
    'bracelet-bangles': ['bracelet', 'cuff', 'modern bangle', 'single bangle', 'urban', 'stylish'],
    'earrings': ['earring', 'stud', 'drop', 'jhumka', 'jewelry', 'ear'],
    'rings': ['ring', 'finger', 'band', 'jewelry', 'stone']
};

/**
 * Render products to the DOM.
 * @param {Array} productsToRender - Array of product objects.
 */
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // Exit if not on collections page

    productGrid.innerHTML = '';

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; color: #666; padding: 40px;">No products found.</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-category', product.category);

        productCard.innerHTML = `
            <div class="product-image">
                <a href="product-details?id=${product.id}" style="display: block; width: 100%; height: 100%;">
                    <img src="${product.image}" alt="${product.name} - Handcrafted Bangle" loading="lazy">
                </a>
                <div class="product-action">
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <a href="product-details?id=${product.id}">
                    <h3>${product.name}</h3>
                </a>
                <p class="price">৳${product.price}</p>
            </div>
        `;

        productGrid.appendChild(productCard);
    });
}

/**
 * Filter products based on category or search term.
 * @param {string} filterType - 'category' or 'search'.
 * @param {string} value - Category name or search query.
 */
function filterProducts(filterType, value) {
    let filteredProducts = [];

    if (filterType === 'all') {
        filteredProducts = products;
    } else if (filterType === 'category') {
        filteredProducts = products.filter(product => product.category === value);
    } else if (filterType === 'search') {
        const searchTerm = value.toLowerCase().trim();

        // Check if search term matches a known category keyword
        let matchedCategory = null;
        for (const [category, keywords] of Object.entries(searchCategories)) {
            if (keywords.some(keyword => searchTerm.includes(keyword))) {
                matchedCategory = category;
                break;
            }
        }

        if (matchedCategory) {
            filteredProducts = products.filter(product => product.category === matchedCategory);
        } else {
            // General search by name
            filteredProducts = products.filter(product =>
                product.name.toLowerCase().includes(searchTerm)
            );
        }
    }

    renderProducts(filteredProducts);
}

/**
 * Add item to cart (Local Storage).
 * @param {string} productId 
 * @param {string} size
 */
function addToCart(productId, size = "N/A") {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId && (item.size === size || (!item.size && size === "N/A")));

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, size: size, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

/**
 * Direct checkout for 'Order Now' button.
 */
function orderNow() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    if (productId) {
        addToCart(productId);
        window.location.href = 'checkout';
    }
}

/**
 * Update cart count in header.
 */
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => el.innerText = totalCount);
}

// Scroll Animation Observer
function setupObserver() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Check URL for filter parameters on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    setupObserver(); // Initialize scroll reveal

    const params = new URLSearchParams(window.location.search);
    const filterParam = params.get('filter');


    if (document.getElementById('product-grid')) {
        if (filterParam) {
            // Activate corresponding button if exists
            const btn = document.querySelector(`.filter-btn[data-filter="${filterParam}"]`);
            if (btn) {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
            filterProducts('category', filterParam);
        } else {
            renderProducts(products);
        }
    }

    // Product Detail Page Logic
    // If we are on product-details.html (handled by the check inside the function block below or separate logic)
    // See below for product-details specific logic block
});

// Event Listeners for Filter Buttons
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');

        if (filterValue === 'all') {
            filterProducts('all');
            // Update URL without reloading
            window.history.pushState({}, '', 'collections');
        } else {
            filterProducts('category', filterValue);
            window.history.pushState({}, '', `collections?filter=${filterValue}`);
        }
    });
});

// Search functionality
const searchBtn = document.getElementById('searchBtn');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchSubmitBtn = document.getElementById('searchSubmitBtn');
const searchMessage = document.getElementById('searchMessage');

if (searchBtn && searchContainer) {
    searchBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        searchContainer.classList.toggle('active');
        if (searchContainer.classList.contains('active')) {
            searchInput.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchContainer.contains(e.target) && !searchBtn.contains(e.target)) {
            searchContainer.classList.remove('active');
        }
    });
}

if (searchSubmitBtn && searchInput) {
    const performSearch = () => {
        const query = searchInput.value;
        if (query) {
            // Redirect to collections page with filter if not already there
            if (!window.location.pathname.includes('collections')) {
                // Determine if it matches a category to pass correct filter, or allow text search
                // Simplified: just pass as filter query, or handle text search on collections page?
                // Current logic maps keywords to categories. 
                // Let's check locally first to give feedback? No, standard extraction.

                // Check category match
                let matchedCategory = null;
                for (const [category, keywords] of Object.entries(searchCategories)) {
                    if (keywords.some(keyword => query.toLowerCase().includes(keyword))) {
                        matchedCategory = category;
                        break;
                    }
                }

                if (matchedCategory) {
                    window.location.href = `collections?filter=${matchedCategory}`;
                } else {
                    // For name search, we might need a separate param or handle it
                    // Let's assume general search isn't strictly category based in URL yet, 
                    // so let's default to a generic "all" with client side filtering if supported, 
                    // or just redirect to collections and run search logic there.
                    // The current `filterProducts` handles 'search' type. 
                    // But we can't easily pass 'search' type via URL 'filter' param unless we modify `DOMContentLoaded`.
                    // Let's keeping it simple: match categories or alert.
                    searchMessage.innerText = `Searching for "${query}"...`;
                    setTimeout(() => {
                        // Fallback to all for now or specific text logic
                        window.location.href = `collections?filter=all`; // ideal: ?search=query
                    }, 500);
                }
            } else {
                filterProducts('search', query);
                searchContainer.classList.remove('active');
            }
        }
    };

    searchSubmitBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') performSearch();
    });
}

// Sidebar Logic
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const sidebarDropBtn = document.querySelector('.sidebar-drop-btn');
const sidebarDropContent = document.querySelector('.sidebar-drop-content');

if (hamburger && sidebar && sidebarOverlay) {
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        sidebarOverlay.classList.toggle('active');
    }

    hamburger.addEventListener('click', toggleSidebar);
    if (closeSidebar) closeSidebar.addEventListener('click', toggleSidebar);
    sidebarOverlay.addEventListener('click', toggleSidebar);
}

if (sidebarDropBtn) {
    sidebarDropBtn.addEventListener('click', () => {
        sidebarDropBtn.classList.toggle('active');
        // Max-height transition handled by CSS
    });
}


// Mobile Cart Logic (Add to existing or new)
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    if (!cartItemsContainer || !cartTotalElement) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartItemsContainer.innerHTML = '';

    let total = 0;
    const checkoutContainer = document.getElementById('checkout-container');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="7" style="text-align:center;">Your cart is empty.</td></tr>';
    } else {
        cart.forEach((item, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <input type="checkbox" class="item-checkbox" data-index="${index}" checked onchange="updateCartSelection()">
                </td>
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <span class="cart-item-name">${item.name}</span>
                    </div>
                </td>
                <td>${item.size || "N/A"}</td>
                <td>৳${item.price}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <button onclick="updateQuantity(${index}, -1)" style="padding: 2px 8px;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)" style="padding: 2px 8px;">+</button>
                    </div>
                </td>
                <td>
                    <button onclick="checkoutSingleItem(${index})" style="padding: 6px 12px; background-color: var(--primary-color, #c8a165); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem;">Checkout</button>
                </td>
                <td><button onclick="removeFromCart(${index})" style="color: red; background: none; border: none; cursor: pointer;">✕</button></td>
            `;
            cartItemsContainer.appendChild(tr);
        });
    }
    updateCartSelection();
}

function updateCartSelection() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkboxes = document.querySelectorAll('.item-checkbox');
    const cartTotalElement = document.getElementById('cart-total');
    let selectedTotal = 0;

    checkboxes.forEach(cb => {
        if (cb.checked) {
            const index = cb.getAttribute('data-index');
            const item = cart[index];
            selectedTotal += (item.price * item.quantity);
        }
    });

    if (cartTotalElement) cartTotalElement.innerText = selectedTotal;
}

function checkoutSelected() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const checkboxes = document.querySelectorAll('.item-checkbox');
    let selectedItems = [];

    checkboxes.forEach(cb => {
        if (cb.checked) {
            const index = cb.getAttribute('data-index');
            selectedItems.push(cart[index]);
        }
    });

    if (selectedItems.length === 0) {
        alert("Please select at least one item to checkout.");
        return;
    }

    localStorage.setItem('checkoutItems', JSON.stringify(selectedItems));
    window.location.href = 'checkout';
}

function checkoutAll() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    localStorage.setItem('checkoutItems', JSON.stringify(cart));
    window.location.href = 'checkout';
}

function checkoutSingleItem(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart[index];
    localStorage.setItem('checkoutItems', JSON.stringify([item]));
    window.location.href = 'checkout';
}

function updateCheckoutTotal(cartTotal = null) {
    if (cartTotal === null) {
        // Use checkoutItems instead of full cart
        let items = JSON.parse(localStorage.getItem('checkoutItems')) || [];
        cartTotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    const zone = document.getElementById('deliveryZone');
    const chargeEl = document.getElementById('checkout-delivery-charge');
    const finalEl = document.getElementById('checkout-final-total');
    const bkashMsgEl = document.getElementById('bkash-msg');
    const totalLabel = document.getElementById('total-label');
    const deliveryLabel = document.getElementById('delivery-label');

    if (!zone || !chargeEl || !finalEl) return;

    let deliveryCharge = 0;
    if (zone.value === 'inside') deliveryCharge = 100;
    else if (zone.value === 'outside') deliveryCharge = 150;

    let totalToPay = cartTotal + deliveryCharge;

    chargeEl.innerText = deliveryCharge;

    // Check payment method
    let paymentMethod = 'cod';
    const checkedMethod = document.querySelector('input[name="paymentMethod"]:checked');
    if (checkedMethod) {
        paymentMethod = checkedMethod.value;
    }

    if (paymentMethod === 'cod') {
        finalEl.innerText = cartTotal;
        if (totalLabel) totalLabel.innerText = 'Due on Delivery:';
        if (deliveryLabel) deliveryLabel.innerText = 'Delivery Charge (Paid Upfront):';

        if (bkashMsgEl) {
            bkashMsgEl.innerHTML = `
                Send <strong id="instruct-amount">৳${deliveryCharge}</strong> to <strong>01734300230</strong> (bKash) to confirm.
                <div style="font-size:0.8rem; color:#888; margin-top:5px;">Remaining ৳${cartTotal} due on delivery.</div>
            `;
        }
    } else {
        finalEl.innerText = totalToPay;
        if (totalLabel) totalLabel.innerText = 'Total to Pay Now:';
        if (deliveryLabel) deliveryLabel.innerText = 'Delivery Charge:';

        if (bkashMsgEl) {
            bkashMsgEl.innerHTML = `
                Send <strong id="instruct-amount">৳${totalToPay}</strong> to <strong>01734300230</strong> (bKash) to confirm.
            `;
        }
    }
}

function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

function selectAllItems(checked) {
    const checkboxes = document.querySelectorAll('.item-checkbox');
    checkboxes.forEach(cb => cb.checked = checked);
    updateCartSelection();
}

function scrollToCheckout() {
    window.location.href = 'checkout';
}

function checkoutWhatsApp() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "*New Order Request*\n";
    message += "----------------------------\n";
    message += "*Customer Information:*\n";
    message += "Name: \n";
    message += "Phone: \n";
    message += "Address: \n";
    message += "----------------------------\n\n";
    message += "*Order Details:*\n";

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        message += `▪ ${item.name}\n   Qty: ${item.quantity} x ৳${item.price} = ৳${itemTotal}\n`;
        total += itemTotal;
    });

    message += "\n----------------------------\n";
    message += `*Subtotal:* ৳${total}\n`;
    message += "----------------------------\n";
    message += "*Delivery Charges:*\n";
    message += "• Inside Dhaka: ৳100\n";
    message += "• Outside Dhaka: ৳150\n";
    message += "*(Please confirm your location and pay the delivery charge to confirm your order)*";

    // Redirect to WhatsApp
    const phoneNumber = "8801892144996"; // Updated number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Initial Render for Cart Page
if (window.location.pathname.includes('cart')) {
    document.addEventListener('DOMContentLoaded', () => {
        renderCart();
    });
}

// Initial Render for Checkout Page
if (window.location.pathname.includes('checkout')) {
    document.addEventListener('DOMContentLoaded', () => {
        const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];

        // If coming from product page "Order Now", checkoutItems is already set.
        // If coming from "Checkout" on cart page, it's also set.
        // If arriving directly, try to use full cart as fallback.
        if (items.length === 0) {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert('Your cart is empty! Redirecting to shop.');
                window.location.href = 'collections';
                return;
            }
            localStorage.setItem('checkoutItems', JSON.stringify(cart));
            // Reload to apply fallback
            window.location.reload();
            return;
        }

        updateCheckoutTotal();
        const zoneSelect = document.getElementById('deliveryZone');
        if (zoneSelect) {
            zoneSelect.addEventListener('change', () => updateCheckoutTotal());
        }

        // Render Checkout Items Summary
        const listEl = document.getElementById('checkout-items-list');
        if (listEl) {
            listEl.innerHTML = '';
            items.forEach(item => {
                const itemDiv = document.createElement('div');
                itemDiv.style.cssText = 'display: flex; justify-content: space-between; border-bottom: 1px solid #efefef; padding: 10px 0; font-size: 0.9rem;';
                itemDiv.innerHTML = `
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <img src="${item.image}" width="40" height="40" style="border-radius: 4px; object-fit: cover;">
                        <div>
                            <div style="font-weight: 600;">${item.name}</div>
                            <div style="color: #888; font-size: 0.8rem;">Size: ${item.size || "N/A"} | Qty: ${item.quantity}</div>
                        </div>
                    </div>
                    <div style="font-weight: 600;">৳${item.price * item.quantity}</div>
                `;
                listEl.appendChild(itemDiv);
            });
        }
    });
}

// Product Details Page Logic
document.addEventListener('DOMContentLoaded', () => {
    // Product Detail Page Logic
    const productDetailContainer = document.querySelector('.product-detail');
    if (!productDetailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (productId) {
        const product = products.find(p => p.id === productId);

        if (product) {
            // Elements
            const mainImg = document.getElementById('mainProductImage');
            const mainImgWrapper = document.querySelector('.main-image-wrapper');
            const thumbnailContainer = document.getElementById('thumbnailContainer');

            // Populate Main Details
            if (mainImg) {
                mainImg.src = product.image;
                mainImg.alt = `${product.name} - Handcrafted Bangle`;
            }
            document.getElementById('productName').innerText = product.name;
            document.getElementById('productPrice').innerText = `৳${product.price}`;
            document.getElementById('productDescription').innerText =
                `Experience the elegance of this handcrafted piece, designed to perfect your look for any occasion.`;

            // Image Zoom Logic
            if (mainImg && mainImgWrapper) {
                mainImgWrapper.addEventListener('mousemove', function (e) {
                    const rect = mainImgWrapper.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;

                    mainImg.style.transformOrigin = `${x}% ${y}%`;
                    mainImg.style.transform = 'scale(2)'; // 2x Zoom
                });

                mainImgWrapper.addEventListener('mouseleave', function () {
                    mainImg.style.transform = 'scale(1)';
                    mainImg.style.transformOrigin = 'center center';
                });
            }

            // Dynamic Thumbnails
            if (thumbnailContainer) {
                thumbnailContainer.innerHTML = '';

                // Always include the main image as a thumbnail if there are others
                const allImages = product.images && product.images.length > 0 ? product.images : [product.image];

                allImages.forEach((imgSrc, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = imgSrc;
                    thumb.alt = `${product.name} View ${index + 1}`;
                    thumb.className = 'thumbnail';
                    if (imgSrc === product.image) thumb.classList.add('active');

                    thumb.addEventListener('click', function () {
                        if (this.classList.contains('active')) return;

                        // Switch Active State
                        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                        this.classList.add('active');

                        // Fade Transition
                        mainImg.style.opacity = '0';
                        setTimeout(() => {
                            mainImg.src = this.src;
                            mainImg.alt = this.alt; // Update alt text on switch
                            mainImg.style.opacity = '1';
                        }, 250);
                    });

                    thumbnailContainer.appendChild(thumb);
                });
            }

            // Setup WhatsApp Link (Structured)
            const whatsappBtn = document.getElementById('whatsappBtn');
            const updateWhatsAppLink = () => {
                const selectedSize = document.querySelector('.size-btn.active')?.innerText || "Not Selected";

                let message = "*New Order Request*\n";
                message += "----------------------------\n";
                message += "*Customer Information:*\n";
                message += "Name: \n";
                message += "Phone: \n";
                message += "Address: \n";
                message += "----------------------------\n\n";
                message += "*Order Details:*\n";
                message += `▪ ${product.name}\n   Size: ${selectedSize}\n   Qty: 1 x ৳${product.price} = ৳${product.price}\n`;
                message += "\n----------------------------\n";
                message += `*Subtotal:* ৳${product.price}\n`;
                message += "----------------------------\n";
                message += "*Delivery Charges:*\n";
                message += "• Inside Dhaka: ৳100\n";
                message += "• Outside Dhaka: ৳150\n";
                message += "*(Please confirm your location)*";

                whatsappBtn.href = `https://wa.me/8801892144996?text=${encodeURIComponent(message)}`;
            };

            // Initial setup
            updateWhatsAppLink();

            // Setup Add to Cart Button
            const addToCartBtn = document.getElementById('addToCartBtn');
            addToCartBtn.onclick = () => {
                if (product.hasSize) {
                    const selectedBtn = document.querySelector('.size-btn.active');
                    if (!selectedBtn) {
                        alert("Please select a size first!");
                        // Scroll to size selector or highlight it
                        document.querySelector('.size-selector')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        document.querySelector('.size-selector')?.classList.add('shake');
                        setTimeout(() => document.querySelector('.size-selector')?.classList.remove('shake'), 500);
                        return;
                    }
                    addToCart(product.id, selectedBtn.innerText);
                } else {
                    addToCart(product.id, "N/A");
                }
            };

            // Order Now (Direct Checkout)
            const orderNowBtn = document.getElementById('orderNowBtn');
            if (orderNowBtn) {
                orderNowBtn.onclick = () => {
                    if (product.hasSize) {
                        const selectedBtn = document.querySelector('.size-btn.active');
                        if (!selectedBtn) {
                            alert("Please select a size first!");
                            return;
                        }
                        // Clear previous selection and only checkout this one
                        localStorage.setItem('checkoutItems', JSON.stringify([{
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            size: selectedBtn.innerText,
                            quantity: 1
                        }]));
                        window.location.href = 'checkout';
                    } else {
                        localStorage.setItem('checkoutItems', JSON.stringify([{
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.image,
                            size: "N/A",
                            quantity: 1
                        }]));
                        window.location.href = 'checkout';
                    }
                };
            }

            // Size Selector
            const sizeBtns = document.querySelectorAll('.size-btn');
            sizeBtns.forEach(btn => {
                btn.onclick = function () {
                    sizeBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    updateWhatsAppLink(); // Refresh link with new size
                }
            });

            // If product has no size, hide size selector
            if (!product.hasSize) {
                const sizeSelector = document.querySelector('.size-selector');
                if (sizeSelector) sizeSelector.style.display = 'none';
            }

        } else {
            productDetailContainer.innerHTML = '<div class="container" style="padding: 100px 0; text-align: center;"><h2>Product not found</h2><a href="collections" class="btn">Back to Shop</a></div>';
        }
    }
});

// Checkout Form Submission Logic
document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];
            if (items.length === 0) {
                alert('No items selected for checkout!');
                return;
            }

            const name = document.getElementById('customerName').value;
            const phone = document.getElementById('customerPhone').value;
            const address = document.getElementById('customerAddress').value;
            const zone = document.getElementById('deliveryZone').value;

            if (!zone) {
                alert('Please select a Delivery Zone.');
                return;
            }

            // Calculate total
            let subtotal = 0;
            items.forEach(item => subtotal += item.price * item.quantity);

            let deliveryCharge = zone === 'inside' ? 100 : 150;
            let total = subtotal + deliveryCharge;

            // Generate Order ID
            const orderId = 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');

            const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
            const bkashTrxId = document.getElementById('bkashTrxId') ? document.getElementById('bkashTrxId').value : '';

            // Create Order Object
            const newOrder = {
                id: orderId,
                customerName: name,
                customerPhone: phone,
                customerAddress: address,
                items: items,
                totalAmount: total,
                date: new Date().toISOString(),
                status: 'Pending',
                paymentMethod: paymentMethod === 'cod' ? 'Cash on Delivery' : 'Full bKash Payment',
                bKashTrxId: bkashTrxId
            };

            // Save to Firebase Firestore
            // Assumes 'db' is available globally from firebase-config.js
            if (typeof db !== 'undefined') {
                db.collection('orders').add(newOrder).then((docRef) => {
                    // Save Order ID for tracking
                    localStorage.setItem('recentOrderId', orderId);

                    // Remove purchased items from cart
                    let cart = JSON.parse(localStorage.getItem('cart')) || [];
                    const items = JSON.parse(localStorage.getItem('checkoutItems')) || [];

                    const newCart = cart.filter(cartItem => {
                        return !items.some(buyItem => buyItem.id === cartItem.id && buyItem.size === cartItem.size);
                    });

                    localStorage.setItem('cart', JSON.stringify(newCart));
                    localStorage.removeItem('checkoutItems');
                    updateCartCount();

                    // UI Updates
                    const checkoutCard = document.getElementById('checkout-card');
                    if (checkoutCard) checkoutCard.style.display = 'none';

                    const cartTable = document.querySelector('.cart-table');
                    if (cartTable) cartTable.style.display = 'none';

                    const cartTotal = document.querySelector('.cart-total');
                    if (cartTotal) cartTotal.style.display = 'none';

                    const successDiv = document.getElementById('order-success');
                    if (successDiv) {
                        successDiv.style.display = 'block';
                        document.getElementById('success-order-id').innerText = orderId;

                        // Setup Real-time Status listener for Checkout Success Tracking UI
                        db.collection('orders').doc(docRef.id).onSnapshot((doc) => {
                            if (doc.exists) {
                                const currentData = doc.data();

                                // Reset checkout styles
                                const statuses = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];
                                statuses.forEach(s => {
                                    const step = document.getElementById('chk-step-' + s);
                                    if (step) {
                                        step.querySelector('.chk-icon').style.background = '#ddd';
                                        step.querySelector('.chk-label').style.color = '#555';
                                        step.querySelector('.chk-label').style.fontWeight = '500';
                                    }
                                });

                                // Update Progress
                                let progressWidth = '0%';
                                let activeLevel = 0;

                                if (currentData.status === 'Pending') { activeLevel = 1; progressWidth = '0%'; }
                                else if (currentData.status === 'Confirmed') { activeLevel = 2; progressWidth = '33%'; }
                                else if (currentData.status === 'Shipped') { activeLevel = 3; progressWidth = '66%'; }
                                else if (currentData.status === 'Delivered') { activeLevel = 4; progressWidth = '100%'; }

                                const progLine = document.getElementById('checkout-progress-line');
                                if (progLine) progLine.style.width = progressWidth;

                                for (let i = 0; i < activeLevel; i++) {
                                    const step = document.getElementById('chk-step-' + statuses[i]);
                                    if (step) {
                                        step.querySelector('.chk-icon').style.background = 'var(--color-secondary)';
                                        step.querySelector('.chk-label').style.color = 'var(--color-secondary)';
                                        step.querySelector('.chk-label').style.fontWeight = 'bold';
                                    }
                                }
                            }
                        });
                    }
                }).catch((error) => {
                    console.error("Error saving order: ", error);
                    alert("There was a problem placing your order. Please try again.");
                });
            } else {
                alert("Database connection is not working. Order was not placed.");
            }
        });
    }
});

// --- Track Order Logic ---
document.addEventListener('DOMContentLoaded', () => {
    const trackBtn = document.getElementById('track-order-btn');
    const trackInput = document.getElementById('track-order-input');

    if (trackBtn && trackInput) {
        // Auto-fill from recent order
        const recentOrder = localStorage.getItem('recentOrderId');
        if (recentOrder) {
            trackInput.value = recentOrder;
            // Optionally auto-track if desired, but user can just click
        }

        let unsubscribeTracking = null;

        trackBtn.addEventListener('click', () => {
            const orderIdStr = trackInput.value.trim().toUpperCase();
            if (!orderIdStr) return;

            const errorMsg = document.getElementById('track-error-msg');
            const resultBox = document.getElementById('tracking-result');

            errorMsg.style.display = 'none';
            resultBox.style.display = 'none';

            if (unsubscribeTracking) {
                unsubscribeTracking();
                unsubscribeTracking = null;
            }

            if (typeof db !== 'undefined') {
                trackBtn.innerText = 'Searching...';

                db.collection('orders').where('id', '==', orderIdStr).get().then(snapshot => {
                    trackBtn.innerText = 'Track';
                    if (snapshot.empty) {
                        errorMsg.style.display = 'block';
                    } else {
                        resultBox.style.display = 'block';
                        const doc = snapshot.docs[0];

                        // Setup Realtime Listener!
                        unsubscribeTracking = db.collection('orders').doc(doc.id).onSnapshot(liveDoc => {
                            if (liveDoc.exists) {
                                renderTrackingData(liveDoc.data());
                            }
                        });
                    }
                }).catch(err => {
                    console.error("Error tracking order", err);
                    trackBtn.innerText = 'Track';
                    errorMsg.style.display = 'block';
                    errorMsg.innerText = 'Error connecting to database.';
                });
            }
        });
    }
});

function renderTrackingData(data) {
    document.getElementById('res-order-id').innerText = data.id;
    document.getElementById('res-order-date').innerText = new Date(data.date).toLocaleString([], { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    document.getElementById('res-order-payment').innerText = data.paymentMethod || 'N/A';
    document.getElementById('res-order-total').innerText = data.totalAmount;
    document.getElementById('res-order-address').innerText = data.customerAddress;

    const itemsContainer = document.getElementById('res-order-items');
    itemsContainer.innerHTML = '';
    if (data.items && data.items.length) {
        data.items.forEach(it => {
            itemsContainer.innerHTML += `<div style="padding: 5px 0;"><strong>${it.quantity}x</strong> ${it.name} - ৳${it.price}</div>`;
        });
    }

    // Reset styles
    const statuses = ['Pending', 'Confirmed', 'Shipped', 'Delivered'];
    statuses.forEach(s => {
        const step = document.getElementById('track-step-' + s);
        if (step) {
            step.querySelector('.track-icon').style.background = '#ddd';
            step.querySelector('div:last-child').style.color = '#555';
            step.querySelector('div:last-child').style.fontWeight = '500';
        }
    });

    // Update Progress
    let progressWidth = '0%';
    let activeLevel = 0;

    if (data.status === 'Pending') { activeLevel = 1; progressWidth = '0%'; }
    else if (data.status === 'Confirmed') { activeLevel = 2; progressWidth = '33%'; }
    else if (data.status === 'Shipped') { activeLevel = 3; progressWidth = '66%'; }
    else if (data.status === 'Delivered') { activeLevel = 4; progressWidth = '100%'; }

    document.getElementById('tracker-progress-line').style.width = progressWidth;

    for (let i = 0; i < activeLevel; i++) {
        const step = document.getElementById('track-step-' + statuses[i]);
        if (step) {
            step.querySelector('.track-icon').style.background = 'var(--color-secondary)';
            step.querySelector('div:last-child').style.color = 'var(--color-secondary)';
            step.querySelector('div:last-child').style.fontWeight = 'bold';
        }
    }
}