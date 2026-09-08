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
        desc: "Operação conceituada de cafeteria bistrô com grande volume de bebidas nobres e encomendas. Canalizou a recompra dos clientes habituais para o canal próprio oficial, retendo a margem líquida com pedidos mastigados no WhatsApp.",
        orders: "+290",
        savings: "R$ 4.820",
        speed: "32s",
        ticket: "R$ 85,00",
        calcOrders: "+290 pedidos",
        calcTicket: "R$ 85,00",
        calcRevenue: "R$ 24.650",
        calcSavings: "R$ 4.820",
        calcRationale: "<strong>Por que 32s de atendimento?</strong> O cliente monta o combo de bistrô sozinho no cardápio online e despacha para o WhatsApp em 32 segundos. Sua equipe não perde 10 minutos digitando opções e a margem de 23% fica limpa na sua conta.",
        screenshotMobile: "assets/screenshots/montecristo_mobile.jpg"
    },
    baitakao: {
        title: "Hamburgueria & Lanches da Serra",
        niche: "HAMBURGUERIA ARTESANAL",
        domain: "hamburgueriaserra.com.br",
        desc: "Hamburgueria com alta frequência de pedidos noturnos e finais de semana. Converteu a base de recompra para canal direto, reduzindo atrito e gerando pedidos automáticos no WhatsApp.",
        orders: "+450",
        savings: "R$ 6.380",
        speed: "28s",
        ticket: "R$ 68,00",
        calcOrders: "+450 pedidos",
        calcTicket: "R$ 68,00",
        calcRevenue: "R$ 30.600",
        calcSavings: "R$ 6.380",
        calcRationale: "<strong>Por que 28s de atendimento?</strong> Em noites de pico, 450 pedidos entram com comanda mastigada em 28s cada. 450 pedidos × R$ 68 = R$ 30.600 direto no caixa, economizando mais de R$ 6.300 em taxas de aplicativo.",
        screenshotMobile: "assets/screenshots/baitakao_mobile.jpg"
    },
    panazzolo: {
        title: "Casa do Pastel & Forneria",
        niche: "FORNERIA & PIZZARIA",
        domain: "casadopastelforneria.com.br",
        desc: "Forneria e pastelaria tradicional que eliminou ruídos em pedidos customizados por WhatsApp, imprimindo comandas prontas diretamente na cozinha com margem integral.",
        orders: "+380",
        savings: "R$ 5.120",
        speed: "35s",
        ticket: "R$ 72,00",
        calcOrders: "+380 pedidos",
        calcTicket: "R$ 72,00",
        calcRevenue: "R$ 27.360",
        calcSavings: "R$ 5.120",
        calcRationale: "<strong>Por que 35s de atendimento?</strong> As opções de borda recheada e sabores são marcadas no cardápio digital sem erro de anotação. 380 pedidos × R$ 72 = R$ 27.360 transacionados com R$ 5.120 de comissão preservada.",
        screenshotMobile: "assets/screenshots/panazzolo_mobile.jpg"
    },
    fafa: {
        title: "Ateliê de Doces & Contemporâneo",
        niche: "CULINÁRIA JAPONESA & CONTEMPORÂNEA",
        domain: "ateliedocescontemporaneo.com.br",
        desc: "Culinária japonesa e ateliê contemporâneo com alto ticket em datas comemorativas e encomendas semanais, preservando a margem integral em pratos nobres.",
        orders: "+240",
        savings: "R$ 4.250",
        speed: "40s",
        ticket: "R$ 94,00",
        calcOrders: "+240 pedidos",
        calcTicket: "R$ 94,00",
        calcRevenue: "R$ 22.560",
        calcSavings: "R$ 4.250",
        calcRationale: "<strong>Por que 40s de atendimento?</strong> Pratos nobres de sushi e sobremesas finas. Com 240 pedidos de ticket alto (R$ 94), a casa resgata R$ 4.250 que antes eram consumidos pelas taxas de aplicativo.",
        screenshotMobile: "assets/screenshots/fafa_mobile.jpg"
    },
    claem: {
        title: "Pastelaria & Pâtisserie Artesanal",
        niche: "BRUNCH & PÂTISSERIE",
        domain: "patisseriebrunchartesanal.com.br",
        desc: "Operação dinâmica de brunch e pâtisserie artesanal que combina alta margem e pedidos rápidos no WhatsApp sem fricção de download ou senhas esquecidas.",
        orders: "+310",
        savings: "R$ 4.960",
        speed: "25s",
        ticket: "R$ 58,00",
        calcOrders: "+310 pedidos",
        calcTicket: "R$ 58,00",
        calcRevenue: "R$ 17.980",
        calcSavings: "R$ 4.960",
        calcRationale: "<strong>Por que 25s de atendimento?</strong> Fechamento instantâneo para doces e salgados rápidos. 310 pedidos habituais × R$ 58 = R$ 17.980 direto no canal próprio, devolvendo quase R$ 5.000 limpos ao fluxo da pastelaria.",
        screenshotMobile: "assets/screenshots/claem_mobile.jpg"
    }
};

