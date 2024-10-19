import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button'
import styles from './Form.module.css'
import { useProvider } from './PostProviders'


function Form() {
    
    const navigate = useNavigate()
    function handleSubmit(e){
        e.preventDefault();
        if(!userName.trim() || !totalBalance.trim() || !income.trim()) alert('Enter input')
            else navigate('/')
    }
    const {userName, dispatch, totalBalance, income} = useProvider();
    return (
        <form className={styles.section} onSubmit={handleSubmit}>
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
            <Button className={styles.button}>Let&apos;s go</Button>
        </form>
    )
}

export default Form
