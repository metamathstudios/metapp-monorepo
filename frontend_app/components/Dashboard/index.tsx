import SideBar from './components/SideBar'
import Metamask from './components/MetamaskComponent'
import Gallery from './components/Gallery'

import styles from './styles.module.scss'

const DashboardComponent = () => {
  return (
    <div className={styles.container}>
      <SideBar />

      <Gallery />
    </div>
  )
}

export default DashboardComponent