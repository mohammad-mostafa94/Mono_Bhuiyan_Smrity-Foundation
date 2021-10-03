import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Member.css';

const Member = (props) => {
    // console.log(props);
    const {name,image, Age,Occupation,District,Donation} = props.member;

    const icon = <FontAwesomeIcon icon={faUserPlus} />
    return (
        <div className ="member-container">
            <Card className ="member-container" style={{ width: '18rem' }}>
                <Card.Img className="img-style" variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <h5>Occupation: {Occupation}</h5>
                        <h5>District: {District}</h5>
                        <h5>Age: {Age}</h5>
                        <h5>Donation: {Donation} Tk</h5>
                        <Button  
                            variant="primary"
                            onClick={()=>props.buttonHandle(props.member)}
                        >{icon} Add to List</Button>
                    </Card.Body>
                </Card>
        </div>
    );
};

export default Member;



{/* <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <Button  class="btn btn-primary">Go somewhere</Button>
            </div>
            </div> */}