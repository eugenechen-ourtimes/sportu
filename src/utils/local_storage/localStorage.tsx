
const SPORT_ID = "sport-id-";
export const setSportName = (sportId: string, sportName: string) => {
    window.localStorage.setItem(SPORT_ID + sportId, sportName);
};

export const getSportName = (sportId: string) => {
    const sportName = window.localStorage.getItem(SPORT_ID + sportId);
    if (sportName === null) {
        return "球";
    }

    return sportName;
};

const SPORT_NAME = "sport-name-";
export const setSportId = (sportName: string, sportId: string) => {
    window.localStorage.setItem(SPORT_NAME + sportName, sportId);
};

export const getSportId = (sportName: string) => {
    const sportId = window.localStorage.getItem(SPORT_NAME + sportName);
    if (sportId === null) {
        return "does_not_exist";
    }

    return sportId;
};
