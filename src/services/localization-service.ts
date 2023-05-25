import translations from "../assets/localization";
import { useAppSelector } from "../store/hooks";

export function getLocalizedText(key: string) {
  const language = useAppSelector((state) => state.languageReducer.language);
  if (language === 'ru' || language === 'en') {
    return translations[key as keyof typeof translations][language];
  }
  return 'Error';
}
