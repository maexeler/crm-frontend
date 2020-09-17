import React from 'react'
import { 
    ListItem,
    ListItemSecondaryAction,
    IconButton,
    Typography,
 } from '@material-ui/core'
 import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { Memo } from '../../../model/crm'
import { useStoreState, useStoreActions } from "../../../store/ModelStore";

interface MemoListItemProps {
    memo: Memo;
}

const MemoListItem: React.FC<MemoListItemProps> = ({memo}) => {
    const deleteMemo = useStoreActions(actions => actions.crmModel.deleteMemo)

    const selectedMemo = useStoreState(state => state.crmModel.selectedMemo)
    const setSelectedMemo = useStoreActions(actions => actions.crmModel.setSelectedMemo)
    return(
      <ListItem
        selected={selectedMemo ? (memo.id === selectedMemo.id) : false}
      >
        <Typography
          noWrap
          onClick={() => { setSelectedMemo(memo) }}
        >
          {memo.note}
        </Typography>
        <ListItemSecondaryAction>
          <IconButton
            edge='end'
            color='secondary'
            onClick={() => { deleteMemo(memo) }}
          >
            <DeleteForeverIcon />
          </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
  )
}

export default MemoListItem