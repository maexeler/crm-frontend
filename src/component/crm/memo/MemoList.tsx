import React from 'react'

import { List } from '@material-ui/core'

import MemoListItem from './MemoListItem'
import { useStoreState } from '../../../store/ModelStore';


interface MemoListProps {}

const MemoList: React.FC<MemoListProps> = (props) => {
    const memos = useStoreState(state => state.crmModel.memosForCustomer)
    return(
        <List>
            {memos.map((memo) => 
                { return <MemoListItem key={memo.id} memo={memo}/> }
            )}
        </List>
    )
}

export default MemoList