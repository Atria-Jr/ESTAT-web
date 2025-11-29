<div align="center">

# 🎯 ESTAT-web

</div>

---

## 📋 Pré-requisitos

<table>
<tr>
<td>

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (v18 ou superior) - [Download aqui](https://nodejs.org/)
- **npm** (vem junto com Node.js) ou yarn/pnpm
- **Git** - [Download aqui](https://git-scm.com/)

</td>
</tr>
</table>
- Um editor de código (recomendamos VS Code)

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/Atria-Jr/ESTAT-web.git
cd ESTAT-web
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

---

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | 🔥 Inicia o servidor de desenvolvimento Vite |
| `npm run build` | 📦 Cria a build de produção |
| `npm run preview` | 👀 Visualiza a build de produção localmente |
| `npm run lint` | ✅ Executa o ESLint para verificar qualidade do código |

## 🛠️ Stack Tecnológica

- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido
- **React Router DOM** - Roteamento de páginas
- **Tailwind CSS** - Framework CSS utility-first
- **ESLint** - Linter para qualidade de código

## 📁 Estrutura do Projeto

<details>
<summary>📂 Clique para expandir a estrutura de pastas</summary>

```
ESTAT-web/
├── index.html              # HTML de entrada
├── src/
│   ├── main.tsx           # Bootstrap da aplicação
│   ├── App.tsx            # Componente principal
│   ├── Routes.tsx         # Definições de rotas
│   ├── pages/             # Páginas da aplicação
│   │   ├── home.tsx
│   │   ├── contato.tsx
│   │   └── ...
│   └── components/        # Componentes reutilizáveis
│       └── Layout/
│           ├── navbar.tsx
│           └── footer.tsx
├── vite.config.ts
├── tsconfig.json
└── package.json
```

</details>

---

## 🔄 Workflow de Desenvolvimento

<div align="center">

### ⚠️ REGRAS IMPORTANTES

</div>

> [!CAUTION]
> 1. **NUNCA faça commit direto na branch `main`**
> 2. **SEMPRE crie uma nova branch para sua task**
> 3. **SEMPRE dê pull na main antes de começar uma nova feature**

### Passo a passo para desenvolvimento

#### 1. Antes de começar qualquer tarefa, atualize sua main local:

```bash
git checkout main
git pull origin main
```

#### 2. Crie uma nova branch para sua task:

```bash
# Padrão de nomenclatura: tipo/descricao-curta
# Exemplos:
git checkout -b feature/adicionar-pagina-sobre
git checkout -b fix/corrigir-navbar-mobile
git checkout -b refactor/melhorar-componente-card
```

**Tipos de branch:**
- `feature/` - Nova funcionalidade
- `fix/` - Correção de bug
- `refactor/` - Refatoração de código
- `docs/` - Documentação
- `style/` - Mudanças de estilo/formatação

#### 3. Desenvolva sua feature:

```bash
# Faça suas alterações
# Teste localmente com npm run dev
# Verifique o lint com npm run lint
```

#### 4. Commit suas alterações:

```bash
git add .
git commit -m "tipo: descrição clara do que foi feito"
# Exemplos:
# git commit -m "feat: adiciona página sobre a empresa"
# git commit -m "fix: corrige menu mobile não fechando"
```

#### 5. Push da sua branch:

```bash
git push origin nome-da-sua-branch
```

#### 6. Crie um Pull Request:

- Acesse o repositório no GitHub
- Clique em "Compare & pull request"
- Descreva suas alterações
- Solicite review de outro desenvolvedor
- Aguarde aprovação antes de fazer merge

#### 7. Após merge, atualize sua main local:

```bash
git checkout main
git pull origin main
git branch -d nome-da-sua-branch  # Deleta a branch local antiga
```



**Lembre-se:** Sempre trabalhe em branches separadas e mantenha a main protegida! 🛡️
