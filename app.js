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
        screenshotMobile: "assets/screenshots/montecristo_mobile.jpg"
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
        screenshotMobile: "assets/screenshots/baitakao_mobile.jpg"
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
        screenshotMobile: "assets/screenshots/panazzolo_mobile.jpg"
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
        screenshotMobile: "assets/screenshots/fafa_mobile.jpg"
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
        screenshotMobile: "assets/screenshots/claem_mobile.jpg"
    }
};

let currentCaseKey = 'montecristo';

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    initHeroNicheSwitcher();
    initCaseTabs();
    initRoiSimulator();
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
 * 3. Simulador de Impacto Financeiro (Faturamento Total Delivery × % Migrado)
 */
function initRoiSimulator() {
    const revenueRange = document.getElementById('sim-revenue-range');
    const migrationRange = document.getElementById('sim-migration-range');

    const revenueDisplay = document.getElementById('sim-revenue-display');
    const migrationDisplay = document.getElementById('sim-migration-display');

    const monthlyCalcEl = document.getElementById('result-monthly-calc');
    const annualCalcEl = document.getElementById('result-annual-calc');

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
   HERO CASE SWITCHER — INTERFACE REAL DESENHADA & ANONIMIZADA
   ========================================================================== */

function initHeroNicheSwitcher() {
    const pills = document.querySelectorAll('.hero-niche-pill');
    const urlEl = document.getElementById('hero-browser-url');
    const imgEl = document.getElementById('hero-phone-case-img');
    const viewportEl = document.getElementById('hero-phone-scroll-viewport');

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const nicheKey = pill.getAttribute('data-niche');
            const data = SHOWCASE_CASES[nicheKey];
            if (!data) return;

            pills.forEach(p => {
                p.classList.remove('active');
                p.setAttribute('aria-selected', 'false');
            });
            pill.classList.add('active');
            pill.setAttribute('aria-selected', 'true');

            if (urlEl) urlEl.textContent = data.domain;
            if (imgEl) {
                imgEl.src = data.screenshotMobile;
                imgEl.alt = `Canal Próprio - ${data.title}`;
            }
            if (viewportEl) {
                viewportEl.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}
