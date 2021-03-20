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

function get_redirect_address() {
    /* use the loaded URL to build a redirect address */
    let _current_url = window.location.toString();
    let _subpath = _current_url.split("github.io/");
    console.log(_subpath)
    let _newpath = "https://flamechips.github.io/" + (_subpath.length > 1 ? _subpath[1] : "");
    return _newpath;
}
var _redirector = document.getElementById("0");
_redirector.href = get_redirect_address();
_redirector.innerText = _redirector.href.split("https://")[1];

setTimeout( ()=>{
    window.scroll(0,window.scrollY + 1)
}, 10 );