export const fitMenu = {
    inserted(el, binding) {
        const f = function(evt) {
            if (binding.value(evt, el)) {
                console.log('i removed');
                window.removeEventListener('scroll', f);
            }
        };
        window.addEventListener('scroll', f);
    }
};
