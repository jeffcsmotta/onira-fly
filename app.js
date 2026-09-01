/**
 * ONIRA.FLY — High-Conversion Digital Channels for Gastronomy
 * Interactive Application Core (Vanilla JS - Real Screenshots & Light Theme)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 2. Initialize Case Studies & Screenshot Viewport
    initCaseStudySimulator();

    // 3. Initialize Interactive ROI Margin Calculator
    initMarginCalculator();
});

/* ==========================================================================
   1. 6 REAL CASE STUDIES DATASET (WITH REAL HD SCREENSHOTS)
   ========================================================================== */

const REAL_CASES = {
    montecristo: {
        id: 'montecristo',
        brandName: 'Monte Cristo — Bistrô & Bebidas Nobres',
        brandDesc: 'Carta selecionada de cafés especiais, bebidas nobres e pratos executivos',
        emoji: '☕',
        tag: 'CAFETERIA & BISTRÔ PREMIUM',
        domain: 'bistrocafeimperial.com.br',
        screenshotMobile: 'montecristo_mobile.jpg',
        screenshotDesktop: 'montecristo_desktop.jpg',
        context: 'Operação conceituada de cafeteria bistrô com grande volume de bebidas nobres e combos executivos. Eliminou o confisco de 23% em taxas sobre clientes recorrentes ao migrar encomendas para o canal próprio.',
        metrics: {
            m1: '+290 pedidos',
            m1Sub: 'direto no domínio oficial',
            m2: 'R$ 4.820,00',
            m2Sub: 'sem comissões de 23%',
            m3: '32 segundos',
            m3Sub: 'da escolha ao WhatsApp',
            m4: 'R$ 85,00',
            m4Sub: 'ticket médio com combos'
        },
        solutions: [
            'Fotos nítidas de produtos com carregamento instantâneo WebP.',
            'Carrinho ergonômico com botão "Continuar Escolhendo".',
            'Comanda estruturada pronta para impressora térmica do balcão.'
        ]
    },

    fafa: {
        id: 'fafa',
        brandName: 'Fafá — Doceria Gourmet & Confeitaria',
        brandDesc: 'Tortas artesanais finas, doces gourmet e presentes para celebrações',
        emoji: '🍰',
        tag: 'DOCERIA & CONFEITARIA GOURMET',
        domain: 'atelierdoceriafina.com.br',
        screenshotMobile: 'fafa_mobile.jpg',
        screenshotDesktop: 'fafa_desktop.jpg',
        context: 'Confeitaria fina que sofria com cancelamentos em apps genéricos por fotos cortadas e falta de agendamento de presentes. O canal próprio elevou o ticket médio em +38% com fotos de alta qualidade.',
        metrics: {
            m1: '+38% Ticket',
            m1Sub: 'elevação média por pedido',
            m2: 'R$ 5.340,00',
            m2Sub: 'lucro extra preservado / mês',
            m3: '45 segundos',
            m3Sub: 'com cartão de presente',
            m4: 'Zero Queixas',
            m4Sub: 'clareza total nas fotos'
        },
        solutions: [
            'Cardápio visual com cartões de mensagem para presentes e laços especiais.',
            'Seletor integrado de data e horário para retirada ou entrega agendada.',
            'Visualização fluida de tortas inteiras e fatias individuais.'
        ]
    },

    claem: {
        id: 'claem',
        brandName: 'Claem — Pastelaria Tradicional',
        brandDesc: 'Pastéis artesanais crocantes, sucos naturais e lanches de alto giro',
        emoji: '🥟',
        tag: 'PASTELARIA DE ALTO GIRO',
        domain: 'pastelariatradicao.com.br',
        screenshotMobile: 'claem_mobile.jpg',
        screenshotDesktop: 'claem_desktop.jpg',
        context: 'Ponto tradicional com grande fluxo de balcão e delivery. Migrou a base de clientes do almoço e lanche da tarde para o canal próprio, garantindo velocidade de 0.4s e zero comissões.',
        metrics: {
            m1: '+410 pedidos',
            m1Sub: 'migrados do iFood no mês',
            m2: 'R$ 4.650,00',
            m2Sub: 'economia direta no caixa',
            m3: '26 segundos',
            m3Sub: 'tempo recorde de pedido',
            m4: '#1 no Google',
            m4Sub: 'SEO Local Otimizado'
        },
        solutions: [
            'Seletor de combos rápidos ("Pastel Grande + Suco Natural") em 1 toque.',
            'Gaveta de carrinho em contraste com botão "Continuar Escolhendo".',
            'Comanda limpa direta para a fritadeira e balcão de despacho.'
        ]
    },

    botequim: {
        id: 'botequim',
        brandName: 'Botequim — Petiscos & Chopes',
        brandDesc: 'Estufa de petiscos tradicionais, burgers artesanais e chopp gelado',
        emoji: '🍺',
        tag: 'BOTEQUIM & BAR NOTURNO',
        domain: 'botequimdepetiscos.com.br',
        screenshotMobile: 'botequim_mobile.jpg',
        screenshotDesktop: 'botequim_desktop.jpg',
        context: 'Bar noturno com picos concentrados de quinta a domingo. Resolveu o gargalo de atendimento com despacho automático de chopps e porções direto no WhatsApp da copa.',
        metrics: {
            m1: '-65% Abandono',
            m1Sub: 'finalizações sem travamento',
            m2: 'R$ 6.120,00',
            m2Sub: 'margem preservada / mês',
            m3: '24 segundos',
            m3Sub: 'da abertura ao WhatsApp',
            m4: '+40% Bebidas',
            m4Sub: 'vendas adicionais de chopp'
        },
        solutions: [
            'Seletor instantâneo de adicionais (bacon crocante, queijo, molho da casa).',
            'Cross-sell automático de chopes artesanais e bebidas antes do fechamento.',
            'Visual limpo e de alto contraste perfeito para a noite.'
        ]
    },

    panazzolo: {
        id: 'panazzolo',
        brandName: 'Panazzolo — Pastéis & Combos',
        brandDesc: 'Pastéis gigantes artesanais, recheios especiais e combos família',
        emoji: '🥟',
        tag: 'PASTÉIS GOURMET & COMBOS',
        domain: 'pastelariapanazzolo.com.br',
        screenshotMobile: 'panazzolo_mobile.jpg',
        screenshotDesktop: 'panazzolo_desktop.jpg',
        context: 'Casa especializada em pastéis gigantes e rodízio. Criou canal próprio com montagem de combos com múltiplos sabores sem cobrança abusiva de taxas por recheio extra.',
        metrics: {
            m1: '+360 pedidos',
            m1Sub: 'pedidos mensais no canal',
            m2: 'R$ 4.410,00',
            m2Sub: 'economia líquida no mês',
            m3: '30 segundos',
            m3Sub: 'montagem com recheios duplos',
            m4: 'Nota 4.9',
            m4Sub: 'satisfação dos clientes'
        },
        solutions: [
            'Seletor simples para recheios duplos e adicionais especiais.',
            'Combo Família configurável com cálculo instantâneo.',
            'Botão direto para WhatsApp com endereço formatado de entrega.'
        ]
    },

    baitakao: {
        id: 'baitakao',
        brandName: 'Baita-Kão — Xis & Lanches Tradicionais',
        brandDesc: 'O autêntico Xis Gaúcho prensado na chapa, baurus e pratos tradicionais',
        emoji: '🍔',
        tag: 'XIS GAÚCHO & LANCHES TRADICIONAIS',
        domain: 'baitakao.com.br',
        screenshotMobile: 'baitakao_mobile.jpg',
        screenshotDesktop: 'baitakao_desktop.jpg',
        context: 'Ícone tradicional da gastronomia regional com alto fluxo diário de xis prensados e baurus. Reduziu custos massivos de comissão concentrando os pedidos regulares no link próprio.',
        metrics: {
            m1: '+580 pedidos',
            m1Sub: 'direto no canal da marca',
            m2: 'R$ 8.250,00',
            m2Sub: 'economia recorde mensal',
            m3: '35 segundos',
            m3Sub: 'com observações de maionese',
            m4: 'Zero Fila',
            m4Sub: 'comanda impressa na chapa'
        },
        solutions: [
            'Customização precisa de observações ("sem milho", "maionese caseira extra").',
            'Cardápio visual de xis tradicionais (Coração, Alcatra, Salada, Bacon).',
            'Integração direta com o WhatsApp e impressora de comanda da chapa.'
        ]
    }
};

