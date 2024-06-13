## 使用技術一覧
### 言語系
<p style="display: inline">
  <img src="https://img.shields.io/badge/HTML-555555.svg?logo=html5&style=for-the-badge">
  <img src="https://img.shields.io/badge/CSS-555555.svg?logo=css3&style=for-the-badge">
  <img src="https://img.shields.io/badge/JavaScript-555555.svg?logo=javascript&style=for-the-badge">
</p>

### ライブラリ・フレームワーク
<p style="display: inline">
  <img src="https://img.shields.io/badge/React-555555.svg?logo=react&style=for-the-badge">
  <img src="https://img.shields.io/badge/MUI-555555.svg?logo=mui&style=for-the-badge">
  <img src="https://img.shields.io/badge/Leaflet-555555.svg?logo=leaflet&style=for-the-badge">
</p>

### API
<img src="https://img.shields.io/badge/Ipinfo-555555.svg?logo={}&style=for-the-badge">


## 目次

1. [プロジェクトの概要](#プロジェクトの概要)
2. [環境](#環境)
3. [ディレクトリ構成](#ディレクトリ構成)
4. [事前準備](#事前準備)
5. [環境開発構築](#環境開発構築)


## プロジェクトの概要
### プロジェクト名
ALTMAP (Access Log To heatMAP)

### プロジェクトについて
アクセスログからIPアドレスを抽出し，アクセス元をヒートマップで可視化するツール

### プロジェクトのデモ画像
<img width="1470" alt="demo" src="https://github.com/Tomee0818/ALTMAP/assets/107944091/7587eb24-403a-45ec-84ae-cc8687442c37">


## 環境
| 言語・フレームワーク  | バージョン |
| --------------------- | ---------- |
| Node.js               | 21.1.0     |
| React                 | 18.3.1     |
| MUI                   | 5.15.19    |
| Leaflet               | 1.9.4      |

その他のパッケージのバージョンは package.json を参照してください


## ディレクトリ構成
<pre>
.
├── .env.local
├── .gitignore
├── README.md
├── jsconfig.json
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src
    ├── App.jsx
    ├── App.test.js
    ├── api
    ├── assets
    ├── index.js
    ├── layout
    ├── pages
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── store
    ├── theme
    └── utils
</pre>


## 事前準備
本プロジェクトでは，IPアドレスの情報を取得するために，IPinfo のAPIを使用しています
このAPIを使用するには，アクセストークンを取得する必要があるため，[IPinfo公式サイト](https://ipinfo.io/)で取得してください


## 開発環境構築
1. Githubから本リポジトリをクローン
```
git clone https://github.com/Tomee0818/ALTMAP.git
```

2. パッケージのインストール
```
npm install
```

3. .envファイルの作成
```
cp .env.local.sample .env.local
```
この`.env.local`ファイル内の`REACT_APP_ACCESS_TOKEN`に[IPinfoの公式サイト](https://ipinfo.io/)で取得したアクセストークンを記入

4. プロジェクトを実行
```
npm run start
```
