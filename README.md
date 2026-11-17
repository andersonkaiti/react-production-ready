# React Production Ready

![CI](https://github.com/andersonkaiti/react-production-ready/actions/workflows/ci.yml/badge.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Sentry](https://img.shields.io/badge/Sentry-monitorado-362D59?logo=sentry&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-S3_+_CloudFront-FF9900?logo=amazonwebservices&logoColor=white)

Starter React 19 + Vite + TypeScript pronto para produção, com shadcn/ui, Sentry, Microsoft Clarity e deploy na AWS (S3 + CloudFront).

## Stack

| Categoria     | Tecnologias                                     |
| ------------- | ----------------------------------------------- |
| Framework     | React 19, React Router                          |
| Build         | Vite, TypeScript                                |
| UI            | Tailwind CSS, shadcn/ui (Base UI)               |
| Monitoramento | Sentry (erros e source maps), Microsoft Clarity |
| Qualidade     | Biome, Husky, commitlint (gitmoji)              |
| CI e deploy   | GitHub Actions, AWS CodeBuild, S3, CloudFront   |

## Fluxo de deploy

```mermaid
flowchart LR
  A[Push] --> B[CodeBuild]
  B --> C[pnpm build]
  C --> D[Sourcemaps no Sentry]
  C --> E[S3 sync da dist]
  E --> F[CloudFront invalida index.html]
  F --> G[Usuário]
```

## Deploy

O CI roda no GitHub Actions (`.github/workflows/ci.yml`) e o deploy no AWS CodeBuild (`buildspec.yml`), conforme o fluxo acima.

No projeto do CodeBuild, defina `S3_BUCKET` (nome do bucket) e `CLOUDFRONT_DISTRIBUTION_ID` (ID da distribuição), além das variáveis de ambiente descritas abaixo.

Para as rotas do React Router funcionarem, configure o CloudFront com `index.html` como default root object e mapeie os erros 403 e 404 para `/index.html` com status 200.

## Como rodar

```sh
pnpm install
pnpm dev
```

| Script         | Descrição                            |
| -------------- | ------------------------------------ |
| `pnpm dev`     | Inicia o servidor de desenvolvimento |
| `pnpm build`   | Checa os tipos e gera o build        |
| `pnpm preview` | Serve o build de produção            |

## Variáveis de ambiente

Crie um arquivo `.env`:

| Variável            | Uso                                 |
| ------------------- | ----------------------------------- |
| `VITE_SENTRY_DSN`   | DSN do Sentry                       |
| `VITE_CLARITY_ID`   | ID do projeto no Clarity            |
| `SENTRY_ORG`        | Upload de source maps (só no build) |
| `SENTRY_PROJECT`    | Upload de source maps (só no build) |
| `SENTRY_AUTH_TOKEN` | Upload de source maps (só no build) |

Sentry e Clarity só rodam no build de produção.
