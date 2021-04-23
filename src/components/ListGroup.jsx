import React from 'react'

const ListGroup = props => {
    const { items, textProperty, valueProperty, onItemSelect, selectedItem } = props;

    return (
        <ul className="list-group w-100">
            {items.map(item => (
                <li key={item[valueProperty]} 
                    onClick={() => onItemSelect(item)}
                    style={{ cursor: "pointer" }}
                    className={
                        item === selectedItem
                        ? "list-group-item list-group-item-action list-group-item-warning"
                        : "list-group-item"
                    }
                >
                        {item[textProperty]}
                </li>
            ))}    
        </ul>
    );
};

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
}
 
export default ListGroup;