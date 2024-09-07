# Next.jsプロジェクト

このプロジェクトは[Next.js](https://nextjs.org/)を使用し、[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)でブートストラップされています。

## 始め方

まず、開発サーバーを起動します：

```bash
npm run dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開くと、結果が表示されます。

`app/page.tsx`を編集することでページの編集を開始できます。ファイルを編集すると、ページは自動的に更新されます。

このプロジェクトでは[`next/font`](https://nextjs.org/docs/basic-features/font-optimization)を使用して、カスタムGoogle FontのInterを自動的に最適化し読み込みます。

## もっと学ぶ

Next.jsについてさらに学ぶには、以下のリソースをご覧ください：

- [Next.js ドキュメント](https://nextjs.org/docs) - Next.jsの機能とAPIについて学びます。
- [Next.js 学習](https://nextjs.org/learn) - インタラクティブなNext.jsチュートリアルです。

[Next.js GitHub リポジトリ](https://github.com/vercel/next.js/)もチェックしてみてください。フィードバックや貢献を歓迎します！

## Vercelへのデプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの作者が提供する[Vercelプラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使用することです。

詳細については、[Next.jsデプロイドキュメント](https://nextjs.org/docs/deployment)をご覧ください。

## プロジェクト構造

`src` フォルダの主要な構造：

| フォルダ名 | 説明                                                |
| ---------- | --------------------------------------------------- |
| app        | Next.jsのアプリケーションルート                     |
| app/api    | APIルートハンドラ                                   |
| components | UIコンポーネント                                    |
| hooks      | カスタムReactフック                                 |
| lib        | フロントエンド共通ユーティリティ関数やヘルパー      |
| pages      | ページコンポーネント（従来のNext.jsルーティング用） |
| services   | サービスロジック                                    |
| styles     | スタイルシート                                      |
