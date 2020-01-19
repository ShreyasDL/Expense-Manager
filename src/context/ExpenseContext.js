import createDataContext from './createDataContext'

const expenseReducer = (state,action) => {
    switch(action.type) {
        case 'edit_expense' :
            return state.map( (exp) => {
                return exp.id === action.payload.id ? action.payload : state
            })
        case 'delete_expense' :
            return state.filter( (expense) => expense.id != action.payload.id)
        case 'add_expense' :
            return [
                ...state ,
                {
                    id : Math.floor(Math.random()*9999),
                    amount : action.payload.amount,
                    purpose : action.payload.purpose
                }
            ]
        default :
            return state
    }
}

const addExpense = (dispatch) => {
    return (amount, purpose, callback) => {
        dispatch({ type : 'add_expense' , payload : { amount, purpose }})
        if (callback) {
            callback()
        }
    }

}

const deleteExpense = (dispatch) => {
    return (id) => {
        dispatch({ type : 'delete_expense' , payload : {id}})
    }
}
const editExpense = (dispatch) => {
    return (id,amount,purpose,callback) => {
        dispatch({type : 'edit_expense',payload :{id, amount,purpose}})
        if(callback){
            callback()
        }
    }
}
export const { Context, Provider} = createDataContext(
    expenseReducer,{ addExpense, deleteExpense, editExpense },[]
)

