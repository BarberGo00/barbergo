# 🪮 BarberGo - Barbearia Premium a Domicílio

**BarberGo** é um site moderno e premium para agendamento de serviços de barbearia a domicílio em Ilhabela, SP. O site foi desenvolvido com foco em turistas e clientes de alto padrão que buscam conveniência e qualidade.

---

## 🎯 Características Principais

### ✨ Design Premium
- Interface moderna e elegante
- Paleta de cores: Azul marinho e verde (clima de praia)
- Totalmente responsivo (mobile, tablet, desktop)
- Animações suaves e transições

### 📱 Funcionalidades
- **Navegação Intuitiva**: Menu principal com links para todas as seções
- **Hero Section**: Imagem de fundo deslumbrante com CTA principal
- **Serviços**: 3 opções de serviços com preços e descrições
- **Storytelling**: Seção de experiência com benefícios destacados
- **Agendamento via WhatsApp**: Links diretos para agendamento
- **Responsividade Total**: Funciona perfeitamente em todos os dispositivos

### 🎨 Componentes Inclusos
- Header com navegação
- Hero section com imagem de fundo
- Cartões de serviços
- Seção de experiência com destaques
- Footer com informações de contato

---

## 📊 Serviços Oferecidos

| Serviço | Descrição | Preço |
|---------|-----------|-------|
| **Corte Completo** | Corte + Sobrancelha com visagismo | R$ 90,00 |
| **Barba Terapêutica** | Ritual com toalha quente e massagem | R$ 50,00 |
| **Pacote Completo** | Corte + Sobrancelha + Barba | R$ 130,00 |
| **Atendimento VIP** | Horários flexíveis e urgência | Sob consulta |

---

## 🛠️ Stack Tecnológico

- **React 19**: Framework JavaScript
- **Tailwind CSS 4**: Estilização
- **Vite**: Build tool rápido
- **TypeScript**: Tipagem estática
- **Lucide React**: Ícones
- **shadcn/ui**: Componentes UI

---

## 📦 Instalação Rápida

```bash
# 1. Instalar dependências
pnpm install

# 2. Iniciar servidor de desenvolvimento
pnpm dev

# 3. Abrir no navegador
# http://localhost:3000
```

---

## 📝 Personalizações

### Alterar Número de WhatsApp
Procure por `5512991084481` nos arquivos e substitua pelo seu número.

### Alterar Preços
Edite `client/src/components/Services.tsx` e altere os valores em `price`.

### Alterar Cores
Edite `client/src/index.css` e modifique as variáveis CSS em `:root`.

### Alterar Logo e Imagens
Substitua os arquivos em `client/public/`:
- `logo.png` - Logo da BarberGo
- `hero.png` - Imagem de fundo

---

## 📱 Responsividade

O site é otimizado para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)

---

## 🚀 Deploy

### Vercel (Recomendado)
1. Push para GitHub
2. Conecte no [Vercel](https://vercel.com)
3. Deploy automático

### Netlify
1. Push para GitHub
2. Conecte no [Netlify](https://netlify.com)
3. Deploy automático

### Seu Servidor
```bash
pnpm build
# Upload da pasta dist/ para seu servidor
```

---

## 📞 Informações de Contato

- **WhatsApp**: (12) 99108-4481
- **Localização**: Ilhabela, SP
- **Atendimento**: Mediante agendamento

---

## 📄 Estrutura de Arquivos

```
client/
├── public/
│   ├── logo.png
│   └── hero.png
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Services.tsx
│   │   ├── Experience.tsx
│   │   └── Footer.tsx
│   ├── pages/
│   │   └── Home.tsx
│   ├── index.css
│   └── main.tsx
└── index.html
```

---

## 🎓 Aprender Mais

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

---

## 📄 Licença

Este projeto é fornecido como está. Você é livre para modificar e usar conforme necessário.

---

## ✨ Desenvolvido com ❤️ para BarberGo

**Versão**: 1.0.0  
**Última Atualização**: Novembro 2025

---

**Pronto para começar? Consulte o [GUIA_INSTALACAO.md](./GUIA_INSTALACAO.md) para instruções detalhadas!**
