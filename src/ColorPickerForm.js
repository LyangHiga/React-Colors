import React, { Component } from 'react'
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { withStyles } from "@material-ui/core/styles";

const styles = {
    picker:{
        width: '100% !important',
        marginTop: '2rem'
    },
    addNewColor: {
        width: '100%',
        padding: '1rem',
        marginTop: '1rem',
        fontSize: '2rem'
    },
    colorNameInput: {
        width: '100%',
        heigth: '70px'
    }
};

class ColorPickerForm extends Component {
    constructor(props){
        super(props);
        this.state = {currentColor: "blue", newColorName: ''}
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
          this.props.colors.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
          this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );
    };

    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
    };

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value})
    };

    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        };
        this.props.addNewColor(newColor);
        this.setState({newColorName:''});
    }

    render() {
        const {paletteIsFull, classes} = this.props
        const {currentColor, newColorName} = this.state;
        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={this.updateCurrentColor}
                    className={classes.picker}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator 
                        value={newColorName} 
                        variant='filled'
                        margin='normal'
                        placeholder = 'Color Name'
                        onChange={this.handleChange} 
                        className={classes.colorNameInput}
                        name='newColorName'
                        validators={['required', 'isColorNameUnique','isColorUnique']}
                        errorMessages={['Enter a Color Name', 'Color name already taken', 'Color already used']}
                    />
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.addNewColor}
                        style={{ backgroundColor: paletteIsFull ? 'gray' : currentColor }}
                        type='submit'
                        disabled = {paletteIsFull}
                    >
                        {paletteIsFull ? 'Palette Full' : 'Add Color'} 
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles)(ColorPickerForm);