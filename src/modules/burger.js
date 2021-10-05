const burgerFunction = () => {
    const burger = document.querySelector( '.humburger-menu' );
    const menuElem = document.querySelector( '.menu' );

    const toggleMenu = () => {
        menuElem.classList.toggle( 'menu-active' );
        burger.classList.toggle( 'humburger-menu-active' );
    }
    console.log( burger );
    burger.addEventListener( 'click', () => { toggleMenu() } )
}

export default burgerFunction;