import ReactViewAdobe from './index';
(function () {
    if (window && window['ReactViewAdobe']) {
        return;
    }
    else {
        window['ReactViewAdobe'] =
            ReactViewAdobe;
    }
})();
