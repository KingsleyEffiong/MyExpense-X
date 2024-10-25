import styles from './IncomeTransactionList.module.css';
import { useEffect, useState } from 'react';
import { useProvider } from './PostProviders';

function IncomeTransactionList() {
    const { getDoc, doc, db, dispatch, userIncomeData } = useProvider();
    const [loading, setLoading] = useState(true);
    const formatDate = (seconds) => {
        const date = new Date(seconds * 1000); 
        return date.toLocaleString();
    };

    useEffect(() => {
        async function incomeData() {
            const userId = localStorage.getItem('userId');
            try {
                const userRef = doc(db, 'user', userId);
                const userSnapshot = await getDoc(userRef);
                if (userSnapshot.exists()) {
                    const data = userSnapshot.data();
                    dispatch({ type: 'USERINCOMEDATA', payload: data });
                }
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        }
        incomeData();
    }, [doc, db, getDoc, dispatch]);

    if (loading) {
        return <p style={{ color: 'var(--color-white--1)' }}>Loading...</p>;
    }

    return (
        <div className={styles.container}>
            {userIncomeData && userIncomeData.transactions != undefined ? (
                <>
                    {userIncomeData.isAnyTransaction === false ||  userIncomeData.isAnyIncome === undefined? (
                        <div className={styles.transaction}>
                            <h1 style={{ color: 'var(--color-white--1)' }}>No transaction yet</h1>
                        </div>
                    ) : (
                        <div>
                            <h2 style={{ color: 'var(--color-white--1)' }}>User: {userIncomeData.userName}</h2>

                            {/* Filter and sort transactions where isIncome is true */}
                            {userIncomeData.transactions
                                .filter(transaction => transaction.isIncome) // Filtering transactions with isIncome = true
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
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>{incomeItem.incomeCategory}</span>
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>{incomeItem.incomeDescription}</span>
                                                    <span style={{ fontSize: '1rem', color: 'var(--color-white--1)' }}>{formatDate(incomeItem.timeOfTransaction.seconds)}</span>
                                                </div>
                                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M14.0144 7.67334L7.48929 1.03486L1.03583 7.74302" stroke="#ADF2D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.0646 17.016L7.53946 10.3775L1.086 17.0857" stroke="#ADF2D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span style={{ fontSize: '1.2rem', color: 'var(--color-white--1)' }}>{`-$${new Intl.NumberFormat('en-UK').format(incomeItem.income)}`}</span>
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

export default IncomeTransactionList;