// State
let currentCase = 'montecristo';

function initCaseStudySimulator() {
    // Tab switching for 6 cases
    const tabs = document.querySelectorAll('.case-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const caseKey = tab.getAttribute('data-case');
            if (caseKey && REAL_CASES[caseKey]) {
                tabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');

                currentCase = caseKey;
                renderScreenshotsView();
                renderCaseIntel();
            }
        });
    });

    // Viewport Mode buttons (Mobile / Desktop)
    const btnMobile = document.getElementById('btn-mode-mobile');
    const btnDesktop = document.getElementById('btn-mode-desktop');
    const phoneContainer = document.getElementById('phone-container');
    const desktopContainer = document.getElementById('desktop-container');

    if (btnMobile && btnDesktop && phoneContainer && desktopContainer) {
        btnMobile.addEventListener('click', () => {
            btnMobile.classList.add('active');
            btnDesktop.classList.remove('active');
            phoneContainer.style.display = 'flex';
            desktopContainer.style.display = 'none';
        });

        btnDesktop.addEventListener('click', () => {
            btnDesktop.classList.add('active');
            btnMobile.classList.remove('active');
            phoneContainer.style.display = 'none';
            desktopContainer.style.display = 'block';
        });
    }

    // Initial render
    renderScreenshotsView();
    renderCaseIntel();
}

