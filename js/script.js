// Inicializa AOS
AOS.init({ once: true, offset: 50, duration: 800 });

// Banco de Dados de Serviços (SPA)
const servicesData = {
    'implante': {
        title: 'Implante Dentário',
        icon: 'fa-tooth',
        shortDesc: 'A solução definitiva e segura para substituir dentes ausentes.',
        longDesc: '<p>O implante dentário é um pino de titânio posicionado cirurgicamente no osso maxilar abaixo da gengiva para atuar como a raiz do dente. Após a integração óssea, montamos a prótese substituta sobre ele.</p><p>Utilizamos tecnologia de cirurgia guiada 3D, o que torna o procedimento minimamente invasivo, sem cortes com bisturi, garantindo um pós-operatório rápido e totalmente sem dor.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Mastigação firme e segura.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Preservação da estrutura óssea.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Estética idêntica ao dente natural.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Alta durabilidade (pode durar a vida toda).</span></li>'
        ],
        indication: 'Pacientes que perderam um, vários ou todos os dentes e desejam abandonar dentaduras ou pontes móveis.',
        duration: 'Cirurgia em 1 hora. Integração de 3 a 6 meses.',
        image: 'https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        imgAntes: 'https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', // Placeholder
        imgDepois: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80' // Placeholder
    },
    'facetas': {
        title: 'Facetas de Porcelana',
        icon: 'fa-face-smile-beam',
        shortDesc: 'O segredo para um sorriso simétrico, branco e com formato perfeito.',
        longDesc: '<p>As facetas de porcelana (ou lentes de contato dental) são lâminas ultrafinas cimentadas sobre a superfície dos dentes. Elas corrigem imperfeições de cor, formato, tamanho e pequeno alinhamento.</p><p>Em nossa clínica, fazemos o "Test Drive" do sorriso (Mockup), onde você aprova o formato e a cor em sua própria boca antes de finalizarmos o tratamento definitivo.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Resultado estético imediato e de alto padrão.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Porcelana não mancha com café ou vinho.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Correção de diastemas (espaços).</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Harmonização do sorriso com o rosto.</span></li>'
        ],
        indication: 'Pacientes insatisfeitos com a cor, desgaste, formato ou pequenos desalinhamentos dentários.',
        duration: 'Geralmente concluído em 2 ou 3 sessões.',
        image: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        imgAntes: 'https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        imgDepois: 'https://images.unsplash.com/photo-1606265752439-1f18756aa5fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'ortodontia': {
        title: 'Ortodontia (Invisível e Fixa)',
        icon: 'fa-teeth-open',
        shortDesc: 'Alinhamento dental com conforto, discrição e previsibilidade.',
        longDesc: '<p>Oferecemos o que há de mais moderno em alinhamento dental. Trabalhamos com Alinhadores Invisíveis (tipo Invisalign), que são placas transparentes removíveis, e também com aparelhos fixos de safira (altamente estéticos) e autoligáveis (mais rápidos).</p><p>O planejamento é todo feito de forma digital através de um escaneamento 3D da sua boca, eliminando aquelas moldagens desconfortáveis de massa.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Melhora na função mastigatória e fala.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Alinhadores permitem comer e higienizar sem restrições.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Estética impecável mesmo durante o tratamento.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Previsibilidade total do resultado final.</span></li>'
        ],
        indication: 'Dentes tortos, encavalados, mordida cruzada, diastemas ou problemas articulares (ATM).',
        duration: 'De 6 meses a 2 anos, dependendo da complexidade.',
        image: 'https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        imgAntes: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        imgDepois: 'https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'clareamento': {
        title: 'Clareamento Dental',
        icon: 'fa-wand-magic-sparkles',
        shortDesc: 'Recupere o brilho e a cor clara dos seus dentes com segurança.',
        longDesc: '<p>O clareamento devolve a juventude e a luminosidade ao seu sorriso. Na Sorriso Perfeito, oferecemos o Clareamento a Laser (feito em consultório com ação rápida) e o Clareamento Caseiro Supervisionado (com moldeiras personalizadas e gel seguro).</p><p>Nossos protocolos incluem dessensibilizantes de ponta, para que você alcance o tom desejado sem aquela dor chata ou sensibilidade excessiva.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Sorriso muito mais branco e jovem.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Remoção de manchas superficiais e profundas.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Procedimento totalmente seguro que não afeta o esmalte.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Aumento imediato da autoestima.</span></li>'
        ],
        indication: 'Pacientes com dentes amarelados por tempo, café, cigarro ou que apenas desejam um sorriso mais iluminado.',
        duration: 'Laser: 1 a 2 sessões. Caseiro: 15 a 21 dias.',
        image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        imgAntes: 'https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        imgDepois: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    'limpeza': { title: 'Profilaxia e Prevenção', icon: 'fa-hands-bubbles', shortDesc: 'Remoção de tártaro e placa para evitar cáries e gengivite.', longDesc: '<p>Prevenção é o melhor tratamento. Nossa limpeza utiliza ultrassom para remoção indolor de tártaro.</p>', benefits: [], indication: 'Recomendado para todos, a cada 6 meses.', duration: '40 minutos.', image: '', imgAntes: '', imgDepois: '' },
    'canal': { title: 'Tratamento de Canal', icon: 'fa-tooth', shortDesc: 'Salve seu dente com tecnologia mecanizada em sessão única.', longDesc: '<p>Realizamos a endodontia mecanizada, rápida e sem dor.</p>', benefits: [], indication: 'Dentes inflamados, dor aguda, fraturas profundas.', duration: '1 a 2 sessões de 1h.', image: '', imgAntes: '', imgDepois: '' },
    'estetica': { title: 'Harmonização Facial', icon: 'fa-syringe', shortDesc: 'Botox e Preenchimento para emoldurar seu novo sorriso.', longDesc: '<p>A odontologia estética vai além dos dentes, abrangendo lábios e face.</p>', benefits: [], indication: 'Sorriso gengival, lábios finos, rugas de expressão.', duration: '30 a 60 minutos.', image: '', imgAntes: '', imgDepois: '' },
    'protese': { title: 'Prótese Dentária', icon: 'fa-teeth', shortDesc: 'Próteses fixas e móveis com altíssimo padrão estético.', longDesc: '<p>Reabilitação funcional com coroas em zircônia e porcelana pura.</p>', benefits: [], indication: 'Perda parcial ou coroa destruída.', duration: 'Varia conforme o caso.', image: '', imgAntes: '', imgDepois: '' }
};

