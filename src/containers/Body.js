import React, {useState} from 'react';
import IncompleteTask from '../components/IncompleteTask/IncompleteTask';
import CompleteTask from '../components/CompleteTask/CompleteTask';
import Add from '../components/Add/Add';
import Container from '@material-ui/core/Container';
import Navigation from '../components/Navbar'
import { Card, CardContent, Grid, List, ListItem } from '@material-ui/core';

function Body() {

    const [addInput, setAddInput] = useState("");
    const [editInput, setEditInput] = useState("");
    const [completeElements, setCompleteElements] = useState([])
    const [todoElements, setTodoElements] = useState([]);


    const handleChange = (e) => {
        setAddInput(e.target.value)
    }

    const handleAdd = (e) => {
        e.preventDefault();
        if (addInput !== "") {
            const list = [...todoElements, {
                name: addInput
            }]
            setTodoElements(list);
        }
        setAddInput("")
    }

    const handleRemove = (index, type) => {
        console.log(index);
        if (type === "inComplete") {
            const list = todoElements.filter((s, sindex) => index !== sindex)
            setTodoElements(list);
        } else {
            const list = completeElements.filter((s, sindex) => index !== sindex)
            setCompleteElements(list);
        }
    }

    const handleChecked = (e, index, type) => {
        let x = [],
            y = [];
        if (type === "inComplete") {
            x = [...todoElements]
            y = [...completeElements]
        } else {
            x = [...completeElements]
            y = [...todoElements]
        }
        const list = [...x]
        list[index].checked = !list[index].checked
        let a = [];
        list.map((s, sindex) => {
            console.log("Elements", s);
            if (sindex === index) {
                const clist = [...y, s]
                type === "inComplete" ?
                    setCompleteElements(clist) :
                    setTodoElements(clist)
            } else {
                a.push(s)
            }
            return null;
        })
        type === "inComplete" ? setTodoElements(a) : setCompleteElements(a)
    }

    const handleEditMode = (e, index, type) => {
        let list = []
        if (type === "inComplete") {
            list = [...todoElements]
        } else {
            list = [...completeElements]
        }
        list.map((s, i) => {
            if (i === index && s.editMode) {
                s.editMode = true;
            } else {
                s.editMode = false;
            }
            return (s)
        })
        list[index].editMode = !list[index].editMode;
        type === "inComplete" ? setTodoElements(list) : setCompleteElements(list);
        setEditInput(list[index].name)
    }

    const handleEditChange = (e) => {
        setEditInput(e.target.value)
    }

    const handleEdit = (e, i, type) => {
        let list = [];
        if (type === "inComplete") {
            list = [...todoElements]
            list[i].name = editInput;
            setTodoElements(list)
        } else {
            list = [...completeElements]
            list[i].name = editInput;
            setCompleteElements(list)
        }
        handleEditMode(e, i, type)
    }

    return (
        <>
            <Container maxWidth="sm">
                <Card raised={true} style={{marginTop:"20px",}}>
                    <CardContent>
                        <List>
                            <ListItem>
                                <Add
                                    handleChange={handleChange}
                                    addInput={addInput}
                                    handleAdd={handleAdd}
                                />
                            </ListItem>

                            <IncompleteTask
                                todoElements={todoElements}
                                handleChecked={handleChecked}
                                handleRemove={handleRemove}
                                handleEditMode={handleEditMode}
                                handleEditChange={handleEditChange}
                                handleEdit={handleEdit}
                            />
                        </List>
                    </CardContent>
                </Card>

                {completeElements.length ?
                    (
                        <>
                            <h1 style={{color:"white", textAlign:"center", margin:"20px"}}>Completed</h1>
                            <Card>
                                <CardContent>
                                    <List>
                                        <CompleteTask
                                            todoElements={completeElements}
                                            handleChecked={handleChecked}
                                            handleRemove={handleRemove}
                                            handleEditMode={handleEditMode}
                                            handleEditChange={handleEditChange}
                                            handleEdit={handleEdit}
                                        />
                                    </List>
                                </CardContent>
                            </Card>
                        </>
                    ) : <></>}

            </Container>
        </>
    )
}

export default Body;
