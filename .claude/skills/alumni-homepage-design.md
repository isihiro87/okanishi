---
name: alumni-homepage-design
description: 岡崎西高校同窓会の複数ページWebサイト向けデザインシステム。AIっぽい没個性デザインを避け、西高の紺を骨格に、卒業生の温かみを重ねた独自UIを生成する。
---

# 岡崎西高校同窓会 デザインシステム

AIが生成するUIは「Inter、紫グラデーション、白背景」に収束しがち（Distributional convergence）。
このスキルは、その没個性化を防ぎ、文脈に合った独自のデザインを実現する。

## デザイン方針: Quiet Nostalgia（静かな郷愁）

落ち着きと温もりが共存する空気感。派手さではなく、余白と質感で語るデザイン。
「学校の延長」ではなく「卒業生の場所」として、西高の紺に温もりを重ねる。

---

## 1. サイト構成（複数ページ）

```
index.html .............. トップページ（ハブ）
about.html .............. 同窓会について（挨拶・組織・沿革）
news.html ............... お知らせ一覧
news-detail.html ........ お知らせ詳細（テンプレート）
events.html ............. イベント一覧・申込
membership.html ......... LINE登録・何回生計算機
contact.html ............ お問い合わせ
```

### ページの役割分担
- **トップページ**: 各ページへの導線。最新情報のダイジェスト + キャッチコピー
- **コンテンツページ**: 1つのテーマに集中。深く読める構成
- **フォームページ**: お問い合わせ・申込。入力に集中できる静かなレイアウト

---

## 2. 共通レイアウト（全ページ共通）

### Header
- 背景: --navy（#1A3358）
- 高さ: 64px、position: sticky
- 左: 同窓会名（Zen Kaku Gothic New / white）
- 右: ナビリンク（Noto Sans JP 400 / white、現在ページはunderline --accent-warm）
- モバイル: ハンバーガーメニュー（CSS-only）

### Footer
- 背景: --navy
- テキスト: white / opacity 0.7
- 内容: 同窓会名 / 学校公式リンク / コピーライト
- padding: 40px

### コンテンツエリア
- max-width: 840px、margin: 0 auto
- padding: 0 24px（モバイル余白確保）

---

## 3. Typography（タイポグラフィ）

| 用途 | フォント | weight | 備考 |
|------|---------|--------|------|
| 見出し h1/h2 | Zen Kaku Gothic New | 900 | 力強く温かい和のゴシック |
| 見出し h3 | Zen Kaku Gothic New | 700 | 小見出し用 |
| 本文 | Noto Sans JP | 300/400 | 可読性と上品さ |
| ナビ・ボタン | Noto Sans JP | 400 | UI要素 |
| キャッチコピー・引用 | Shippori Mincho | 400 | エモさを添える明朝体（限定使用） |

### ルール
- **絶対に使わない**: Inter, Roboto, Arial, Open Sans, system-ui
- **ウェイトコントラスト**: 見出し900 vs 本文300。中間の400/600だけの組み合わせは避ける
- **サイズジャンプ**: h1は本文の3倍以上。h2は2倍以上。段階的な縮小
- **行間**: 本文 line-height: 1.9（日本語の可読性重視）

---

## 4. Color & Theme（カラーとテーマ）

CSS変数で一元管理。西高公式サイトの紺系を骨格に据えつつ、同窓会の温かみを加えた配色。

```css
:root {
  --bg-primary: #FAFAF7;       /* 温かみのあるオフホワイト（純白にはしない） */
  --bg-secondary: #EDEEF0;     /* わずかに青みを含んだライトグレー */
  --text-primary: #1E2D42;     /* 紺墨 — 紺と墨の中間色 */
  --text-secondary: #5A6270;   /* ニュートラルなクールグレー */
  --navy: #1A3358;             /* 西高の紺 — 見出し・ナビ・フッターの骨格色 */
  --navy-light: #2B4A7A;       /* 紺の明るい版 — ホバー・リンクに */
  --accent-warm: #B56B3A;      /* 赤銅色 — 温かみと郷愁のアクセント */
  --accent-warm-soft: #C89068; /* 赤銅の淡い版 */
  --line: #D0D2D4;             /* 区切り線（ニュートラル） */
}
```

