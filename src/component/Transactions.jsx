import PieChat from './PieChat'
import styles from './Transactions.module.css'


function Transactions() {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li className={styles.listItem} style={{borderBottom:'1px solid var(--color-brown--1)'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Available balance</span>
                    <span>$ 20045</span>
                </div>
                </li>

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
    )
}

export default Transactions
