/*Navigation */
    menuBtn = document.querySelector('nav .button')
    menuLst = document.querySelector('nav .menu')

    menuBtn.onclick = () => menuLst.classList.toggle('active') ?
    menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'

/*Mapa Google Maps*/ 
    map = document.querySelector('#footer iframe.bg-content')
    btn = document.querySelector('#footer .top')

    btn.addEventListener('click', () => {
        btn.classList.toggle('active')
        map.classList.toggle('active') ? btn.innerHTML = '-' : btn.innerHTML = '+'}
    )
