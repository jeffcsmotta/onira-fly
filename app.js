/**
 * ONIRA.FLY — High-Conversion Digital Channels for Gastronomy
 * Interactive Engine: Case Switcher, Device Toggle & Margin ROI Simulator v3.0
 */

// Casos Reais Anonymizados com métricas e capturas HD
const SHOWCASE_CASES = {
    montecristo: {
        title: "Bistrô & Bebidas Nobres",
        niche: "CAFETERIA & BISTRÔ PREMIUM",
        domain: "bistrobebidasnobres.com.br",
        desc: "Operação conceituada de cafeteria bistrô com grande volume de bebidas nobres e combos executivos. Eliminou o confisco de 23% em taxas sobre clientes recorrentes ao migrar encomendas para o canal próprio.",
        orders: "+290",
        savings: "R$ 4.820",
        speed: "32s",
        ticket: "R$ 85,00",
        screenshotMobile: "assets/screenshots/montecristo_mobile.jpg",
        screenshotDesktop: "assets/screenshots/montecristo_desktop.jpg"
    },
    baitakao: {
        title: "Hamburgueria & Lanches da Serra",
        niche: "HAMBURGUERIA ARTESANAL",
        domain: "hamburgueriaserra.com.br",
        desc: "Hamburgueria com alta frequência de pedidos noturnos e finais de semana. Converteu 48% dos clientes de aplicativos para canal direto com pedidos automáticos no WhatsApp.",
        orders: "+450",
        savings: "R$ 6.380",
        speed: "28s",
        ticket: "R$ 68,00",
        screenshotMobile: "assets/screenshots/baitakao_mobile.jpg",
        screenshotDesktop: "assets/screenshots/baitakao_desktop.jpg"
    },
    panazzolo: {
        title: "Casa do Pastel & Forneria",
        niche: "FORNERIA & PIZZARIA",
        domain: "casadopastelforneria.com.br",
        desc: "Forneria e pastelaria tradicional que eliminou ruídos e erros em pedidos customizados por WhatsApp, imprimindo comandas prontas diretamente na cozinha.",
        orders: "+380",
        savings: "R$ 5.120",
        speed: "35s",
        ticket: "R$ 72,00",
        screenshotMobile: "assets/screenshots/panazzolo_mobile.jpg",
        screenshotDesktop: "assets/screenshots/panazzolo_desktop.jpg"
    },
    fafa: {
        title: "Ateliê de Doces & Contemporâneo",
        niche: "CULINÁRIA JAPONESA & CONTEMPORÂNEA",
        domain: "ateliedocescontemporaneo.com.br",
        desc: "Confeitaria fina e doceria artesanal com alto ticket em datas comemorativas e encomendas semanais, protegendo a margem de produtos nobres.",
        orders: "+240",
        savings: "R$ 4.250",
        speed: "40s",
        ticket: "R$ 94,00",
        screenshotMobile: "assets/screenshots/fafa_mobile.jpg",
        screenshotDesktop: "assets/screenshots/fafa_desktop.jpg"
    },
    claem: {
        title: "Pastelaria & Pâtisserie Artesanal",
        niche: "BRUNCH & PÂTISSERIE",
        domain: "patisseriebrunchartesanal.com.br",
        desc: "Operação dinâmica de lanches rápidos e brunch matinal que utiliza combos de alta margem e checkout rápido no WhatsApp sem fricção de download.",
        orders: "+310",
        savings: "R$ 4.960",
        speed: "25s",
        ticket: "R$ 58,00",
        screenshotMobile: "assets/screenshots/claem_mobile.jpg",
        screenshotDesktop: "assets/screenshots/claem_desktop.jpg"
    }
};

let currentCaseKey = 'montecristo';

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    initHeroInteractiveApp();
    initCaseTabs();
    initRoiSimulator();
    initSmoothScroll();
});

/**
 * 1. Inicializa as abas de nicho do Showroom
 */
