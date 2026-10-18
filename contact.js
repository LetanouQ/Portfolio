// Copier l’adresse sans lancer une application de messagerie.
document.querySelectorAll('.copy-email').forEach((button) => {
  button.addEventListener('click', async () => {
    const address = button.parentElement.querySelector('.email-address');
    const status = button.closest('.header-contact').querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(address.textContent.trim());
      status.textContent = 'Adresse copiée';
    } catch {
      const range = document.createRange();
      range.selectNodeContents(address);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = 'Adresse sélectionnée : Ctrl+C pour copier';
    }
  });
});
