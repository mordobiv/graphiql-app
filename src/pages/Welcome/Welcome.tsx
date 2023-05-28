import { getLocalizedText } from '../../services/localization-service'
import styles from './Welcome.module.scss'

export default function Welcome() {
  return (
    <div className={styles.welcome_page}>
    <div className={styles.welcome__header}>{getLocalizedText('welcome')}</div>
    <div className={styles.course}>
      <div>RS School React FE 2023 Q1</div>
      <div>{getLocalizedText('startDate')}: 13.03.2023</div>
    </div>
    <div className={styles.project}>
      <div>GraphiQL {getLocalizedText('project')}</div>
      <div>
        {getLocalizedText('graphQLDescription')}
      </div>
    </div>
    <div className={styles.team}>
      <div className={styles.team_header}>{getLocalizedText('team')}</div>
      <div className={styles.team_members}>
        <div className={styles.team_member}>
          {getLocalizedText('dzmitry')}
        </div>
        <div className={styles.team_member}>
          {getLocalizedText('miras')}
        </div>
      </div>
    </div>
    </div>
  )
}
