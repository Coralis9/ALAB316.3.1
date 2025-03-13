document.addEventListener('DOMContentLoaded'), ()=> {
    const mainEl = document.querySelector('main');
    mainEl.style.backgroundColor = 'var(--main-bg)';
    mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    mainEl.classList.add('flex-ctr');
    
    const topMenuEl = document.getElementById('top-menu');
    topMenuEl.style.height = '100%';
    topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
    topMenuEl.classList.add('flex-around');
    
    var menuLinks = [
        { text: 'about', href: '/about' },
        { text: 'catalog', href: '/catalog' },
        { text: 'orders', href: '/orders' },
        { text: 'account', href: '/account' },
      ];
    
        menuLinks.forEach(link => {
        const menuItem = document.createElement('a');
        menuItem.setAttribute('href', link.href); 
        menuItem.textContent = link.text;
        topMenuEl.appendChild(menuItem);
      });

    };