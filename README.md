# Info Site

## Descrição do Projeto
O **Info Site** é uma aplicação web front-end moderna construída para servir como um site institucional e portfólio. A aplicação possui uma página inicial para apresentar os serviços, informações sobre a empresa/equipa, secções de chamada para ação (CTA), e uma área dedicada a exibir os projetos desenvolvidos, incluindo páginas de detalhes para cada item do portfólio.

## Tecnologias Utilizadas
Este projeto utiliza um ecossistema focado em alta performance de desenvolvimento, tipagem segura e estilização rápida:

* **[React 19](https://react.dev/)**: Biblioteca para a construção da interface do utilizador.
* **[TypeScript](https://www.typescriptlang.org/)**: Adiciona tipagem estática ao JavaScript, promovendo mais segurança e previsibilidade no código.
* **[Vite 6](https://vitejs.dev/)**: Ferramenta de build e servidor de desenvolvimento extremamente rápido, configurado para suportar o React Compiler.
* **[Tailwind CSS v4](https://tailwindcss.com/)**: Framework CSS utilitário para a estilização dos componentes.
* **[React Router DOM v7](https://reactrouter.com/)**: Roteamento da aplicação Single Page Application (SPA).
* **[Framer Motion](https://motion.dev/)**: Biblioteca para a criação de animações fluidas nas interfaces.
* **[Vitest](https://vitest.dev/)**: Framework de testes configurado para validação do código.
* **Ícones**: Utilização das bibliotecas `lucide-react` e `react-icons`.

## Estrutura de Rotas
A navegação do site está estruturada da seguinte forma:
* `/`: Página inicial (`Home`), que exibe os componentes de *Hero*, *Services*, *About* e *CTA*.
* `/portifolio`: Página que lista todos os projetos ou trabalhos do portfólio.
* `/portifolio/:slug`: Página de detalhes individuais para exibir informações aprofundadas sobre um projeto ou item específico.



## Como rodar o projeto localmente

### Pré-requisitos
* **Node.js**: Certifique-se de ter o Node instalado na sua máquina (recomenda-se a versão LTS mais recente, 18+ ou 20+).
* Gestor de pacotes da sua preferência (`npm`, `yarn`, `pnpm` ou `bun`).

### Instruções de Instalação e Execução

1. **Clone o repositório** (caso utilize controlo de versão remoto):
   ```bash
   git clone <url-do-repositorio>
   cd info-site

_ass:_ _hl0v_