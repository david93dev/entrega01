NaN Squad — Landing Page da Equipe
Landing page colaborativa para apresentar a equipe, seus perfis, skills, projetos e formas de contato.
Foco em performance, acessibilidade e boas práticas de SEO.
Stack: HTML5, CSS3, JavaScript (Vanilla)
Demo

Site publicado: https://seu-usuario.github.io/seu-repo/
Repositório: https://github.com/seu-usuario/seu-repo
Observação: Em GitHub Pages (projeto), prefira caminhos relativos (./assets/...) para evitar imagens quebradas.

## Funcionalidades
● Seções: Hero, Sobre a equipe, Integrantes, Skills/Stacks, Projetos, Contato (form), Footer.
● Menu responsivo com botão hambúrguer (abre/fecha, bloqueio de scroll, aria-expanded).
● Formulário de contato com validação (nome, e-mail, mensagem) e mensagem de sucesso.
● Footer com navegação, redes sociais, contato rápido, ano automático e botão “voltar ao topo”.
● Acessibilidade: HTML semântico, atributos aria-*, foco visível, suporte a prefers-reduced-motion.
● SEO básico: , meta description, favicons, manifest e Open Graph (OG) tags.
● Imagens otimizadas: loading="lazy" fora da dobra, dimensões definidas para evitar CLS.

## Estrutura de pastas
/
■■ index.html
■■ pages/
■ ■■ david.html
■ ■■ isthanlley.html
(sugestão)
■ ■■ joao.html
(sugestão)
■■ css/
■ ■■ styles.css
■■ js/
■ ■■ main.js
■■ assets/
■ ■■ images/...
■ ■■ favicons/


##Nota: Para GitHub Pages, mantenha paths relativos (ex.: ./assets/images/...).

## Requisitos (escopo mínimo)
● ■ Hero com nome/slogan● ■ Sobre a equipe (texto + integrantes)
● ■ Skills/Stacks
● ■ Projetos (cards com título/descrição/links)
● ■ Contato (formulário e/ou links)
● ■ Responsividade (mobile-first)
● ■ Acessibilidade (HTML semântico, alt em imagens, contraste legível)
● ■ Performance mínima (otimização de imagens e assets)
● ■ SEO básico (title, description, favicons)
● ■ JavaScript (mín. 2 interações: menu mobile + validação do formulário / “voltar ao topo”)



## Acessibilidade
● Estrutura semântica (header, nav, main, section, footer)
● Atributos aria-* no menu mobile e feedbacks do formulário
● Estados de foco (:focus-visible) em links e botões
● Preferência por movimento reduzido (prefers-reduced-motion) para a rolagem ao topo
Performance
● Use loading="lazy" em imagens fora da dobra
● Defina width/height nas imagens para evitar CLS
● Sempre que possível, use WebP com fallback via
● Minimize e remova assets não utilizados

## Validação do formulário
Campos: Nome completo, E-mail, Mensagem
Regras: nome ≥ 5 caracteres e com sobrenome; e-mail válido; mensagem ≥ 10 caracteres
Feedback de erro inline e aria-invalid. Simulação de sucesso; integração real via fetch (endpoint
/api/contact) pode ser adicionada depois.
await fetch('/api/contact', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ name, email, message })
});


## Roadmap
● • Páginas individuais para Isthanlley e João Felipe
● • Imagens sociais (OG) 1200×630
● • Testes de contraste (WCAG AA)
● • Integração real do formulário (backend)
● • Métricas com Lighthouse (Performance/SEO/A11y/Best Practices)Autores


David Flôr Batista — https://github.com/
Isthanlley — https://github.com/
João Felipe — https://github.com/


Este projeto está sob a licença MIT. 
