// Mobile navigation
    const menu = document.querySelector('.menu');
    const links = document.querySelector('.links');
    menu.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.links a').forEach(a => {
      a.addEventListener('click', () => links.classList.remove('open'));
    });

    // Reveal animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('show');
      });
    }, {threshold:.12});

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Active navigation
    const sections = document.querySelectorAll('main[id], section[id]');
    const navLinks = document.querySelectorAll('.links a');

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          navLinks.forEach(link => {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, {rootMargin:'-35% 0px -55% 0px'});

    sections.forEach(section => activeObserver.observe(section));
