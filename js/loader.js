const loader = document.querySelector('.spinner');
    const main = document.querySelector('.loader');

    function init() {
      setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
      }, 10);
    }

    init();
