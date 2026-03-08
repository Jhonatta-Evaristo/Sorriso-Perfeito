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
        image: 'img/implante.jpg',
        imgAntes: 'img/implante_antes.jpg',
        imgDepois: 'img/implante_depois.jpg'
    },

    'facetas': {
        title: 'Facetas de Porcelana',
        icon: 'fa-face-smile-beam',
        shortDesc: 'O segredo para um sorriso simétrico, branco e com formato perfeito.',
        longDesc: '<p>As facetas de porcelana são lâminas ultrafinas cimentadas sobre a superfície dos dentes.</p><p>Corrigem imperfeições de cor, formato e pequenos desalinhamentos.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Resultado estético imediato.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Porcelana não mancha.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Correção de diastemas.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Sorriso mais harmônico.</span></li>'
        ],
        indication: 'Pacientes insatisfeitos com a cor ou formato dos dentes.',
        duration: '2 a 3 sessões.',
        image: 'img/facetas.jpg',
        imgAntes: 'img/faceta_antes.jpg',
        imgDepois: 'img/faceta_depois.jpg'
    },

    'ortodontia': {
        title: 'Ortodontia (Invisível e Fixa)',
        icon: 'fa-teeth-open',
        shortDesc: 'Alinhamento dental com conforto e discrição.',
        longDesc: '<p>Tratamentos com alinhadores invisíveis ou aparelhos estéticos.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Melhora na mastigação.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Mais conforto.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Estética durante o tratamento.</span></li>'
        ],
        indication: 'Dentes tortos ou desalinhados.',
        duration: '6 meses a 2 anos.',
        image: 'img/ortodontia.jpg',
        imgAntes: 'img/ortodontia_antes.jpg',
        imgDepois: 'img/ortodontia_depois.jpg'
    },

    'clareamento': {
        title: 'Clareamento Dental',
        icon: 'fa-wand-magic-sparkles',
        shortDesc: 'Recupere o brilho do seu sorriso.',
        longDesc: '<p>Clareamento a laser ou caseiro supervisionado.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Dentes mais brancos.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Remoção de manchas.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Aumento da autoestima.</span></li>'
        ],
        indication: 'Dentes amarelados.',
        duration: '1 a 2 sessões.',
        image: 'img/clareamento.jpg',
        imgAntes: 'img/clareamento_antes.jpg',
        imgDepois: 'img/clareamento_depois.jpg'
    },

    'profilaxia': {
        title: 'Profilaxia e Prevenção',
        icon: 'fa-hands-bubbles',
        shortDesc: 'Limpeza profissional para prevenir cáries.',
        longDesc: '<p>O implante dentário é um pino de titânio instalado no osso para substituir a raiz do dente perdido. Após a cicatrização, é colocada uma prótese fixa que devolve estética, segurança e função ao sorriso.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Remove tártaro.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Previne gengivite.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Mastigação firme e natural.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Solução durável que preserva o osso da mandíbula.</span></li>'
        ],
        indication: 'Todos os pacientes.',
        duration: '40 minutos.',
        image: 'img/profilaxia.jpg',
        imgAntes: 'img/profilaxia_antes.jpg',
        imgDepois: 'img/profilaxia_depois.jpg'
    },

    'canal': {
        title: 'Tratamento de Canal',
        icon: 'fa-tooth',
        shortDesc: 'Tratamento moderno para salvar o dente.',
        longDesc: '<p>O tratamento de canal remove a infecção do interior do dente, limpa a região e sela o canal, permitindo salvar o dente natural e eliminar a dor.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Elimina dor.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Impede que a infecção se espalhe para outros dentes.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Evita a perda do dente natural.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Melhora a saúde bucal e previne complicações futuras.</span></li>'
        ],
        indication: 'Infecção ou dor intensa.',
        duration: '1 a 2 sessões.',
        image: 'img/canal.jpg',
        imgAntes: 'img/canal_antes.jpg',
        imgDepois: 'img/canal_depois.jpg'
    },

    'estetica': {
        title: 'Harmonização Facial',
        icon: 'fa-syringe',
        shortDesc: 'Botox e preenchimento facial.',
        longDesc: '<p>A harmonização facial é um conjunto de procedimentos estéticos, como aplicação de toxina botulínica (botox) e preenchimentos, realizados para equilibrar os traços do rosto, suavizar rugas e melhorar o contorno facial de forma natural.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Suaviza rugas e linhas de expressão.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Melhora o contorno e a harmonia do rosto.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Resultados naturais com procedimentos minimamente invasivos.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Aumenta a autoestima e a confiança ao sorrir.</span></li>'
        ],
        indication: 'Quem deseja melhorar a estética facial.',
        duration: '30 a 60 minutos.',
        image: 'img/harmonizacao.jpg',
        imgAntes: 'img/harmonizacao_antes.jpg',
        imgDepois: 'img/harmonizacao_depois.jpg'
    },

    'protese': {
        title: 'Prótese Dentária',
        icon: 'fa-teeth',
        shortDesc: 'Reposição de dentes perdidos.',
        longDesc: '<p>A prótese dentária é um tratamento utilizado para substituir dentes perdidos, restaurando a função da mastigação e a estética do sorriso. Ela pode ser fixa ou removível e é feita sob medida para garantir conforto e aparência natural.</p>',
        benefits: [
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Recupera a função da mastigação.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Melhora a estética e o sorriso.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Devolve a confiança ao falar e sorrir.</span></li>',
            '<li class="flex items-start gap-3"><i class="fa-solid fa-check text-brand-cyan mt-1"></i><span>Próteses modernas com aparência natural.</span></li>'
        ],
        indication: 'Perda dentária.',
        duration: 'Depende do caso.',
        image: 'img/protese.jpg',
        imgAntes: 'img/protese_antes.jpg',
        imgDepois: 'img/protese_depois.jpg'
    }

};

// Gerar Grid de Serviços na Home
const servicesGrid = document.getElementById('services-grid');
let delay = 100;
for (let key in servicesData) {
    const s = servicesData[key];
    const hasLanding = ['implante', 'facetas', 'ortodontia', 'clareamento', 'profilaxia', 'canal', 'estetica', 'protese'].includes(key); // Somente esses 4 têm LP detalhada preenchida no JS para não estender demais

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
