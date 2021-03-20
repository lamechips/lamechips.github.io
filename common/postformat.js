console.log("running post-html format.");
/* post-load formatting */
function format_collapsibles() {
    let _elements = document.getElementsByClassName("collapsible");
    for(let _i=0; _i < _elements.length; ++_i) {
        let _el = _elements[ _i ];
        _el.onclick = (e)=>{
            
            let block_id = e.target.id[1];
            let block = document.getElementById( block_id );

            //let scroll_y = window.scrollY;

            if (block.hidden === false) {
                
                block.hidden = true;
            } else {
                block.hidden = false;
            }

            //window.scroll( 0, scroll_y );
        }
    }
}
format_collapsibles();

setTimeout( ()=>{
    window.scroll(0,window.scrollY + 1)
}, 10 );