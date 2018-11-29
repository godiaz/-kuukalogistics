function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.navbar-hoxton');
  const green = document.querySelector('.green-logo');
  const white = document.querySelector('.white-logo');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= window.innerHeight) {
        green.style.display = "block"
        white.style.display = "none"
        navbar.classList.add("navbar-hoxton-green")
      } else {
        green.style.display = "none"
        white.style.display = "block"
        navbar.classList.remove("navbar-hoxton-green")
      }
    });
  }
}

export { initUpdateNavbarOnScroll };