import React, {ReactElement, useState} from 'react'
import { Grid, Toolbar, Typography, IconButton, makeStyles } from '@material-ui/core'
import {AddBox, Edit, Visibility} from '@material-ui/icons';

interface NewEditDataViewProps {
    title: string,
    newView?:  ReactElement,
    editView?: ReactElement,
    dataView?: ReactElement
}

enum DisplayState { Show = 1, Edit, New }

const NewEditDataView: React.FC<NewEditDataViewProps> = ({title, newView, editView, dataView}) => {
    const [displayState, setDisplayState] = useState(DisplayState.Show);

    let content
    switch(displayState) {
        default: content = dataView; break;
        case DisplayState.New: content = newView; break;
        case DisplayState.Edit: content = editView; break;
    }
    const classes = useStyles();
    return (
        <Grid container direction='column'>
            <Grid item >
                <Toolbar>
                    <Typography variant='h4' className={classes.title}>{title}</Typography>
                    <div className={classes.buttons}>
                    { newView
                        ?   <IconButton size='small' 
                                color={displayState === DisplayState.New ? 'inherit' : 'primary'}
                                onClick={() => {setDisplayState(DisplayState.New)}}
                            ><AddBox/></IconButton>
                        : null}

                        {editView
                        ?   <IconButton size='small'
                                color={displayState === DisplayState.Edit ? 'inherit' : 'primary'}
                                onClick={() => {setDisplayState(DisplayState.Edit)}}
                            ><Edit/></IconButton>
                        : null}
                        {dataView
                        ?   <IconButton size='small'
                                color={displayState === DisplayState.Show ? 'inherit' : 'primary'}
                                onClick={() => {setDisplayState(DisplayState.Show)}}
                            ><Visibility/></IconButton>
                        : null}
                    </div>
                </Toolbar>
            </Grid>
            <Grid item >
                {content}
            </Grid>
        </Grid>
    )
}

const useStyles = makeStyles((theme) => ({
    buttons: {
        '& > *': {
          margin: theme.spacing(1),
        },
      },
    title: {
      flexGrow: 1,
    },
  }))

export default NewEditDataView