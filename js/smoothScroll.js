const linksHead = document.querySelectorAll( '.menu-list__link' );
const mainSCroll = document.querySelector( '.main__scroll' );

const menu = document.querySelector( '.menu' );
const humburgerMenu = document.querySelector( '.humburger-menu' );


const newArray = [...linksHead, mainSCroll]

newArray.forEach( link => {
    link.addEventListener( 'click', ( event ) => {
        event.preventDefault();
        const ID = event.target.getAttribute( 'href' ).substr( 1 );
        document.getElementById( ID ).scrollIntoView( {
            behavior: 'smooth',
            block: 'start'
        } )
        menu.classList.remove( 'menu-active' );
        humburgerMenu.classList.remove( 'humburger-menu-active' );
    } )
} )