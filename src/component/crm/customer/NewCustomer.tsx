import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import  CustomerForm from './CustomerForm'
import { CustomerImpl } from '../../../model/crm'
import { useStoreActions } from '../../../store/ModelStore'

interface NewCustomerProps {
}

const NewCustomer: React.FC<NewCustomerProps> = (props) => {
    const addCustomer = useStoreActions(actions => actions.crmModel.addCustomer)

    return (<>
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h4'>Add a new Customer</Typography>
            </Grid>
            <Grid item >
                <CustomerForm 
                    customer={new CustomerImpl('')}
                    submitText='Create new Customer'
                    submitFunction={(customer) => { addCustomer(customer) }}
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
    </>)
}

export default NewCustomer