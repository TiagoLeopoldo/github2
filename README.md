# 🔍 GitHub Repository Finder

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Stars](https://img.shields.io/github/stars/TiagoLeopoldo/github2?style=social)](https://github.com/TiagoLeopoldo/github2/stargazers)

Um aplicativo React que permite buscar e gerenciar repositórios do GitHub de forma intuitiva.

🔗 **Repositório:** [github.com/TiagoLeopoldo/github2](https://github.com/TiagoLeopoldo/github2)

## ✨ Funcionalidades

- 🔎 Busca de repositórios pelo formato `usuário/repositório`
- 📄 Visualização de informações básicas do repositório
- 🔗 Acesso direto ao repositório no GitHub
- 🗑️ Remoção de repositórios da lista
- 🌙 Tema escuro padrão

## 🛠️ Tecnologias Utilizadas

- React.js
- Styled Components
- Axios
- GitHub API v3
- React DOM

## 🚀 Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/TiagoLeopoldo/github2.git
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor:
```bash
npm start
```

## 📂 Estrutura do Projeto

```bash
src/
├── assets/
├── components/
│   ├── Button/
│   ├── Input/
│   └── ItemRepo/
├── pages/
│   └── App.js
├── services/
│   └── api.js
├── styles/
└── index.js
```

## 🎨 Componentes Principais

| Componente   | Descrição                                  |
|--------------|--------------------------------------------|
| `Button`     | Botão estilizado com efeito hover          |
| `Input`      | Campo de busca com estilo moderno          |
| `ItemRepo`   | Card de exibição do repositório            |

## 🌐 API

A aplicação utiliza a [API pública do GitHub](https://docs.github.com/en/rest) para:
- Buscar informações de repositórios
- Acessar dados públicos
- Validar existência de repositórios

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

Desenvolvido como projeto de estudos em React da Dio.me por [Tiago Leopoldo](https://github.com/TiagoLeopoldo)
