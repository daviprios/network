import { paths } from '$utils/paths'
import { Link } from 'react-router-dom'
import styles from './index.module.sass'

export default () => {
  return (
    <article className={styles.container}>
      <h1 className={styles.title}>User Info</h1>
      <section className={styles.profile}>
        <figure  className={styles.avatar}>
          <img/>
        </figure>
        <div className={styles.name}>
          <p>Full name</p>
          <p>Username</p>
        </div>
      </section>
      <section className={styles.shortcuts}>
        <ul>
          <li className={styles.inputListItem}>
            <div>
              🔎
              <input aria-label='search' />
            </div>
          </li>
          <li className={styles.linkListItem}>
            <Link to={paths.feed}>Feed</Link>
          </li>
          <li className={styles.linkListItem}>
            <Link to={paths.myPosts}>My Posts</Link>
          </li>
          <li className={styles.linkListItem}>
            <Link to={paths.myPages}>My Pages</Link>
          </li>
          <li className={styles.linkListItem}>
            <Link to={paths.pages}>Pages</Link>
          </li>
          <li className={styles.linkListItem}>
            <Link to={paths.notifications}>Notifications</Link>
          </li>
          <li className={styles.linkListItem}>
            <Link to={paths.settings}>Settings</Link>
          </li>
        </ul>
      </section>
    </article>
  )
}
