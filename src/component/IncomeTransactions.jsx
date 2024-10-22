// import { useEffect } from 'react';
import Toggle from '../UI/Toggle'
import IncomeTransactionList from './IncomeTransactionList'
import styles from './IncomeTransactions.module.css'
import PieChat from './PieChat'
import { useProvider } from './PostProviders';

function IncomeTransactions() {
    // doc, getDoc, db, userBalance, userEarned, dispatch
    const {userSpent, userGained} = useProvider();
    // useEffect(() =>{
    //     async function fetchUserIncome(){
    //         const userId = localStorage.getItem('userId');
    //         console.log(userId)
    //         try{
    //             const userRef = doc(db, 'user', userId);
    //             const userSnapshot = await getDoc(userRef);
    //             console.log(userSnapshot)
    //             if(userSnapshot.exists()){
    //                 dispatch({type:'USERBALANCE', payload:userSnapshot.data().totalBalance})
    //                 dispatch({type:'USER_EARNED', payload:userSnapshot.data().income})
    //                 console.log(userBalance, userEarned);
    //             }
    //         }catch(err){
    //             console.log(err)
    //         }
    //     }
    //     console.log('Working')
    //     fetchUserIncome()
    // },[])
    
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
                    <span>{`$${userGained}.00`}</span>
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
            </ul>
            <PieChat />
        </div>
        <IncomeTransactionList />
        </section>
    )
}

export default IncomeTransactions
