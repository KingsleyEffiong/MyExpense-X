import { useEffect, useState } from 'react';
import { useProvider } from './PostProviders';
import styles from './RecentTransactions.module.css';

function RecentTransactions() {
    const { getDoc, doc, db, dispatch, userAllData } = useProvider();
    const [loading, setLoading] = useState(true);
    const formatDate = (seconds) => {
        const date = new Date(seconds * 1000); 
        return date.toLocaleString();
    };
    useEffect(() => {
        async function expenseData() {
            const userId = localStorage.getItem('userId');
            try {
                const userRef = doc(db, 'user', userId);
                const userSnapshot = await getDoc(userRef);
                if (userSnapshot.exists()) {
                    const data = userSnapshot.data();
                    dispatch({ type: 'USERALLDATA', payload: data });
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        expenseData();
    }, [getDoc, doc, db, dispatch]);

    if (loading) {
        return <p style={{ color: 'var(--color-white--1)' }}>Loading...</p>;
    }

    // Render the transactions or display 'No transaction yet'
    return (
        <div className={styles.container}>
            {
                userAllData? (
                    
                    userAllData.transactions
                    .sort((a, b) => b.timeOfTransaction.seconds - a.timeOfTransaction.seconds) // Sorting by timeOfTransaction in descending order
                    .map((transaction, index) => (
                        <div key={index} className={styles.transaction}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.88rem' }}>
                                <div
                                    style={{
                                        borderRadius: '100%',
                                        border: '1px solid var(--color-white--1)',
                                        width: '60px',
                                        height: '60px',
                                        display: 'grid',
                                        fontSize:'4rem',
                                        color:'var(--color-white--1)',
                                        placeItems: 'center',
                                    }}
                                >
                                   $
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.22rem' }}>
                                        <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>
                                            {transaction.incomeDescription   || transaction.expenseDescription  }
                                        </span>
                                        <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>
                                            {transaction.incomeCategory   || transaction.expenseCategory}
                                        </span>
                                        <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>
                                            {formatDate(transaction.timeOfTransaction.seconds)}
                                        </span>
                                    </div>
                                    {transaction.income ? <svg
                                        width="16"
                                        height="19"
                                        viewBox="0 0 16 19"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.0144 7.67334L7.48929 1.03486L1.03583 7.74302"
                                            stroke="#ADF2D1"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14.0646 17.016L7.53946 10.3775L1.086 17.0857"
                                            stroke="#ADF2D1"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    : <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 10.3334L7.5 17L14 10.3334" stroke="#D66B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 1L7.5 7.66667L14 1" stroke="#D66B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    }
                                </div>
                            </div>
                            <span style={{ fontSize: '1.6rem', color: 'var(--color-white--1)' }}>
                                {`${transaction.expense ? '-' : '+'}${transaction.expense  ||transaction.income}`}
                            </span>
                        </div>
                    ))
                ) : (
                    <div className={styles.transaction}>
                        <h1 style={{ color: 'var(--color-white--1)' }}>No transaction yet</h1>
                    </div>
                )
            }
        </div>
    );
}

export default RecentTransactions;