// Gerar Grid de Serviços na Home
const servicesGrid = document.getElementById('services-grid');
let delay = 100;
for (let key in servicesData) {
    const s = servicesData[key];
    const hasLanding = ['implante', 'facetas', 'ortodontia', 'clareamento'].includes(key); // Somente esses 4 têm LP detalhada preenchida no JS para não estender demais

    const action = hasLanding ? `openServicePage('${key}')` : `window.location.href='#agendamento'`;
    const badge = hasLanding ? `<span class="text-xs text-brand-cyan font-bold block mb-2">Ver detalhes <i class="fa-solid fa-arrow-right"></i></span>` : '';

    servicesGrid.innerHTML += `
    <div onclick="${action}" class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl card-hover border border-blue-50 cursor-pointer group" data-aos="fade-up" data-aos-delay="${delay}">
        <div class="w-16 h-16 bg-brand-light rounded-xl flex items-center justify-center text-brand-cyan text-3xl mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300">
            <i class="fa-solid ${s.icon}"></i>
        </div>
        <h4 class="font-heading font-bold text-xl text-brand-dark mb-3">${s.title}</h4>
        <p class="text-gray-500 text-sm mb-4">${s.shortDesc}</p>
        ${badge}
    </div>
    `;
    delay += 50;
}

// Lógica de SPA (Single Page Application view toggle)
const mainView = document.getElementById('main-view');
const serviceView = document.getElementById('service-view');

