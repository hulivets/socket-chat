import { COLORS } from '../contstants/colors';

export const getUserNameColor = (): Function => {
    const cache = new Map();

    return (userName: string): string => {
        if (cache.has(userName)) return cache.get(userName);
        else {
            let hash: number = 7;
            for (let i = 0; i < userName.length; i++) {
                hash = userName.charCodeAt(i) + (hash << 5) - hash;
            }
            const index = Math.abs(hash % COLORS.length);
            cache.set(userName, COLORS[index]);

            return COLORS[index];
        }
    };  
};
