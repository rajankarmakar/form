import React from 'react';

function UserDeails({ nextPage, handleChange, state }) {
  return(
    <React.Fragment> 
        <h1 className="text-center text-primary my-3"> User Details </h1>
        <div className="col-sm-10 offset-sm-1">
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="firstname" 
                    aria-describedby="emailHelp" 
                    placeholder="First Name"
                    name="firstname"
                    value={state.firstname}
                    onChange={ handleChange('firstname') } 
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="lastname" 
                    aria-describedby="emailHelp" 
                    placeholder="Last Name"
                    name="lastname"
                    value={state.lastname}
                    onChange={ handleChange('lastname') } 
                />
            </div> 
            <div className="form-group">
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email"
                    name="email"
                    value={state.email}                    
                    onChange={ handleChange('email') } 
                />
            </div>
            <div className="form-group">
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    placeholder="Password"
                    name="password"
                    value={state.password}                    
                    onChange={ handleChange('password') }
                />
            </div>
            <button 
                className="btn btn-success"
                onClick={nextPage}
            > Continue 
            </button>
        </div>
    </React.Fragment>
  );
}

export default UserDeails;
