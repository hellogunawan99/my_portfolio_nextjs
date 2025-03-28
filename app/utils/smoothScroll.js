export function smoothScroll(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  }