import React, { useState } from 'react'
import { Grid, Button, Typography } from '@material-ui/core'

import { useStoreState } from '../../../store/ModelStore'

import MemoList from './MemoList'
import NewMemo from './NewMemo'
import EditMemo from './EditMemo'

interface MemoViewProps {}

enum DisplayState { Show = 1, Edit, New, }

const MemoView: React.FC<MemoViewProps> = (props) => {
    const memo = useStoreState((state) => state.crmModel.selectedMemo)

    const [displayState, setDisplayState] = useState(DisplayState.New);

    let view
    switch (displayState) {
        case DisplayState.New:  { view = <NewMemo />; break  }
        case DisplayState.Edit: { view = <EditMemo />; break }
        default: { view = null; break }
    }

    return (
        <Grid container direction='column' spacing={1}>
            <Grid item >{memo ? <ShowMemo /> : null}</Grid>
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
                        {memo ?
                            <Button variant="contained" color="primary"  size='small'
                                    onClick={()=>{setDisplayState(DisplayState.New)}}>New</Button>
                        : null}
                    </Grid>
                    <Grid item >
                        {memo ?
                            <Button variant="contained" color="primary" size='small'
                                    onClick={()=>{setDisplayState(DisplayState.Edit)}}>Edit</Button>
                        : null}
                    </Grid>
                    <Grid item >
                        {memo ?
                            <Button variant="contained" color="primary" size='small'
                                    onClick={()=>{setDisplayState(DisplayState.Show)}}>View</Button>
                        : null}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item ><MemoList /></Grid>
        </Grid>
    )
}

interface ShowCustomerProps {}

const ShowMemo: React.FC<ShowCustomerProps> = (props) => {
    const memo = useStoreState((state) => state.crmModel.selectedMemo)
    const date = new Date()
    date.setTime(memo ? memo.date : 0)
    return (
        <Grid container direction='column' spacing={1}>
            <Grid item >
                <Typography variant='h4'>Memo</Typography>
            </Grid>
            { memo
                ? <>
                    <Grid item ><Typography >{date.toLocaleString()}</Typography></Grid>
                    <Grid item ><Typography >{memo.note}</Typography></Grid>
                </>
                : null
            }
        </Grid>
    )
}
export default MemoView