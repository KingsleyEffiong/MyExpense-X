import { NavLink} from 'react-router-dom'
import styles from './Toggle.module.css'

function Toggle() {

    return (
        <ul className={styles.ul}>
            <li className={styles.listItem} >
                <NavLink to='/dashboard/expense'>Expense</NavLink>
            </li>
            <li className={styles.listItem}>
                <NavLink to='/dashboard/income'>Income</NavLink>
            </li>
            <li className={styles.listItem}>
                <NavLink to='/dashboard/overall'>Overall</NavLink>
            </li>
        </ul>
    )
}

export default Toggle