function initCaseTabs() {
    const tabButtons = document.querySelectorAll('.case-tab');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const caseKey = btn.getAttribute('data-case');
            if (caseKey && SHOWCASE_CASES[caseKey]) {
                tabButtons.forEach(b => {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                btn.classList.add('active');
                btn.setAttribute('aria-selected', 'true');
                renderCase(caseKey);
            }
        });
    });
}

/**
 * Renderiza o case selecionado nos mockups e cards
 */
function renderCase(caseKey) {
    const data = SHOWCASE_CASES[caseKey];
    if (!data) return;

    currentCaseKey = caseKey;

    // Atualiza Textos e Badges
    const badgeEl = document.getElementById('case-niche-badge');
    const domainTagEl = document.getElementById('case-domain-tag');
    const titleEl = document.getElementById('case-intel-title');
    const descEl = document.getElementById('case-intel-desc');

    const ordersEl = document.getElementById('metric-orders');
    const savingsEl = document.getElementById('metric-savings');
    const speedEl = document.getElementById('metric-speed');
    const ticketEl = document.getElementById('metric-ticket');

    const phoneUrlEl = document.getElementById('phone-case-url');
    const deskUrlEl = document.getElementById('desktop-case-url');

    if (badgeEl) badgeEl.textContent = data.niche;
    if (domainTagEl) domainTagEl.textContent = data.domain;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    if (ordersEl) ordersEl.textContent = data.orders;
    if (savingsEl) savingsEl.textContent = data.savings;
    if (speedEl) speedEl.textContent = data.speed;
    if (ticketEl) ticketEl.textContent = data.ticket;

    if (phoneUrlEl) phoneUrlEl.textContent = data.domain;
    if (deskUrlEl) deskUrlEl.textContent = `https://${data.domain}`;

    // Atualiza Imagens dos Screenshots
    const imgMobile = document.getElementById('img-case-mobile');
    const imgDesktop = document.getElementById('img-case-desktop');

    if (imgMobile) {
        imgMobile.src = data.screenshotMobile;
        const phoneViewport = document.getElementById('phone-case-scroll-viewport');
        if (phoneViewport) phoneViewport.scrollTop = 0;
    }
}

/**
 * 2. Visualização exclusiva Mobile-First
 */
window.setShowcaseDevice = function (mode) {
    // Modo Mobile exclusivo conforme diretriz de produto
};

/**
 * 3. Simulador de Impacto Financeiro (Volume de Pedidos × Ticket Médio)
 */
function initRoiSimulator() {
    const ordersRange = document.getElementById('sim-orders-range');
    const ticketRange = document.getElementById('sim-ticket-range');

    const ordersDisplay = document.getElementById('sim-orders-display');
    const ticketDisplay = document.getElementById('sim-ticket-display');

    const annualValueEl = document.getElementById('result-annual-value');
    const monthlyValueEl = document.getElementById('result-monthly-value');

    function calculate() {
        if (!ordersRange || !ticketRange) return;

        const orders = parseFloat(ordersRange.value) || 600;
        const ticket = parseFloat(ticketRange.value) || 75;

        // Faturamento Total Delivery
        const totalRevenue = orders * ticket;

        // Base de Recompra Habitual (estimativa padrão de 35% de pedidos recorrentes)
        const recurringRevenue = totalRevenue * 0.35;

        // Economia da alíquota padrão de 23% de comissão sobre a base fidelizada
        const monthlySavings = recurringRevenue * 0.23;
        const annualSavings = monthlySavings * 12;

        if (ordersDisplay) {
            ordersDisplay.textContent = `${orders.toLocaleString('pt-BR')} pedidos`;
        }

        if (ticketDisplay) {
            ticketDisplay.textContent = formatCurrency(ticket);
        }

        if (annualValueEl) {
            annualValueEl.textContent = formatNumber(Math.round(annualSavings));
        }

        if (monthlyValueEl) {
            monthlyValueEl.textContent = formatCurrency(monthlySavings) + '/mês';
        }
    }

    if (ordersRange) ordersRange.addEventListener('input', calculate);
    if (ticketRange) ticketRange.addEventListener('input', calculate);

    calculate();
}

