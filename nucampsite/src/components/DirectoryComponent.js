import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({currencie}) {
    return (
        <Card>
            <Link to={`/directory/${currencie.id}`}>
                <CardImg width="100%" src={currencie.image} alt={currencie.name} />
                <CardImgOverlay>
                    <CardTitle>{currencie.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

function Directory (props) {

         const directory = props.currencies.map(currencie => {
            return (
                <div key={currencie.id} className="col-md-5 m-1">
                    <RenderDirectoryItem currencie={currencie} />
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                    
                </div>
            </div>
        );
    
}


export default Directory;