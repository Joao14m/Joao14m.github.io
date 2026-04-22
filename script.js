// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('jm-visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.jm-reveal').forEach(el => observer.observe(el));

// Active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 200) current = s.getAttribute('id');
  });
  navLinks.forEach(a => {
    a.classList.toggle('jm-active', a.getAttribute('href') === '#' + current);
  });
});

// Language switcher
const translations = {
  en: {
    'nav-about': 'About',
    'nav-experience': 'Experience',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-leadership': 'Development',
    'hi': "Hi, I'm",
    'Joao': "Joao",
    'bio': "I'm a Computer Science graduate from the University of Central Florida (B.S.) and an aspiring Software Engineer. I got into Computer Science because it gave me the opportunity to learn how to build software applications from scratch, understand the theory behind algorithms and computations, learn the technologies used to create them, and develop better ways to approach problem-solving. Continuing to learn and grow through my career is what keeps me curious and motivated.<br><br>Over the past few years, I've strengthened my foundation in data structures and algorithms, built projects both independently and in teams from zero, participated in hackathons, and completed an internship where I improved my problem-solving skills and gained development experience.",
    'exp-tag': 'Experience',
    'exp-title': "Experience",
    'exp-date': 'May 2025 — Dec. 2025',
    'exp-role': 'Software Engineer Intern',
    'exp-desc': 'Contributed to the migration of an enterprise reporting system serving 3,000+ users from legacy ASP.NET Web Forms to ASP.NET Core MVC with SQL Server. Engineered backend features using Entity Framework Core and ASP.NET Core Identity, implementing server-side pagination, filtering, OTP verification, session management, and role-based authorization. Built responsive Bootstrap and jQuery interfaces with multi-step workflows and real-time validation. Built interactive Chart.js dashboards over SQL Server to visualize student performance metrics and pass-rate trends.',
    'proj-tag': 'Projects',
    'proj-title': "Projects",
    'proj1-desc': 'RAG AI assistant that answers course-specific questions using lecture notes, slides, and textbooks, achieving 1.64s average query latency. Implements semantic search with Spring AI, PostgreSQL, and Milvus vector database for embedding-based similarity matching.',
    'proj2-desc': 'Mobile cattle marketplace built with React Native and Expo, enabling users to create cattle lot listings with versioned profiles, media uploads, and a status-driven lifecycle (Draft → Active → Sold). Integrated Asaas payment SDK and containerized the stack with Docker Compose.',
    'proj3-desc': 'Full-stack productivity application featuring task management, calendar integration, and completion history. Led a team of 4 developers. Established a CI/CD pipeline for AWS EC2 using GitHub Actions, automating frontend builds and Node.js service restarts for zero-downtime deployments.',
    'proj4-desc': 'Competitive territory-capture game built at ShellHacks 2025 with a team of 4 developers. Programmed an Arduino UNO R4 to control WS2812 LED matrices with real-time joystick input processing. Created a synchronized web scoreboard maintaining real-time state consistency between hardware display and web interface for seamless gameplay.',
    'skills-title': 'Technical Skills',
    'lead-title': 'Leadership and Professional Development',
  },
  pt: {
    'nav-about': 'Sobre',
    'nav-experience': 'Experiência',
    'nav-projects': 'Projetos',
    'nav-skills': 'Habilidades',
    'nav-leadership': 'Desenvolvimento',
    'hi': 'Olá, sou o',
    'Joao': "João",
    'bio': 'Sou formado em Ciência da Computação pela University of Central Florida (B.S.) e aspiro a ser Engenheiro de Software. Entrei na área de Computação porque ela me deu a oportunidade de aprender a construir aplicações do zero, entender a teoria por trás de algoritmos e computações, conhecer as tecnologias utilizadas para criá-las e desenvolver melhores formas de abordar a resolução de problemas. Continuar aprendendo e evoluindo ao longo da carreira é o que me mantém curioso e motivado.<br><br>Nos últimos anos, aprofundei minha base em estruturas de dados e algoritmos, desenvolvi projetos de forma independente e em equipe do zero, participei de hackathons e concluí um estágio onde aprimorei minhas habilidades de resolução de problemas e adquiri experiência em desenvolvimento.',
    'exp-tag': 'Experiência',
    'exp-title': 'Experiência',
    'exp-date': 'Mai. 2025 — Dez. 2025',
    'exp-role': 'Estagiário de Engenharia de Software',
    'exp-desc': 'Contribuí com a migração de um sistema de relatórios empresarial utilizado por mais de 3.000 usuários do legado ASP.NET Web Forms para ASP.NET Core MVC com SQL Server. Desenvolvi funcionalidades de backend com Entity Framework Core e ASP.NET Core Identity, implementando paginação server-side, filtragem, verificação por OTP, gerenciamento de sessão e autorização. Criei interfaces responsivas com Bootstrap e jQuery com fluxos de múltiplas etapas e validação em tempo real. Desenvolvi dashboards interativos com Chart.js sobre SQL Server para visualizar métricas de desempenho de alunos e tendências de aprovação.',
    'proj-tag': 'Projetos',
    'proj-title': 'Projetos',
    'proj1-desc': 'Assistente de IA com RAG que responde perguntas específicas de disciplinas com base em anotações de aula, slides e livros didáticos, atingindo latência média de 1,64s por consulta. Implementa busca semântica com Spring AI, PostgreSQL e banco vetorial Milvus para correspondência por similaridade de embeddings.',
    'proj2-desc': 'Marketplace mobile de gado construído com React Native e Expo, permitindo que usuários criem lotes de gado com perfis versionados, upload de mídia e ciclo de vida orientado por status (Rascunho → Ativo → Vendido). Integrado com o SDK de pagamentos Asaas e com a stack containerizada usando Docker Compose.',
    'proj3-desc': 'Aplicação de produtividade full-stack com gerenciamento de tarefas, integração com calendário e histórico de conclusões. Liderou uma equipe de 4 desenvolvedores. Estabeleceu um pipeline de CI/CD para AWS EC2 com GitHub Actions, automatizando builds de frontend e reinicializações do serviço Node.js para implantações sem tempo de inatividade.',
    'proj4-desc': 'Jogo competitivo de captura de território desenvolvido no ShellHacks 2025 com uma equipe de 4 desenvolvedores. Programado com Arduino UNO R4 para controlar matrizes de LEDs WS2812 com processamento de entrada de joystick em tempo real. Adicionado com um placar web sincronizado mantendo consistência de estado em tempo real entre o display físico e a interface web para uma jogabilidade fluida.',
    'skills-title': 'Habilidades Técnicas',
    'lead-title': 'Liderança e Desenvolvimento Profissional',
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.getElementById('lang-btn').textContent = lang === 'en' ? 'PT' : 'EN';
}

document.getElementById('lang-btn').addEventListener('click', () => {
  setLang(currentLang === 'en' ? 'pt' : 'en');
});

// Media carousels
document.querySelectorAll('.jm-card-media').forEach(panel => {
  const viewport = panel.querySelector('.jm-media-viewport');
  const items = Array.from(viewport.querySelectorAll('img, video'));
  const prevBtn = panel.querySelector('.jm-media-prev');
  const nextBtn = panel.querySelector('.jm-media-next');

  if (items.length === 0) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    return;
  }

  viewport.querySelector('.jm-media-placeholder').style.display = 'none';
  if (items.length === 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  }

  let current = 0;
  items.forEach((item, i) => { item.style.display = i === 0 ? 'block' : 'none'; });
  if (items[0].tagName === 'VIDEO') items[0].play();

  function show(index) {
    const prev = items[current];
    prev.style.display = 'none';
    if (prev.tagName === 'VIDEO') prev.pause();
    current = (index + items.length) % items.length;
    const next = items[current];
    next.style.display = 'block';
    if (next.tagName === 'VIDEO') next.play();
  }

  prevBtn.addEventListener('click', () => show(current - 1));
  nextBtn.addEventListener('click', () => show(current + 1));

  const zoomBtn = panel.querySelector('.jm-zoom-btn');
  if (items.length === 0) { zoomBtn.style.display = 'none'; return; }
  zoomBtn.addEventListener('click', () => openLightbox(items[current]));
});