function formatCurrency(val) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0
    }).format(val);
}

function formatNumber(val) {
    return new Intl.NumberFormat('pt-BR', {
        maximumFractionDigits: 0
    }).format(val);
}

/**
 * 4. Navegação Suave
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}


/* ==========================================================================
   MOCKUP NAVEGÁVEL HERO (OPÇÃO A) — MOTOR DO MICRO-APP
   ========================================================================== */

const HERO_NICHE_CATALOG = {
    montecristo: {
        storeName: "Bistrô & Bebidas Nobres",
        avatar: "☕",
        domain: "bistrobebidasnobres.com.br",
        categoryTag: "Bistrô",
        products: [
            {
                id: "m1",
                name: "Whisky Ballantines Finest (1L)",
                desc: "Original lacrado com dosador oficial da marca",
                price: 42.00,
                badge: "Mais Vendido",
                thumb: "assets/screenshots/montecristo_mobile.jpg"
            },
            {
                id: "m2",
                name: "Risoto de Funghi Secchi & Queijo Brie",
                desc: "Arroz arbóreo italiano finalizado com azeite trufado",
                price: 54.00,
                badge: "Chef Special",
                thumb: "assets/hero-bg.jpg"
            },
            {
                id: "m3",
                name: "Whisky Chivas Regal 12 Anos (1L)",
                desc: "Garrafa unitária de tabela oficial com dosador",
                price: 170.43,
                badge: "Alta Margem",
                thumb: "assets/screenshots/montecristo_mobile.jpg"
            }
        ]
    },
    baitakao: {
        storeName: "Hamburgueria da Serra",
        avatar: "🍔",
        domain: "hamburgueriaserra.com.br",
        categoryTag: "Hamburgueria",
        products: [
            {
                id: "b1",
                name: "Smash Duplo Cheddar & Bacon",
                desc: "Dois blends 100g, queijo cheddar inglês e bacon rústico",
                price: 36.00,
                badge: "Top 1 Vendas",
                thumb: "assets/screenshots/baitakao_mobile.jpg"
            },
            {
                id: "b2",
                name: "X-Salada Tradicional da Serra",
                desc: "Pão brioche tostado e maionese verde da casa",
                price: 28.00,
                badge: "Clássico",
                thumb: "assets/screenshots/baitakao_mobile.jpg"
            },
            {
                id: "b3",
                name: "Batata Rústica com Alecrim & Páprica",
                desc: "Crocante por fora, macia por dentro, serve 2 pessoas",
                price: 18.00,
                badge: "Acompanhamento",
                thumb: "assets/screenshots/baitakao_mobile.jpg"
            }
        ]
    },
    panazzolo: {
        storeName: "Forneria & Pizzas Artesanais",
        avatar: "🍕",
        domain: "forneriaepizzas.com.br",
        categoryTag: "Forneria",
        products: [
            {
                id: "p1",
                name: "Pizza Burrata & Pesto de Manjericão",
                desc: "Massa fermentação natural 48h, molho pelati e burrata",
                price: 58.00,
                badge: "Artesanal",
                thumb: "assets/screenshots/panazzolo_mobile.jpg"
            },
            {
                id: "p2",
                name: "Pizza 4 Queijos com Borda Vulcão",
                desc: "Mozzarella, gorgonzola doce, parmesão e catupiry legítimo",
                price: 64.00,
                badge: "Favorita",
                thumb: "assets/screenshots/panazzolo_mobile.jpg"
            },
            {
                id: "p3",
                name: "Vinho Tinto Reserva Cabernet (750ml)",
                desc: "Safra selecionada para harmonização da casa",
                price: 48.00,
                badge: "Bebida Nobre",
                thumb: "assets/hero-bg.jpg"
            }
        ]
    },
    fafa: {
        storeName: "Katsumi Sushi Contemporâneo",
        avatar: "🍣",
        domain: "katsumisushi.com.br",
        categoryTag: "Japonês",
        products: [
            {
                id: "s1",
                name: "Combo Salmão Premium (20 peças)",
                desc: "Sashimis maçaricados com azeite trufado, niguiris e uramakis",
                price: 68.00,
                badge: "Mais Pedido",
                thumb: "assets/screenshots/fafa_mobile.jpg"
            },
            {
                id: "s2",
                name: "Temaki Especial Filadélfia em Dobro",
                desc: "Alga nori ultra crocante, salmão fresco e cream cheese",
                price: 34.00,
                badge: "Destaque",
                thumb: "assets/screenshots/fafa_mobile.jpg"
            },
            {
                id: "s3",
                name: "Hot Roll Crocante com Sweet Chilli (8 un)",
                desc: "Empanado na farinha panko japonesa com raspas de limão",
                price: 26.00,
                badge: "Entrada",
                thumb: "assets/screenshots/fafa_mobile.jpg"
            }
        ]
    },
    claem: {
        storeName: "Ateliê de Doces & Brunch",
        avatar: "🥐",
        domain: "ateliedocesbrunch.com.br",
        categoryTag: "Pâtisserie",
        products: [
            {
                id: "d1",
                name: "Torta Alemã Clássica (Fatia Generosa)",
                desc: "Camadas crocantes de biscoito e creme de baunilha holandês",
                price: 19.00,
                badge: "Assinatura",
                thumb: "assets/screenshots/claem_mobile.jpg"
            },
            {
                id: "d2",
                name: "Box Degustação 8 Brigadeiros Gourmet",
                desc: "Pistache, cacau belga 70%, doce de leite e ninho com nutella",
                price: 32.00,
                badge: "Presente",
                thumb: "assets/screenshots/claem_mobile.jpg"
            },
            {
                id: "d3",
                name: "Croissant Folhado com Amêndoas",
                desc: "Massa folhada artesanal amanteigada com lâminas tostadas",
                price: 22.00,
                badge: "Brunch",
                thumb: "assets/screenshots/claem_mobile.jpg"
            }
        ]
    }
};

