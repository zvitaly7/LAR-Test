import React, {useState} from "react";
import {Button} from "../../button/button";
import {Input} from "../../Input/Input";

export const EditModal = (props) => {

    const [obj, setObj] = useState({
        id: props.data.id,
        name: props.data.name,
        date: props.data.date,
        status: props.data.status
    });

    const onNameChange = (value) => {
        setObj({...obj, name: value})
    };

    const onDateChange = (e) => {
        setObj({...obj, date: e.target.value})
    };
    const onStatusChange = () => {
        setObj({...obj, status: !obj.status});
    };

    return (
        <>
            <h1>Edit "{props.data.name}". Enter new values</h1>
            <Input
                type='title'
                className={'edit-input'}
                value={obj.name}
                onChange={onNameChange}
            />
            <label htmlFor="start">Date:</label>
            <input type="date" className={"calendar"}
                   value={obj.date}
                   onChange={onDateChange}>
            </input>
            <label>
                Status
                <input type="checkbox" defaultChecked={obj.status}
                       onChange={onStatusChange}/>
            </label>
            <div className={'controls'}>
                <Button className='confirm-modal-yes' onClick={() => {
                    props.onSubmit(obj)
                }}>Yes</Button>
                <Button className='confirm-modal-no' onClick={props.onCancel}>No</Button>
            </div>
        </>

    )

};
