import React,{ useContext} from 'react'
import { View } from 'react-native'
import ExpenseForm from '../components/ExpenseForm'
import { Context } from '../context/ExpenseContext'

const EditScreen = ({navigation}) => {
    const { state,editExpense } = useContext(Context)
    const id  = navigation.getParam('id')

    const exp = state.find((e) => e.id === id) 
    return (
        <View>
            <ExpenseForm 
                initialValues ={ { amount : exp.amount , purpose : exp.purpose} }
                onSubmit = {
                    (amount,purpose) => {
                        return editExpense(id,amount,purpose,() => navigation.navigate('Show'))
                    }
                }
            />
        </View>
    )
}

export default EditScreen