import Button from '../UI/Button'
import styles from './AddExpense.module.css'
function AddExpense() {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h1 style={{fontSize:'2.3rem'}}>Add Expense</h1>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.1667L15 29.0001L27 18.1667" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3L15 13.8333L27 3" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </nav>

            <section className={styles.section}>
                <form action="">
                    <div className={styles.flexControl}>
                    <label htmlFor="" style={{color:'var(--color-white--1)', fontSize:'2rem'}}>How much?</label>
                    <input type="text" name="" id="" className={styles.input}  placeholder='3'/>
                    </div>
                    <div className={styles.flexControl}>
                    <input type="text" name="" id=""  placeholder='Description'/>
                    <input type="text" name="" id=""  placeholder='Category '/>
                    </div>
                    <Button className={styles.button}>Submit</Button>
                </form>
            </section>
        </div>
    )
}

export default AddExpense
