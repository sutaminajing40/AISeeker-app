# AISeeker-app

AISeeker プロジェクトのフロントエンドアプリケーションです。

## 概要

このリポジトリは、以前モノレポとして管理していたAISeekerプロジェクトから分離したフロントエンド部分です。AIを活用した検索機能のユーザーインターフェースを提供します。

## 関連リポジトリ

- バックエンド: [AISeeker-api](https://github.com/sutaminajing40/AISeeker-api)
- 旧モノレポ: [AISeeker](https://github.com/sutaminajing40/AISeeker)

## セットアップ

1. リポジトリをクローン

   ```
   git clone https://github.com/sutaminajing40/AISeeker-app.git
   cd AISeeker-app
   ```

2. 依存関係をインストール

   ```
   npm install
   ```

3. 環境変数を設定
   `.envsample` ファイルを `.env` にコピーします：

   ```
   cp .envsample .env
   ```

   必要に応じて、`.env` ファイル内のPORT番号を変更してください。

4. 開発サーバーを起動

   ```
   npm run dev
   ```

   これで、アプリケーションが指定したPORT（デフォルトは4000）で立ち上がります。

## 主な機能

- 文書アップロード機能
- 検索インターフェース
- 検索結果の表示

## 今後の計画

- あとで追記

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](LICENSE)ファイルを参照してください。

ご質問や提案がありましたら、Issueを作成してください。
