import React, { ReactElement } from 'react'
import { Grid } from '@material-ui/core'

interface AppProps {
    header: ReactElement
    body: ReactElement;
}

const AppLayout: React.FC<AppProps> = (props) => {
    return (
        <Grid container direction='column' spacing={1}>
            <Grid item /* full width */ >
                {props.header}
            </Grid>
            <Grid item>
                <Grid container direction='row'>
                    <Grid item xs='auto' sm={1} lg={2} />
                    <Grid item xs={12} sm={10} lg={8}>
                        {props.body}
                    </Grid>
                    <Grid item xs='auto' sm={1} lg={2} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AppLayout