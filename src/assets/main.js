/*
======================================================
Utils
*/

const forAllIn = (el) => (selector, fn) => Array.prototype.forEach.call(el.querySelectorAll(selector), fn);
const forAll = forAllIn(document);

const isMobile = () => (e => e && e.offsetParent !== null)(document.querySelector('.main-nav__mobile-toggle'));

const debounce = (fn, delay = 50) => {
    let to;
    return function() {
        if (to) {
            clearTimeout(to);
        }
        to = setTimeout(() => fn(arguments), delay);
    };
};

const bool2str = b => b ? 'true' : 'false';

const toggleAriaExpanded = (el, state = undefined) => {
    ((el) => el.setAttribute('aria-expanded',
        state !== undefined
            ? state
            : bool2str(el.getAttribute('aria-expanded') !== 'true'))
    )(el);
};

const linkToButton = (el, ariaExpand = true) => {
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
    }
    el.parentNode.insertBefore(button, el);
    el.parentNode.removeChild(el);
    return button;
};

/*
======================================================
Main Nav handling
*/

const handleMenuLinkClick = (ev) => {
  toggleAriaExpanded(ev.target);
};

const initMainNav = () => {
  if (isMobile()) {
    document.querySelector('.main-nav__mobile-toggle').addEventListener('click', handleMenuLinkClick);
  }
  if (!isMobile()) {
    forAll('.main-nav__link:has(+ .main-nav__sub-list)',
      link => {
        link = linkToButton(link);
        link.removeAttribute('aria-current');
        link.addEventListener('click', handleMenuLinkClick);
      }
    );
  }
};

/*
======================================================
Resize handler
*/

let header, currentHeaderWidth;
const headerBreakpoint = 1380;

const isChangingBreakpoint = (newWidth) => {
  console.log(newWidth); // eslint-disable-line
    const prevWidth = currentHeaderWidth;
    currentHeaderWidth = newWidth;
    if ((prevWidth > headerBreakpoint) && (newWidth > headerBreakpoint)) {
        return false;
    }
    if ((prevWidth < headerBreakpoint) && (newWidth < headerBreakpoint)) {
        return false;
    }
    return true;
};

const resetAllMenus = () => {
    if (isChangingBreakpoint(header.clientWidth)) {
        window.location.reload();
    }
};

const initResizeHandler = () => {
    header = document.querySelector('.page-header');
    currentHeaderWidth = header.clientWidth;
    window.addEventListener('resize', debounce(resetAllMenus, 100, {
        'leading': false,
        'trailing': true,
    }));
};

// init on desktop
// add focusout
document.addEventListener( 'DOMContentLoaded', function() {
  initResizeHandler();
  initMainNav();
});
