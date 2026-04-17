const lgaData = {
    "AGEGE": { baseFee: 2000, areas: { "Agege": 0, "Orile Agege": 500, "Dopemu": 500, "Tabon-Tabon": 500, "Iju": 500, "Pen Cinema": 500 } },
    "AJEROMI-IFELODUN": { baseFee: 2000, areas: { "Ajegunle": 0, "Tolu": 500, "Alaba Oro": 500, "Olodi Apapa": 500, "Wilmer": 500, "Kirikiri": 500 } },
    "ALIMOSHO": { baseFee: 2500, areas: { "Egbeda": 0, "Ikotun": 500, "Ipaja": 500, "Idimu": 500, "Akowonjo": 500, "Ayobo": 1000, "Shasha": 500, "Egbe": 500, "Abule-Egba": 500 } },
    "AMUWO-ODOFIN": { baseFee: 2500, areas: { "Festac Town": 0, "Mile 2": 0, "Satellite Town": 500, "Trade Fair": 500, "Apple Junction": 0 } },
    "APAPA": { baseFee: 2000, areas: { "Apapa GRA": 0, "Wharf": 0, "Tin Can Island": 500, "Olodi Wharf": 500, "Creek Road": 0 } },
    "BADAGRY": { baseFee: 5000, areas: { "Badagry Town": 0, "Agbara": 500, "Aradagun": 500, "Ajara": 500, "Topo": 500, "Badagry Creek": 500 } },
    "EPE": { baseFee: 5000, areas: { "Epe Town": 0, "Itoikin": 500, "Orimedu": 500, "Odo-Noforija": 500, "Ejirin": 500 } },
    "ETI-OSA": { baseFee: 3000, areas: { "Lekki": 0, "Ajah": 500, "Victoria Island": 500, "Ikoyi": 500, "Oniru": 0, "Chevron": 500, "Sangotedo": 1000, "Jakande": 500 } },
    "IBEJU-LEKKI": { baseFee: 4000, areas: { "Awoyaya": 0, "Lakowe": 500, "Eleko": 1000, "Orimedu": 1000, "Ibeju Town": 1000, "Eputu": 500 } },
    "IFAKO-IJAIYE": { baseFee: 2500, areas: { "Ogba": 0, "Iju-Ishaga": 500, "Agege Motor Road axis": 500, "Alakuko": 1000, "Fagba": 500 } },
    "IKEJA": { baseFee: 2000, areas: { "Allen Avenue": 0, "Opebi": 0, "Computer Village": 0, "GRA": 500, "Maryland": 500, "Ikeja GRA": 500, "Ojodu": 500 } },
    "IKORODU": { baseFee: 3000, areas: { "Ikorodu Town": 0, "Ijede": 1000, "Agbede": 500, "Igbogbo": 500, "Odogunyan": 500, "Agric": 500, "Gberigbe": 1000 } },
    "KOSOFE": { baseFee: 2500, areas: { "Oshodi": 0, "Ogudu": 0, "Mile 12": 0, "Ketu": 0, "Alapere": 0, "Ojota": 0, "Maryland axis": 0 } },
    "LAGOS ISLAND": { baseFee: 2000, areas: { "Marina": 0, "Broad Street": 0, "CMS": 0, "Balogun": 0, "Idumota": 0, "Lagos Island Central": 0 } },
    "LAGOS MAINLAND": { baseFee: 2000, areas: { "Yaba": 0, "Ebute Metta": 0, "Iddo": 0, "Sabo": 0, "Oyingbo": 0, "Herbert Macaulay Way": 0 } },
    "MUSHIN": { baseFee: 2000, areas: { "Mushin Town": 0, "Idi Araba": 0, "Papa Ajao": 0, "Palm Avenue": 0, "Lawanson": 0 } },
    "OJO": { baseFee: 3000, areas: { "Alaba International Market": 0, "Ijanikin": 500, "Okokomaiko": 500, "Ajangbadi": 500, "Iba": 500 } },
    "OSHODI-ISOLO": { baseFee: 2500, areas: { "Oshodi": 0, "Isolo": 0, "Ajao Estate": 0, "Ilasa": 0, "Ejigbo axis": 500 } },
    "SHOMOLU": { baseFee: 2000, areas: { "Shomolu": 0, "Bariga": 0, "Fola Agoro": 0, "Pedro": 0, "Onipanu": 0 } },
    "SURULERE": { baseFee: 2000, areas: { "Bode Thomas": 0, "Aguda": 0, "Iponri": 0, "Lawanson": 0, "Adeniran Ogunsanya": 0, "Ikate": 0 } }
};

