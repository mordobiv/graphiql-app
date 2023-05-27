import { getLocalizedText } from '../../services/localization-service'
import { useAppDispatch } from '../../store/hooks'
import { switchLanguage } from '../../store/language'

export default function LanguageSelection() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(switchLanguage())}>{getLocalizedText('switchLanguage')}</button>
    </div>
  )
}
