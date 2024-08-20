function toggleMenu() {  
    const menu = document.querySelector('.list');  
    const menuBtn = document.querySelector('.menu-btn');  
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة  
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة  
  }








// script.js
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggleTheme');
  const body = document.body;

  // تحقق مما إذا كان وضع الداكن مفعلاً سابقاً
  if (localStorage.getItem('theme') === 'dark') {
      body.classList.add('dark-mode');
  } else {
      body.classList.add('light-mode');
  }

  // عند النقر على الزر، بدّل بين الأوضاع
  toggleButton.addEventListener('click', () => {
      if (body.classList.contains('light-mode')) {
          body.classList.remove('light-mode');
          body.classList.add('dark-mode');
          localStorage.setItem('theme', 'dark');
      } else {
          body.classList.remove('dark-mode');
          body.classList.add('light-mode');
          localStorage.setItem('theme', 'light');
      }
  });
});





