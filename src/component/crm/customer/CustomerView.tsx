import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

import { useStoreState } from '../../../store/ModelStore'

import { Customer} from '../../../model/crm'

import NewCustomer from './NewCustomer'
import EditCustomer from './EditCustomer'
import NewEditDataView from '../../application/NewEditDataView'

interface CustomerViewProps {}

const CustomerView: React.FC<CustomerViewProps> = (props) => {
    const customer = useStoreState((state) => state.crmModel.selectedCustomer)

    return (
        <NewEditDataView
            title='Customer'
            dataView={customer ? <ShowCustomer customer={customer}/> : undefined}
            editView={customer ? <EditCustomer/> : undefined}
            newView={<NewCustomer/>}
        />
    )
}

interface ShowCustomerProps {
    customer?: Customer
}

const ShowCustomer: React.FC<ShowCustomerProps> = ({customer}) => {
    return (
        <Card variant='outlined'>
            <CardContent>
            <Typography >{customer?.name}</Typography>
            </CardContent>
        </Card>
        // <Grid container direction='column' spacing={1}>
        //     { customer
        //         ? <Grid item > <Typography >{customer?.name}</Typography> </Grid>
        //         : null
        //     }
        // </Grid>
    )
}


export default CustomerView