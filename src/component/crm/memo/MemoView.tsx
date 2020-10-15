import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'

import { useStoreState } from '../../../store/ModelStore'

import { Memo} from '../../../model/crm'

import NewMemo from './NewMemo'
import EditMemo from './EditMemo'
import NewEditDataView from '../../application/NewEditDataView'

interface MemoViewProps {}

const MemoView: React.FC<MemoViewProps> = (props) => {
    const memo = useStoreState((state) => state.crmModel.selectedMemo)
    const customer = useStoreState((state)=> state.crmModel.selectedCustomer)

    return (
        <NewEditDataView
            title='Memo'
            dataView={memo ? <ShowMemo memo={memo}/> : undefined}
            editView={memo ? <EditMemo/> : undefined}
            newView= {customer ? <NewMemo/>  : undefined}
        />
    )
}

export default MemoView

interface ShowMemoProps {
    memo: Memo
}

const ShowMemo: React.FC<ShowMemoProps> = ({memo}) => {
    const date = new Date()
    date.setTime(memo ? memo.date : 0)
    return (
        <Card variant='outlined'>
            <CardContent>
            <Typography >{memo.note}</Typography>
            <Typography >{date.toLocaleString()}</Typography>
            </CardContent>
        </Card>
    )
}