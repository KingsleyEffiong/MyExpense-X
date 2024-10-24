import { useNavigate } from 'react-router-dom'
import Logo from '../UI/Logo'
import styles from './DashboardHeader.module.css'


function DashboardHeader() {
    const navigate = useNavigate()
    return (
        <div className={styles.nav}>
            <Logo size={37}/>
         <div className={styles.settingContainer} onClick={() => navigate('/dashboard/setting')}>
            <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.875 11.0079V17.98C3.875 20.5417 3.875 20.5417 6.45833 22.1729L13.5625 26.0154C14.6346 26.5954 16.3783 26.5954 17.4375 26.0154L24.5417 22.1729C27.125 20.5417 27.125 20.5417 27.125 17.9921V11.0079C27.125 8.45833 27.125 8.45833 24.5417 6.82708L17.4375 2.98458C16.3783 2.40458 14.6346 2.40458 13.5625 2.98458L6.45833 6.82708C3.875 8.45833 3.875 8.45833 3.875 11.0079Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 18.125C16.5277 18.125 17.5133 17.7431 18.24 17.0633C18.9667 16.3834 19.375 15.4614 19.375 14.5C19.375 13.5386 18.9667 12.6166 18.24 11.9367C17.5133 11.2569 16.5277 10.875 15.5 10.875C14.4723 10.875 13.4867 11.2569 12.76 11.9367C12.0333 12.6166 11.625 13.5386 11.625 14.5C11.625 15.4614 12.0333 16.3834 12.76 17.0633C13.4867 17.7431 14.4723 18.125 15.5 18.125Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
         </div>
        </div>
    )
}

export default DashboardHeader
