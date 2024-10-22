import styles from './LoadingScreen.module.css'
import Recordcircle from '../UI/Recordcircle'
import Recordcircle2 from '../UI/Recordcircle2'
import Logo from '../UI/Logo'
function LoadingScreen() {
    return (
        <div className={styles.container}>
          <Recordcircle />
          <Recordcircle2 />
          <Logo size={150}/>
          <h1 style={{color:'#fff'}}>EXPENSEX</h1>
        </div>
    )
}

export default LoadingScreen
