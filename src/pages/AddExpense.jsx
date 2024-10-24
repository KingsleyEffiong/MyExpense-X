import { useNavigate } from 'react-router-dom';
import { useProvider } from '../component/PostProviders';
import Button from '../UI/Button'
import styles from './AddExpense.module.css'
function AddExpense() {
    const {dispatch, expenseCategory, expenseInput, expenseDescription, Timestamp, updateDoc, getDoc, arrayUnion, db, doc} = useProvider();


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
        if(!expenseInput.trim() || !expenseDescription.trim() || !expenseCategory.trim()) {
            alert('Enter input')
            return
        }
        if(!Number(expenseInput)) alert('Please enter a number')
            else{
                let userId = generateUserId();
                const userRef = doc(db, 'user', userId);
                try{
                    const docSnapshot = await getDoc(userRef);
                    console.log(docSnapshot)
                    if(docSnapshot.exists()){
                        await updateDoc(userRef, {
                            transactions: arrayUnion({
                                expense: expenseInput,
                                timeOfTransaction: Timestamp.now(),
                                isExpense:true,
                                expenseCategory,
                                expenseDescription,
                            }),
                            isAnyTransaction:true
                        })
                        alert('Sent')
                        dispatch({type:'EXPENSEINPUT', payload:''})
                        dispatch({type:'EXPENSECATEGORY', payload:''})
                        dispatch({type:'EXPENSEDESCRIPTION', payload:''})
                        navigate('/dashboard/expense')
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
                <h1 style={{fontSize:'2.3rem'}}>Add Expense</h1>
                <svg width="30" height="32" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18.1667L15 29.0001L27 18.1667" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 3L15 13.8333L27 3" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </nav>

            <section className={styles.section}>
                <form action="">
                    <div className={styles.flexControl}>
                    <label htmlFor="" style={{color:'var(--color-white--1)', fontSize:'2rem'}}>How much?</label>
                    <input type="text" name="" id="" className={styles.input} value={expenseInput} onChange={(e) => dispatch({type:'EXPENSEINPUT', payload:e.target.value})}  placeholder='3'/>
                    </div>
                    <div className={styles.flexControl}>
                    <input type="text" name="" id="" value={expenseDescription} onChange={(e) => dispatch({type:'EXPENSEDESCRIPTION', payload:e.target.value})} placeholder='Description'/>
                    <input type="text" name="" id="" value={expenseCategory} onChange={(e) => dispatch({type:'EXPENSECATEGORY', payload:e.target.value})} placeholder='Category '/>
                    </div>
                    <Button className={styles.button} onClick={handleSubmit}>Submit</Button>
                </form>
            </section>
        </div>
    )
}

export default AddExpense