### 配色ルール
- 骨格（見出し・ナビ・フッター）は **--navy** で西高との統一感を出す
- 温かみのポイント（CTAボタン・強調・引用装飾）は **--accent-warm** で郷愁を添える
- 背景は **--bg-primary** と **--bg-secondary** の交互で奥行きを作る
- 紫グラデーション禁止
- 純黒(#000)は使わない — 紺墨(#1E2D42)を使用
- 派手な水色(#3CBFEF等)やターコイズは使わない — 紺の品格を保つ

---

## 5. Components（コンポーネント）

### ページヘッダー（各コンテンツページ冒頭）
- 背景: --bg-secondary
- padding: 64px 0 48px（Headerの下に十分な空気）
- h1: Zen Kaku Gothic New 900 / --navy / センター寄せ
- サブテキスト: Noto Sans JP 300 / --text-secondary

### お知らせリスト（news.html / トップのダイジェスト）
- 縦並びリスト。カード不使用
- 各項目: 日付（--text-secondary / 小さめ）+ タイトル（--text-primary）
- 項目間は 1px solid var(--line) で区切り
- hover: タイトル色が --navy-light に変化

### イベントブロック（events.html）
- 左ボーダー 3px solid var(--navy) で視覚的に区切り
- 日時・場所・概要を縦に配置
- 申込ボタン: --accent-warm 背景 + white文字

### 引用ブロック
- 左ボーダー 3px solid var(--accent-warm)
- フォント: Shippori Mincho
- 背景: transparent（背景色を敷かない）
- padding-left: 24px

### ボタン
- **プライマリ（CTA）**: --accent-warm 背景 / white文字 / border-radius: 3px
- **セカンダリ（送信等）**: --navy 背景 / white文字
- **テキストリンク**: --navy-light / hover時 underline
- hover: opacity 0.85（色変化ではなく透明度で控えめに）
- サイズ: padding 12px 32px / font-size 本文と同じ

### フォーム（contact.html / 申込）
- input/textarea: border 1px solid var(--line) / border-radius: 2px
- focus: border-color --navy-light / outline none
- label: Noto Sans JP 400 / --text-primary / margin-bottom: 4px
- フォーム全体の幅: max-width 560px

---

## 6. Backgrounds（背景）

- 単色の白背景は禁止
- **トップページ hero部分**: 微細なノイズテクスチャ（SVGフィルター）で紙のような質感
- **コンテンツページ**: --bg-primary ベース、ページヘッダー部分のみ --bg-secondary
- セクションの切り替えが多すぎる場合は --bg-primary をベースに --line の区切り線で整理
- 薄い幾何学パターン（和柄の麻の葉や青海波をごく控えめに）はトップページのみ許可

---

## 7. Motion（モーション）

- **トップページのみ**: staggered reveal（0.1s刻みの順次フェードイン）をhero部分で使用
- **全ページ共通**: hover時の控えめな translateY(-2px) と box-shadow 変化
- **ページ遷移**: 特別なアニメーションは不要（静的サイトとして素直に遷移）
- 過度なアニメーション禁止 — 「気づくか気づかないか」の繊細さが正解
- CSS-onlyで実装（JSアニメーションライブラリ不要）

---

## 8. レスポンシブ

| | PC (841px以上) | タブレット (481-840px) | スマホ (480px以下) |
|---|---|---|---|
| コンテンツ幅 | 840px | 100% - 48px | 100% - 32px |
| セクション余白 | 80px | 56px | 40px |
| 見出しサイズ | 2.8rem | 2.2rem | 1.8rem |
| ナビ | テキストリンク | テキストリンク | ハンバーガー |
| タップ領域 | — | — | 最低48px確保 |

---

## 9. 禁止事項（AIスロップ回避）

- Inter, Roboto, Open Sans, Lato の使用
- 紫グラデーション
- 派手な水色・ターコイズ系のアクセント
- 白一色(#FFFFFF)のフラット背景
- カード型UIの乱用（情報は素直にリストや段落で見せる）
- 丸いアバター + 3カラムグリッドの定型レイアウト
- ヒーローセクションの巨大なグラデーション背景
- 同じweightのフォントの羅列
- ページ間で統一感のないバラバラなレイアウト
- 過剰なアイコン装飾（FontAwesomeアイコンの乱用など）