let heroCart = {};
let currentHeroNiche = 'montecristo';

function initHeroInteractiveApp() {
    renderHeroNiche(currentHeroNiche);

    // 1. Alternância de Nichos
    const tabs = document.querySelectorAll('.hero-niche-pill');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const niche = tab.getAttribute('data-niche');
            if (niche && HERO_NICHE_CATALOG[niche]) {
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                currentHeroNiche = niche;
                heroCart = {}; // Reinicia o carrinho para um teste limpo do novo nicho
                renderHeroNiche(niche);
                updateBottomCartBar();
                closeCartDrawer();
                showHeroScreen('catalog');
            }
        });
    });

    // 2. Abertura e Fechamento do Drawer
    const btnOpenDrawer = document.getElementById('btn-open-cart-drawer');
    const btnCloseDrawer = document.getElementById('btn-drawer-close');
    if (btnOpenDrawer) btnOpenDrawer.addEventListener('click', openCartDrawer);
    if (btnCloseDrawer) btnCloseDrawer.addEventListener('click', closeCartDrawer);

    // 3. Disparo da Visualização do WhatsApp
    const btnWhatsappTrigger = document.getElementById('btn-drawer-whatsapp-trigger');
    if (btnWhatsappTrigger) {
        btnWhatsappTrigger.addEventListener('click', () => {
            renderWhatsAppView();
            closeCartDrawer();
            showHeroScreen('whatsapp');
        });
    }

    // 4. Botão Voltar ao Cardápio a partir do WhatsApp
    const btnWaBack = document.getElementById('wa-btn-back');
    if (btnWaBack) {
        btnWaBack.addEventListener('click', () => {
            showHeroScreen('catalog');
        });
    }

    // 5. Botão Reiniciar Teste
    const btnWaReset = document.getElementById('btn-wa-reset');
    if (btnWaReset) {
        btnWaReset.addEventListener('click', () => {
            heroCart = {};
            renderHeroNiche(currentHeroNiche);
            updateBottomCartBar();
            showHeroScreen('catalog');
        });
    }

    if (window.lucide) lucide.createIcons();
}

