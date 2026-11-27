// Mobile menu: the ☰ button opens and closes the navigation.
// On wide screens the button is hidden and the menu is always visible.
document.querySelectorAll('.menu-button').forEach(function (button) {
    var nav = document.getElementById(button.getAttribute('aria-controls'));

    function setOpen(open) {
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('menu-open', open);
    }

    button.addEventListener('click', function () {
        setOpen(button.getAttribute('aria-expanded') !== 'true');
    });

    // Close the menu after picking a link (e.g. "About" jumps down the same page)
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setOpen(false);
        });
    });
});
