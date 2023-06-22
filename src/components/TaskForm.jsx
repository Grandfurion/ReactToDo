import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';


export function TaskForm(props){
    const[inputTitle, setInputTitle] = useState('');
    const[inputDescription, setInputDescription] = useState('');

    function handleClick(){
        if(inputTitle !== "" && inputDescription !== ""){
            if(props.editState.isEditing){
                let buffer = props.taskList;
                buffer[props.editState.idToEdit] = {id: props.taskList[props.editState.idToEdit].id, title: inputTitle, description: inputDescription,
                     date: props.taskList[props.editState.idToEdit].date, status: false};
                props.setTaskList(buffer);
                props.setEditState({idToEdit: 0, isEditing: false});    
            }else{
                props.setTaskList([{id: uuidv4(), title: inputTitle, description: inputDescription, date: new Date, status:false}].concat(props.taskList));
            }
            setInputTitle('');
            setInputDescription('');
        }
    }
   
    return(
        <table className="form-table">
            <tbody>

                <tr>
                    <td>
                        <p>Title: </p>
                    </td>
                    <td colSpan={3}><input type="text" className="input-title" value={inputTitle} onInput={e => setInputTitle(e.target.value)}
                    placeholder={props.editState.isEditing ? props.taskList[props.editState.idToEdit].title : ""}></input></td>
                </tr>
                <tr>
                    <td>
                        <p>Description: </p>
                    </td>
                    <td colSpan={3}><textarea onInput={e => setInputDescription(e.target.value)} value={inputDescription}
                     placeholder={props.editState.isEditing ? props.taskList[props.editState.idToEdit].description : ""}></textarea></td>
                </tr>
                <tr>
                    <td colSpan={4}><input type="submit" value={props.editState.isEditing ? "Edit" : "Add"} onClick={handleClick}></input></td>
                </tr>

            </tbody>
        </table>
    )

}