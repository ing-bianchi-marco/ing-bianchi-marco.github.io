document.querySelectorAll('[data-toggle-all]').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.toggleAll;
    document.querySelectorAll(target).forEach(details => {
      details.open = true;
    });
  });
});

document.querySelectorAll('[data-collapse-all]').forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.collapseAll;
    document.querySelectorAll(target).forEach(details => {
      details.open = false;
    });
  });
});

function togglePhotoOverlay(container) {
  container.classList.toggle('enlarged');
}

window.addEventListener('click', (e) => {
  if (!e.target.closest('.photo-container')) {
    const enlargedContainer = document.querySelector('.photo-container.enlarged');
    if (enlargedContainer) {
      enlargedContainer.classList.remove('enlarged');
    }
  }
});

let printStates = [];

window.addEventListener('beforeprint', () => {
  printStates = Array.from(document.querySelectorAll('details')).map(details => [details, details.open]);
  document.querySelectorAll('details').forEach(details => {
    details.open = true;
  });
});

window.addEventListener('afterprint', () => {
  printStates.forEach(([details, open]) => {
    details.open = open;
  });
  printStates = [];
});
