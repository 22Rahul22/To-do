import React from 'react'
import { Divider, IconButton, ListItem, ListItemSecondaryAction, ListItemText, TextField, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

function ListItems({ ...props }) {
    const { todoElements,
            handleRemove,
            handleChecked,
            handleEditMode,
            handleEdit,
            handleEditChange,
            index,
            type,
        } = props

    return (
        <>
            {!(type==="complete" && index===0) ? <Divider /> : <></>}
            <ListItem>
                <IconButton onClick={(event) => handleChecked(event, index, type)}>
                    {todoElements.checked ? <CheckBoxOutlinedIcon/> : <CheckBoxOutlineBlankOutlinedIcon /> }
                </IconButton>
                {todoElements.editMode ?
                    <TextField style={{width:"70%"}} defaultValue={todoElements.name} onChange={(event) => handleEditChange(event, type)}/>
                    :
                    <div
                        onDoubleClick={(event) => handleEditMode(event, index, type)}
                        style={todoElements.checked ? { textDecoration: "line-through", width:"70%", overflowWrap:"break-word" } : {width:"70%", overflowWrap:"break-word"}}>
                        <ListItemText>{todoElements.name}</ListItemText>
                    </div>
                }
                <ListItemSecondaryAction>
                    {todoElements.editMode && (
                        <Button edge="end" onClick={(event) => handleEdit(event, index, type)}>
                            OK
                        </Button>
                    )}
                    <IconButton edge="end" onClick={(event) => handleEditMode(event, index, type)}>
                        {todoElements.editMode ? <CancelIcon/> : <EditIcon />}
                    </IconButton>
                    <IconButton edge="end" onClick={() => handleRemove(index, type)}>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    );
}

export default ListItems
