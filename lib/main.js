import ReactViewAdobe from './index';
(function () {
    // expose ReactViewAdobe to the global object window, 
    // for cdn usage
    if (typeof window !== 'undefined' &&
        typeof (window).ReactViewAdobe === 'undefined' &&
        window.ReactViewAdobe === undefined) {
        window.ReactViewAdobe = ReactViewAdobe;
    }
})();
