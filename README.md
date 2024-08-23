# アプリ説明
***!!!作業中のためタイミングによっては不備がある可能性があります!!!***  

## 概要
Next.jsのApp Routerを使用したSSR✖️CSRのSPAで、  
アニメ情報を様々な形で取得できるギャラリーアプリです。 

Figmaを元にこちらを作成してもらう内容のオリジナル教材です。  

PWAを採用しているため、画面をスマホで開きホームに追加することで  
擬似ネイティブアプリ化することができます。  
例）　iPhoneの場合： safariで画面を開きタブメニューの共有ボタンから「ホーム画面に追加」を選択  

MUIを使用しておりますが、RSCで使用できないため本来は選定しないことの方が多い印象です。  
こちらではその確認も踏まえ試験的にMUIを使用しています。  

## 動作確認
- MacBook Pro（デベロッパーツールでiPhoneSEサイズを選択してください）
- iPhone12 mini

レスポンシブ対応はほとんどしていないため、端末サイズによって崩れる可能性があります。

## 開発期間
3~4日程度

## 学習者開発期間
確認中

# 環境構築手順

## 前提条件

Dockerアプリがインストールされていること

## 手順①：Dockerコンテナ起動

Dockerfileがあるディレクトリに移動し、下記コマンドでコンテナ起動。  

```
docker compose up --build
```

http://localhost:4444
が起動すれば成功。  
あとはこのURLをブラウザで見る

# 開発者向け

## 開発するための環境整備

vscodeのExtensionsで、

- Dev Containers  

をインストールすること。  

Dockerコンテナ起動後にDev Containersを使用して、VSCodeをコンテナ接続し起動すると
ESLintやPrettierやそれらカスタムルールが組み込まれた開発環境が構築されます。

## ディレクトリ構成について

下記構成になっている

```
.
└── src/
    ├── api/                      #API関連
    │   ├── request
    │   ├── response
    │   └── ApiPaths.ts
    ├── app/                      #APP Router
    │   ├── my_page/
    │   │   └── page.tsx
    │   ├── search_name/
    │   │   └── page.tsx
    │   ├── search_seasons/
    │   │   └── page.tsx
    │   ├── icon.svg
    │   ├── layout.tsx
    │   └── page.tsx
    ├── common/                   #共通要素
    │   ├── ClientSideLayout.tsx
    │   ├── Colors.ts
    │   ├── Const.ts
    │   └── Routes.ts
    ├── contexts/                 #ビルドインのcreateContext
    │   └── GlobalContext.tsx
    ├── features/                 #追加機能コンポーネント（その追加機能が必要なくなれば消すだけでOK）
    │   └── ...略
    ├── hooks/
    │   └── ...略
    ├── types/
    │   ├── enum/                 #enum(Union or オブジェクトリテラル)
    │   │   └── ...略
    │   └── ...略
    └── utils/                    #util系
        └── ...略
```
