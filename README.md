# HLS 再生サンプル

報告に添付できる、テストパターンとテスト音の 12 秒の HLS サンプルです。

## GitHub Pages

`main` に push 後、GitHub の **Settings → Pages** で **Deploy from a branch** を選び、`main` / `/(root)` を保存します。
公開先は `https://<owner>.github.io/<repo>/`、プレイリストはその直下の `sample.m3u8` です。

## ローカル確認

このディレクトリで `python3 -m http.server 8000` を実行し、`http://localhost:8000/` を開きます。
ネイティブ HLS 非対応ブラウザーでは CDN の hls.js を使うため、インターネット接続が必要です。
