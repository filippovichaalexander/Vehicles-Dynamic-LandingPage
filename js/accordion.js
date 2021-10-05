const lists = document.querySelectorAll( '.feature-sub' );
const btns = document.querySelectorAll( '.feature__link' );

btns.forEach( ( btn, index ) => {
    // console.log(btn);
    btn.addEventListener( 'click', () => {
        btns.forEach( ( btnItem, idx ) => {
            // console.log(btnItem);
            if ( btnItem === btn ) {
                btnItem.classList.toggle( 'feature__link_active' );
                lists[idx].classList.toggle( 'hidden' );
                // console.log(idx);
            } else {
                btnItem.classList.remove( 'feature__link_active' );
                lists[idx].classList.add( 'hidden' );
            }
        } )
    } )
} );