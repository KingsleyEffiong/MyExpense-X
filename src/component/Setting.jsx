import { useNavigate } from 'react-router-dom'
import Button from '../UI/Button'
import styles from './Setting.module.css'
function Setting() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <h1 style={{color:'var(--color-white--1)', margin:'3rem 0'}}>Setting</h1>
            <div className={styles.Ellipse12}></div>
            <div className={styles.Ellipse13}></div>
            <div className={styles.Ellipse14}></div>
            <div className={styles.contents}>
                <Button className={styles.button} onClick={()=>{}}>Update Information</Button>
                <Button className={styles.button}  onClick={() => navigate('/form-income')}>Add income</Button>
                <Button className={styles.button}  onClick={() => navigate('/form-expense')}>Add Expense</Button>
            </div>
        </div>
    )
}

export default Setting
