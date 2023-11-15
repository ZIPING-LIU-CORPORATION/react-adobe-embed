import  ReactViewAdobe from './index'
// augment the global namespace with our types
declare global {
    interface Window {
        ReactViewAdobe: typeof ReactViewAdobe;
    }
}
        
(
    

    function(){
       // expose ReactViewAdobe to the global object window, 
       // for cdn usage
       if (typeof window !== 'undefined' &&
              typeof (window).ReactViewAdobe === 'undefined' &&
              window.ReactViewAdobe === undefined
       ) {
           window.ReactViewAdobe = ReactViewAdobe;
       }
    }
)();