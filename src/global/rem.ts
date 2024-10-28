import {getClientRatio} from '@/utils/rem';

/**
 * @description Dynamically set the root font size
 */
export function setRem() {
    const ratio = getClientRatio();
    document.documentElement.style.fontSize = `${16 * ratio}px`;
}

export function initRem() {
    setRem();
    window.addEventListener('resize', setRem);
}