// Lightbox
const lightbox = document.getElementById('jm-lightbox');
const lightboxContent = lightbox.querySelector('.jm-lightbox-content');

function openLightbox(source) {
  lightboxContent.innerHTML = '';
  const clone = source.cloneNode(true);
  clone.style.cssText = '';
  clone.removeAttribute('style');
  if (clone.tagName === 'VIDEO') { clone.controls = true; clone.play(); }
  lightboxContent.appendChild(clone);
  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const vid = lightboxContent.querySelector('video');
  if (vid) vid.pause();
  lightbox.hidden = true;
  lightboxContent.innerHTML = '';
  document.body.style.overflow = '';
}

lightbox.querySelector('.jm-lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

// Airplane flight
(function airplane() {
  const PLANE_SIZE = 60;
  const SAFETY = 6;
  const SPEED = 1.3;
  const RESPAWN_MS = 2000;

  // Sprite default orientation: points LEFT.
  //   moving left  (vx < 0) -> scaleX(1)   (natural)
  //   moving right (vx > 0) -> scaleX(-1)  (flipped)
  function spriteFor(vx) {
    return vx < 0 ? 'scaleX(1)' : 'scaleX(-1)';
  }

  const plane = document.createElement('img');
  plane.src = 'photo/airplane2d_transparent.png';
  plane.alt = '';
  plane.className = 'jm-airplane';
  document.body.appendChild(plane);

  function scheduleNext() {
    setTimeout(startFlight, RESPAWN_MS);
  }

  function startFlight() {
    const wrap = document.querySelector('.jm-wrap');
    if (!wrap) return scheduleNext();

    const winW = window.innerWidth;
    const winH = window.innerHeight;
    const wrapLeft = wrap.offsetLeft;
    const wrapRight = wrap.offsetLeft + wrap.offsetWidth;
    const docHeight = document.documentElement.scrollHeight;

    const leftGutter = wrapLeft;
    const rightGutter = winW - wrapRight;
    const minCorridor = PLANE_SIZE + 16;

    const sides = [];
    if (leftGutter > minCorridor) sides.push('left');
    if (rightGutter > minCorridor) sides.push('right');
    if (!sides.length) return scheduleNext();

    const side = sides[Math.floor(Math.random() * sides.length)];

    // Spawn Y in the currently visible viewport (document coords).
    let y = window.scrollY + 60 + Math.random() * Math.max(0, winH - PLANE_SIZE - 120);

    let x, dirX;
    if (side === 'left') {
      x = -PLANE_SIZE - 4;
      dirX = 1;  // fly inward (toward text)
    } else {
      x = winW + 4;
      dirX = -1;
    }

    // Diagonal: random vertical drift (up or down).
    let vx = dirX * SPEED;
    let vy = (Math.random() * 1.4 - 0.7);  // -0.7..0.7

    plane.style.top = y + 'px';
    plane.style.left = x + 'px';
    plane.style.transform = spriteFor(vx);
    plane.style.display = 'block';

    let bounced = false;

    function step() {
      x += vx;
      y += vy;

      if (!bounced) {
        if (side === 'left' && x + PLANE_SIZE >= wrapLeft - SAFETY) {
          vx = -vx;
          bounced = true;
          plane.style.transform = spriteFor(vx);
        } else if (side === 'right' && x <= wrapRight + SAFETY) {
          vx = -vx;
          bounced = true;
          plane.style.transform = spriteFor(vx);
        }
      }

      // Exit: off the side of the viewport, or off the top/bottom of the document.
      if (x < -PLANE_SIZE - 20 || x > winW + 20 || y < -PLANE_SIZE - 20 || y > docHeight + 20) {
        plane.style.display = 'none';
        scheduleNext();
        return;
      }

      plane.style.left = x + 'px';
      plane.style.top = y + 'px';
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  setTimeout(startFlight, 2000);
})();
