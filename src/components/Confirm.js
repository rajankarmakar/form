import React from 'react';

function Confirm({
        prevPage, 
        nextPage, 
        state
    }){ 
  return(
    <React.Fragment> 
        <h1 className="text-center text-primary my-3"> Please Confirm and Submit </h1>
        <div className="col-sm-10 offset-sm-1">
            <ul className="list-group">
                <li className="list-group-item">First Name: { state.firstname } </li>
                <li className="list-group-item">Last Name: { state.lastname } </li>
                <li className="list-group-item">Email: { state.email } </li>
                <li className="list-group-item">Password: { state.password } </li>
                <li className="list-group-item">Bio: { state.bio } </li>
                <li className="list-group-item">Occupation : { state.occupation }</li>
                <li className="list-group-item">City: { state.city }</li>
                <li className="list-group-item">Conuntry: { state.country } </li>
            </ul>
            <button 
                className="btn btn-success my-3"
                onClick={nextPage}
            > Confirm and Continue
            </button>
            <button 
                className="btn btn-outline-secondary mx-2"
                onClick={prevPage}
            > Back
            </button>
        </div>
    </React.Fragment>
  );
}

export default Confirm;
