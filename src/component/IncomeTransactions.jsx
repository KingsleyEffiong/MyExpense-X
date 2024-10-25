import { useEffect } from 'react';
import Toggle from '../UI/Toggle'
import IncomeTransactionList from './IncomeTransactionList'
import styles from './IncomeTransactions.module.css'
import PieChat from './PieChat'
import { useProvider } from './PostProviders';

function IncomeTransactions() {
    const {userSpent, userGained, doc, db, getDoc, dispatch} = useProvider();
    useEffect(() => {
        async function incomeData() {
            const userId = localStorage.getItem('userId');
            try {
                const userRef = doc(db, 'user', userId);
                const userSnapshot = await getDoc(userRef);
                if (userSnapshot.exists()) {
                    const data = userSnapshot.data()?.transactions || [];
                    const totalExpense = data.reduce((acc, curr) => {
                        const expense = parseFloat(curr.expense);
    
                            if (!isNaN(expense)) {
                                return acc + expense;
                            }
                            return acc;
                        }, 0);
        
                    const totalIncome = data.reduce((acc, curr) => {
                        const income = parseFloat(curr.income);
    
                            if (!isNaN(income)) {
                                return acc + income;
                            }
                            return acc;
                        }, 0);
                   dispatch({type:'USER_GAINED', payload:totalIncome})
                   dispatch({type:'USER_SPENT', payload:totalExpense})
                }
            } catch (err) {
                console.log(err);
            }
        }
        incomeData();
    }, [doc, db, getDoc, dispatch]);
    
    
    
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
                    <span>Gained</span>
                    <span>{`$${new Intl.NumberFormat('en-UK').format(userGained)}`}</span>
                </div>
                </li>

                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Spent</span>
                    <span>{`$${new Intl.NumberFormat('en-UK').format(userSpent)}`}</span>
                </div>
                </li>
            </ul>
            <PieChat />
        </div>
        <IncomeTransactionList />
        </section>
    )
}

export default IncomeTransactions
