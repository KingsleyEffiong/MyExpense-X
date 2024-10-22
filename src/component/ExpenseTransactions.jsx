import Toggle from '../UI/Toggle'
import ExpenseTransactionList from './ExpenseTransactionList'
import styles from './ExpenseTransactions.module.css'
import PieChat from './PieChat'

function ExpenseTransactions() {
    return (
        <section style={{width:'100%'}}>
      <div className={styles.container}> 
            <Toggle />
            <ul className={styles.ul}>
                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Spent</span>
                    <span>$ 20045</span>
                </div>
                </li>

                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Earned</span>
                    <span>$ 20045</span>
                </div>
                </li>
            </ul>
            <PieChat />
        </div>
        <ExpenseTransactionList />
        </section>
    )
}

export default ExpenseTransactions
