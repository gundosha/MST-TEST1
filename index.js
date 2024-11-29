document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) { // Если пользователь прокрутил больше чем на 50 пикселей
      header.classList.add('scrolled'); // Добавляем класс 'scrolled'
  } else {
      header.classList.remove('scrolled'); // Убираем класс 'scrolled'
  }
});
  
  // Button Hover Animation
  document.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  