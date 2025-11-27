# 📱 BarberGo - Guia de Instalação e Uso

## 🎯 Visão Geral

BarberGo é um site premium de agendamento para barbearia a domicílio em Ilhabela, SP. O projeto é construído com **React 19**, **Tailwind CSS 4** e **Vite**, oferecendo um design moderno e responsivo.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior) - [Download](https://nodejs.org/)
- **pnpm** (gerenciador de pacotes) - [Instalação](https://pnpm.io/installation)
- **Visual Studio Code** - [Download](https://code.visualstudio.com/)

### Verificar Instalação

```bash
node --version
pnpm --version
```

---

## 🚀 Instalação Rápida

### 1. Clonar ou Copiar o Projeto

Se você recebeu os arquivos do projeto, copie a pasta `barbergo` para seu local de trabalho.

### 2. Abrir no VS Code

```bash
cd barbergo
code .
```

### 3. Instalar Dependências

```bash
pnpm install
```

### 4. Iniciar o Servidor de Desenvolvimento

```bash
pnpm dev
```

O site estará disponível em: **http://localhost:3000**

---

## 📁 Estrutura do Projeto

```
barbergo/
├── client/
│   ├── public/
│   │   ├── logo.png           # Logo da BarberGo
│   │   └── hero.png           # Imagem de fundo do hero
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx      # Navegação principal
│   │   │   ├── HeroSection.tsx # Seção principal com CTA
│   │   │   ├── Services.tsx    # Cartões de serviços
│   │   │   ├── Experience.tsx  # Storytelling
│   │   │   └── Footer.tsx      # Rodapé
│   │   ├── pages/
│   │   │   └── Home.tsx        # Página principal
│   │   ├── index.css           # Estilos globais e tema
│   │   └── main.tsx            # Entry point React
│   └── index.html              # HTML principal
├── package.json                # Dependências do projeto
└── GUIA_INSTALACAO.md         # Este arquivo
```

---

## 🎨 Personalizações Principais

### 1. Alterar Logo e Imagens

Substitua os arquivos em `client/public/`:
- `logo.png` - Logo da BarberGo
- `hero.png` - Imagem de fundo do hero

### 2. Alterar Cores (Tema)

Edite `client/src/index.css` e procure pela seção `:root`:

```css
:root {
  --primary: oklch(0.35 0.15 240);        /* Azul principal */
  --secondary: oklch(0.50 0.10 150);      /* Verde secundário */
  --background: oklch(0.98 0.001 240);    /* Fundo */
  /* ... outras cores ... */
}
```

### 3. Alterar Número de WhatsApp

Procure por `5512991084481` nos arquivos e substitua pelo seu número:

- `client/src/components/Header.tsx`
- `client/src/components/HeroSection.tsx`
- `client/src/components/Services.tsx`
- `client/src/components/Footer.tsx`

### 4. Alterar Mensagem Padrão do WhatsApp

Procure por `"Olá,%20gostaria%20de%20agendar%20um%20corte%20premium%20a%20domicílio%20em%20Ilhabela%20com%20a%20BarberGo%20?"` e substitua pela sua mensagem.

### 5. Alterar Preços dos Serviços

Edite `client/src/components/Services.tsx`:

```tsx
const services = [
  {
    id: 1,
    title: "Corte Completo",
    description: "Corte + Sobrancelha com técnica de visagismo e acabamento premium.",
    price: "R$ 90,00",  // ← Altere aqui
    icon: Scissors,
  },
  // ... outros serviços ...
];
```

---

## 🔧 Comandos Úteis

```bash
# Iniciar servidor de desenvolvimento
pnpm dev

# Compilar para produção
pnpm build

# Visualizar build de produção localmente
pnpm preview

# Verificar tipos TypeScript
pnpm check

# Formatar código
pnpm format
```

---

## 📱 Responsividade

O site é totalmente responsivo e funciona em:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

Teste em diferentes tamanhos usando o DevTools do navegador (F12).

---

## 🌐 Seções do Site

### 1. **Header**
- Logo e navegação
- Menu responsivo (mobile)
- Botão "Agendar Agora"

### 2. **Hero Section**
- Imagem de fundo
- Rating 5 estrelas
- Headline principal
- CTA com link WhatsApp

### 3. **Serviços**
- 3 cartões de serviços
- Preços destacados
- Botões de agendamento
- Destaque para pacote popular

### 4. **Experiência**
- Storytelling premium
- Destaques com estatísticas
- Benefícios do serviço

### 5. **Footer**
- Informações de contato
- Links de navegação
- Link WhatsApp

---

## 🚀 Deploy (Publicação)

### Opção 1: Vercel (Recomendado)

1. Faça push do projeto para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório
5. Clique em "Deploy"

### Opção 2: Netlify

1. Faça push do projeto para GitHub
2. Acesse [netlify.com](https://netlify.com)
3. Clique em "New site from Git"
4. Selecione seu repositório
5. Configure e clique em "Deploy"

### Opção 3: Seu Próprio Servidor

```bash
# Compilar para produção
pnpm build

# Os arquivos compilados estarão em dist/
# Faça upload da pasta dist/ para seu servidor
```

---

## 🐛 Solução de Problemas

### Erro: "pnpm: command not found"
```bash
npm install -g pnpm
```

### Erro: "Port 3000 already in use"
```bash
# Use uma porta diferente
pnpm dev -- --port 3001
```

### Imagens não aparecem
- Verifique se `logo.png` e `hero.png` estão em `client/public/`
- Reinicie o servidor com `pnpm dev`

### Estilos não aparecem
- Limpe o cache: Delete a pasta `node_modules` e `.vite`
- Reinstale: `pnpm install`
- Reinicie: `pnpm dev`

---

## 📞 Suporte

Para dúvidas sobre o projeto, consulte:
- [Documentação React](https://react.dev)
- [Documentação Tailwind CSS](https://tailwindcss.com)
- [Documentação Vite](https://vitejs.dev)

---

## 📄 Licença

Este projeto é fornecido como está. Você é livre para modificar e usar conforme necessário.

---

## ✨ Próximos Passos

1. ✅ Instale o projeto
2. ✅ Personalize cores, logos e mensagens
3. ✅ Teste em diferentes dispositivos
4. ✅ Faça deploy em um servidor
5. ✅ Compartilhe o link com seus clientes!

**Bom desenvolvimento! 🚀**
