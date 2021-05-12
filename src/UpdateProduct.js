import React,{ useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
function UpdateProduct(props){
console.warn("props",props.match.params.id);
    const [data,setData] = useState([]);
    useEffect(async()=>{
        let result = await fetch('http://localhost:8000/api/getProduct/'+props.match.params.id);
        result = await result.json();
        setData(result);
    },[]);
    console.log(data);
    return(
        <div className="container">
            <div className="card col-sm-8 card-c offset-sm-2">
                <div className="card-body">
                    <form encType="multipart/form-data">
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="text" className="form-control" defaultValue={data.name} name="name" placeholder="Product Name"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="text" className="form-control" defaultValue={data.price} name="price" placeholder="Price"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="text" className="form-control" defaultValue={data.description} name="description" placeholder="Description"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <img src={"http://localhost:8000/"+data.file_path} style={{width:100,height:100}} />
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="file" className="form-control" name="file_path"  placeholder="Password"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <Button className="btn  btn-success" >Update Products</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(UpdateProduct);