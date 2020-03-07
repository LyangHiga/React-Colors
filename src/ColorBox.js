import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import classNames from "classnames";
import styles from './styles/ColorBoxStyles';

function ColorBox(props){
    const [copied,setCopied] = useState(false);

    const changeCopyState = () => {
        setCopied(true);
        setTimeout(()=>setCopied(false),1500);
    }

    const {background, name, paletteId, colorId, showingFullPalette, classes} = props;

    return(
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{background}} className={classes.ColorBox}>
                <div 
                    style={{background}} 
                    className={classNames(classes.copyOverlay, 
                        {[classes.showOverlay]: copied}
                    )}
                />
                <div 
                    className={classNames(classes.copyMsg, 
                        {[classes.showMsg]: copied}
                    )}
                >
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && <Link to={`/palette/${paletteId}/${colorId}`} onClick={e =>e.stopPropagation()}>
                    <span className={classes.seeMore}>MORE</span>
                </Link>}
            </div>
        </CopyToClipboard>
    )
}

export default withStyles(styles) (ColorBox);