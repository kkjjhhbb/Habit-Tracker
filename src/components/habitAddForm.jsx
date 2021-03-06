import React, {memo} from 'react';

const HabitAddForm = memo(props => {

    const inputRef = React.createRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
        inputRef.current.value = '';
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <input 
                ref={this.inputRef}
                type="text" 
                className="add-input" 
                placeholder="Habit" 
            />
            <button className="add-button">add</button>
        </form>
    );
}
) 

export default HabitAddForm;