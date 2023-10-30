import  ReactViewAdobe from './index'
(
    function(){
        if(window && (window as any)['ReactViewAdobe']){
            return;
        } else {
            (window as any)['ReactViewAdobe'] = 
            ReactViewAdobe;
        }
    }
)();