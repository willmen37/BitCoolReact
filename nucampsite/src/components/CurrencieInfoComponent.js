import React  from "react";
import {Card, CardImg, CardText, CardBody, CardTitle} from "reactstrap";



    function RenderCurrencie({currencie}){
        return(
            
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={currencie.image} alt={currencie.name}/>
                    <CardBody>
                        <CardTitle>{currencie.name}</CardTitle>
                        <CardText>{currencie.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );

    }

    function RenderComments({comments}){
        if(comments) {
            return(
            <div className="col-md-5 m-1"> 
                <h4>Comments:</h4>
                {comments.map(comment => {
                    return(<div key={comment.id}><br/>{comment.text}<br/>
                    {comment.author}<br/>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                     </div>
                                         
                     );                         
                  }) 
                }
            </div> )
        }
        return(<div/>)
    }

    
    function CurrencieInfo(props) {
                if(props.currencie){
                    return(
                        <div className="container">
                            <div className="row">
                                <RenderCurrencie currencie={props.currencie}/>
                                <RenderComments comments={props.comments} />
                            </div>
                        </div>
                    );
                }   return <div/>            
    }


export default CurrencieInfo;