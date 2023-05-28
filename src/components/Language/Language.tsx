import { useAppDispatch } from '../../store/hooks';
import { switchLanguage } from '../../store/language';
import styles from './Language.module.scss';

export default function LanguageSelection() {
  const dispatch = useAppDispatch()

  return (
    <div>
      <img className={styles.switcher} src='src/assets/ru-eng.png' onClick={() => dispatch(switchLanguage())} />
    </div>
  )
}
