import styles from './styles.module.scss'

import Hero from './components/Hero'
import Content from './components/Content'

const LandingPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Content />
    </div>
  )
}

export default LandingPage