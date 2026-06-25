// script.js — carrega a galeria com imagens (Unsplash)
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrid = document.getElementById('galleryGrid');

    // Lista de imagens (temáticas de tatuagem)
    const tattoos = [
        {
            src: 'https://images.unsplash.com/photo-1564760055774-3d208e7bb2df?w=400&h=300&fit=crop&crop=center&auto=format',
            title: 'Penas & Sombra',
            desc: 'Realismo preto e cinza'
        },
        {
            src: 'https://images.unsplash.com/photo-1564760055774-3d208e7bb2df?w=400&h=300&fit=crop&crop=center&auto=format&flip=1',
            title: 'Flor de Lótus',
            desc: 'Aquarela com traços finos'
        },
        {
            src: 'https://images.unsplash.com/photo-1588516721207-14bd2f0f227e?w=400&h=300&fit=crop&crop=center&auto=format',
            title: 'Bússola Antiga',
            desc: 'Estilo tradicional'
        },
        {
            src: 'https://images.unsplash.com/photo-1588516903720-8ceb67b9ef84?w=400&h=300&fit=crop&crop=center&auto=format',
            title: 'Mãos em oração',
            desc: 'Preto e branco, traços marcados'
        },
        {
            src: 'https://images.unsplash.com/photo-1606560987422-0c22b6dd5d97?w=400&h=300&fit=crop&crop=center&auto=format',
            title: 'Rosa Geométrica',
            desc: 'Linhas e pontilhismo'
        },
        {
            src: 'https://images.unsplash.com/photo-1616680831879-e9e560796d81?w=400&h=300&fit=crop&crop=center&auto=format',
            title: 'Caveira & Relógio',
            desc: 'Old school com detalhes'
        }
    ];

    // (opcional) fallback: se alguma imagem falhar, usa um placeholder
    const fallbackSrc = 'https://images.unsplash.com/photo-1590540421704-8121c5e46a5a?w=400&h=300&fit=crop&crop=center&auto=format';

    // gera os cards
    tattoos.forEach((item) => {
        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;
        img.loading = 'lazy';
        // fallback em caso de erro no carregamento
        img.onerror = () => {
            img.src = fallbackSrc;
        };

        const info = document.createElement('div');
        info.className = 'card-info';
        info.innerHTML = `
            <h4>${item.title}</h4>
            <p>${item.desc}</p>
        `;

        card.appendChild(img);
        card.appendChild(info);
        galleryGrid.appendChild(card);
    });

    // --- interação extra: formulário de contato ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // simula envio
            const btn = form.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = '✅ Enviado!';
            btn.style.backgroundColor = '#2a7a4b';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                form.reset();
            }, 2500);
        });
    }

    // efeito suave para os links do menu (scroll)
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId && targetId.startsWith('#')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});