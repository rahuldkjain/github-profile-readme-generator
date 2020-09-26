import React from 'react';

const AddonsItem = ({inputId, inputChecked, onInputChange, ...props}) => {
    return (
        <div className="py-2 flex justify-start items-center text-sm sm:text-lg">
            <label htmlFor={inputId} className="cursor-pointer flex items-center">
                <input
                    type="checkbox"
                    id={inputId}
                    checked={inputChecked}
                    onChange={onInputChange}
                />
                <span className="pl-4">{props.children}</span>
            </label>
        </div>
    )
}

export default AddonsItem;