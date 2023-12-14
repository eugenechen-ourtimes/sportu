
const BALL_TYPE = "ball-type-";
export const setBallTypeChtGameName = (ballTypeNum: string, ballTypeChtGameName: string) => {
    window.localStorage.setItem(BALL_TYPE + ballTypeNum, ballTypeChtGameName);
};

export const getBallTypeChtGameName = (ballTypeNum: string) => {
    const ballTypeChtGameNameInDisk = window.localStorage.getItem(BALL_TYPE + ballTypeNum);
    if (ballTypeChtGameNameInDisk === null) {
        return "球";
    }

    return ballTypeChtGameNameInDisk;
};
