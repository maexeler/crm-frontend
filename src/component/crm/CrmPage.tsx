import React from 'react'
import { Grid, Paper } from '@material-ui/core'

import CustomerList from './customer/CustomerList'
import CustomerView from './customer/CustomerView'

interface CrmPageProps {}

const CrmPage: React.FC<CrmPageProps> = (props) => {
    return (
        <Paper>
        <Grid container direction='row' spacing={1}>
            <Grid item xs={12} sm={4}>
                <CustomerList />
            </Grid>
            <Grid item xs={12} sm={8}>
                <CustomerView />
            </Grid>
        </Grid>
        </Paper>
    )
}

export default CrmPage