function renderScreenshotsView() {
    const data = REAL_CASES[currentCase];
    if (!data) return;

    const imgMobile = document.getElementById('img-case-mobile');
    const imgDesktop = document.getElementById('img-case-desktop');
    const heroDynamicImg = document.getElementById('hero-dynamic-img');
    const elDeskUrl = document.getElementById('desk-address-url');

    if (imgMobile) {
        imgMobile.style.opacity = '0.4';
        imgMobile.src = `assets/screenshots/${data.screenshotMobile}`;
        setTimeout(() => { imgMobile.style.opacity = '1'; }, 150);
    }

    if (imgDesktop) {
        imgDesktop.style.opacity = '0.4';
        imgDesktop.src = `assets/screenshots/${data.screenshotDesktop}`;
        setTimeout(() => { imgDesktop.style.opacity = '1'; }, 150);
    }

    if (heroDynamicImg) {
        heroDynamicImg.src = `assets/screenshots/${data.screenshotMobile}`;
    }

    if (elDeskUrl) {
        elDeskUrl.textContent = `https://${data.domain}`;
    }
}

function renderCaseIntel() {
    const data = REAL_CASES[currentCase];
    if (!data) return;

    // Badges & Headers
    const elTag = document.getElementById('intel-tag');
    const elDomain = document.getElementById('intel-domain');
    const elTitle = document.getElementById('intel-title');
    const elContext = document.getElementById('intel-context');

    if (elTag) elTag.textContent = data.tag;
    if (elDomain) elDomain.textContent = data.domain;
    if (elTitle) elTitle.textContent = data.brandName;
    if (elContext) elContext.textContent = data.context;

    // Metrics
    const elM1 = document.getElementById('intel-m1');
    const elM2 = document.getElementById('intel-m2');
    const elM3 = document.getElementById('intel-m3');
    const elM4 = document.getElementById('intel-m4');

    if (elM1) elM1.textContent = data.metrics.m1;
    if (elM2) elM2.textContent = data.metrics.m2;
    if (elM3) elM3.textContent = data.metrics.m3;
    if (elM4) elM4.textContent = data.metrics.m4;

    // Solutions
    const elSolutions = document.getElementById('intel-solutions');
    if (elSolutions) {
        elSolutions.innerHTML = data.solutions.map(sol => `
            <li>
                <i data-lucide="check" class="check-icon"></i>
                <span>${sol}</span>
            </li>
        `).join('');
    }

    // Refresh icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

/* ==========================================================================
   2. INTERACTIVE ROI MARGIN CALCULATOR
   ========================================================================== */

function initMarginCalculator() {
    const rangeTicket = document.getElementById('range-ticket');
    const rangeOrders = document.getElementById('range-orders');
    const rangeRate = document.getElementById('range-rate');

    if (!rangeTicket || !rangeOrders || !rangeRate) return;

    const displayTicket = document.getElementById('val-ticket-display');
    const displayOrders = document.getElementById('val-orders-display');
    const displayRate = document.getElementById('val-rate-display');

    const resAnnual = document.getElementById('calc-res-annual');
    const resMonthly = document.getElementById('calc-res-monthly');
    const resGrossMonthly = document.getElementById('calc-gross-monthly');
    const resFeeMonthly = document.getElementById('calc-fee-monthly');
    const resPaybackText = document.getElementById('calc-payback-text');
    const ctaWhatsapp = document.getElementById('calc-cta-whatsapp');

    function calculate() {
        const ticket = parseFloat(rangeTicket.value) || 65;
        const orders = parseInt(rangeOrders.value, 10) || 350;
        const ratePercent = parseFloat(rangeRate.value) || 23;

        // Displays
        if (displayTicket) displayTicket.textContent = formatCurrency(ticket);
        if (displayOrders) displayOrders.textContent = `${orders} pedidos`;
        if (displayRate) displayRate.textContent = `${ratePercent}%`;

        // Financial Math
        const grossMonthly = ticket * orders;
        const feeMonthly = grossMonthly * (ratePercent / 100);
        const feeAnnual = feeMonthly * 12;

        const avgSetupCost = 2800;
        const daysToPayback = Math.max(7, Math.round((avgSetupCost / feeMonthly) * 30));

        // Render Outputs
        if (resAnnual) resAnnual.textContent = formatCurrency(feeAnnual);
        if (resMonthly) resMonthly.textContent = `+ ${formatCurrency(feeMonthly)} a mais no seu caixa todo mês`;
        if (resGrossMonthly) resGrossMonthly.textContent = `${formatCurrency(grossMonthly)} / mês`;
        if (resFeeMonthly) resFeeMonthly.textContent = `- ${formatCurrency(feeMonthly)} / mês`;

        if (resPaybackText) {
            resPaybackText.innerHTML = `O investimento do seu Onira.fly se paga em cerca de <strong>${daysToPayback} dias</strong> apenas com a economia de taxas.`;
        }

        // Update WhatsApp CTA dynamic payload
        if (ctaWhatsapp) {
            const rawMsg = `Olá! Fiz uma simulação na calculadora do Onira.fly com ${orders} pedidos/mês (Ticket Médio de ${formatCurrency(ticket)}) e gostaria de resgatar os ${formatCurrency(feeMonthly)}/mês que hoje pago de comissão.`;
            ctaWhatsapp.href = `https://wa.me/5554991039867?text=${encodeURIComponent(rawMsg)}`;
        }
    }

    rangeTicket.addEventListener('input', calculate);
    rangeOrders.addEventListener('input', calculate);
    rangeRate.addEventListener('input', calculate);

    calculate();
}

function formatCurrency(val) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(val);
}
