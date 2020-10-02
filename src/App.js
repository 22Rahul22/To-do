import React, { useState } from 'react';
import './App.css';
import IncompleteTask from './components/IncompleteTask/IncompleteTask'
import CompleteTask from './components/CompleteTask/CompleteTask';
import Add from './components/Add/Add'
import Container from '@material-ui/core/Container';
import Navigation from './components/Navbar'
import { Card,Divider, CardContent, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';


function App() {

  const [addInput, setAddInput] = useState("");
  const [editInput, setEditInput] = useState("");
  const [todoElements, setTodoElements] = useState([{ name: "Rahul", checked: false, editMode: false }, { name: "Is", checked: false, editMode: false }, { name: "My", checked: false, editMode: false }, { name: "Name", checked: false, editMode: false },]);
  const [completeElements, setCompleteElements] = useState([])

  const handleChange = (e) => {
    setAddInput(e.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if(addInput !== ""){
      const list = [...todoElements, {name:addInput}]
      setTodoElements(list);
    }
    setAddInput("")
  }

  const handleRemove = (index, type) => {
    console.log(index);
    if(type === "inComplete"){
      const list = todoElements.filter((s, sindex) => index !== sindex)
      setTodoElements(list);
    }
    else{
      const list = completeElements.filter((s, sindex) => index !== sindex)
      setCompleteElements(list);
    }
  }

  const handleChecked = (e, index, type) => {
    let x = [], y = [];
    if(type === "inComplete"){
      x = [...todoElements]
      y = [...completeElements]
    }else{
      x = [...completeElements]
      y = [...todoElements]
    }
    const list = [...x]
    list[index].checked = !list[index].checked
    let a = [];
    list.map((s, sindex) => {
      console.log("Elements",s);
      if(sindex === index){
        const clist = [...y, s]
        type === "inComplete" ?
        setCompleteElements(clist) :
        setTodoElements(clist)
      }
      else{
        a.push(s)
      }
    })
    type === "inComplete" ? setTodoElements(a) : setCompleteElements(a)
  }

  console.log("todoElements",todoElements);
  console.log("completeElements", completeElements);

  const handleEditMode = (e,index, type) => {
    let list = []
    if(type === "inComplete")
      { list = [...todoElements]
      }
    else
      {
        list = [...completeElements]
      }
    list.map((s,i) => {
      if (i === index && s.editMode) {
        s.editMode = true;
      }
      else{
        s.editMode = false;
      }
      return(s)
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
    }
    else {
      list = [...completeElements]
      list[i].name = editInput;
      setCompleteElements(list)
    }
    handleEditMode(e,i, type)
  }

  // console.log(todoElements);

  return (
    <>
    <Navigation />
    <Container maxWidth="sm">
      <Card>
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

            { completeElements.length ?
              (
              <>
                <h1>Completed</h1>
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
  );
}

export default App;