let currentCaseKey = 'montecristo';

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    initHeroTicker();
    initCaseTabs();
    initRoiSimulator();
    initMomentCards();
    initEnxovalShowcase();
    initSmoothScroll();
    if (window.lucide) {
        lucide.createIcons();
    }
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
    const speedEl = document.getElementById('metric-speed');

    const phoneUrlEl = document.getElementById('phone-case-url');
    const deskUrlEl = document.getElementById('desktop-case-url');

    if (badgeEl) badgeEl.textContent = data.niche;
    if (domainTagEl) domainTagEl.textContent = data.domain;
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (speedEl) speedEl.textContent = data.speed;

    if (phoneUrlEl) phoneUrlEl.textContent = data.domain;
    if (deskUrlEl) deskUrlEl.textContent = `https://${data.domain}`;

    // Atualiza Imagens dos Screenshots
    const imgMobile = document.getElementById('img-case-mobile');

    if (imgMobile) {
        imgMobile.src = data.screenshotMobile;
        const phoneViewport = document.getElementById('phone-case-scroll-viewport');
        if (phoneViewport) phoneViewport.scrollTop = 0;
    }

    if (window.lucide) lucide.createIcons();
}

/**
 * 2. Visualização exclusiva Mobile-First
 */
window.setShowcaseDevice = function (mode) {
    // Modo Mobile exclusivo conforme diretriz de produto
};

/**
 * 3. Simulador de Impacto Financeiro (Faturamento Total Delivery × % Migrado)
 */
