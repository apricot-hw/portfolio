# Honma Wataru Portfolio

制作物、経験、スキルを紹介するAstro製ポートフォリオサイトです。GitHub Pagesへ自動デプロイできます。

## Requirements

- Node.js 22.12.0以上
- npm

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Structure

- `src/data/site.ts`: サイト情報、スキル、タイムライン
- `src/data/works.ts`: 作品データ
- `src/pages/`: 各ページ
- `src/components/`: 共通コンポーネント
- `src/utils/paths.ts`: GitHub Pagesのベースパスを考慮したURL生成
- `public/images/works/`: 作品画像

## Deployment

`main`ブランチへのpushで`.github/workflows/deploy.yml`が実行され、GitHub Pagesへ公開されます。リポジトリ名はビルド時に取得されるため、サブパスへ自動的に反映されます。

## Security

- AstroのContent Security Policyを有効化
- 外部リンクは新しいタブから元ページを操作できない設定
- メールアドレスは初期HTMLへ平文で出力しない
- DependabotでnpmとGitHub Actionsの更新を週次確認
- `npm run check`と`npm audit`で静的検査・依存関係監査を実施
