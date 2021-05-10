import React,{useState,useEffect} from 'react';
import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

function ProductList(){
    const [data,setData] = useState([]);
    useEffect(async () => {
        let result = await fetch('http://localhost:8000/api/products');
        result = await result.json();
        setData(result);
    },[]);
    console.log('result',data);
    return(
            <div className="col-md-12">
                <div className="row">
                {
                    data.map((item)=>
                    <Card style={{ width: '18rem',marginTop:10,marginLeft:10}}>
                    <center><Card.Img variant="top" src={"http://localhost:8000/"+item.file_path} style={{ width:200,height:200}}/></center>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>{item.price}</ListGroupItem>
                        <ListGroupItem>{item.name}</ListGroupItem>
                        <ListGroupItem>{item.description}</ListGroupItem>
                    </ListGroup>
                </Card>
                    )
                }
                </div>
            </div>
    );
}
export default ProductList;