import React, { useEffect, useState } from 'react';
import List from '../List/List';
import Member from '../Member/Member';
import './Foundation.css';

const Foundation = () => {
    const [members,setMembers] = useState([]);
    const [list , setList] = useState([]);

    useEffect(()=>{
        fetch("./member-info.json")
        .then(res=> res.json())
        .then(data=> setMembers(data));
    },[]);

    const buttonHandle = added =>{
        const newList = [...list, added];
        setList(newList);
    };
    return (
        <div className="foundation-container">
            <div> 
                {
                    members.map(member => <Member 
                    buttonHandle = {buttonHandle}
                    key = {member.id}
                    member = {member}
                    ></Member>)
                }
                
            </div>
            <div className="list">
                <List list = {list}></List>
            </div>
        </div>
    );
};

export default Foundation;