const wechatDialog = document.getElementById('wechat-dialog');
document.getElementById('wechat-open').addEventListener('click', () => {
  const qr = wechatDialog.querySelector('img');
  qr.src = qr.dataset.src;
  wechatDialog.showModal();
});
wechatDialog.querySelector('.dialog-close').addEventListener('click', () => wechatDialog.close());
