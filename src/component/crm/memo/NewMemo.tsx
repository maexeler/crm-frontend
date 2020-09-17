import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import  MemoForm from './MemoForm'
import { MemoImpl } from '../../../model/crm'
import { useStoreActions } from '../../../store/ModelStore'
import { useStoreState } from 'easy-peasy'

interface NewMemoProps {}

const NewMemo: React.FC<NewMemoProps> = (props) => {
    const customer = useStoreState((state) => state.crmModel.selectedCustomer)
    const addMemo = useStoreActions(actions => actions.crmModel.addMemo)

    if (!customer) { return null }

    return (<>
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h4'>Add a new Memo</Typography>
            </Grid>
            <Grid item >
                <MemoForm 
                    memo={new MemoImpl(customer, '')}
                    submitText='Create new Memo'
                    submitFunction={(memo) => { addMemo(memo) }}
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
    </>)
}

export default NewMemo