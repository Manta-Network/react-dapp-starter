export enum DeviceSize {
    PC = 1440,
    WAP = 390,
}

/**
 * @description Get the current screen-to-design ratio.
 */
export const getClientRatio = () => {
    const clientWidth = window.innerWidth;
    let base = DeviceSize.WAP;
    if (clientWidth >= 768) {
        if (clientWidth > DeviceSize.PC && clientWidth <= 2560) {
            return 1;
        }
        base = DeviceSize.PC;
    }
    return Math.min(clientWidth / base, 2);
};


/**
 * @description Get the rem ratio.
 */
export const getRemRatio = () => {
    return 1 / 16;
};

/**
 * @description Convert px to rem.
 */
export const px2rem = (value: number, hasUnit = true) => {
    const ratio = getRemRatio();
    return `${value * ratio}${hasUnit ? 'rem' : ''}`;
};
