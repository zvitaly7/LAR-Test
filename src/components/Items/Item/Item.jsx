import React, {useState} from "react";
import {Button} from "../../button/button";
import {Modal} from "../../modals/ModalContainer/modal";
import {DeleteModal} from "../../modals/deleteModal/deleteModal";
import {EditModal} from "../../modals/editModal/editModal";

export const Item = ({id, name, date, status, onDeleteSubmit, onEditSubmit}) => {

    let formatDate = new Date(date).toLocaleDateString();

    const [state, setState] = useState({
        showDeleteModal: false,
        showEditModal: false
    });
    const onShowDelete = () => {
        setState({...state, showDeleteModal: !state.showDeleteModal});
    };

    const onShowEdit = () => {
        setState({...state, showEditModal: !state.showEditModal});
    };

    const DeleteSubmit = (id) => {
        onDeleteSubmit(id);
        onShowDelete()
    };

    const EditSubmit = (obj) => {
        onEditSubmit(obj);
        onShowEdit()
    };

    return <>
        <td className="table_cell">{id}</td>
        <td className="table_cell">{name}</td>
        <td className="table_cell">
            <time>{formatDate}</time>
        </td>
        <td className="table_cell">
            <input type="checkbox"  checked={status} readOnly={true}/>
        </td>
        <td className="table_cell">
            <Button className="btn edit" onClick={onShowEdit}>Редактировать</Button>
            <Button className="btn delete" onClick={() => {
                onShowDelete(name)
            }}>Удалить</Button>
        </td>
        {<Modal isOpen={state.showDeleteModal}>
            <DeleteModal onCancel={onShowDelete} title={name} id={id} onSubmit={DeleteSubmit}/>
        </Modal>}
        {<Modal isOpen={state.showEditModal}>
            <EditModal onCancel={onShowEdit} data={{id, name, date, status}} onSubmit={EditSubmit}/>
        </Modal>}
    </>

};
