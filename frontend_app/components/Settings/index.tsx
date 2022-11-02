import styles from './styles.module.scss'

import SideBar from '../Dashboard/components/SideBar'
import SettingsComponent from './components/SettingsComponent'

const Settings = () => {
  return (
    <div className={styles.container}>
      <SideBar />

      <SettingsComponent />
    </div>
  )
}

export default Settings