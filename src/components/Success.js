import React from 'react';

function Success({ goHome }) {
  return(
    <React.Fragment> 
        <h1 className="text-center text-success my-3"> You successfully Submitted the form. </h1>
        <div className="col-sm-10 offset-sm-1 text-center">
            <button 
                className="btn btn-success"
                onClick={goHome}
            > Go Back to main Page 
            </button>
        </div>
    </React.Fragment>
  );
}

export default Success;
