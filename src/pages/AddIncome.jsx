import { useProvider } from '../component/PostProviders'
import {useNavigate} from 'react-router-dom';
import Button from '../UI/Button'
import styles from './AddIncome.module.css'
function AddIncome() {
const {dispatch, incomeCategory, incomeInput, incomeDescription, Timestamp, updateDoc, getDoc, arrayUnion, db, doc} = useProvider();


const generateUserId = function() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = `user${Date.now()}_${Math.random().toString(32).substring(2,9)}`;
        localStorage.setItem('userId', userId);
    }
    return userId;
};
    const navigate = useNavigate()
    async function handleSubmit(){
        if(!incomeInput.trim() || !incomeDescription.trim() || !incomeCategory.trim()) {
            alert('Enter input')
            return
        }
        if(!Number(incomeInput)) alert('Please enter a number')
            else{
                let userId = generateUserId();
                const userRef = doc(db, 'user', userId);
                try{
                    const docSnapshot = await getDoc(userRef);
                    console.log(docSnapshot)
                    if(docSnapshot.exists()){
                        await updateDoc(userRef, {
                            transactions: arrayUnion({
                                income: incomeInput,
                                timeOfTransaction: Timestamp.now(),
                                incomeCategory,
                                isIncome: true,
                                incomeDescription,
                            }),
                            isAnyIncome:true,
                            isAnyTransaction:true
                        })
                        alert('Sent')
                        dispatch({type:'INCOMEINPUT', payload:''})
                        dispatch({type:'INCOMECATEGORY', payload:''})
                        dispatch({type:'INCOMEDESCRIPTION', payload:''})
                        navigate('/dashboard/income')
                    }
                    else console.log('User does not exist')
                }
                catch(err){
                    console.log(err)
                }
        }
           }
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <h1 style={{fontSize:'2.3rem'}}>Add Income</h1>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.1667L15 29.0001L27 18.1667" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3L15 13.8333L27 3" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </nav>

            <section className={styles.section}>
                <form action="">
                    <div className={styles.flexControl}>
                    <label htmlFor="" style={{color:'var(--color-white--1)', fontSize:'2rem'}}>How much?</label>
                    <input type="text" name="" id="" className={styles.input} value={incomeInput} onChange={(e) => dispatch({type:'INCOMEINPUT', payload:e.target.value})} placeholder='3'/>
                    </div>
                    <div className={styles.flexControl}>
                    <input type="text" name="" id=""  placeholder='Description' value={incomeDescription} onChange={(e) => dispatch({type:'INCOMEDESCRIPTION', payload:e.target.value})}/>
                    <input type="text" name="" id=""  placeholder='Category ' value={incomeCategory} onChange={(e) => dispatch({type:'INCOMECATEGORY', payload:e.target.value})}/>
                    </div>
                    <Button className={styles.button} onClick={handleSubmit}>Submit</Button>
                </form>
            </section>
        </div>
    )
}

export default AddIncome
