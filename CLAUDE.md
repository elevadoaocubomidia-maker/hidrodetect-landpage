# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Deploy (PRODUÇÃO ATUAL)

O site em produção é o HTML estático em `static/`. Push para `main` aciona GitHub Actions → FTP direto da pasta `static/` para `/httpdocs/` na Hostaqui (Plesk). Workflow em `.github/workflows/deploy.yml`.

**Não usa build** — sem pnpm, sem Node, sem Vite. O workflow faz checkout + FTP e leva ~11s.

Required GitHub secrets: `FTP_HOST`, `FTP_USER`, `FTP_PASSWORD`.
Repo: `elevadoaocubomidia-maker/hidrodetect-landpage`
Domínio: `vazamentoshidrodetect.com.br`

`security: loose` no FTP action é intencional — Hostaqui reseta data socket sem isso.

## Arquitetura (produção)

```
static/
  index.html          # Single-file HTML com CSS+JS inline. ~1580 linhas.
  .htaccess           # Rewrite rules para LiteSpeed/Plesk
  sitemap.xml         # Mapa do site
  robots.txt          # Permite Googlebot, GPTBot, ClaudeBot, PerplexityBot
  llms.txt            # Structured data para AI crawlers
  logo-branco.png     # Header (fundo escuro)
  logo-preto.png      # Footer (fundo claro)
  logo-transparente.png
```

**IMPORTANTE**: edições de copy, layout, tracking e SEO devem ser feitas em `static/index.html`. A pasta `client/` (React) não é deployada — existe só como referência histórica.

## Tracking (GTM como centralizador)

O `static/index.html` carrega GTM + gtag diretamente no `<head>`. GA4, Meta Pixel e conversões do Google Ads são gerenciados dentro do GTM.

- **GTM**: `GTM-M5XT94WB` — snippet no `<head>` + `<noscript>` no `<body>`
- **Meta Pixel**: `1515164783576175` — tag criada dentro do GTM
- **GA4**: `G-1DCRY8LT36` (Measurement ID) — tag "Ga4 - TAG GERAL" dentro do GTM
- **Google Ads**: `AW-18039045736` — gtag config no `<head>` + vinculador de conversões no GTM
- **Conversão WhatsApp**: label `dibvCO3v7o4cEOj815lD` — tag "Clicou - Whatsapp" no GTM, acionada pelo evento personalizado `whatsapp_click`

Login GTM: `hidrodetectvazamentos@gmail.com`

### Padrão de eventos — dataLayer

Todos os botões WhatsApp têm atributo `data-wa-cta`. Um listener no final do `<script>` inline dispara:
```js
window.dataLayer.push({ event: 'whatsapp_click' })
```
**Nunca usar gtag direto para conversões** — tudo passa pelo GTM para evitar disparo duplo e manter visibilidade no depurador.

O HTML tem chamadas `fbq('track', 'Lead')` e `fbq('track', 'Contact')` com guard `typeof fbq !== 'undefined'` — funcionam via GTM.

## Integrações no HTML

- **UTM capture**: `URLSearchParams` → `localStorage` (utm_source, utm_medium, utm_campaign, utm_content, utm_term)
- **WhatsApp dinâmico**: `buildWALink()` appenda UTMs do localStorage à mensagem WA
- **WhatsApp**: `5569999463585` em 3 CTAs (header, hero, CTA final) — todos com `data-wa-cta`
- **Pixel events**: Lead (CTAs WA), Contact (tel/email)

## Legado React (client/)

A pasta `client/` contém o app React+Vite+Tailwind v4 original. **Não é mais usado para deploy** — mantida como referência de copy e componentes.

```bash
# Apenas para desenvolvimento local de referência
pnpm install --no-frozen-lockfile
pnpm dev
```

## Business Rules (copy constraints)

- Never say "diagnóstico grátis"
- Always name the equipment: geofone, hidrofone, câmera termográfica
- CTA always via WhatsApp: `wa.me/5569999463585` with pre-filled message `"Olá, vim pelo site e quero agendar uma detecção de vazamento."`
- No em dashes (`—`) in visible copy — use period, comma, colon, or `·` instead
- Contact: `cacavazamentoshidrodetect@gmail.com`, Instagram: `@hidrodetect_cacavazamentos`
- Always mention "Porto Velho e região"

## SEO para IA

- `llms.txt` na raiz — structured business description para AI crawlers
- `robots.txt` com `Allow` explícito para GPTBot, ClaudeBot, PerplexityBot
- Schema JSON-LD: LocalBusiness + FAQPage (5 perguntas)

## Segurança de versionamento

O repo é público (`elevadoaocubomidia-maker/hidrodetect-landpage`). O `.gitignore` bloqueia:
- `.claude/` — contém briefing do cliente com CNPJ, endereço, contato privado; configs locais
- `Referencia_LP` — materiais de referência interna da agência

Nunca desativar essas entradas. Se adicionar arquivo novo que contenha dado de cliente (briefing, proposta, referência), incluir o padrão no `.gitignore` antes de commitar. VS Code faz auto-stage de untracked quando usuário clica "Commit" sem nada staged — sempre rodar `git status` antes.

## Gerado pelo Squad page-builder

Este site foi reconstruído pelo squad `page-builder` do Opensquad em 2026-04-08 (run: `2026-04-08-191514`). Output original em `d:/Estudos - Automações - IA - DEV/Elevado ao Cubo/SQUAD/squads/page-builder/output/2026-04-08-191514/`.
