# Portfolio - Diego Soares

Portfolio pessoal desenvolvido com Angular 19, apresentando minhas habilidades, projetos e formas de contato.

**[Ver Demo](https://portfolio-diegosoares.vercel.app)**

## Tecnologias

| Frontend | Estilização | Outros |
|----------|-------------|--------|
| Angular 19 | SCSS | EmailJS |
| TypeScript | CSS Variables | Vercel |

## Features

- Design responsivo (mobile-first)
- Tema dark/light com persistência em localStorage
- Efeito typewriter animado
- Scroll animations com Intersection Observer
- Blobs animados com gradientes
- Formulário de contato funcional (EmailJS)
- Download de currículo em PDF

## Rodando localmente

```bash
# Clonar repositório
git clone https://github.com/SoaresJoseDiego/Portfolio.git

# Entrar na pasta
cd Portfolio

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
ng serve
```

Acesse `http://localhost:4200`

## Build de produção

```bash
ng build
```

Output: `dist/portfolio/browser`

## Estrutura do projeto

```
src/
├── app/
│   ├── features/home/components/
│   │   ├── hero/          # Seção principal com typewriter
│   │   ├── about/         # Sobre mim
│   │   ├── skills/        # Habilidades técnicas
│   │   ├── projects/      # Projetos
│   │   ├── contact/       # Formulário de contato
│   │   └── footer/        # Rodapé
│   └── layouts/components/
│       └── header/        # Navegação + theme toggle
├── scss/
│   ├── _variables.scss    # Design tokens (cores, fontes)
│   └── _mixins.scss       # Funções reutilizáveis
└── public/
    └── Diego_Soares.pdf   # Currículo para download
```

## Deploy na Vercel

| Configuração | Valor |
|--------------|-------|
| Framework | Angular |
| Build Command | `ng build` |
| Output Directory | `dist/portfolio/browser` |

## Contato

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/saborges)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SoaresJoseDiego)
[![Email](https://img.shields.io/badge/Email-0078D4?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:diegosoaresdev@outlook.com)

---

Desenvolvido por **Diego Soares**
