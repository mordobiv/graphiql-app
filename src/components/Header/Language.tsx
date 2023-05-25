import { getLocalizedText } from "../../services/localization-service";
import { useAppDispatch } from "../../store/hooks"
import { switchLanguage } from "../../store/language";

export default function LanguageSelection() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <span onClick={() => dispatch(switchLanguage())}>{getLocalizedText('switchLanguage')}</span>
    </div>
  )
}
