export default function changeUrl(text, hash) {
    if(text == '' && window.location.hash != '#/' && !hash) window.location.href = window.location.origin + '#/';
    if(text != '' && window.location.hash != '#/search' && !hash) window.location.href = window.location.origin + '#/search';
    if(hash) window.location.href = window.location.origin + hash;
}