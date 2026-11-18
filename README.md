# HLS 再生サンプル

報告に添付できる、テストパターンとテスト音の 12 秒の HLS サンプルです。

## GitHub Pages

`main` に push 後、GitHub の **Settings → Pages** で **Deploy from a branch** を選び、`main` / `/(root)` を保存します。
公開先は `https://<owner>.github.io/<repo>/`、プレイリストはその直下の `sample.m3u8` です。

## ローカル確認

このディレクトリで `python3 -m http.server 8000` を実行し、`http://localhost:8000/` を開きます。
ネイティブ HLS 非対応ブラウザーでは CDN の hls.js を使うため、インターネット接続が必要です。

## Chromium で先頭に戻すと約6秒飛ぶケース

- 再現用: [index.m3u8](https://yakumi-ie.github.io/hls-sample/cmaf-start-seek/index.m3u8)
- 比較用: [precise.m3u8](https://yakumi-ie.github.io/hls-sample/cmaf-start-seek/precise.m3u8)

Chromium の hls.js デモで `startPosition: 7` を指定し、2番目のセグメントから再生してから `document.querySelector('video').currentTime = 0` で先頭に戻します。
素材は FFmpeg のテストパターンを使った fMP4 です。
両プレイリストは同じ映像を参照し、`EXTINF` の精度だけが異なります（`6.006` 対 `6.006006`）。
