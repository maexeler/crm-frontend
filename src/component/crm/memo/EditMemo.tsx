import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import MemoForm from './MemoForm'
import { MemoImpl } from '../../../model/crm'
import { useStoreState, useStoreActions } from '../../../store/ModelStore'

interface EditMemoProps {}

const EditMemo: React.FC<EditMemoProps> = (props) => {
    const customer = useStoreState((state) => state.crmModel.selectedCustomer)
    const selectedMemo = useStoreState(state => state.crmModel.selectedMemo)
    const modifyMemo = useStoreActions(actions => actions.crmModel.modifyMemo)

    if (!customer || !selectedMemo) return (null)

    return (
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h4'>Edit a Memo</Typography>
            </Grid>
            <Grid item >
                <MemoForm 
                    memo={selectedMemo ? selectedMemo : new MemoImpl(customer, '')}
                    submitText='Edit Memo'
                    submitFunction={(memo) => { modifyMemo(memo) }}
                    resetFormAfterSubmit={true}
                />
            </Grid>
        </Grid>
    )
}

export default EditMemo