import styles from './RecentTransactions.module.css'


function RecentTransactions() {
    return (
        <div className={styles.container}>
            <div className={styles.transaction}>
                <div style={{display:'flex', alignItems:'center', gap:'0.88rem'}}>
                <div style={{borderRadius:'100%', border:'1px solid var( --color-white--1)', width:'60px', height:'60px', display:'grid', placeItems:'center'}}>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.02999 20.69L9.35999 18.73C9.70999 18.43 10.29 18.43 10.64 18.73L12.97 20.69C13.51 20.96 14.17 20.69 14.37 20.11L14.81 18.78C14.92 18.46 14.81 17.99 14.57 17.75L12.3 15.47C12.13 15.31 12 14.99 12 14.76V11.91C12 11.49 12.31 11.29 12.7 11.45L17.61 13.57C18.38 13.9 19.01 13.49 19.01 12.65V11.36C19.01 10.69 18.51 9.92001 17.89 9.66001L12.3 7.25001C12.2143 7.20602 12.1416 7.14047 12.089 7.0598C12.0364 6.97913 12.0057 6.88615 12 6.79001V3.79001C12 2.85001 11.31 1.74001 10.47 1.31001C10.17 1.16001 9.81999 1.16001 9.51999 1.31001C8.67999 1.74001 7.98999 2.86001 7.98999 3.80001V6.80001C7.98999 6.98001 7.84999 7.19001 7.68999 7.26001L2.10999 9.67001C1.48999 9.92001 0.98999 10.69 0.98999 11.36V12.65C0.98999 13.49 1.61999 13.9 2.38999 13.57L7.29999 11.45C7.67999 11.28 7.99999 11.49 7.99999 11.91V14.76C7.99999 14.99 7.86999 15.31 7.70999 15.47L5.43999 17.75C5.19999 17.99 5.08999 18.45 5.19999 18.78L5.63999 20.11C5.81999 20.69 6.47999 20.97 7.02999 20.69Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'0.22rem',}}>
                    <span style={{fontSize:'1.6rem', color:'var( --color-white--1)'}}>Travel</span>
                    <span style={{fontSize:'1.6rem', color:'var( --color-white--1)'}}>indigo ticket</span>
                    </div>
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.0144 7.67334L7.48929 1.03486L1.03583 7.74302" stroke="#ADF2D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.0646 17.016L7.53946 10.3775L1.086 17.0857" stroke="#ADF2D1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                </div>
                    <span style={{fontSize:'1.6rem', color:'var( --color-white--1)'}}>+$100</span>
            </div>

            <div className={styles.transaction}>
                <div style={{display:'flex', alignItems:'center', gap:'0.88rem'}}>
                <div style={{borderRadius:'100%', border:'1px solid var( --color-white--1)', width:'60px', height:'60px', display:'grid', placeItems:'center'}}>
                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.02999 20.69L9.35999 18.73C9.70999 18.43 10.29 18.43 10.64 18.73L12.97 20.69C13.51 20.96 14.17 20.69 14.37 20.11L14.81 18.78C14.92 18.46 14.81 17.99 14.57 17.75L12.3 15.47C12.13 15.31 12 14.99 12 14.76V11.91C12 11.49 12.31 11.29 12.7 11.45L17.61 13.57C18.38 13.9 19.01 13.49 19.01 12.65V11.36C19.01 10.69 18.51 9.92001 17.89 9.66001L12.3 7.25001C12.2143 7.20602 12.1416 7.14047 12.089 7.0598C12.0364 6.97913 12.0057 6.88615 12 6.79001V3.79001C12 2.85001 11.31 1.74001 10.47 1.31001C10.17 1.16001 9.81999 1.16001 9.51999 1.31001C8.67999 1.74001 7.98999 2.86001 7.98999 3.80001V6.80001C7.98999 6.98001 7.84999 7.19001 7.68999 7.26001L2.10999 9.67001C1.48999 9.92001 0.98999 10.69 0.98999 11.36V12.65C0.98999 13.49 1.61999 13.9 2.38999 13.57L7.29999 11.45C7.67999 11.28 7.99999 11.49 7.99999 11.91V14.76C7.99999 14.99 7.86999 15.31 7.70999 15.47L5.43999 17.75C5.19999 17.99 5.08999 18.45 5.19999 18.78L5.63999 20.11C5.81999 20.69 6.47999 20.97 7.02999 20.69Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                </div>
                <div style={{display:'flex', gap:'1rem', alignItems:'center'}}>
                    <div style={{display:'flex', flexDirection:'column', gap:'0.22rem',}}>
                    <span style={{fontSize:'1.6rem', color:'var( --color-white--1)'}}>Travel</span>
                    <span style={{fontSize:'1.6rem', color:'var( --color-white--1)'}}>indigo ticket</span>
                    </div>
                    <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 10.3334L7.5 17L14 10.3334" stroke="#D66B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 1L7.5 7.66667L14 1" stroke="#D66B6B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                </div>
                    <span style={{fontSize:'1.6rem', color:'var( --color-white--1)'}}>-$100</span>
            </div>
        </div>
    )
}

export default RecentTransactions
