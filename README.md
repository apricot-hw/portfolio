# Portfolio Template (Astro + GitHub Pages)

授業課題向けのポートフォリオ雛形です。  
丸みのあるシンプルなデザインで、作品の中身は後で差し替えできる構成になっています。

## Tech Stack

- Astro
- TypeScript
- CSS (Design Tokens)
- GitHub Pages (GitHub Actions)

## Local Development

1. Node.js 20 以上をインストール
2. 依存をインストール

```bash
npm install
```

3. 開発サーバ起動

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages Deploy

1. GitHubリポジトリを作成して `main` へpush
2. GitHubのSettings > Pagesで `Build and deployment` を `GitHub Actions` に設定
3. `main` にpushすると `.github/workflows/deploy.yml` で自動公開

公開URL例:

- https://YOUR_USER_NAME.github.io/REPOSITORY_NAME/

## 先に差し替える場所

- サイト基本情報: `src/data/site.ts`
- 作品データ: `src/data/works.ts`
- 自己紹介: `src/pages/about.astro`
- 連絡先: `src/pages/contact.astro`
- 詳細テンプレ項目: `src/pages/works/[slug].astro`

## 注意点

- リポジトリ名を変えるとURLのベースパスが変わります。
- ActionsのBuildで `REPO_NAME` を使ってbase設定しているため、通常は自動追従します。
- 現在の文章・連絡先はプレースホルダーです。提出前に必ず実データへ変更してください。
