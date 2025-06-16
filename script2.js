const modals = [
  { openId: 'openModalYouTube', modalId: 'modalYouTube', closeId: 'closeYouTube' },
  { openId: 'openModalInst', modalId: 'modalInst', closeId: 'closeInst' },
  { openId: 'openModalCloud', modalId: 'modalCloud', closeId: 'closeCloud' },
  { openId: 'openModalSpotify', modalId: 'modalSpotify', closeId: 'closeSpotify' },
  { openId: 'openModalTok', modalId: 'modalTok', closeId: 'closeTok' },
  { openId: 'openModalGram', modalId: 'modalGram', closeId: 'closeGram' }
];

modals.forEach(({ openId, modalId, closeId }) => {
  const openBtn = document.getElementById(openId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeId);

  if (openBtn && modal && closeBtn) {
    openBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
