import React from "react"
import './ListItem.css'

const ListItem = (props) => {

    const { items, deleteItem } = props
    let length = items.length;
    const itemCard = length ? items.map(item => {
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
            </div>)
    })
        :
        (<p> No data to show</p>)


    return (
        <div className="listItemCard">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {itemCard}
        </div>
    )
}

export default ListItem