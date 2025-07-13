# 海外インバウンド向け災害時情報LP

海外からのインバウンド観光客が日本滞在中に災害（地震、津波、大雨、台風など）に遭遇した場合に、安全に避難し、必要な情報を取得するためのランディングページ（LP）です。

## 🌟 主な機能

### 多言語対応
- **日本語** (ja)
- **英語** (en)
- **中国語** (zh)
- **韓国語** (ko)

### 緊急時情報
- 災害時の行動フロー（地震、津波、大雨、台風）
- 緊急連絡先一覧
- 在日大使館・領事館へのリンク
- 役立つスマホアプリ情報

### ユーザビリティ
- レスポンシブデザイン（スマートフォン最優先）
- 直感的なナビゲーション
- 高速ロード
- オフライン対応

### アクセシビリティ
- WAI-ARIA準拠
- キーボードナビゲーション対応
- 高コントラストモード対応
- スクリーンリーダー対応

## 🚀 デプロイ手順

### 1. ローカル開発環境での実行

```bash
# プロジェクトディレクトリに移動
cd インバウンド向け災害時まとめ

# 簡易HTTPサーバーを起動（Python 3）
python3 -m http.server 8000

# または Node.js の場合
npx http-server -p 8000

# または PHP の場合
php -S localhost:8000
```

### 2. 本番環境へのデプロイ

#### Netlify を使用する場合
1. GitHubにリポジトリをプッシュ
2. Netlifyで新しいサイトを作成
3. GitHubリポジトリを接続
4. ビルド設定：
   - Build command: なし
   - Publish directory: `.`

#### Vercel を使用する場合
1. GitHubにリポジトリをプッシュ
2. Vercelで新しいプロジェクトを作成
3. GitHubリポジトリを接続
4. 自動デプロイが開始されます

#### 従来のWebサーバーを使用する場合
1. 全てのファイルをWebサーバーのドキュメントルートにアップロード
2. 必要に応じて.htaccessファイルでリライトルールを設定

## 📁 プロジェクト構造

```
インバウンド向け災害時まとめ/
├── index.html              # メインHTMLファイル
├── css/
│   └── style.css           # スタイルシート
├── js/
│   ├── main.js             # メインJavaScript
│   └── translations.js     # 多言語翻訳データ
├── assets/
│   ├── favicon.ico         # ファビコン
│   └── disaster-info-guide.pdf  # オフライン用PDF
├── sw.js                   # Service Worker
└── README.md               # このファイル
```

## 🔧 技術仕様

### フロントエンド
- **HTML5**: セマンティックマークアップ
- **CSS3**: レスポンシブデザイン、Flexbox、Grid
- **JavaScript (ES6+)**: モジュラー設計、Promise対応

### パフォーマンス
- Service Workerによるオフライン対応
- 画像の遅延読み込み
- スクロール最適化
- キャッシュ戦略

### SEO対策
- メタタグ最適化
- 構造化データ
- 多言語対応（hreflang）
- サイトマップ対応

## 🌐 対応ブラウザ

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 対応デバイス

- スマートフォン（iOS/Android）
- タブレット
- デスクトップPC

## 🔒 セキュリティ

- HTTPS必須
- Content Security Policy (CSP) 対応
- XSS対策
- CSRF対策

## 📊 アクセス解析

Google Analytics 4の実装例：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📞 サポート

### 技術的な問題
- GitHub Issues で報告
- プルリクエスト歓迎

### 緊急時対応
- 災害発生時は自治体の公式情報を優先
- このサイトは補助的な情報提供ツール

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🤝 貢献

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/AmazingFeature`)
3. 変更をコミット (`git commit -m 'Add some AmazingFeature'`)
4. ブランチにプッシュ (`git push origin feature/AmazingFeature`)
5. プルリクエストを作成

## 📈 今後の改善予定

- [ ] より多くの言語対応（タイ語、ベトナム語、インドネシア語など）
- [ ] プッシュ通知機能
- [ ] 音声読み上げ機能
- [ ] 避難所マップ機能
- [ ] リアルタイム交通情報
- [ ] 多言語対応医療機関データベース

## 🙏 謝辞

このプロジェクトは以下の方々の協力により作成されました：
- 気象庁
- 観光庁
- 各自治体
- 多言語翻訳協力者

---

**注意**: このサイトは災害時の補助的な情報提供ツールです。緊急時は必ず自治体の公式情報を確認してください。 