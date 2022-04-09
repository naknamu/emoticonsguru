const textFaces = document.querySelectorAll('p');

//copies an emoticon to clipboard
textFaces.forEach((textFace) => {
    textFace.addEventListener('click', () => {
        navigator.clipboard.writeText(textFace.textContent);
    });
});

//bootstrap 5 tooltip init
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//tooltip message changes when clicked
//then goes back to original message when mouse enters another element
$('p').each(function(i, obj) {
    obj.addEventListener('click', () => {
        $(this).attr('data-bs-original-title', 'Copied');
        $(this).tooltip('show');
    });
    obj.addEventListener('mouseenter', () => {
        $(this).attr('data-bs-original-title', 'Click to copy');
        $(this).tooltip('show');
    });
});