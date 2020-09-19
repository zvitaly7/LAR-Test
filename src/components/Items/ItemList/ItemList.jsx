import React from "react";
import {Item} from "../Item/Item";

export const ItemList = (props) => {
    return props.itemList && props.itemList.map(({id, name, date, status}) => {
        return <tr className="table_row" key={id}>
            <Item id={id} name={name} date={date} status={status}
                  onDeleteSubmit={props.onDeleteSubmit} onEditSubmit={props.onEditSubmit}/>
        </tr>
    })


};
