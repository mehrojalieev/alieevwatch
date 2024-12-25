import CacheKey from "../../constants/cache-key"

export const getActiveLang = () => {
    return localStorage.getItem(CacheKey.ACTIVE_LANG_NAME) as string
}


export const setActiveLang = (langName: string) => {
    localStorage.setItem(CacheKey.ACTIVE_LANG_NAME, langName)
}