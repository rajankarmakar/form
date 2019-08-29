import React from 'react';

function UserBio({ prevPage, nextPage, handleChange, state }) {
  return(
    <React.Fragment> 
        <h1 className="text-center text-primary my-3"> User Bio </h1>
        <div className="col-sm-10 offset-sm-1">
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="bio" 
                    aria-describedby="emailHelp" 
                    placeholder="Bio"
                    name="bio"
                    value={state.bio}
                    onChange={ handleChange('bio') } 
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="occupation" 
                    aria-describedby="emailHelp" 
                    placeholder="Occupation"
                    name="occupation"
                    value={state.occupation}
                    onChange={ handleChange('occupation') } 
                />
            </div> 
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="city" 
                    aria-describedby="emailHelp" 
                    placeholder="City"
                    name="city"
                    value={state.city}
                    onChange={ handleChange('city') } 
                />
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control" 
                    id="country" 
                    placeholder="Country"
                    name="country"
                    value={state.country}
                    onChange={ handleChange('country') }
                />
            </div>
            <button 
                className="btn btn-success"
                onClick={nextPage}
            > Continue 
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

export default UserBio;
