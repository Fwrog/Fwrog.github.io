const wechatDialog = document.getElementById('wechat-dialog');
document.getElementById('wechat-open').addEventListener('click', () => wechatDialog.showModal());
wechatDialog.querySelector('.dialog-close').addEventListener('click', () => wechatDialog.close());
