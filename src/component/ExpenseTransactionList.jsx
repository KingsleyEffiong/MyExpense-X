import { useEffect, useState } from 'react';
import styles from './ExpenseTransactionList.module.css'
import { useProvider } from './PostProviders';

function ExpenseTransactionList() {
    const { getDoc, doc, db, dispatch, userExpenseData } = useProvider();
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
                    dispatch({ type: 'USEREXPENSEDATA', payload: data });
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        expenseData();
    }, [doc, db, getDoc, dispatch]);

    if (loading) {
        return <p style={{ color: 'var(--color-white--1)' }}>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            {userExpenseData ? (
                <>
                    {userExpenseData.isAnyTransaction === false  ? (
                        <div className={styles.transaction}>
                            <h1 style={{ color: 'var(--color-white--1)' }}>No transaction yet</h1>
                        </div>
                    ) : (
                        <div>
                            <h2 style={{ color: 'var(--color-white--1)' }}>User: {userExpenseData.userName}</h2>

                            {/* Filter transactions where isIncome is true */}
                            {userExpenseData.transactions
                                .filter(transaction => transaction.isExpense) // Filtering transactions with isIncome = true
                                .sort((a, b) => b.timeOfTransaction.seconds - a.timeOfTransaction.seconds) // Sorting by timeOfTransaction in descending order
                                .map((incomeItem, index) => (
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
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>{incomeItem.expenseCategory}</span>
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>{incomeItem.expenseDescription}</span>
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>{formatDate(incomeItem.timeOfTransaction.seconds)}</span>
                                                </div>
                                                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 10.3334L7.5 17L14 10.3334" stroke="#D66B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M1 1L7.5 7.66667L14 1" stroke="#D66B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '1.6rem', color: 'var(--color-white--1)' }}>-${incomeItem.expense}</span>
                                    </div>
                                ))}
                        </div>
                    )}
                </>
            ) : (
                <div className={styles.transaction}>
                    <h1 style={{ color: 'var(--color-white--1)' }}>No transaction yet</h1>
                </div>
            )}
        </div>
    );
}

export default ExpenseTransactionList
