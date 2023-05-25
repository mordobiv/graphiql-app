import { useAppDispatch } from "../../store/hooks"
import { switchLanguage } from "../../store/language";

export default function LanguageSelection() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <span onClick={() => dispatch(switchLanguage())}>ru </span>
      <span onClick={() => dispatch(switchLanguage())}>en</span>
    </div>
  )
}
