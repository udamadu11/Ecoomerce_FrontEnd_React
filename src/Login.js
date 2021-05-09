import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
function Login(){
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    async function signin(){
        let item = {email,password};
        console.log(item);
        let result = await fetch('http://localhost:8000/api/login',{
            method:"POST",
            body: JSON.stringify(item),
            headers:{
                'Content-Type': 'application/json',
                'Accept':'application/json'
            }
        })
        result = result.json();
        console.log(result);
    }

    return(
        <div className="container">
        <div className="card col-sm-8 card-c offset-sm-2">
        <div className="card-body">
                <div className="row g-3">
                    <div className="col col-a">
                        <input type="email" className="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-a">
                        <input type="password" className="form-control" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="Password"/>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-a">
                        <Button className="btn  btn-success" onClick={signin}>Login</Button>
                    </div>
                </div>
        </div>
    </div>
    </div>
    )
}

export default Login;