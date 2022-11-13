const about = document.querySelector('.about');
const asd = Array.prototype.slice.call(about.childNodes);
for (var i = asd.length -1; i>=0; i--) {
    about.appendChild(asd[i]);
}