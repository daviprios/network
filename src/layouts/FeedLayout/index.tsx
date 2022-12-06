import { Outlet } from 'react-router-dom'
import styles from './index.module.sass'
import UserInfo from './UserInfo'

export default () => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        Network
      </div>
      <div className={styles.content}>
        <UserInfo/>
        <Outlet/>
      </div>
    </div>
  )
}