import React from 'react';

const List = (props) => {

    const lists = props.list;
    let donation = 0;
    let totalPerson = 0;
    for (const person of lists) {
        donation = donation + person.Donation;
        totalPerson = totalPerson + 1;
    }
    return (
        <div className="list-container">
            <h1 className="text-center mb-2">List</h1>
            <h6>Total Amount: {donation}</h6>
            <h6>Total Added person : {totalPerson} </h6>
            <h5 className="text-center">Listed person</h5>
            <ul>
                {lists.map((item) => (
                    <li key={item.id}>{item.name}</li>
                )
                )}
            </ul>
        </div>
    );
};

export default List;