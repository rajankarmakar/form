import React, {useState} from 'react';
import UserDeails from './components/UserDetails';
import UserBio from './components/UserBio';
import Confirm from './components/Confirm';
import Success from './components/Success';

function App() {
  const [state, setState] = useState({
    step: 1,
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    bio: '',
    occupation: '',
    city: '',
    country: ''
  });

  const { step } = state;

  const prevPage = e => {
    e.preventDefault();
    setState({...state, step: step - 1 });
  }

  const nextPage = e => {
    e.preventDefault();
    setState({...state, step: step + 1 });
  }

  const goHome = () => {
    setState({step: 1 });
  }

  const handleChange = input => e => {
    setState({...state, [input] : e.target.value });
  } 

  switch(step){
    case 1:
      return (
        <div className="container">
          <UserDeails 
            nextPage={nextPage}
            handleChange={handleChange}
            state={state}
          />
        </div>
      );
      case 2:
        return (
          <div className="container">
            <UserBio 
              nextPage={nextPage}
              prevPage={prevPage}
              handleChange={handleChange}
              state={state}
            />
          </div>
        );
      case 3:
        return (
          <div className="container">
            <Confirm 
              nextPage={nextPage}
              prevPage={prevPage}
              state={state}
            />
          </div>
        );
      case 4:
          return <Success goHome={goHome} />
      default:
          return (
            <div className="container">
              <UserDeails 
                nextPage={nextPage}
                handleChange={handleChange}
                state={state}
              />
            </div>
          );
  }

}

export default App;
