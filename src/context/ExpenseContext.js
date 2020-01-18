import createDataContext from './createDataContext'

const expenseReducer = (state,action) => {
    switch(action.type) {
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
    }
    if (callback) {
        callback()
    }

}

export const { Context, Provider} = createDataContext(
    expenseReducer,{ addExpense },[]
)

