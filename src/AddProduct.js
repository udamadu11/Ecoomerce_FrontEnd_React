import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
function AddProducts(){
    const[name,setName] = useState('');
    const[price,setPrice] = useState('');
    const[description,setDescription] = useState('');
    const[file_path,setFilePath] = useState('');
    
    async function upload(){
        let item = {name,price,description,file_path};
        console.log(item);
        const fd = new FormData()
        fd.append('name',name);
        fd.append('price',price);
        fd.append('description',description);
        fd.append('file_path',file_path);
        let result = await fetch('http://localhost:8000/api/addProducts',{
            method:"POST",
            body: fd
        });


    }
    return(
        <div className="container">
            <div className="card col-sm-8 card-c offset-sm-2">
                <div className="card-body">
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="text" className="form-control" name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Product Name"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="text" className="form-control" name="price" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="Price"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="text" className="form-control" name="description" value={description} onChange={(e)=>setDescription(e.target.value)}  placeholder="Description"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <input type="file" className="form-control" name="file_path" value={file_path} onChange={(e)=>setFilePath(e.target.value)}  placeholder="Password"/>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-a">
                                <Button className="btn  btn-success" onClick={upload}>Login</Button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AddProducts;