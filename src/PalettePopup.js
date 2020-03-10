import React, {useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css'
import useInputState from './hooks/useInputState';

function PalettePopup(props){
    const [open, setOpen] = useState('form');
    const [newPaletteName, handleChange] = useInputState();

    useEffect(()=>{
        ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
            props.palettes.every(
                ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
            )
        );
    },[newPaletteName, props.palettes]);

    const showEmojiPicker = () => setOpen('emoji');

    const savePalette = (emoji) => {
        const newPalette = {
            paletteName: newPaletteName,
            emoji: emoji.native
        };
        props.handleSubmit(newPalette);
        setOpen('');
    };

    const {hideForm} = props;

    return (
        <div>
            <Dialog open={open === 'emoji'} onClose={hideForm}>
                <DialogTitle id="form-dialog-title">Pick a Palette Emoji</DialogTitle>
                <Picker onSelect={savePalette} title={'Pick a Palette Emoji'}/>
            </Dialog>
            <Dialog open={open === 'form'} onClose={hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                            Enter a name for this new Palette. Please make sure it's unique!
                        </DialogContentText>
                            <TextValidator 
                                placeholder= 'Palette Name' 
                                value= {newPaletteName} 
                                onChange= {handleChange} 
                                fullWidth
                                margin= 'normal'
                                name= 'newPaletteName'
                                validators= {['required','isPaletteNameUnique']}
                                errorMessages= {['Enter Palette Name','Palette Name already taken']}
                            />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm} color="primary">
                            Cancel
                        </Button>
                        <Button variant='contained' color='primary' type='submit'>Save Palette</Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
};

export default PalettePopup;