function showHeroScreen(screenName) {
    const catalogView = document.getElementById('hero-view-catalog');
    const waView = document.getElementById('hero-view-whatsapp');
    const cartBar = document.getElementById('hero-bottom-cart-bar');

    if (screenName === 'catalog') {
        if (catalogView) catalogView.classList.add('active');
        if (waView) waView.classList.remove('active');
        updateBottomCartBar();
    } else if (screenName === 'whatsapp') {
        if (catalogView) catalogView.classList.remove('active');
        if (waView) waView.classList.add('active');
        if (cartBar) cartBar.classList.remove('visible');
    }
}

function renderHeroNiche(nicheKey) {
    const data = HERO_NICHE_CATALOG[nicheKey];
    if (!data) return;

    // Atualiza URL no navegador do celular
    const urlEl = document.getElementById('hero-browser-url');
    if (urlEl) urlEl.textContent = data.domain;

    // Atualiza Header do App
    const avatarEl = document.getElementById('hero-store-avatar');
    const titleEl = document.getElementById('hero-store-title');
    const badgeStoreEl = document.getElementById('drawer-store-badge');
    const waPicEl = document.getElementById('wa-contact-pic');
    const waTitleEl = document.getElementById('wa-contact-title');

    if (avatarEl) avatarEl.textContent = data.avatar;
    if (titleEl) titleEl.textContent = data.storeName;
    if (badgeStoreEl) badgeStoreEl.textContent = data.categoryTag;
    if (waPicEl) waPicEl.textContent = data.avatar;
    if (waTitleEl) waTitleEl.textContent = `Cozinha • ${data.storeName}`;

    // Renderiza lista de produtos
    const feedEl = document.getElementById('hero-products-list');
    if (feedEl) {
        feedEl.innerHTML = data.products.map(p => {
            const inCart = heroCart[p.id];
            const btnText = inCart ? `✓ Adicionado (${inCart.qty})` : `+ Adicionar`;
            const btnClass = inCart ? `btn-card-add added` : `btn-card-add`;
            return `
                <div class="app-product-card" data-product-id="${p.id}">
                    <div class="product-thumb-wrap">
                        <img src="${p.thumb}" alt="${p.name}" loading="lazy">
                    </div>
                    <div class="product-card-body">
                        <span class="product-card-badge">${p.badge}</span>
                        <h5 class="product-card-title">${p.name}</h5>
                        <p class="product-card-desc">${p.desc}</p>
                        <div class="product-card-action-row">
                            <span class="product-card-price">R$ ${p.price.toFixed(2).replace('.', ',')}</span>
                            <button type="button" class="${btnClass}" onclick="addHeroProduct('${p.id}')">
                                <span>${btnText}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

window.addHeroProduct = function(productId) {
    const data = HERO_NICHE_CATALOG[currentHeroNiche];
    if (!data) return;
    const prod = data.products.find(p => p.id === productId);
    if (!prod) return;

    if (heroCart[productId]) {
        heroCart[productId].qty += 1;
    } else {
        heroCart[productId] = {
            ...prod,
            qty: 1
        };
    }

    renderHeroNiche(currentHeroNiche);
    updateBottomCartBar();
    renderDrawerItems();
};

window.changeHeroQty = function(productId, delta) {
    if (!heroCart[productId]) return;
    heroCart[productId].qty += delta;
    if (heroCart[productId].qty <= 0) {
        delete heroCart[productId];
    }
    renderHeroNiche(currentHeroNiche);
    updateBottomCartBar();
    renderDrawerItems();
    if (Object.keys(heroCart).length === 0) {
        closeCartDrawer();
    }
};

function renderDrawerItems() {
    const scrollEl = document.getElementById('drawer-items-scroll');
    const subtotalEl = document.getElementById('drawer-subtotal-val');
    const totalEl = document.getElementById('drawer-total-val');

    const items = Object.values(heroCart);
    let subtotal = 0;

    if (items.length === 0) {
        if (scrollEl) scrollEl.innerHTML = `<p style="text-align: center; color: #9CA3AF; font-size: 0.75rem; padding: 20px 0;">Seu carrinho está vazio.</p>`;
        if (subtotalEl) subtotalEl.textContent = "R$ 0,00";
        if (totalEl) totalEl.textContent = "R$ 0,00";
        return;
    }

    if (scrollEl) {
        scrollEl.innerHTML = items.map(it => {
            const itemTotal = it.price * it.qty;
            subtotal += itemTotal;
            return `
                <div class="drawer-item-row">
                    <div class="drawer-item-details">
                        <h6 class="drawer-item-name">${it.name}</h6>
                        <span class="drawer-item-unit">R$ ${itemTotal.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div class="drawer-qty-stepper">
                        <button type="button" class="btn-stepper" onclick="changeHeroQty('${it.id}', -1)">-</button>
                        <span class="stepper-val">${it.qty}</span>
                        <button type="button" class="btn-stepper" onclick="changeHeroQty('${it.id}', 1)">+</button>
                    </div>
                </div>
            `;
        }).join('');
    }

    const deliveryFee = 5.00;
    const total = subtotal + deliveryFee;

    if (subtotalEl) subtotalEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    if (totalEl) totalEl.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function updateBottomCartBar() {
    const bar = document.getElementById('hero-bottom-cart-bar');
    const countEl = document.getElementById('bottom-cart-count');
    const priceEl = document.getElementById('bottom-cart-price');

    const items = Object.values(heroCart);
    const count = items.reduce((acc, it) => acc + it.qty, 0);
    const subtotal = items.reduce((acc, it) => acc + (it.price * it.qty), 0);

    if (count > 0) {
        if (bar) bar.classList.add('visible');
        if (countEl) countEl.textContent = count;
        if (priceEl) priceEl.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    } else {
        if (bar) bar.classList.remove('visible');
    }
}

function openCartDrawer() {
    const drawer = document.getElementById('hero-cart-drawer');
    if (drawer) {
        renderDrawerItems();
        drawer.classList.add('open');
    }
}

function closeCartDrawer() {
    const drawer = document.getElementById('hero-cart-drawer');
    if (drawer) drawer.classList.remove('open');
}

function renderWhatsAppView() {
    const data = HERO_NICHE_CATALOG[currentHeroNiche];
    const bubbleEl = document.getElementById('wa-bubble-content');
    const timeEl = document.getElementById('wa-bubble-timestamp');

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    if (timeEl) timeEl.textContent = `${hours}:${mins}`;

    const orderNum = Math.floor(1020 + Math.random() * 800);
    const items = Object.values(heroCart);
    let subtotal = 0;

    const itemsListText = items.map(it => {
        const itemTotal = it.price * it.qty;
        subtotal += itemTotal;
        return `• ${it.qty}x ${it.name} (R$ ${itemTotal.toFixed(2).replace('.', ',')})`;
    }).join('\n');

    const deliveryFee = 5.00;
    const total = subtotal + deliveryFee;

    const ticketText = `*PEDIDO #${orderNum} • ONIRA.FLY*
───────────────────
👤 *Cliente:* Gabriel Castro
📞 *Tel:* (54) 99841-2090
📍 *Entrega:* Av. Independência, 1420
💳 *Pag:* Pix na Entrega
───────────────────
🛒 *ITENS:*
${itemsListText}
───────────────────
💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}
🛵 *Entrega:* R$ ${deliveryFee.toFixed(2).replace('.', ',')}
💵 *TOTAL:* R$ ${total.toFixed(2).replace('.', ',')}
───────────────────
⚡ *Tempo de pedido:* 24s
✨ *Taxa de app:* R$ 0 (100% no caixa)`;

    if (bubbleEl) bubbleEl.textContent = ticketText;
}
