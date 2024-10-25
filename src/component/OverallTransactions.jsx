import styles from './OverallTransactions.module.css';
import DashboardHeader from './DashboardHeader';
import { useEffect, useState } from 'react';
import { useProvider } from './PostProviders';
import LoadingScreen from './LoadingScreen';

function OverallTransactions() {
    const { doc, getDoc, db, userBalance, userEarned, userSpent, userGained, dispatch } = useProvider();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUserBalanceIncome() {
            const userId = localStorage.getItem('userId');
            console.log(loading);

            try {
                const userRef = doc(db, 'user', userId);
                const userSnapshot = await getDoc(userRef);

                if (userSnapshot.exists()) {
                    console.log(userSnapshot.data())
                    const data = userSnapshot.data()?.transactions || [];
                    const totalBalance = userSnapshot.data()?.totalBalance || 0;
                    console.log('Fetched Data:', data);

                    if (data.length > 0) {
                        const totalExpense = data.reduce((acc, curr) => {
                            const expense = parseFloat(curr?.expense) || 0;
                            return acc + expense;
                        }, 0);

                        const totalIncome = data.reduce((acc, curr) => {
                            const income = parseFloat(curr?.income) || 0;
                            return acc + income;
                        }, 0);

                        // Calculate user balance with fallback for undefined values
                        const calculatedBalance = Number(totalBalance) + Number(userGained || 0) - Number(userSpent || 0);

                        dispatch({
                            type: 'USERBALANCE',
                            payload: calculatedBalance
                        });
                        dispatch({ type: 'USER_EARNED', payload: userSnapshot.data().income || 0 });
                        dispatch({ type: 'USER_GAINED', payload: totalIncome });
                        dispatch({ type: 'USER_SPENT', payload: totalExpense });
                    } else {
                        console.log("No transactions found for the user.");
                    }
                } else {
                    console.log("User document does not exist.");
                }
            } catch (err) {
                console.error("Error fetching user data:", err);
            } finally {
                setLoading(false);
            }
        }

        fetchUserBalanceIncome();
    }, [dispatch, doc, getDoc, db, userSpent, userGained]);

    if (loading) {
        return <LoadingScreen />;
    }

    return (
        <section style={{ width: '100%' }}>
            <DashboardHeader />
            <h1 style={{ color: 'var(--color-light--grey)' }}>Dashboard</h1>
            <div className={styles.container}>
                <ul className={styles.ul}>
                    <li className={styles.listItem} style={{ borderBottom: '1px solid var(--color-brown--1)' }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6" />
                        </svg>
                        <div className={styles.column}>
                            <span>Available balance</span>
                            <span>{`$${new Intl.NumberFormat('en-UK').format(userBalance || 0)}`}</span>
                        </div>
                    </li>

                    <li className={styles.listItem}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6" />
                        </svg>
                        <div className={styles.column}>
                            <span>Spent</span>
                            <span>{`$${new Intl.NumberFormat('en-UK').format(userSpent || 0)}`}</span>
                        </div>
                    </li>

                    <li className={styles.listItem}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6" />
                        </svg>
                        <div className={styles.column}>
                            <span>Gained</span>
                            <span>{`$${new Intl.NumberFormat('en-UK').format(userGained || 0)}`}</span>
                        </div>
                    </li>

                    <li className={styles.listItem}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="10" cy="10" r="7" stroke="white" strokeWidth="6" />
                        </svg>
                        <div className={styles.column}>
                            <span>Earned Per Month</span>
                            <span>{`$${new Intl.NumberFormat('en-UK').format(userEarned || 0)}`}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <h1 style={{ color: 'var(--color-light--grey)' }}>Recent transactions</h1>
        </section>
    );
}

export default OverallTransactions;
