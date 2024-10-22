import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
PostProviders.propTypes = {
  children: PropTypes.any.isRequired,
  };


const initialState = {
    welcomeScreen: false,
    userName:'',
    totalBalance:'',
    income:'',
    showTransactionIcon: false,
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
          default:
            return state;
        }
      }
    
      const [{ welcomeScreen, userName, totalBalance, income, showTransactionIcon }, dispatch] = useReducer(reducer, initialState);
    return (
        <PostContext.Provider value={{
          welcomeScreen,
          totalBalance, 
          userName,
          income,
          dispatch,
          showTransactionIcon,
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
