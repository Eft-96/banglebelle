const products = [
    // BANGLES (b1 - b39)
    { id: 'b1', name: 'Bangle Set 1', category: 'bangles', price: 550, image: 'traditional-churi.jpg', images: ['traditional-churi.jpg'] },
    { id: 'b2', name: 'Bangle 2 Per Piece', category: 'bangles', price: 125, image: 'custom-churi.jpg', images: ['custom-churi.jpg'] },
    { id: 'b3', name: 'Bangle Set 3', category: 'bangles', price: 350, image: 'babypink1.jpg', images: ['babypink1.jpg', 'babaypink2.jpg', 'babypink3.jpg'] },
    { id: 'b4', name: 'Bangle Set 4', category: 'bangles', price: 550, image: 'white1.jpg', images: ['white1.jpg', 'new-prod-132.jpg', 'new-prod-134.jpg', 'new-prod-130.jpg'] },
    { id: 'b5', name: 'Bangle 5  Per Piece', category: 'bangles', price: 99, image: 'new-prod-81.jpg', images: ['new-prod-81.jpg'] },
    { id: 'b6', name: 'Bangle Set 6', category: 'bangles', price: 400, image: 'new-prod-82.jpg', images: ['new-prod-82.jpg'] },
    { id: 'b7', name: 'Bangle Set 7', category: 'bangles', price: 350, image: 'new-prod-83.jpg', images: ['new-prod-83.jpg'] },
    { id: 'b8', name: 'Bangle Set 8', category: 'bangles', price: 280, image: 'new-prod-84.jpg', images: ['new-prod-84.jpg'] },
    { id: 'b9', name: 'Bangle Set 9', category: 'bangles', price: 250, image: 'new-prod-85.jpg', images: ['new-prod-85.jpg'] },
    { id: 'b10', name: 'Bangle 10  Per Piece', category: 'bangles', price: 99, image: 'new-prod-80.jpg', images: ['new-prod-80.jpg'] },
    { id: 'b11', name: 'Bangle Set 11', category: 'bangles', price: 550, image: 'new-prod-86.jpg', images: ['new-prod-86.jpg', 'new-prod-87.jpg'] },
    { id: 'b12', name: 'Bangle Set 12', category: 'bangles', price: 280, image: 'new-prod-95.jpg', images: ['new-prod-95.jpg'] },
    { id: 'b13', name: 'Bangle Set 13', category: 'bangles', price: 250, image: 'new-prod-96.jpg', images: ['new-prod-96.jpg'] },
    { id: 'b14', name: 'Bangle Set 14', category: 'bangles', price: 250, image: 'new-prod-97.jpg', images: ['new-prod-97.jpg'] },
    { id: 'b15', name: 'Bangle Set 15', category: 'bangles', price: 320, image: 'new-prod-98.jpg', images: ['new-prod-98.jpg'] },
    { id: 'b16', name: 'Bangle Set 16', category: 'bangles', price: 450, image: 'new-prod-99.jpg', images: ['new-prod-99.jpg', 'new-prod-100.jpg'] },
    { id: 'b17', name: 'Bangle Set 17', category: 'bangles', price: 320, image: 'new-prod-101.jpg', images: ['new-prod-101.jpg'] },
    { id: 'b18', name: 'Bangle 18', category: 'bangles', price: 180, image: 'new-prod-104.jpg', images: ['new-prod-104.jpg', 'new-prod-106.jpg'] },
    { id: 'b19', name: 'Bangle 19  Per Piece', category: 'bangles', price: 99, image: 'new-prod-108.jpg', images: ['new-prod-108.jpg'] },
    { id: 'b20', name: 'Bangle Set 20', category: 'bangles', price: 450, image: 'new-prod-110.jpg', images: ['new-prod-110.jpg', 'new-prod-111.jpg', 'new-prod-102.jpg', 'new-prod-69.jpg', 'new-prod-70.jpg'] },
    { id: 'b21', name: 'Bangle Set 21', category: 'bangles', price: 280, image: 'new-prod-112.jpg', images: ['new-prod-112.jpg'] },
    { id: 'b22', name: 'Bangle Set 22', category: 'bangles', price: 475, image: 'new-prod-114.jpg', images: ['new-prod-114.jpg'] },
    { id: 'b23', name: 'Bangle Set 23', category: 'bangles', price: 280, image: 'new-prod-115.jpg', images: ['new-prod-115.jpg'] },
    { id: 'b24', name: 'Bangle 24  Per Piece', category: 'bangles', price: 89, image: 'new-prod-116.jpg', images: ['new-prod-116.jpg', 'new-prod-117.jpg'] },
    { id: 'b25', name: 'Bangle Set 25', category: 'bangles', price: 380, image: 'new-prod-118.jpg', images: ['new-prod-118.jpg'] },
    { id: 'b26', name: 'Bangle Set 26', category: 'bangles', price: 480, image: 'new-prod-119.jpg', images: ['new-prod-119.jpg'] },
    { id: 'b27', name: 'Bangle 27  Per Piece', category: 'bangles', price: 89, image: 'new-prod-120.jpg', images: ['new-prod-120.jpg'] },
    { id: 'b28', name: 'Bangle 28  Per Piece', category: 'bangles', price: 89, image: 'new-prod-121.jpg', images: ['new-prod-121.jpg', 'new-prod-122.jpg'] },
    { id: 'b29', name: 'Bangle 29  Per Piece', category: 'bangles', price: 89, image: 'new-prod-123.jpg', images: ['new-prod-123.jpg'] },
    { id: 'b30', name: 'Bangle 30 Per Piece', category: 'bangles', price: 99, image: 'new-prod-124.jpg', images: ['new-prod-124.jpg'] },
    { id: 'b31', name: 'Bangle 31 Per Piece', category: 'bangles', price: 120, image: 'new-prod-127.jpg', images: ['new-prod-127.jpg', 'new-prod-126.jpg'] },
    { id: 'b32', name: 'Bangle Set 32', category: 'bangles', price: 480, image: 'new-prod-125.jpg', images: ['new-prod-125.jpg'] },
    { id: 'b33', name: 'Bangle Set 33', category: 'bangles', price: 400, image: 'new-prod-128.jpg', images: ['new-prod-128.jpg'] },
    { id: 'b34', name: 'Bangle Set 34', category: 'bangles', price: 480, image: 'new-prod-129.jpg', images: ['new-prod-129.jpg'] },
    { id: 'b35', name: 'Bangle 35 Per Piece', category: 'bangles', price: 110, image: 'new-prod-131.jpg', images: ['new-prod-131.jpg'] },
    { id: 'b36', name: 'Bangle Set 36', category: 'bangles', price: 270, image: 'new-prod-26.jpg', images: ['new-prod-26.jpg', 'new-prod-27.jpg', 'new-prod-29.jpg'] },
    { id: 'b37', name: 'Bangles Set 37', category: 'bangles', price: 180, image: 'new-prod-9.jpg', images: ['new-prod-9.jpg'] },

    { id: 'b38', name: 'Bangle Pair 38', category: 'bangles', price: 250, image: 'new-prod-48.jpg', images: ['new-prod-48.jpg', 'new-prod-49.jpg'] },
    { id: 'b39', name: 'Bangle Set 39', category: 'bangles', price: 900, image: 'new-prod-56.jpg', images: ['new-prod-56.jpg', 'new-prod-60.jpg', 'new-prod-68.jpg'] },

    // New BangleBelle Sets (b40 - b51)
    { id: 'b40', name: 'Bangle Set 40', category: 'bangles', price: 400, image: '8.jpeg', images: ['8.jpeg', '9.jpeg', '17.jpeg', '18.jpeg'] },
    { id: 'b41', name: 'Bangle Set 41', category: 'bangles', price: 350, image: '19.jpeg', images: ['19.jpeg', '20.jpeg'] },
    { id: 'b42', name: 'Bangle Set 42', category: 'bangles', price: 420, image: '10.jpeg', images: ['10.jpeg', '15.jpeg', '16.jpeg'] },
    { id: 'b43', name: 'Bangle Set 43', category: 'bangles', price: 400, image: '11.jpeg', images: ['11.jpeg', '12.jpeg'] },
    { id: 'b44', name: 'Bangle Set 44', category: 'bangles', price: 350, image: '13.jpeg', images: ['13.jpeg', '14.jpeg'] },

    // Single Image Sets
    { id: 'b45', name: 'Bangle Set 45', category: 'bangles', price: 450, image: '1.jpeg', images: ['1.jpeg'] },
    { id: 'b46', name: 'Bangle Set 46', category: 'bangles', price: 160, image: '2.jpeg', images: ['2.jpeg'] },
    { id: 'b47', name: 'Bangle Set 47', category: 'bangles', price: 450, image: '3.jpeg', images: ['3.jpeg'] },
    { id: 'b48', name: 'Bangle Set 48', category: 'bangles', price: 180, image: '4.jpeg', images: ['4.jpeg'] },
    { id: 'b49', name: 'Bangle Set 49', category: 'bangles', price: 450, image: '5.jpeg', images: ['5.jpeg'] },
    { id: 'b50', name: 'Bangle Set 50', category: 'bangles', price: 160, image: '6.jpeg', images: ['6.jpeg'] },
    { id: 'b51', name: 'Bangle Set 51', category: 'bangles', price: 450, image: '7.jpeg', images: ['7.jpeg'] },
    { id: 'b52', name: 'Bangle Set 52', category: 'bangles', price: 175, image: 'new-prod-30.jpg', images: ['new-prod-30.jpg'] },

    // BRACELET BANGLES (bb1 - bb6)
    { id: 'bb1', name: 'Bracelet Bangle 1', category: 'bracelet-bangles', price: 175, image: 'mordern-churi.jpg', images: ['mordern-churi.jpg'] },
    { id: 'bb2', name: 'Bracelet Bangle 2', category: 'bracelet-bangles', price: 180, image: 'new-prod-21.jpg', images: ['new-prod-21.jpg', 'new-prod-24.jpg'] },
    { id: 'bb3', name: 'Bracelet Bangle 3', category: 'bracelet-bangles', price: 250, image: 'new-prod-8.jpg', images: ['new-prod-8.jpg'] },

    { id: 'bb6', name: 'Bracelet Bangle 4', category: 'bracelet-bangles', price: 200, image: 'new-prod-113.jpg', images: ['new-prod-113.jpg'] },

    // RINGS (r1 - r9)
    { id: 'r1', name: 'Ring Collection 1', category: 'rings', price: 49, image: 'new-prod-71.jpg', images: ['new-prod-71.jpg', 'new-prod-78.jpg'] },
    { id: 'r2', name: 'Ring Collection 2', category: 'rings', price: 70, image: 'new-prod-72.jpg', images: ['new-prod-72.jpg', 'new-prod-76.jpg'] },
    { id: 'r3', name: 'Ring Collection 3', category: 'rings', price: 49, image: 'new-prod-79.jpg', images: ['new-prod-79.jpg', 'new-prod-73.jpg'] },
    { id: 'r4', name: 'Ring Collection 4', category: 'rings', price: 49, image: 'new-prod-92.jpg', images: ['new-prod-92.jpg', 'new-prod-88.jpg'] },
    { id: 'r5', name: 'Ring Collection 5', category: 'rings', price: 75, image: 'new-prod-93.jpg', images: ['new-prod-93.jpg'] },
    { id: 'r6', name: 'Ring Collection 6', category: 'rings', price: 75, image: 'new-prod-94.jpg', images: ['new-prod-94.jpg'] },
    { id: 'r7', name: 'Ring Collection 7', category: 'rings', price: 60, image: 'new-prod-74.jpg', images: ['new-prod-74.jpg'] },
    { id: 'r8', name: 'Ring Collection 8', category: 'rings', price: 75, image: 'new-prod-75.jpg', images: ['new-prod-75.jpg'] },
    { id: 'r9', name: 'Ring Collection 9', category: 'rings', price: 205, image: 'new-prod-77.jpg', images: ['new-prod-77.jpg'] },

    // EARRINGS (e1 - e5)
    { id: 'e1', name: 'Earring Set 1', category: 'earrings', price: 180, image: 'new-prod-1.jpg', images: ['new-prod-1.jpg'] },
    { id: 'e2', name: 'Earring Set 2', category: 'earrings', price: 99, image: 'new-prod-10.jpg', images: ['new-prod-10.jpg'] },
    { id: 'e3', name: 'Earring Set 3', category: 'earrings', price: 99, image: 'new-prod-11.jpg', images: ['new-prod-11.jpg'] },
    { id: 'e4', name: 'Earring Set 4', category: 'earrings', price: 99, image: 'new-prod-13.jpg', images: ['new-prod-13.jpg'] },
    { id: 'e5', name: 'Earring Set 5', category: 'earrings', price: 99, image: 'new-prod-14.jpg', images: ['new-prod-14.jpg'] },

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
                <a href="product-details.html?id=${product.id}" style="display: block; width: 100%; height: 100%;">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </a>
                <div class="product-action">
                    <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">Add to Cart</button>
                </div>
            </div>
            <div class="product-info">
                <a href="product-details.html?id=${product.id}">
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
 */
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
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
            window.history.pushState({}, '', 'collections.html');
        } else {
            filterProducts('category', filterValue);
            window.history.pushState({}, '', `collections.html?filter=${filterValue}`);
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
            if (!window.location.pathname.includes('collections.html')) {
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
                    window.location.href = `collections.html?filter=${matchedCategory}`;
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
                        window.location.href = `collections.html?filter=all`; // ideal: ?search=query
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

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<tr><td colspan="5" style="text-align:center;">Your cart is empty.</td></tr>';
    } else {
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                        <span class="cart-item-name">${item.name}</span>
                    </div>
                </td>
                <td>${item.id}</td>
                <td>৳${item.price}</td>
                <td>
                    <div style="display: flex; align-items: center; gap: 5px;">
                        <button onclick="updateQuantity('${item.id}', -1)" style="padding: 2px 8px;">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" style="padding: 2px 8px;">+</button>
                    </div>
                </td>
                <td><button onclick="removeFromCart('${item.id}')" style="color: red; background: none; border: none; cursor: pointer;">✕</button></td>
            `;
            cartItemsContainer.appendChild(tr);
        });
    }

    cartTotalElement.innerText = total;
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
        cart[itemIndex].quantity += change;
        if (cart[itemIndex].quantity <= 0) {
            cart.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
        updateCartCount();
    }
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(newCart));
    renderCart();
    updateCartCount();
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
    message += "• Inside Dhaka: ৳80\n";
    message += "• Outside Dhaka: ৳150\n";
    message += "*(Please confirm your location and pay the delivery charge to confirm your order)*";

    // Redirect to WhatsApp
    const phoneNumber = "8801734300230"; // User provided number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Initial Render for Cart Page
if (window.location.pathname.includes('cart.html')) {
    document.addEventListener('DOMContentLoaded', renderCart);
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
            if (mainImg) mainImg.src = product.image;
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
                message += "• Inside Dhaka: ৳80\n";
                message += "• Outside Dhaka: ৳150\n";
                message += "*(Please confirm your location)*";

                whatsappBtn.href = `https://wa.me/8801734300230?text=${encodeURIComponent(message)}`;
            };

            // Initial setup
            updateWhatsAppLink();

            // Setup Add to Cart Button
            const addToCartBtn = document.getElementById('addToCartBtn');
            addToCartBtn.onclick = () => {
                addToCart(product.id);
                addToCartBtn.innerText = "Added!";
                setTimeout(() => {
                    addToCartBtn.innerText = "Add to Cart";
                }, 1500);
            };

            // Size Selector
            const sizeBtns = document.querySelectorAll('.size-btn');
            sizeBtns.forEach(btn => {
                btn.onclick = function () {
                    sizeBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    updateWhatsAppLink(); // Refresh link with new size
                }
            });

        } else {
            productDetailContainer.innerHTML = '<div class="container" style="padding: 100px 0; text-align: center;"><h2>Product not found</h2><a href="collections.html" class="btn">Back to Shop</a></div>';
        }
    }
});