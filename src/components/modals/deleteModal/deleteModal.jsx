import React from "react";
import {Button} from "../../button/button";

export const DeleteModal = (props) => {
    return (
        <>
            <h1>Delete "{props.title}"? Are you sure?</h1>
            <div>
                <Button className='confirm-modal-yes' onClick={() => {
                    props.onSubmit(props.id)
                }}>Yes</Button>
                <Button className='confirm-modal-no' onClick={() => {
                    props.onCancel()
                }}>No</Button>
            </div>
        </>
    )
};
