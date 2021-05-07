import React,{ useState } from 'react';
import { Button } from 'react-bootstrap';
function Register(){
    const[first_name,setFirstName] = useState('');
    const[last_name,setLastName] = useState('');
    const[address,setAddress] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    async function signUp(){
        let item = {first_name,last_name,address,email,password};
        console.log(item);
        let result = await fetch('http://localhost:8000/api/register',{
            method:"POST",
            body: JSON.stringify(item),
            headers:{
                "Content-Type": "application/json",
                "Accept" : "application/json"
            }
        })

        result = await result.json();
        console.log("result",result);
    }

    return(
        <div className="container">
            <div className="card col-sm-8 card-c offset-sm-2">
            <div className="card-body">
                    <div className="row g-3">
                        <div className="col">
                            <input type="text" className="form-control" name="first_name" value={first_name} onChange={(e)=>setFirstName(e.target.value)} placeholder="First name" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" name="last_name" value={last_name} onChange={(e)=>setLastName(e.target.value)} placeholder="Last name" />
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-a">
                            <input type="text" className="form-control" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address"/>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-a">
                            <input type="email" className="form-control" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-a">
                            <input type="password" className="form-control" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col col-a">
                            <Button className="btn  btn-success" onClick={signUp}>Register</Button>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Register;