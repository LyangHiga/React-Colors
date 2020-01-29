import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    main: {
        backgroundColor: 'purple'
    },
    sec:{
        backgroundColor:'pink',
        '& p':{
            backgroundColor: 'blue',
            color: 'white'
        },
        '& h1':{
            backgroundColor:'orange'
        }
    }

};

function MiniPalette(props){
    const {classes} = props;
    return(
        <div>
            <h1 className={classes.main}>Mini Palette</h1>
            <section className={classes.sec}>
                <h1>HAHAHAHH</h1>
                <p>JAJAJAJJA</p>
            </section>
            
        </div>
    )
}

export default withStyles(styles) (MiniPalette);