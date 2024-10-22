import PieChat from './PieChat'
import styles from './OverallTransactions.module.css'
import DashboardHeader from './DashboardHeader'
import RecentTransactions from './RecentTransactions'
import { useEffect } from 'react'
import { useProvider } from './PostProviders'


function OverallTransactions() {
const {doc, getDoc, db, userBalance, userEarned, userSpent, userGained, dispatch} = useProvider();


    useEffect(() =>{
        async function fetchUserBalanceIncome(){
            const userId = localStorage.getItem('userId');
            console.log(userId)
            try{
                const userRef = doc(db, 'user', userId);
                const userSnapshot = await getDoc(userRef);
                console.log(userSnapshot)
                if(userSnapshot.exists()){
                    dispatch({type:'USERBALANCE', payload:userSnapshot.data().totalBalance})
                    dispatch({type:'USER_EARNED', payload:userSnapshot.data().income})
                    console.log(userBalance, userEarned);
                }
            }catch(err){
                console.log(err)
            }
        }
        console.log('Working')
        fetchUserBalanceIncome()
    },[])
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
                    <span>{`$${userBalance}.00`}</span>
                </div>
                </li>

                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Spent</span>
                    <span>{`$${userSpent}.00`}</span>
                </div>
                </li>

                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Gained</span>
                    <span>{`$${userGained}.00`}</span>
                </div>
                </li>
                <li className={styles.listItem}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6"/>
                </svg>
                <div className={styles.column}>
                    <span>Earned Per Month</span>
                    <span>{`$${userEarned}.00`}</span>
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
