# Guia de Build Android

## Build Automático via GitHub Actions

O sistema está configurado para gerar APKs automaticamente via GitHub Actions.

### Como usar:

1. **Conecte ao GitHub:**
   - Clique em "Export to GitHub" no Lovable
   - Autorize e crie o repositório

2. **O APK será gerado automaticamente:**
   - A cada push na branch `main`
   - Ou manualmente através da aba "Actions" no GitHub

3. **Baixe o APK:**
   - Acesse a aba "Actions" no seu repositório GitHub
   - Clique no workflow mais recente
   - Baixe o arquivo "app-debug" nos artefatos

## Build Local (Opcional)

Se quiser gerar o APK localmente:

```bash
# 1. Clone o repositório
git clone [seu-repo]
cd [seu-repo]

# 2. Instale as dependências
npm install

# 3. Faça o build do projeto web
npm run build

# 4. Adicione a plataforma Android (apenas primeira vez)
npx cap add android

# 5. Sincronize os arquivos
npx cap sync android

# 6. Abra no Android Studio para build
npx cap open android
```

## Requisitos para Build Local

- Node.js 20+
- Java JDK 17+
- Android Studio (para build local)

## Notas Importantes

- O APK gerado pelo GitHub Actions é uma versão DEBUG (não assinada)
- Para publicar na Play Store, você precisará gerar uma versão RELEASE assinada
- O app está configurado para acessar o servidor Lovable em desenvolvimento
- Para produção, remova a configuração `server.url` do `capacitor.config.ts`
