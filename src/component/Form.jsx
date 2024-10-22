import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button'
import styles from './Form.module.css'
import { useProvider } from './PostProviders'


function Form() {
    
    const navigate = useNavigate()
    const {userName, dispatch, totalBalance, income, doc, setDoc, db, Timestamp, textLoading, isAnyTransaction} = useProvider();

    const generateUserId = function() {
        let userId = localStorage.getItem('parentId');
        if (!userId) {
            userId = `user${Date.now()}_${Math.random().toString(32).substring(2,9)}`;
            localStorage.setItem('userId', userId);
        }
        return userId;
    };

   async function handleSubmit(){
        if(!userName.trim() || !totalBalance.trim() || !income.trim()) {
            alert('Enter input')
            return
        }
        if(!Number(totalBalance) || !Number(income)) alert('Please enter a number')
            else{
                let userId = generateUserId();
                const userRef = doc(db, 'user', userId);
                dispatch({type:'CHECK_TEXT_LOADING_STATE', payload:true})
                try{
                    await setDoc(userRef, {
                        userName,
                        totalBalance,
                        income,
                        isAnyTransaction,
                        createdAt: Timestamp.now()
                    })
                    navigate('/dashboard')
                }catch(err){
                    console.log(err)
                }
                finally{
                    dispatch({type:'CHECK_TEXT_LOADING_STATE', payload:false})
                }
            }}

    return (
        <form className={styles.section}>
        <div className={styles.form}>
            <div className={styles.flexColumn}>
                <input type="text" name="name" id="name" placeholder='Nik Name' value={userName} onChange={(e) =>dispatch({type:'USERNAME', payload:e.target.value})}/>
            </div>
            <div className={styles.flexColumn}>
                <input type="text" name="balance" id="balance" placeholder='Total Balance' value={totalBalance} onChange={(e) => dispatch({type: 'TOTALBALANCE', payload:e.target.value })}/>
            </div>
            <div className={styles.flexColumn}>
                <input type="text" name="income" id="income" placeholder='Income per month' value={income} onChange={(e) => dispatch({type:'INCOME', payload:e.target.value})}/>
            </div>
        </div>
            <Button className={styles.button} onClick={handleSubmit}>{textLoading ? 'Loading...' : 'Lets go'}</Button>
        </form>
    )
}

export default Form
