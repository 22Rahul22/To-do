import React from 'react'
import { TextField, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import './Add.css'

function Add({ handleChange, handleAdd, addInput }) {
    return (
        <form onSubmit={(e) => handleAdd(e)}>
            <TextField placeholder="Add an Item" onChange={(e) => handleChange(e)} value={addInput} />
            <IconButton aria-label="" type="submit" style={{ background:"#3F51B5"}}>
                <AddIcon style={{color:"white"}}/>
            </IconButton>
        </form>
    )
}

export default Add