function openServicePage(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    // Popular dados na LP
    document.getElementById('sp-title').innerText = data.title;
    document.getElementById('sp-short-desc').innerText = data.shortDesc;
    document.getElementById('sp-long-desc').innerHTML = data.longDesc;
    document.getElementById('sp-indication').innerText = data.indication;
    document.getElementById('sp-duration').innerText = data.duration;
    document.getElementById('sp-benefits').innerHTML = data.benefits.join('');

    if (data.image) document.getElementById('sp-image').src = data.image;
    if (data.imgAntes) document.getElementById('sp-img-antes').src = data.imgAntes;
    if (data.imgDepois) document.getElementById('sp-img-depois').src = data.imgDepois;

    // Trocar view
    mainView.classList.add('hidden');
    serviceView.classList.remove('hidden');
    window.scrollTo(0, 0);
}

function closeServicePage() {
    serviceView.classList.add('hidden');
    mainView.classList.remove('hidden');
    // Como volta, scroll para a seção de serviços
    setTimeout(() => {
        const element = document.getElementById('servicos');
        const navHeight = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
            top: element.offsetTop - navHeight,
            behavior: 'smooth'
        });
    }, 50);
}

function showHome() {
    if (!mainView.classList.contains('hidden')) return;
    serviceView.classList.add('hidden');
    mainView.classList.remove('hidden');
}

function scrollToServiceAgendamento() {
    // Reutiliza o formulário da main view, mas move ele (visualmente apenas scrollamos e mostramos a main view focada no form, pré-selecionando)
    showHome();
    setTimeout(() => {
        const element = document.getElementById('agendamento');
        const navHeight = document.getElementById('navbar').offsetHeight;
        window.scrollTo({
            top: element.offsetTop - navHeight,
            behavior: 'smooth'
        });
    }, 50);
}

// Navegação Sticky e Botão Topo
const navbar = document.getElementById('navbar');
const logoText = document.getElementById('nav-logo-text');
const navLinks = document.querySelectorAll('.nav-link');
const btnTop = document.getElementById('btn-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md', 'py-2');
        navbar.classList.remove('bg-transparent', 'py-4');
        logoText.classList.replace('text-white', 'text-brand-cyan');
        navLinks.forEach(l => l.classList.replace('text-white', 'text-brand-dark'));
    } else {
        navbar.classList.remove('bg-white', 'shadow-md', 'py-2');
        navbar.classList.add('bg-transparent', 'py-4');
        logoText.classList.replace('text-brand-cyan', 'text-white');
        navLinks.forEach(l => l.classList.replace('text-brand-dark', 'text-white'));
    }

    if (window.scrollY > 500) {
        btnTop.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
    } else {
        btnTop.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    }
});

// Menu Mobile
const btnMenu = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

btnMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (!mobileMenu.classList.contains('hidden')) {
        navbar.classList.add('bg-brand-dark'); // Garante fundo escuro no mobile ao abrir
    }
});

function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
}

// Simulação de Envio de Formulário
function submitForm(e) {
    e.preventDefault();
    document.getElementById('form-area').classList.add('hidden');
    document.getElementById('success-area').classList.remove('hidden');
}

function resetForm() {
    document.getElementById('booking-form').reset();
    document.getElementById('success-area').classList.add('hidden');
    document.getElementById('form-area').classList.remove('hidden');
}

tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
                heading: ['Montserrat', 'sans-serif'],
            },
            colors: {
                brand: {
                    light: '#E0F2FE', // Azul claro
                    cyan: '#06B6D4',  // Ciano
                    cyanDark: '#0891B2',
                    white: '#FFFFFF',
                    dark: '#1E293B',
                    text: '#475569'
                }
            },
            backgroundImage: {
                'hero-pattern': "linear-gradient(rgba(30, 41, 59, 0.7), rgba(6, 182, 212, 0.5)), url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
                'service-pattern': "linear-gradient(rgba(224, 242, 254, 0.9), rgba(255, 255, 255, 0.9))"
            }
        }
    }
}
