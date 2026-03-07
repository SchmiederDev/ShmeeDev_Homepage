const bool2str = b => b ? 'true' : 'false';

const toggleAriaExpanded = (el, state = undefined) => {
    ((el) => el.setAttribute('aria-expanded',
        state !== undefined
            ? state
            : bool2str(el.getAttribute('aria-expanded') !== 'true'))
    )(el);
};

const linkToButton = (el, ariaExpand = true, hasPopup = false) => {
    const button = document.createElement('BUTTON');
    button.innerHTML = el.innerHTML;
    for (let i = 0; i < el.attributes.length; i++) {
        const attrib = el.attributes[i];
        if (attrib.name === 'href' || attrib.name === 'target') {
            continue;
        }
        button.setAttribute(attrib.name, attrib.value);
        if (ariaExpand) {
            button.setAttribute('aria-expanded', 'false');
        }
        if (hasPopup) {
            button.setAttribute('aria-haspopup', 'true');
        }
    }
    el.parentNode.insertBefore(button, el);
    el.parentNode.removeChild(el);
    return button;
};

const handleMenuLinkClick = (ev) => {
  toggleAriaExpanded(ev.target);
};

const initMainNav = () => {
  const buttonlinks = document.querySelectorAll('.main-nav__link:has(+ .main-nav__sub-list)');
  console.log(buttonlinks); // eslint-disable-line

  buttonlinks.forEach(link => {
    link = linkToButton(link);
    link.removeAttribute('aria-current');
    link.addEventListener('click', handleMenuLinkClick);
  })
};

// init on desktop
// add resize
// add focusout
document.addEventListener( 'DOMContentLoaded', initMainNav);
