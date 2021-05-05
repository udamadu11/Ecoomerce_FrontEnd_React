import {} from 'react-bootstrap';
import React from 'react';
function Register(){
    return(
        <div class="container">
            <div class="card ">
            <div class="card-body">
                <div class="row g-3 col-md-6">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Register;