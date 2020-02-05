import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(({colors, removeDraggableColorBox}) => {
    return (
        <div style={{height: '100%'}}>
            {colors.map((color,i) => (
                <DraggableColorBox 
                    index={i}
                    color={color.color} 
                    key={color.name}
                    name={color.name} 
                    handleClick={()=> removeDraggableColorBox(color.name)}
                />
             ))}
        </div>
    )
});

export default DraggableColorList;