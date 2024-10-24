import PieChat from './PieChat'
import styles from './OverallTransactions.module.css'
import DashboardHeader from './DashboardHeader'
// import RecentTransactions from './RecentTransactions'
// import { useEffect } from 'react'
// import { useProvider } from './PostProviders'


function OverallTransactions() {
// const {doc, getDoc, db, userBalance, userEarned, userSpent, userGained, dispatch} = useProvider();


// useEffect(() => {
//     async function fetchUserBalanceIncome() {
//         const userId = localStorage.getItem('userId');
//         try {
//             const userRef = doc(db, 'user', userId);
//             const userSnapshot = await getDoc(userRef);

//             if (userSnapshot.exists()) {
//                 const data = userSnapshot.data().transactions || [];

//                 const totalExpense = data.reduce((acc, curr) => {
//                     const expense = parseFloat(curr?.expense);
//                     return !isNaN(expense) ? acc + expense : acc;
//                 }, 0);

//                 const totalIncome = data.reduce((acc, curr) => {
//                     const income = parseFloat(curr?.income);
//                     return !isNaN(income) ? acc + income : acc;
//                 }, 0);

//                 dispatch({
//                     type: 'USERBALANCE',
//                     payload: Number(userSnapshot.data().totalBalance) + Number(userGained) - Number(userSpent)
//                 });
//                 dispatch({ type: 'USER_EARNED', payload: userSnapshot.data().income });
//                 dispatch({ type: 'USER_GAINED', payload: totalIncome });
//                 dispatch({ type: 'USER_SPENT', payload: totalExpense });
//             }
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     fetchUserBalanceIncome();
// }, [dispatch, doc, getDoc, db, userSpent, userGained]);

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
                    <span>{`$3323`}</span>
                </div>
                </li>

                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Spent</span>
                    <span>{`$32323`}</span>
                </div>
                </li>

                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Gained</span>
                    <span>{`$23332323`}</span>
                </div>
                </li>
                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Earned Per Month</span>
                    <span>{`$23233`}</span>
                </div>
                </li>
            </ul>
            <PieChat />
        </div>
        <h1 style={{color:'var(--color-light--grey)'}}>Recent transactions</h1>
        {/* <RecentTransactions /> */}
        </section>
    )
}

export default OverallTransactions
