import { animateScroll } from "react-scroll/modules"



export const scrollToBottom = ( id ) =>{
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 0
    })
};


export const scrollToBottomAnimate = ( id ) =>{
    animateScroll.scrollToBottom({
        containerId: id,
        duration: 250
    })
};