function initRoiSimulator() {
    const revenueRange = document.getElementById('sim-revenue-range');
    const migrationRange = document.getElementById('sim-migration-range');

    const revenueDisplay = document.getElementById('sim-revenue-display');
    const migrationDisplay = document.getElementById('sim-migration-display');

    const monthlyCalcEl = document.getElementById('result-monthly-calc');
    const annualCalcEl = document.getElementById('result-annual-calc');
    const scenarioNameEl = document.getElementById('sim-scenario-name');
    const ctaBtn = document.getElementById('sim-cta-whatsapp-btn');
    const momentCards = document.querySelectorAll('.compact-moment-card');

    function calculate() {
        if (!revenueRange || !migrationRange) return;

        const revenue = parseFloat(revenueRange.value) || 50000;
        const migrationPercent = parseFloat(migrationRange.value) || 30;

        // Fórmula no Front-End:
        // Economia Mensal = Faturamento * (% Migrado) * 0.23
        // Economia Anual = Economia Mensal * 12
        const monthlySavings = revenue * (migrationPercent / 100) * 0.23;
        const annualSavings = monthlySavings * 12;

        if (revenueDisplay) {
            revenueDisplay.textContent = formatCurrency(revenue);
        }

        if (migrationDisplay) {
            migrationDisplay.textContent = `${migrationPercent}%`;
        }

        if (monthlyCalcEl) {
            monthlyCalcEl.textContent = formatCurrency(Math.round(monthlySavings));
        }

        if (annualCalcEl) {
            annualCalcEl.textContent = formatCurrency(Math.round(annualSavings));
        }

        // Atualiza o indicador de cenário sincronizado
        if (scenarioNameEl) {
            if (revenue <= 25000) {
                scenarioNameEl.innerHTML = 'Cenário: <strong>Pequena Operação (~R$ 20k)</strong>';
            } else if (revenue >= 75000) {
                scenarioNameEl.innerHTML = 'Cenário: <strong>Operação Consolidada (~R$ 100k)</strong>';
            } else {
                scenarioNameEl.innerHTML = 'Cenário: <strong>Operação Média (~R$ 50k)</strong>';
            }
        }

        // Sincroniza o destaque visual dos cards da esquerda quando a régua é movida
        if (momentCards.length === 3) {
            let targetIdx = 1;
            if (revenue <= 25000) targetIdx = 0;
            else if (revenue >= 75000) targetIdx = 2;
            else targetIdx = 1;

            momentCards.forEach((c, idx) => {
                const isActive = (idx === targetIdx);
                c.classList.toggle('compact-moment-active', isActive);
                c.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });
        }

        // Atualiza a mensagem personalizada do WhatsApp no botão do simulador
        if (ctaBtn) {
            const formattedRev = formatCurrency(revenue);
            const formattedSav = formatCurrency(Math.round(monthlySavings));
            const msg = encodeURIComponent(`Olá Jefferson! Simulei meu delivery no Onira.fly com faturamento de ${formattedRev} e ${migrationPercent}% no canal próprio. Quero garantir os ${formattedSav}/mês de margem limpa no meu caixa!`);
            ctaBtn.href = `https://wa.me/5554996862169?text=${msg}`;
        }
    }

    if (revenueRange) revenueRange.addEventListener('input', calculate);
    if (migrationRange) migrationRange.addEventListener('input', calculate);

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
   HERO TICKER AUTOMÁTICO — ALTERNA MODELOS SUAVEMENTE
   ========================================================================== */

function initHeroTicker() {
    const urlEl = document.getElementById('hero-browser-url');
    const badgeEl = document.getElementById('hero-ticker-badge');
    const imgEl = document.getElementById('hero-phone-case-img');
    const viewportEl = document.getElementById('hero-phone-scroll-viewport');

    const casesList = [
        { key: 'montecristo', domain: 'bistrobebidasnobres.com.br', badge: '☕ Bistrô • ⚡ 0.38s', img: 'assets/screenshots/montecristo_mobile.jpg' },
        { key: 'baitakao', domain: 'hamburgueriaserra.com.br', badge: '🍔 Burger • ⚡ 0.35s', img: 'assets/screenshots/baitakao_mobile.jpg' },
        { key: 'panazzolo', domain: 'casadopastelforneria.com.br', badge: '🍕 Forneria • ⚡ 0.39s', img: 'assets/screenshots/panazzolo_mobile.jpg' },
        { key: 'fafa', domain: 'ateliedocescontemporaneo.com.br', badge: '🍣 Sushi • ⚡ 0.36s', img: 'assets/screenshots/fafa_mobile.jpg' },
        { key: 'claem', domain: 'patisseriebrunchartesanal.com.br', badge: '🥐 Pâtisserie • ⚡ 0.37s', img: 'assets/screenshots/claem_mobile.jpg' }
    ];

    let currentIdx = 0;
    if (!imgEl) return;

    setInterval(() => {
        currentIdx = (currentIdx + 1) % casesList.length;
        const item = casesList[currentIdx];

        imgEl.style.opacity = '0.35';
        imgEl.style.transition = 'opacity 0.35s ease';

        setTimeout(() => {
            imgEl.src = item.img;
            imgEl.alt = `Canal Próprio - ${item.badge}`;
            if (urlEl) urlEl.textContent = item.domain;
            if (badgeEl) badgeEl.textContent = item.badge;
            if (viewportEl) viewportEl.scrollTop = 0;
            imgEl.style.opacity = '1';
        }, 350);
    }, 3200);
}

/* ==========================================================================
   CARDS DE ESTÁGIO DA OPERAÇÃO (SELEÇÃO INTERATIVA + SINCRONIA COM O SIMULADOR)
   ========================================================================== */
function initMomentCards() {
    const momentCards = document.querySelectorAll('.compact-moment-card');
    const revenueRange = document.getElementById('sim-revenue-range');
    const migrationRange = document.getElementById('sim-migration-range');

    if (!momentCards.length) return;

    momentCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.setAttribute('role', 'button');
        card.setAttribute('tabindex', '0');

        card.addEventListener('click', () => {
            momentCards.forEach(c => c.classList.remove('compact-moment-active'));
            card.classList.add('compact-moment-active');

            if (revenueRange && migrationRange) {
                if (index === 0) {
                    // Pequena Operação: ~20k, 25%
                    revenueRange.value = 20000;
                    migrationRange.value = 25;
                } else if (index === 1) {
                    // Operação Média: ~50k, 35%
                    revenueRange.value = 50000;
                    migrationRange.value = 35;
                } else if (index === 2) {
                    // Operação Consolidada: ~100k, 50%
                    revenueRange.value = 100000;
                    migrationRange.value = 50;
                }

                // Dispara o evento de input para atualizar o simulador visualmente
                revenueRange.dispatchEvent(new Event('input'));
                migrationRange.dispatchEvent(new Event('input'));
            }
        });

        // Suporte a teclado
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
}

/* ==========================================================================
   ENXOVAL VISUAL PRONTO (POST INSTAGRAM & CARROSSEL PORNFOOD 4K)
   ========================================================================== */
const ENXOVAL_DATA = {
    pastelaria: {
        avatar: '🥟',
        username: 'suapastelaria.oficial',
        site: 'suapastelaria.com.br',
        headline: '“Agora você pede direto com a gente!”',
        caption: ' Estamos no iFood e no nosso canal oficial direto! Arraste para o lado e garanta seu brinde especial pelo link da bio 👉',
        announcementImg: 'assets/enxoval/pastel_anuncio_real.jpg',
        pornfoodImg: 'assets/enxoval/pastel_morango_chocolate.jpg',
        giftBadge: 'PRESENTE NO CANAL PRÓPRIO',
        giftTitle: 'Pastel de Morango com Chocolate Belga',
        giftDesc: 'Massa crocante morena, morangos frescos selecionados e cascata generosa de chocolate belga derretendo.'
    },
    hamburgueria: {
        avatar: '🍔',
        username: 'seuburger.artesanal',
        site: 'seuburger.com.br',
        headline: '“Seu burger preferido com brinde no canal direto!”',
        caption: ' Estamos no iFood, Uber Eats e no canal oficial! Faça seu pedido direto pelo link da bio e ganhe Batatas Rústicas com Fondue de Cheddar 🍟🔥',
        announcementImg: 'assets/enxoval/burger_anuncio_real.jpg',
        pornfoodImg: 'assets/enxoval/burger_cheddar_bacon.jpg',
        giftBadge: 'PRESENTE EXCLUSIVO NO CANAL PRÓPRIO',
        giftTitle: 'Double Smash Burger com Cheddar & Bacon',
        giftDesc: 'Duplo smash com crosta crocante caramelizada, cheddar derretendo em profusão e tiras de bacon artesanal defumado.'
    },
    pizzaria: {
        avatar: '🍕',
        username: 'suapizzaria.forneria',
        site: 'suapizzaria.com.br',
        headline: '“Forno a lenha de verdade e presente no canal oficial!”',
        caption: ' A clássica pizza da serra agora com pedidos diretos sem taxas de app! Peça pelo nosso site e ganhe uma sobremesa artesanal da casa 🍕🍷',
        announcementImg: 'assets/enxoval/pizza_anuncio_real.jpg',
        pornfoodImg: 'assets/enxoval/pizza_cheese_pull.jpg',
        giftBadge: 'PRESENTE NO CANAL PRÓPRIO',
        giftTitle: 'Pizza Napolitana Fior di Latte no Forno a Lenha',
        giftDesc: 'Fermentação natural de 48h, molho de tomate San Marzano e queijo fior di latte puxando fios irresistíveis.'
    }
};

function initEnxovalShowcase() {
    let currentNiche = 'pastelaria';
    let currentSlide = 1;

    const tabs = document.querySelectorAll('.niche-tab');
    const avatarEl = document.getElementById('enxoval-avatar');
    const usernameEl = document.getElementById('enxoval-username');
    const captionUsernameEl = document.getElementById('enxoval-caption-username');
    const sitePillEl = document.getElementById('enxoval-site-pill');
    const headlineEl = document.getElementById('enxoval-headline');
    const captionTextEl = document.getElementById('enxoval-caption-text');

    const announcementBgImgEl = document.getElementById('enxoval-announcement-bg-img');
    const pornfoodImgEl = document.getElementById('enxoval-pornfood-img');
    const giftBadgeEl = document.getElementById('enxoval-gift-badge-text');
    const giftTitleEl = document.getElementById('enxoval-gift-title');
    const giftDescEl = document.getElementById('enxoval-gift-desc');

    const slide1El = document.getElementById('enxoval-slide-1');
    const slide2El = document.getElementById('enxoval-slide-2');
    const prevBtn = document.getElementById('enxoval-prev-btn');
    const nextBtn = document.getElementById('enxoval-next-btn');
    const counterEl = document.getElementById('enxoval-counter');
    const dots = document.querySelectorAll('.insta-dot');

    function renderNiche(nicheKey) {
        const data = ENXOVAL_DATA[nicheKey];
        if (!data) return;

        currentNiche = nicheKey;

        if (avatarEl) avatarEl.textContent = data.avatar;
        if (usernameEl) usernameEl.textContent = data.username;
        if (captionUsernameEl) captionUsernameEl.textContent = data.username;
        if (sitePillEl) sitePillEl.innerHTML = `<i data-lucide="star"></i> ${data.site}`;
        if (headlineEl) headlineEl.textContent = data.headline;
        if (captionTextEl) captionTextEl.textContent = data.caption;

        if (announcementBgImgEl && data.announcementImg) {
            announcementBgImgEl.src = data.announcementImg;
            announcementBgImgEl.alt = `${data.username} - Ambiente Gastronômico Real`;
        }

        if (pornfoodImgEl) {
            pornfoodImgEl.src = data.pornfoodImg;
            pornfoodImgEl.alt = `${data.giftTitle} - Fotografia Gastronômica 4K`;
        }
        if (giftBadgeEl) giftBadgeEl.textContent = data.giftBadge;
        if (giftTitleEl) giftTitleEl.textContent = data.giftTitle;
        if (giftDescEl) giftDescEl.textContent = data.giftDesc;

        if (window.lucide) lucide.createIcons();
    }

    function setSlide(slideNum) {
        currentSlide = slideNum;

        if (slideNum === 1) {
            if (slide1El) slide1El.classList.add('active');
            if (slide2El) slide2El.classList.remove('active');
            if (prevBtn) prevBtn.disabled = true;
            if (nextBtn) nextBtn.disabled = false;
            if (counterEl) counterEl.textContent = '1/2';
            dots.forEach((dot, idx) => dot.classList.toggle('active', idx === 0));
        } else {
            if (slide1El) slide1El.classList.remove('active');
            if (slide2El) slide2El.classList.add('active');
            if (prevBtn) prevBtn.disabled = false;
            if (nextBtn) nextBtn.disabled = true;
            if (counterEl) counterEl.textContent = '2/2';
            dots.forEach((dot, idx) => dot.classList.toggle('active', idx === 1));
        }
    }

    // Tabs de Nicho
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const niche = tab.getAttribute('data-niche');
            if (niche && ENXOVAL_DATA[niche]) {
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderNiche(niche);
            }
        });
    });

    // Navegação de slides
    if (prevBtn) {
        prevBtn.addEventListener('click', () => setSlide(1));
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => setSlide(2));
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideNum = parseInt(dot.getAttribute('data-slide'), 10) || 1;
            setSlide(slideNum);
        });
    });
}
