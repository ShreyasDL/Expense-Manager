import React,{ useContext} from 'react'
import ExpenseForm from '../components/ExpenseForm'
import { Context }  from '../context/ExpenseContext'

const AddExpenseScreen = ({ navigation }) => {
    const { addExpense } = useContext(Context)
    return (
        <ExpenseForm
            onSubmit ={ (amount, purpose) => { 
                addExpense(amount,purpose, () => navigation.navigate('Index'))
                }
            }
        />
    )
}

export default AddExpenseScreen