const storeData = {
    cakes: [
        { name: "Custom Tier Cake", image: "assets/cake.png", price: "₦120,000" },
        { name: "Wedding Excellence Cake", image: "assets/cake.png", price: "₦150,000" },
        { name: "Birthday Chocolate Cake", image: "assets/cake.png", price: "₦65,000" },
        { name: "Red Velvet Dream", image: "assets/cake.png", price: "₦75,000" },
        { name: "Vanilla Bean Classic", image: "assets/cake.png", price: "₦55,000" },
        { name: "Strawberry Shortcake", image: "assets/cake.png", price: "₦60,000" }
    ],
    snacks: [
        { name: "Meatpie", image: "assets/cupcakes.png", price: "₦3,500" },
        { name: "Scotch Egg", image: "assets/cupcakes.png", price: "₦2,500" },
        { name: "Egg Roll", image: "assets/cupcakes.png", price: "₦2,000" },
        { name: "Sausage Roll", image: "assets/cupcakes.png", price: "₦3,000" },
        { name: "Fish Roll", image: "assets/cupcakes.png", price: "₦3,000" },
        { name: "Doughnut", image: "assets/cupcakes.png", price: "₦1,500" }
    ],
    materials: [
        { name: "make time__placeholder", image: "assets/materials.png", price: "₦0" },
        { name: "3pcs mixing bowl", image: "assets/materials.png", price: "₦15,000" },
        { name: "100 MAXMECH Hand Mixer", image: "assets/materials.png", price: "₦45,000" },
        { name: "Electronic Kitchen scale", image: "assets/materials.png", price: "₦25,000" },
        { name: "KENWOOD Hand Mixer", image: "assets/materials.png", price: "₦60,000" },
        { name: "Sokanny Hand Mixer", image: "assets/materials.png", price: "₦35,000" },
        { name: "Impulse sealer", image: "assets/materials.png", price: "₦30,000" },
        { name: "CAMRY DIAL SPRING SCALE", image: "assets/materials.png", price: "₦20,000" },
        { name: "ELECTRONIC PRICING SCALE", image: "assets/materials.png", price: "₦85,000" },
        { name: "HEAT GUN [ MASTER FLEX ]", image: "assets/materials.png", price: "₦40,000" },
        { name: "2000W HEAT GUN MAXMECH", image: "assets/materials.png", price: "₦50,000" },
        { name: "MiniJug", image: "assets/materials.png", price: "₦15,000" }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const categoriesContainer = document.getElementById("store-categories");
    const contentArea = document.getElementById("store-content-area");
    const productsContainer = document.getElementById("products-container");
    const searchContainer = document.getElementById("materials-search-container");
    const searchInput = document.getElementById("material-search");
    const backBtn = document.getElementById("back-to-categories");
    const categoryBtns = document.querySelectorAll(".category-btn");

    let currentCategory = "";

    // ── SNACK CART STATE ─────────────────────────────────────────────────
    // cart: { [itemName]: { qty, priceNum, priceStr } }
    const snackCart = {};
    const MAX_ITEMS = 100;

    function cartTotal() {
        return Object.values(snackCart).reduce((s, v) => s + v.qty, 0);
    }

    function cartValue() {
        return Object.values(snackCart).reduce((s, v) => s + v.qty * v.priceNum, 0);
    }

    function updateCartUI() {
        const total = cartTotal();
        const fab = document.getElementById('cart-fab');
        const badge = document.getElementById('cart-badge');

        badge.textContent = total;
        fab.classList.toggle('visible', total > 0);

        // Update the top "View Cart" button count
        const topCount = document.getElementById('view-cart-top-count');
        if (topCount) topCount.textContent = total > 0 ? `(${total})` : '';

        // Snack controls bar count
        const countEl = document.getElementById('snack-cart-count');
        if (countEl) countEl.textContent = total > 0 ? `${total} item${total !== 1 ? 's' : ''} in cart` : '';

        // Cart drawer items list
        const list = document.getElementById('cart-items-list');
        if (!list) return;
        list.innerHTML = '';

        if (total === 0) {
            list.innerHTML = '<div class="cart-empty-msg">Your cart is empty.<br>Add snacks to get started!</div>';
        } else {
            Object.entries(snackCart).forEach(([name, item]) => {
                if (item.qty <= 0) return;
                const row = document.createElement('div');
                row.className = 'cart-item-row';
                row.innerHTML = `
                    <div class="cart-item-info">
                        <div class="cart-item-name">${name}</div>
                        <div class="cart-item-sub">${item.priceStr} × ${item.qty}</div>
                    </div>
                    <div class="cart-item-total">₦${(item.qty * item.priceNum).toLocaleString()}</div>
                    <button class="cart-remove-btn" data-remove="${name}" title="Remove">🗑</button>
                `;
                list.appendChild(row);
            });
        }

        document.getElementById('cart-total-qty').textContent = total;
        document.getElementById('cart-total-price').textContent = '₦' + cartValue().toLocaleString();

        const warning = document.getElementById('cart-limit-warning');
        if (warning) warning.classList.toggle('visible', total >= MAX_ITEMS);

        // Sync qty displays on product cards
        document.querySelectorAll('.snack-qty-display').forEach(el => {
            const name = el.dataset.name;
            el.textContent = snackCart[name] ? snackCart[name].qty : 0;
        });
    }

    function addToCart(name, priceStr) {
        const priceNum = parseFloat(priceStr.replace(/[^0-9.]/g, ''));
        if (!snackCart[name]) snackCart[name] = { qty: 0, priceNum, priceStr };
        const pending = parseInt(document.querySelector(`.snack-pending[data-name="${name}"]`)?.value ||
            document.querySelector(`.snack-pending[data-name="${name}"]`)?.textContent || '1');
        const newTotal = cartTotal() + pending;
        if (newTotal > MAX_ITEMS) {
            showNotification(`Adding ${pending} would exceed the 100-item limit. You have ${cartTotal()} items in your cart.`);
            return;
        }
        snackCart[name].qty += pending;
        updateCartUI();
    }

    // ── RENDER PRODUCTS ──────────────────────────────────────────────────
    function renderProducts(products) {
        productsContainer.innerHTML = "";
        const isSnacks = currentCategory === 'snacks';

        products.forEach((product, index) => {
            const delay = index % 3 === 0 ? "" : (index % 3 === 1 ? "delay-short" : "delay-long");
            const filterStyles = ["", "filter: hue-rotate(45deg);", "filter: saturate(1.5);", "filter: contrast(1.2);"];
            const filter = filterStyles[index % filterStyles.length];

            let actionHTML;
            if (isSnacks) {
                const inCart = snackCart[product.name] ? snackCart[product.name].qty : 0;
                actionHTML = `
                    <div class="snack-qty-row">
                        <button class="qty-btn snack-dec" data-name="${product.name}">−</button>
                        <input type="number" class="snack-qty-input snack-pending" data-name="${product.name}"
                            value="1" min="1" max="100" style="width:52px;text-align:center;padding:4px 6px;border:1px solid rgba(179,0,95,0.3);border-radius:8px;font-family:inherit;font-size:1rem;font-weight:600;color:var(--text-main);background:white;">
                        <button class="qty-btn snack-inc" data-name="${product.name}">+</button>
                    </div>
                    ${inCart > 0 ? `<p style="font-size:0.8rem;color:var(--brand-primary);margin-bottom:6px;">${inCart} in cart</p>` : ''}
                    <button class="add-to-cart-btn" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
                `;
            } else {
                actionHTML = `<button class="main-button pay-btn" data-name="${product.name}" data-price="${product.price}">Buy Now</button>`;
            }

            const html = `
                <div class="product-box animate-up ${delay}">
                    <img src="${product.image}" alt="${product.name}" class="product-picture" style="${filter}">
                    <h4>${product.name}</h4>
                    <p class="item-price">${product.price}</p>
                    ${actionHTML}
                </div>
            `;
            productsContainer.insertAdjacentHTML('beforeend', html);
        });

        setTimeout(() => {
            document.querySelectorAll('#products-container .product-box').forEach(el => el.classList.add('visible'));
        }, 50);
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const category = btn.getAttribute("data-category");
            currentCategory = category;

            categoriesContainer.classList.add("fade-out-left");

            setTimeout(() => {
                categoriesContainer.style.display = "none";
                contentArea.style.display = "block";

                if (category === "materials") {
                    searchContainer.style.display = "block";
                    searchInput.value = "";
                } else {
                    searchContainer.style.display = "none";
                }

                if (category === "cakes") {
                    document.getElementById("custom-cake-container").style.display = "block";
                } else {
                    document.getElementById("custom-cake-container").style.display = "none";
                }

                // Show snack controls bar only for snacks
                const snackBar = document.getElementById('snack-controls-bar');
                if (snackBar) snackBar.style.display = category === 'snacks' ? 'flex' : 'none';

                // Show View Cart button only for snacks
                const viewCartContainer = document.getElementById('view-cart-container');
                if (viewCartContainer) viewCartContainer.style.display = category === 'snacks' ? 'block' : 'none';

                setTimeout(() => {
                    contentArea.classList.add("fade-in-right");
                    renderProducts(storeData[category]);
                    if (category === 'snacks') updateCartUI();
                }, 50);
            }, 400);
        });
    });

    backBtn.addEventListener("click", () => {
        // Trigger fade out right
        contentArea.classList.remove("fade-in-right");
        contentArea.classList.add("fade-out-right");

        setTimeout(() => {
            contentArea.style.display = "none";
            contentArea.classList.remove("fade-out-right");

            categoriesContainer.style.display = "flex";

            setTimeout(() => {
                categoriesContainer.classList.remove("fade-out-left");
                categoriesContainer.classList.add("fade-in-left");

                // Cleanup animation class after it runs
                setTimeout(() => {
                    categoriesContainer.classList.remove("fade-in-left");
                }, 400);
            }, 50);
        }, 400);
    });

    searchInput.addEventListener("input", (e) => {
        if (currentCategory !== "materials") return;
        const searchTerm = e.target.value.toLowerCase();
        const filtered = storeData.materials.filter(p => p.name.toLowerCase().includes(searchTerm));
        renderProducts(filtered);
    });

    // ── SNACK CART INTERACTIONS ──────────────────────────────────────────
    // Quantity +/- and Add to Cart (delegated from products container)
    productsContainer.addEventListener('click', (e) => {
        if (currentCategory !== 'snacks') return;

        const name = e.target.dataset.name;
        const pendingEl = name ? document.querySelector(`.snack-pending[data-name="${name}"]`) : null;

        if (e.target.classList.contains('snack-inc') && pendingEl) {
            const cur = parseInt(pendingEl.value || pendingEl.textContent);
            if (cur >= MAX_ITEMS) {
                showNotification(`Maximum limit of ${MAX_ITEMS} items reached.`);
            }
            const next = Math.min(cur + 1, MAX_ITEMS);
            pendingEl.value = next;
        }

        if (e.target.classList.contains('snack-dec') && pendingEl) {
            const cur = parseInt(pendingEl.value || pendingEl.textContent);
            const next = Math.max(cur - 1, 1);
            pendingEl.value = next;
        }

        if (e.target.classList.contains('add-to-cart-btn')) {
            addToCart(name, e.target.dataset.price);
        }
    });

    // Clamp typed values on blur/change
    productsContainer.addEventListener('input', (e) => {
        if (!e.target.classList.contains('snack-pending')) return;
        let val = parseInt(e.target.value);
        if (isNaN(val) || val < 1) val = 1;
        if (val > MAX_ITEMS) val = MAX_ITEMS;
        e.target.value = val;
    });

    // Cart drawer open/close
    const cartFab = document.getElementById('cart-fab');
    const cartDrawer = document.getElementById('cart-drawer');
    const cartOverlay = document.getElementById('cart-drawer-overlay');

    function openCart() { cartDrawer.classList.add('open'); cartOverlay.classList.add('visible'); }
    function closeCart() { cartDrawer.classList.remove('open'); cartOverlay.classList.remove('visible'); }

    if (cartFab) cartFab.addEventListener('click', openCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);
    const cartCloseBtn = document.getElementById('cart-close-btn');
    if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

    // Top "View Cart" button in store controls bar
    const viewCartTopBtn = document.getElementById('view-cart-top-btn');
    if (viewCartTopBtn) viewCartTopBtn.addEventListener('click', openCart);

    // Remove item from cart via drawer
    document.getElementById('cart-items-list')?.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-remove-btn')) {
            const name = e.target.dataset.remove;
            delete snackCart[name];
            updateCartUI();
            if (currentCategory === 'snacks') renderProducts(storeData.snacks);
        }
    });

    // Bulk order button → open contact modal
    document.getElementById('bulk-order-btn')?.addEventListener('click', () => {
        document.getElementById('contact-modal').classList.add('active');
    });

    // Cart checkout button → open checkout modal with cart summary
    document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
        if (cartTotal() === 0) { showNotification('Your cart is empty!'); return; }
        closeCart();

        const summary = Object.entries(snackCart)
            .filter(([, v]) => v.qty > 0)
            .map(([name, v]) => `${name} ×${v.qty}`)
            .join(', ');

        currentCheckoutItem = `Snacks: ${summary}`;
        currentCheckoutPrice = '₦' + cartValue().toLocaleString();
        currentBasePriceNum = cartValue();
        currentLocFee = 0;

        document.getElementById('modal-item-name').innerText = currentCheckoutItem;
        document.getElementById('modal-item-price').innerText = currentCheckoutPrice;

        emailInput.value = ''; emailError.style.display = 'none';
        addressInput.value = ''; addressError.style.display = 'none';
        phoneInput.value = ''; phoneError.style.display = 'none';
        lgaSelect.value = ''; lgaError.style.display = 'none';
        areaSelect.innerHTML = '<option value="" disabled selected>Select Area...</option>';
        areaSelect.disabled = true;
        areaError.style.display = 'none';

        deliveryOption.value = 'pickup';
        addressGroup.style.display = 'none';
        modalDeliveryFee.innerText = '₦0';
        modalTotalPrice.innerText = '₦' + currentBasePriceNum.toLocaleString();

        modalOverlay.classList.add('active');
    });

    const modalOverlay = document.getElementById("checkout-modal");
    const closeModalBtn = document.getElementById("close-modal");
    const confirmBtn = document.getElementById("confirm-checkout-btn");
    const emailInput = document.getElementById("checkout-email");
    const emailError = document.getElementById("email-error");
    const deliveryOption = document.getElementById("checkout-delivery-option");
    const addressGroup = document.getElementById("address-group");
    const addressInput = document.getElementById("checkout-address");
    const addressError = document.getElementById("address-error");
    const phoneInput = document.getElementById("checkout-phone");
    const phoneError = document.getElementById("phone-error");
    const lgaSelect = document.getElementById("checkout-lga");
    const lgaError = document.getElementById("lga-error");
    const areaSelect = document.getElementById("checkout-area");
    const areaError = document.getElementById("area-error");
    const modalDeliveryFee = document.getElementById("modal-delivery-fee");
    const modalTotalPrice = document.getElementById("modal-total-price");

    let currentCheckoutItem = null;
    let currentCheckoutPrice = null;
    let currentBasePriceNum = 0;
    let currentLocFee = 0; // delivery fee = lga base + area surcharge

    // Populate LGAs dynamically
    if (lgaSelect) {
        Object.keys(lgaData).forEach(lga => {
            let opt = document.createElement("option");
            opt.value = lga;
            opt.innerText = lga;
            lgaSelect.appendChild(opt);
        });

        lgaSelect.addEventListener('change', (e) => {
            const lga = e.target.value;
            const areas = lgaData[lga].areas;

            areaSelect.innerHTML = '<option value="" disabled selected>Select Area...</option>';
            Object.keys(areas).forEach(area => {
                let opt = document.createElement("option");
                opt.value = area;
                opt.innerText = area;
                areaSelect.appendChild(opt);
            });
            areaSelect.disabled = false;

            currentLocFee = lgaData[lga].baseFee;
            recalculateTotal();
            lgaError.style.display = 'none';
        });

        areaSelect.addEventListener('change', (e) => {
            const lga = lgaSelect.value;
            const area = e.target.value;
            const areaOffset = lgaData[lga].areas[area];
            currentLocFee = lgaData[lga].baseFee + areaOffset;
            recalculateTotal();
            areaError.style.display = 'none';
        });
    }

    function recalculateTotal() {
        if (deliveryOption.value === 'delivery') {
            modalDeliveryFee.innerText = "₦" + currentLocFee.toLocaleString();
            modalTotalPrice.innerText = "₦" + (currentBasePriceNum + currentLocFee).toLocaleString();
        } else {
            modalDeliveryFee.innerText = "₦0";
            modalTotalPrice.innerText = "₦" + currentBasePriceNum.toLocaleString();
        }
    }

    deliveryOption.addEventListener('change', (e) => {
        if (e.target.value === 'delivery') {
            addressGroup.style.display = 'block';
        } else {
            addressGroup.style.display = 'none';
            addressError.style.display = 'none';
            lgaError.style.display = 'none';
            areaError.style.display = 'none';
        }
        recalculateTotal();
    });

    productsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('pay-btn')) {
            currentCheckoutItem = e.target.getAttribute('data-name');
            currentCheckoutPrice = e.target.getAttribute('data-price');
            currentBasePriceNum = parseFloat(currentCheckoutPrice.replace(/[^0-9.]/g, ''));
            currentLocFee = 0;

            document.getElementById("modal-item-name").innerText = currentCheckoutItem;
            document.getElementById("modal-item-price").innerText = currentCheckoutPrice;

            emailInput.value = "";
            emailError.style.display = "none";
            addressInput.value = "";
            addressError.style.display = "none";
            phoneInput.value = "";
            phoneError.style.display = "none";
            lgaSelect.value = "";
            lgaError.style.display = "none";
            areaSelect.innerHTML = '<option value="" disabled selected>Select Area...</option>';
            areaSelect.disabled = true;
            areaError.style.display = "none";
            currentLocFee = 0;

            // Reset dropdown to pickup defaults
            deliveryOption.value = 'pickup';
            addressGroup.style.display = 'none';
            modalDeliveryFee.innerText = "₦0";
            modalTotalPrice.innerText = "₦" + currentBasePriceNum.toLocaleString();

            modalOverlay.classList.add("active");
        }
    });

    closeModalBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
    });

    confirmBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const option = deliveryOption.value;
        const address = addressInput.value.trim();
        const phone = phoneInput.value.trim();

        let hasError = false;

        if (!email || !email.includes('@')) {
            emailError.style.display = "block";
            hasError = true;
        } else {
            emailError.style.display = "none";
        }

        if (option === 'delivery' && (!phone || phone.length < 5)) {
            phoneError.style.display = "block";
            hasError = true;
        } else {
            phoneError.style.display = "none";
        }

        if (option === 'delivery' && !address) {
            addressError.style.display = "block";
            hasError = true;
        } else {
            addressError.style.display = "none";
        }

        if (option === 'delivery' && !lgaSelect.value) {
            lgaError.style.display = 'block';
            hasError = true;
        } else {
            lgaError.style.display = 'none';
        }

        if (option === 'delivery' && !areaSelect.value) {
            areaError.style.display = 'block';
            hasError = true;
        } else {
            areaError.style.display = 'none';
        }

        if (hasError) return;

        const finalPriceNum = option === 'delivery' ? (currentBasePriceNum + currentLocFee) : currentBasePriceNum;

        // Hide modal and launch paystack
        modalOverlay.classList.remove("active");
        payWithPaystack(currentCheckoutItem, finalPriceNum, email, option, address, phone);
    });

    function payWithPaystack(itemName, finalPriceNum, email, option, address, phone) {
        if (isNaN(finalPriceNum)) {
            alert("Invalid final price. Please try again.");
            return;
        }

        if (typeof PaystackPop === "undefined") {
            alert("Payment system is currently unavailable. Please check your internet connection.");
            return;
        }

        // Paystack takes amounts in kobo (NGN × 100)
        const amountInKobo = Math.floor(finalPriceNum * 100);
        const ref = '' + Math.floor((Math.random() * 1000000000) + 1);

        let handler = PaystackPop.setup({
            key: 'pk_test_70f1b7d86633fdca1d6c32ae9f5b05236490acac', // REPLACE WITH YOUR LIVE KEY
            email: email,
            amount: amountInKobo,
            currency: 'NGN',
            ref: ref,
            metadata: {
                custom_fields: [
                    { display_name: "Item Purchased", variable_name: "item_purchased", value: itemName },
                    { display_name: "Delivery Option", variable_name: "delivery_option", value: option },
                    { display_name: "Delivery Address", variable_name: "delivery_address", value: address || "N/A - Store Pickup" },
                    { display_name: "Local Govt", variable_name: "lga", value: lgaSelect.value || "N/A" },
                    { display_name: "Area", variable_name: "area", value: areaSelect.value || "N/A" },
                    { display_name: "Phone Number", variable_name: "phone_number", value: phone || "N/A" }
                ]
            },
            callback: function (response) {
                const orderData = {
                    ref_id: response.reference,
                    date: new Date().toISOString(),
                    item: itemName,
                    email: email,
                    phone: phone || 'N/A',
                    delivery: option,
                    address: address || 'Store Pickup',
                    lga: lgaSelect.value || 'N/A',
                    area: areaSelect.value || 'N/A',
                    amount: finalPriceNum,
                    status: 'paid'
                };

                // Save to Supabase (primary storage)
                if (typeof supabaseClient !== 'undefined') {
                    supabaseClient.from('orders').insert([orderData])
                        .then(({ error }) => {
                            if (error) console.error('Supabase save error:', error);
                        });
                }

                // Also save to localStorage as offline fallback
                const orders = JSON.parse(localStorage.getItem('bm_orders') || '[]');
                orders.push(orderData);
                localStorage.setItem('bm_orders', JSON.stringify(orders));

                // Show success modal
                const successModal = document.getElementById("success-modal");
                document.getElementById("success-ref").innerText = response.reference;

                if (option === 'delivery') {
                    document.getElementById("success-pickup-msg").style.display = "none";
                    document.getElementById("success-delivery-msg").style.display = "block";
                    document.getElementById("success-address").innerText = address;
                } else {
                    document.getElementById("success-pickup-msg").style.display = "block";
                    document.getElementById("success-delivery-msg").style.display = "none";
                }

                successModal.classList.add("active");

                document.getElementById("finish-btn").addEventListener("click", () => {
                    successModal.classList.remove("active");
                }, { once: true });

                document.getElementById("close-success-modal").addEventListener("click", () => {
                    successModal.classList.remove("active");
                }, { once: true });
            },
            onClose: function () {
                console.log('Transaction window was closed by the user.');
            }
        });

        handler.openIframe();
    }

    // Custom Cake Contact Logic
    const contactModal = document.getElementById("contact-modal");
    document.getElementById("custom-cake-btn").addEventListener("click", () => {
        contactModal.classList.add("active");
    });

    document.getElementById("close-contact-modal").addEventListener("click", () => {
        contactModal.classList.remove("active");
    });

    document.getElementById("close-contact-btn").addEventListener("click", () => {
        contactModal.classList.remove("active");
    });
});
