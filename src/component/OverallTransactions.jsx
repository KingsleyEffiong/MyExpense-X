import PieChat from './PieChat'
import styles from './OverallTransactions.module.css'
import DashboardHeader from './DashboardHeader'
import RecentTransactions from './RecentTransactions'
import { useEffect, useState } from 'react'
import { useProvider } from './PostProviders'
import LoadingScreen from './LoadingScreen'


function OverallTransactions() {
const {doc, getDoc, db, userBalance, userEarned, userSpent, userGained, dispatch} = useProvider();
const [loading, setLoading] = useState(true);


useEffect(() => {
    async function fetchUserBalanceIncome() {
        const userId = localStorage.getItem('userId');
        try {
            const userRef = doc(db, 'user', userId);
            const userSnapshot = await getDoc(userRef);
            if (userSnapshot.exists()) {
                const data = userSnapshot.data().transactions || [];
                if(data.length > 0){
                    const totalExpense = data.reduce((acc, curr) => {
                        const expense = parseFloat(curr?.expense);
                        return !isNaN(expense) ? acc + expense : acc;
                    }, 0);
    
                    const totalIncome = data.reduce((acc, curr) => {
                        const income = parseFloat(curr?.income);
                        return !isNaN(income) ? acc + income : acc;
                    }, 0);
    
                    dispatch({
                        type: 'USERBALANCE',
                        payload: Number(userSnapshot.data().totalBalance) + Number(userGained) - Number(userSpent)
                    });
                    dispatch({ type: 'USER_EARNED', payload: userSnapshot.data().income });
                    dispatch({ type: 'USER_GAINED', payload: totalIncome });
                    dispatch({ type: 'USER_SPENT', payload: totalExpense });
                    return;
                }
                else {
                    console.log("Issue loading data")
                }
            }
            if(userSnapshot.data().transactions === undefined){
                console.log(userSnapshot.data().transactions)
                dispatch({
                    type: 'USERBALANCE',
                    payload: Number(userSnapshot.data().totalBalance)
                });
                dispatch({ type: 'USER_EARNED', payload: userSnapshot.data().income });
                dispatch({ type: 'USER_GAINED', payload: userGained });
                dispatch({ type: 'USER_SPENT', payload: userSpent });
            }
        } catch (err) {
            console.log(err);
        }
        finally{
            setLoading(false);
        }
    }
    fetchUserBalanceIncome();
}, [dispatch, doc, getDoc, db, userSpent, userGained,loading]);

if(loading) {
    return <LoadingScreen />
}

    return (
        <section style={{width:'100%'}}>
             <DashboardHeader />
        <h1 style={{ color: 'var(--color-light--grey)' }}>Dashboard</h1>
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li className={styles.listItem} style={{borderBottom:'1px solid var(--color-brown--1)'}}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Available balance</span>
                    <span>{`$${new Intl.NumberFormat('en-UK').format(userBalance)}`}</span>
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
                    <span>Earned Per Month</span>
                    <span>{`$${new Intl.NumberFormat('en-UK').format(userEarned)}`}</span>
                </div>
                </li>
            </ul>
            <PieChat />
        </div>
        <h1 style={{color:'var(--color-light--grey)'}}>Recent transactions</h1>
        <RecentTransactions />
        </section>
    )
}

export default OverallTransactions
