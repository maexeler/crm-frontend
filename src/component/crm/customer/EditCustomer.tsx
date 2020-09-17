import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import CustomerForm from './CustomerForm'
import { CustomerImpl } from '../../../model/crm'
import { useStoreState, useStoreActions } from '../../../store/ModelStore'

interface EditCustomerProps {}

const EditCustomer: React.FC<EditCustomerProps> = (props) => {
    const selectedCustomer = useStoreState(state => state.crmModel.selectedCustomer)
    const modifyCustomer = useStoreActions(actions => actions.crmModel.modifyCustomer)

    if (!selectedCustomer) return (null)

    return (
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h4'>Edit a Customer</Typography>
            </Grid>
            <Grid item >
                <CustomerForm 
                    customer={selectedCustomer ? selectedCustomer : new CustomerImpl('')}
                    submitText='Edit Customer'
                    submitFunction={(customer) => { modifyCustomer(customer) }}
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
    )
}

export default EditCustomer