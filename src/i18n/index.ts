import { ref } from "vue"
import {createI18n} from "vue-i18n"
import { setActiveLang, getActiveLang } from "../utils/cache/local-storage"
import en from "./en.json"
import ru from "./ru.json"

const activeLang: any = ref(getActiveLang() || "en")

const i18n = createI18n({
    locale: activeLang.value,
    fallbackLocale: activeLang.value,
    messages: {en, ru},
    legacy: false
})


export const changeLocale = (language: 'en' | 'ru') => {
    i18n.global.locale.value = language
    setActiveLang(language)
}


export default i18n