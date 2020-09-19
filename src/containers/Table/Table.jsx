import React, {useEffect, useState} from "react";
import './table.scss'
import {ItemList} from "../../components/Items/ItemList/ItemList";
import {items} from "../../test";

export const Table = () => {

    const initialStorage = () => {
        return {
            all: JSON.parse(localStorage.getItem('storage2')) || items,
            filtered: JSON.parse(localStorage.getItem('storage1')) || items
        }
    };
    const [storage, setStorage] = useState(initialStorage);

    const [showDone, setShowDone] = useState(JSON.parse(localStorage.getItem('showDone')) || false);

    useEffect(() => {

        localStorage.setItem('storage1', JSON.stringify(storage.filtered));
        localStorage.setItem('storage2', JSON.stringify(storage.all));
        localStorage.setItem('showDone', JSON.stringify(showDone))
    }, [storage.filtered, storage.all, showDone]);

    const onShowDone = () => {
        setShowDone(!showDone);
        if (!showDone) {
            setStorage({...storage, filtered: storage.filtered.filter(obj => obj.status === true)})
        } else {
            setStorage({...storage, filtered: storage.all})
        }
    };


    const onDeleteSubmit = (id) => {
        setStorage({
                ...storage, filtered: storage.filtered.filter(obj => obj.id !== id),
                all: storage.filtered.filter(obj => obj.id !== id)
            }
        )
    };

    const onEditSubmit = (data) => {
        setStorage({
                ...storage, filtered: storage.filtered.map(obj => {
                    if (obj.id === data.id) {
                        return {id: data.id, name: data.name, date: data.date, status: data.status};
                    }
                    return {...obj};
                }),
                all: storage.filtered.map(obj => {
                    if (obj.id === data.id) {
                        return {id: data.id, name: data.name, date: data.date, status: data.status};
                    }
                    return {...obj};
                })
            }
        )
    };

    return (

        <div className="table-area">
            <label className="show-done">
                Скрыть выполненые
                <input type="checkbox" onClick={onShowDone} defaultChecked={showDone}/>
            </label>
            <table className="table">
                <thead>
                <tr className="table_row">
                    <th className="table_cell">ID</th>
                    <th className="table_cell">Наименование</th>
                    <th className="table_cell">Дата</th>
                    <th className="table_cell">Статус</th>
                    <th className="table_cell">Действия</th>
                </tr>
                </thead>
                <tbody>
                <ItemList itemList={storage.filtered} onDeleteSubmit={onDeleteSubmit} onEditSubmit={onEditSubmit}/>
                </tbody>
            </table>

        </div>
    )

};
