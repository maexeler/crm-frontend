import React from 'react'

import { List } from '@material-ui/core'

import CustomerListItem from './CustomerListItem'
import { useStoreState } from '../../../store/ModelStore';


interface CustomerListProps {}

const CustomerList: React.FC<CustomerListProps> = (props) => {
    const customers = useStoreState(state => state.crmModel.customers)
    return(
        <List>
            {customers.map((customer) => 
                { return <CustomerListItem key={customer.id} customer={customer}/> }
            )}
        </List>
    )
}

export default CustomerList