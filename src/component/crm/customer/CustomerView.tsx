import React, { useState } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'

import NewCustomer from './NewCustomer'
import EditCustomer from './EditCustomer'
import MemoView from '../memo/MemoView'

import { useStoreState } from '../../../store/ModelStore'

interface CustomerViewProps {}

enum DisplayState { Show = 1, Edit, New, }

const CustomerView: React.FC<CustomerViewProps> = (props) => {
    const customer = useStoreState((state) => state.crmModel.selectedCustomer)

    const [displayState, setDisplayState] = useState(DisplayState.Show);

    let view
    switch (displayState) {
        case DisplayState.New:  { view = <NewCustomer />; break  }
        case DisplayState.Edit: { view = <EditCustomer />; break }
        default: { view = <ShowCustomer />; break }
    }

    return (
        <Grid container direction='column' spacing={1}>
            <Grid item >{view}</Grid>
            <Grid item >
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item >
                            <Button variant="contained" color="primary" size='small'
                                    onClick={()=>{setDisplayState(DisplayState.New)}}>New</Button>
                    </Grid>
                    <Grid item >
                        {customer ?
                            <Button variant="contained" color="primary" size='small'
                                    onClick={()=>{setDisplayState(DisplayState.Edit)}}>Edit</Button>
                        : null}
                    </Grid>
                    <Grid item >
                        {customer ?
                            <Button variant="contained" color="primary" size='small'
                                    onClick={()=>{setDisplayState(DisplayState.Show)}}>View</Button>
                        : null}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item ><MemoView /></Grid>
        </Grid>
    )
}

interface ShowCustomerProps {}

const ShowCustomer: React.FC<ShowCustomerProps> = (props) => {
    const customer = useStoreState((state) => state.crmModel.selectedCustomer)

    return (
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h4'>Customer</Typography>
            </Grid>
            { customer
                ? <Grid item > <Typography >{customer.name}</Typography> </Grid>
                : null
            }
        </Grid>
    )
}

export default CustomerView