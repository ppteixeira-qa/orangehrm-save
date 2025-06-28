# 🧪 Orange HRM

Automação de testes end-to-end usando Cypress para validação de funcionalidades no sistema OrangeHRM.

---

:eyes: Este projeto foi criado para fins educacionais. :eyes:

---

## 📌 Descrição

Este projeto tem como objetivo automatizar cenários funcionais do OrangeHRM utilizando Cypress uma ferramenta de testes de interface para aplicações web.

Os testes incluem login, login inválido, navegação entre menus, preenchimento de informações cadastrais e ações como salvar e submeter formulários. Validação de mensagens de sucesso seguindo boas práticas como o uso de **Page Objects** e **separação de seletores** também foram utilizados.

---

## 🧩 Funcionalidades

Automatização do OrangeHRM para login e cadastro.

Paginas via POM para modularizar interações.

Validação de sucesso por mensagens na UI.

Geração de relatórios e logs.

---

## 🚀 Tecnologias utilizadas

- [Cypress](https://www.cypress.io/) (JavaScript)
- Node.js
- VS Code
- Chance.js
- Page Object Model (POM)
- Microsoft Edge
- Git (versionamento)

---

## 📁 Estrutura do Projeto

orangehrm-save/
├── cypress/
│ ├── e2e/
│ │ ├── login.cy.js
│ │ └── save-admin.cy.js
│ ├── pages/
│ │ ├── loginPage.js
│ │ └── adminPage.js
│ ├── support/
│ │ ├── commands.js
│ │ └── e2e.js
├── cypress.config.js
├── package.json
└── README.md

---

## 🧪 Boas Práticas Adotadas

Uso de Page Objects para reutilização de código

Separação de responsabilidades (pages, tests, commands)

Esperas automáticas do Cypress para estabilidade

Uso de data-test selectors sempre que possível

---

## 🧩 Melhorias Futuras

Integração com CI/CD (GitHub Actions)

Testes parametrizados (login com diferentes perfis)

Inclusão de testes negativos

---

## 🤝 Contribuição

Fork este repositório

Crie uma branch: git checkout -b feature/nova-funcionalidade

Faça commit das suas alterações: git commit -m "feat: adiciona novo teste"

Push na branch: git push origin feature/nova-funcionalidade

Abra um Pull Request
