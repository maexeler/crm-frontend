import React from 'react'

import CustomerForm from './CustomerForm'
import { CustomerImpl } from '../../../model/crm'
import { useStoreState, useStoreActions } from '../../../store/ModelStore'

interface EditCustomerProps {}

const EditCustomer: React.FC<EditCustomerProps> = (props) => {
    const selectedCustomer = useStoreState(state => state.crmModel.selectedCustomer)
    const modifyCustomer = useStoreActions(actions => actions.crmModel.modifyCustomer)

    if (!selectedCustomer) return (null)

    return (
        <CustomerForm 
            customer={selectedCustomer ? selectedCustomer : new CustomerImpl('')}
            submitText='Edit Customer'
            submitFunction={(customer) => { modifyCustomer(customer) }}
            resetFormAfterSubmit={true}
        />
    )
}

export default EditCustomer