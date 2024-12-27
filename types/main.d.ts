import ReactViewAdobe from './index';
declare global {
    interface Window {
        ReactViewAdobe: typeof ReactViewAdobe;
    }
}
