import styles from './footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.githubs}>

        <div className={styles.github}>
          <div className={styles.github_logo}>
            <img className={styles.github_logo__img} src='src/assets/gh-logo.svg' />
          </div>
          <a className={styles.github_link} href='https://github.com/mordobiv'>
            mordobiv
          </a>
        </div>

        <div className={styles.github}>
          <div className={styles.github_logo}>
            <img className={styles.github_logo__img} src='src/assets/gh-logo.svg' />
          </div>
          <a className={styles.github_link} href='https://github.com/tauAdam'>
            tauAdam
          </a>
        </div>

      </div>

      <div className={styles.course}>
        <a href='https://rs.school/react/'>
          <img className={styles.course_logo} src='src/assets/rs-logo.svg' />
        </a>
      </div>

    </footer>
  )
}
