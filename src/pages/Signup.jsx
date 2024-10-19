import Form from "../component/Form";
import { PostProviders } from "../component/PostProviders";
import Logo from "../UI/Logo";
import styles from "./Signup.module.css";
function Signup() {
    return (
        <div className={styles.container}>
            <Logo className={styles.logo}/>
        <div className={styles.Ellipse12}></div>
        <div className={styles.Ellipse13}></div>
        <div className={styles.Ellipse14}></div>
        <div className={styles.Ellipse15}></div>
        <div className={styles.formContainer}>
            <h3>You are just one step away!</h3>
            <PostProviders>
            <Form />
            </PostProviders>
        </div>
        </div>
    )
}

export default Signup
