import React from 'react'

import  CustomerForm from './CustomerForm'
import { CustomerImpl } from '../../../model/crm'
import { useStoreActions } from '../../../store/ModelStore'

interface NewCustomerProps {
}

const NewCustomer: React.FC<NewCustomerProps> = (props) => {
    const addCustomer = useStoreActions(actions => actions.crmModel.addCustomer)

    return (
        <CustomerForm 
            customer={new CustomerImpl('')}
            submitText='Create new Customer'
            submitFunction={(customer) => { addCustomer(customer) }}
            resetFormAfterSubmit={true}
        />
    )
}

export default NewCustomer