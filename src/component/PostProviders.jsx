import { createContext, useContext, useReducer } from "react";
import {db} from '../Firebase.js';
import { doc, setDoc, getDoc, Timestamp } from "firebase/firestore";

import PropTypes from "prop-types";
PostProviders.propTypes = {
  children: PropTypes.any.isRequired, 
  };


const initialState = {
    welcomeScreen: false,
    userName:'',
    totalBalance:'',
    income:'',
    userBalance:0,
    userEarned:0,
    userSpent:0,
    userGained:0,
    showTransactionIcon: false,
    textLoading:false,
    isAnyTransaction:false,
    isRegistered:true,
  };
  const PostContext = createContext();

function PostProviders({children}) {
    function reducer(state, action) {
        switch (action.type) {
          case 'WELCOMEPAGE': 
            return {
              ...state,
              welcomeScreen: action.payload,
            };

         case 'USERNAME' :
            return{
                ...state,
                userName: action.payload
            }
         case 'TOTALBALANCE' :
            return{
                ...state,
                totalBalance: action.payload
            }
         case 'INCOME' :
            return{
                ...state,
                income: action.payload
            }
         case 'TOGGLE' :
            return{
                ...state,
                showTransactionIcon: action.payload
            }
          case 'CHECK_TEXT_LOADING_STATE' :
            return{
              ...state,
              textLoading:action.payload
            }
          case 'USERBALANCE' :
            return{
              ...state,
              userBalance: action.payload
            }
          case 'USER_EARNED' :
            return{
              ...state,
              userEarned: action.payload
            }
          case 'USER_SPENT' :
            return{
              ...state,
              userSpent: action.payload
            }
          case 'USER_GAINED' :
            return{
              ...state,
              userGained: action.payload
            }
          case 'ISANYTRANSACTION' :
            return{
              ...state,
              isAnyTransaction: action.payload
            }
          case 'REGISTEREDUSER' :
            return{
              ...state,
              isRegistered: action.payload
            }
          default:
            return state;
        }
      }
    
      const [{ welcomeScreen, userName, totalBalance, income, showTransactionIcon, textLoading, userBalance, userEarned, userSpent, userGained, isAnyTransaction, isRegistered }, dispatch] = useReducer(reducer, initialState);
    return (
        <PostContext.Provider value={{
          welcomeScreen,
          totalBalance, 
          userName,
          income,
          dispatch,
          showTransactionIcon,
          db,
          doc,
          setDoc,
          Timestamp,
          textLoading,
          getDoc,
          userBalance,
          userEarned,
          userSpent,
          userGained,
          isAnyTransaction,
          isRegistered
        }}>
            {children}
        </PostContext.Provider>
    )
}

function useProvider(){
    const context = useContext(PostContext);
    if(context === undefined) throw new Error('PostContext was used outside the postProvider');
    return context
}

export  {PostProviders, useProvider}
