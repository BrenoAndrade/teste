export default function changeUrl(text, hash) {
    if(text == '' && window.location.hash != '#/' && !hash) window.location.hash = '#/';
    if(text != '' && window.location.hash != '#/search' && !hash) window.location.hash = '#/search';
    if(hash) window.location.hash = hash;
}