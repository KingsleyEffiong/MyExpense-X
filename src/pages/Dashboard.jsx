import { useProvider } from '../component/PostProviders';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './Dashboard.module.css';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [overallRoute, setOverallRoute] = useState(true);
  const location = useLocation();
  const currentRoute = location.pathname;
  const { showTransactionIcon, dispatch } = useProvider();

  useEffect(() => {
    if (currentRoute !== '/dashboard/overall') setOverallRoute(false);
    else setOverallRoute(true);
  }, [currentRoute]);

  return (
    <div className={styles.container}>
      <div className={styles.transaction}></div>
      <Outlet />
      {/* Floating Action Button */}
      {overallRoute && (
          <>
          {/* <div className={styles.Ellipse}></div> */}
          <div
            style={{
              backgroundColor: 'var(--color-white--1)',
              width: '70px',
              height: '70px',
              position: 'fixed',
              bottom: '3%',
              right: '1%',
              borderRadius: '100%',
              display: 'grid',
              placeItems: 'center',
              cursor: 'pointer',
              zIndex: '1',
            }}
            onClick={() => dispatch({ type: 'TOGGLE', payload: true })}
          >
            <svg
              width="46"
              height="45"
              viewBox="0 0 46 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 5V40"
                stroke="#A63030"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 22.5H41"
                stroke="#A63030"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Conditional Icons */}
          {showTransactionIcon && (
            <>
              <div
                style={{
                  backgroundColor: 'var(--color-dark--0)',
                  width: '70px',
                  height: '70px',
                  position: 'fixed',
                  bottom: '3%',
                  right: '1%',
                  borderRadius: '100%',
                  display: 'grid',
                  placeItems: 'center',
                  cursor: 'pointer',
                  zIndex: '1',
                }}
                onClick={() => dispatch({ type: 'TOGGLE', payload: false })}
              >
                <svg
                  width="52"
                  height="51"
                  viewBox="0 0 52 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.4783 13.2748L38.5219 37.7252"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.4257 38.3796L38.5746 12.6205"
                    stroke="white"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <NavLink to="expense">
                <div
                  style={{
                    backgroundColor: 'var(--color-deep-pink)',
                    width: '70px',
                    height: '70px',
                    position: 'fixed',
                    bottom: '15%',
                    right: '1%',
                    borderRadius: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    zIndex: '1',
                  }}
                >
               <svg width="49" height="51" viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.2188 22.3125H13.7812C11.7507 22.3125 9.80329 23.1521 8.36746 24.6465C6.93164 26.1409 6.125 28.1678 6.125 30.2812L6.125 39.8438C6.125 41.9572 6.93164 43.9841 8.36746 45.4785C9.80329 46.9729 11.7507 47.8125 13.7812 47.8125H35.2188C37.2493 47.8125 39.1967 46.9729 40.6325 45.4785C42.0684 43.9841 42.875 41.9572 42.875 39.8438V30.2812C42.875 28.1678 42.0684 26.1409 40.6325 24.6465C39.1967 23.1521 37.2493 22.3125 35.2188 22.3125ZM24.5 41.4375C23.2886 41.4375 22.1044 41.0636 21.0971 40.3631C20.0899 39.6626 19.3048 38.667 18.8412 37.5021C18.3777 36.3372 18.2564 35.0554 18.4927 33.8188C18.729 32.5822 19.3124 31.4463 20.169 30.5547C21.0256 29.6631 22.1169 29.056 23.3051 28.81C24.4932 28.564 25.7247 28.6903 26.8439 29.1728C27.9631 29.6553 28.9197 30.4724 29.5928 31.5207C30.2658 32.5691 30.625 33.8016 30.625 35.0625C30.625 36.7533 29.9797 38.3748 28.831 39.5703C27.6824 40.7658 26.1245 41.4375 24.5 41.4375Z" fill="#FCFCFC"/>
            <path d="M24.5 38.25C26.1914 38.25 27.5625 36.8229 27.5625 35.0625C27.5625 33.3021 26.1914 31.875 24.5 31.875C22.8086 31.875 21.4375 33.3021 21.4375 35.0625C21.4375 36.8229 22.8086 38.25 24.5 38.25Z" fill="#FCFCFC"/>
            <path d="M25.5871 3.64971C25.4448 3.50033 25.2754 3.38177 25.0888 3.30085C24.9022 3.21994 24.7021 3.17828 24.4999 3.17828C24.2978 3.17828 24.0977 3.21994 23.9111 3.30085C23.7245 3.38177 23.5551 3.50033 23.4128 3.64971L16.9203 10.4231C16.6238 10.7211 16.4532 11.1295 16.446 11.5584C16.4389 11.9873 16.5957 12.4016 16.882 12.7102C17.1683 13.0187 17.5606 13.1963 17.9727 13.2038C18.3848 13.2112 18.7829 13.048 19.0793 12.75L22.9687 8.62221V17.5313C22.9687 17.954 23.13 18.3593 23.4172 18.6582C23.7044 18.9571 24.0938 19.125 24.4999 19.125C24.9061 19.125 25.2955 18.9571 25.5827 18.6582C25.8699 18.3593 26.0312 17.954 26.0312 17.5313V8.62221L29.9206 12.75C30.2058 13.0445 30.5907 13.2105 30.9924 13.2122C31.2067 13.2243 31.421 13.1895 31.6215 13.1098C31.822 13.0302 32.0042 12.9076 32.1562 12.75C32.4414 12.4514 32.6015 12.0475 32.6015 11.6264C32.6015 11.2054 32.4414 10.8014 32.1562 10.5028L25.5871 3.64971Z" fill="#FCFCFC"/>
            </svg>
                </div>
              </NavLink>

              <NavLink to="income">
                <div
                  style={{
                    backgroundColor: 'var(--color-light-green)',
                    width: '70px',
                    height: '70px',
                    position: 'fixed',
                    bottom: '2%',
                    right: '25%',
                    borderRadius: '100%',
                    display: 'grid',
                    placeItems: 'center',
                    cursor: 'pointer',
                    zIndex: '1',
                  }}
                >
               <svg width="51" height="50" viewBox="0 0 51 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.6562 21.875H14.3438C12.2303 21.875 10.2034 22.6981 8.70899 24.1632C7.21456 25.6284 6.375 27.6155 6.375 29.6875L6.375 39.0625C6.375 41.1345 7.21456 43.1216 8.70899 44.5868C10.2034 46.0519 12.2303 46.875 14.3437 46.875H36.6562C38.7697 46.875 40.7966 46.0519 42.291 44.5868C43.7854 43.1216 44.625 41.1345 44.625 39.0625V29.6875C44.625 27.6155 43.7854 25.6284 42.291 24.1632C40.7966 22.6981 38.7697 21.875 36.6562 21.875ZM25.5 40.625C24.2391 40.625 23.0066 40.2584 21.9582 39.5717C20.9099 38.8849 20.0928 37.9088 19.6103 36.7668C19.1278 35.6247 19.0015 34.3681 19.2475 33.1557C19.4935 31.9433 20.1006 30.8297 20.9922 29.9556C21.8838 29.0815 23.0197 28.4862 24.2563 28.2451C25.4929 28.0039 26.7747 28.1277 27.9396 28.6008C29.1045 29.0738 30.1001 29.8749 30.8006 30.9027C31.5011 31.9305 31.875 33.1389 31.875 34.375C31.875 36.0326 31.2033 37.6223 30.0078 38.7944C28.8123 39.9665 27.1908 40.625 25.5 40.625Z" fill="#FCFCFC"/>
            <path d="M25.5 37.5C27.2604 37.5 28.6875 36.1009 28.6875 34.375C28.6875 32.6491 27.2604 31.25 25.5 31.25C23.7396 31.25 22.3125 32.6491 22.3125 34.375C22.3125 36.1009 23.7396 37.5 25.5 37.5Z" fill="#FCFCFC"/>
            <path d="M25.5 3.125C25.0773 3.125 24.6719 3.28962 24.373 3.58265C24.0741 3.87567 23.9062 4.2731 23.9062 4.6875V13.4219L19.8581 9.45313C19.5532 9.19715 19.161 9.06339 18.7599 9.07858C18.3588 9.09377 17.9783 9.25678 17.6945 9.53506C17.4106 9.81333 17.2443 10.1864 17.2288 10.5796C17.2134 10.9728 17.3498 11.3573 17.6109 11.6562L24.3684 18.2969C24.5153 18.4374 24.6884 18.5488 24.8784 18.625C25.075 18.7067 25.2864 18.7487 25.5 18.7487C25.7135 18.7487 25.9249 18.7067 26.1215 18.625C26.3115 18.5488 26.4846 18.4374 26.6315 18.2969L33.4687 11.6563C33.7298 11.3573 33.8662 10.9728 33.8507 10.5796C33.8352 10.1864 33.669 9.81333 33.3851 9.53506C33.1013 9.25678 32.7208 9.09377 32.3197 9.07858C31.9186 9.06339 31.5264 9.19715 31.2215 9.45313L27.0937 13.4219V4.6875C27.0937 4.2731 26.9258 3.87567 26.6269 3.58265C26.328 3.28962 25.9226 3.125 25.5 3.125Z" fill="#FCFCFC"/>
            </svg>
                </div>
              </NavLink>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Dashboard;
