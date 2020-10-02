import React from 'react';
import ListItem from '../listItem/ListItem';

function CompleteTask({ ...props }) {
    const {
        todoElements,
        handleRemove,
        handleChecked,
        handleEditMode,
        handleEdit,
        handleEditChange,
    } = props
    return (<>
                {todoElements.map((e, i) => (
                <ListItem
                    key={i}
                    index={i}
                    todoElements={e}
                    handleChecked={handleChecked}
                    handleRemove={handleRemove}
                    handleEditMode={handleEditMode}
                    handleEditChange={handleEditChange}
                    handleEdit={handleEdit}
                    type="complete"
                    />
                ))
                }
            </>
    )
}

export default CompleteTask
