
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

const topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

const subMenuEl = document.getElementById('sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';


var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  { text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  { text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  }
];

menuLinks.forEach(link => {
  const menuItem = document.createElement('a');
  menuItem.setAttribute('href', link.href);
  menuItem.textContent = link.text;
  topMenuEl.appendChild(menuItem);
});

const topMenuLinks = topMenuEl.querySelectorAll('a');

// Event Listener for Top Menu Clicks
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName !== 'A') return;

  const clickedLink = event.target;
  
  // Remove active class from all links
  topMenuLinks.forEach(link => link.classList.remove('active'));

  // If the clicked link is already active, reset the submenu
  if (clickedLink.classList.contains('active')) {
    clickedLink.classList.remove('active');
    subMenuEl.style.top = '0';
    return;
  }

  clickedLink.classList.add('active');


  const linkObj = menuLinks.find(link => link.text === clickedLink.textContent);

  if (linkObj?.subLinks) {
    buildSubmenu(linkObj.subLinks);
    subMenuEl.style.top = '100%';
  } else {
    subMenuEl.style.top = '0';
    mainEl.innerHTML = `<h1>${clickedLink.textContent}</h1>`;
  }
});


function buildSubmenu(subLinks) {
  subMenuEl.innerHTML = '';

  subLinks.forEach(link => {
    const subMenuItem = document.createElement('a');
    subMenuItem.setAttribute('href', link.href);
    subMenuItem.textContent = link.text;
    subMenuEl.appendChild(subMenuItem);
  });
}

subMenuEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName !== 'A') return;

  subMenuEl.style.top = '0';

  topMenuLinks.forEach(link => link.classList.remove('active'));

  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
    
   // const mainEl = document.querySelector('main');
    // mainEl.style.backgroundColor = 'var(--main-bg)';
    // mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
    // mainEl.classList.add('flex-ctr');
    
    // const topMenuEl = document.getElementById('top-menu');
    // topMenuEl.style.height = '100%';
    // topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
    // topMenuEl.classList.add('flex-around');
    
    // var menuLinks = [
    //     { text: 'about', href: '/about' },
    //     { text: 'catalog', href: '/catalog' },
    //     { text: 'orders', href: '/orders' },
    //     { text: 'account', href: '/account' },
    //   ];
    
    //     menuLinks.forEach(link => {
    //     const menuItem = document.createElement('a');
    //     menuItem.setAttribute('href', link.href); 
    //     menuItem.textContent = link.text;
    //     topMenuEl.appendChild(menuItem);
    //   });


    