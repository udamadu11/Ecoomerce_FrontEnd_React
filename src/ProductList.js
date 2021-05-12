import React,{useState,useEffect} from 'react';
import {Card,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function ProductList(){
    const [data,setData] = useState([]);
    useEffect( () => {
        getData();
    },[]);
    async function getData(){
        let result = await fetch('http://localhost:8000/api/products');
        result = await result.json();
        setData(result);
    }
    async function deleteFunc(id){
        let result = await fetch('http://localhost:8000/api/delete/'+id,{
            method: "DELETE"
        });
        result = await result.json();
        getData();
    }

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
                        <ListGroupItem><Button onClick={()=>deleteFunc(item.id)} className="btn btn-danger">Delete</Button></ListGroupItem>
                        <ListGroupItem><Link to={"/update/"+item.id}><Button className="btn btn-sucess">Update</Button></Link></ListGroupItem>
                    </ListGroup>
                </Card>
                    )
                }
                </div>
            </div>
    );
}
export default ProductList;