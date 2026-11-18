const player = document.querySelector('#player');
const playlist = new URL('./sample.m3u8', location.href).href;
const statusMessage = document.querySelector('#status');
const start = Number(new URLSearchParams(location.search).get('t') ?? player.dataset.start ?? 0);
const startPosition = Number.isFinite(start) && start >= 0 ? start : 0;

player.addEventListener('error', () => {
  statusMessage.textContent = '動画を再生できませんでした。';
});

if (player.canPlayType('application/vnd.apple.mpegurl')) {
  player.addEventListener('loadedmetadata', () => {
    if (startPosition < player.duration) player.currentTime = startPosition;
  }, { once: true });
  player.src = playlist;
} else if (window.Hls?.isSupported()) {
  const hls = new Hls({ startPosition });
  hls.on(Hls.Events.ERROR, (_event, error) => {
    if (error.fatal) statusMessage.textContent = `再生エラー: ${error.details}`;
  });
  hls.loadSource(playlist);
  hls.attachMedia(player);
} else {
  statusMessage.textContent = 'このブラウザーでは HLS を再生できません。';
}
