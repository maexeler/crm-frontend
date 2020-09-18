import React from 'react'

import  MemoForm from './MemoForm'
import { MemoImpl } from '../../../model/crm'
import { useStoreActions } from '../../../store/ModelStore'
import { useStoreState } from 'easy-peasy'

interface NewMemoProps {}

const NewMemo: React.FC<NewMemoProps> = (props) => {
    const customer = useStoreState((state) => state.crmModel.selectedCustomer)
    const addMemo = useStoreActions(actions => actions.crmModel.addMemo)

    if (!customer) { return null }

    return (
        <MemoForm 
            memo={new MemoImpl(customer, '')}
            submitText='Create new Memo'
            submitFunction={(memo) => { addMemo(memo) }}
            resetFormAfterSubmit={true}
        />
    )
}

export default NewMemo