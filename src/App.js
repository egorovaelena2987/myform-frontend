import './App.css';
import { useEffect } from 'react';
import { getAllForm } from './FetchForm';

function App() {
  useEffect(() => {
    getAllForm()
  }, [])

  
    return (
    <div>
        <h1>Form</h1>
    <form method="POST" action="/">
        <div className="container">
          <lable>Your name</lable>
            <input name="name" placeholder="Name" className="space"/>
        </div>
        <div className="container">
          <lable>Your email</lable>
            <input name="email" placeholder="Email" className="space"/>
        </div>
        <textarea name="message" id="" cols="30" rows="10" className="space"></textarea>
        <div className="container">
        <button>Send</button>
        </div>
    </form>
    </div>
  );
}

export default App;
