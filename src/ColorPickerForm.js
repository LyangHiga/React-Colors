import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/ColorPickerFormStyles';
import useInputState from './hooks/useInputState';

function ColorPickerForm(props) {
  const [currentColor, setCurrentColor] = useState('black');
  const [newColorName, handleChange, resetColorname] = useInputState('');
  const { paletteIsFull, classes } = props;

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', value =>
      props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', value =>
      props.colors.every(({ color }) => color !== currentColor)
    );
  });

  const updateCurrentColor = newColor => setCurrentColor(newColor.hex);

  const handleSubmit = () => {
    const newColor = {
      color: currentColor,
      name: newColorName
    };
    props.addNewColor(newColor);
    resetColorname();
  };

  return (
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className={classes.picker}
      />
      <ValidatorForm
        onSubmit={handleSubmit}
        useRef="form"
        instantValidate={false}
      >
        <TextValidator
          value={newColorName}
          variant="filled"
          margin="normal"
          placeholder="Color Name"
          onChange={handleChange}
          className={classes.colorNameInput}
          name="newColorName"
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a Color Name',
            'Color name already taken',
            'Color already used'
          ]}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.addNewColor}
          style={{ backgroundColor: paletteIsFull ? 'gray' : currentColor }}
          type="submit"
          disabled={paletteIsFull}
        >
          {paletteIsFull ? 'Palette Full' : 'Add Color'}
        </Button>
      </ValidatorForm>
    </div>
  );
}

export default withStyles(styles)(ColorPickerForm);
