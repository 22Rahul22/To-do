import React from 'react';
import ListItems from '../listItem/ListItem';

function IncompleteTask({ ...props }) {
    const {
        todoElements,
        handleRemove,
        handleChecked,
        handleEditMode,
        handleEdit,
        handleEditChange,
    } = props
    return (
            <>
                {todoElements.map((e, i) => (
                <ListItems
                    key={i}
                    index={i}
                    todoElements={e}
                    handleChecked={handleChecked}
                    handleRemove={handleRemove}
                    handleEditMode={handleEditMode}
                    handleEditChange={handleEditChange}
                    handleEdit={handleEdit}
                    type="inComplete"
                    />
                ))
                }
            </>
    )
}

export default IncompleteTask
