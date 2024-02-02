import { Component } from 'react';
import ButtonComponent from './components/elements/button';

class Button extends Component {
  render() {
    return <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
      Buy now
    </button>;
  }
}

function App() {
  return (
    <div className="flex justify-center bg-slate-800 min-h-screen items-center text-white">
      <div className='flex gap-x-3'>
        <ButtonComponent variant="black" color="white">Login</ButtonComponent>
        <ButtonComponent variant="white" color="black">Logout</ButtonComponent>
        <ButtonComponent>Register</ButtonComponent>
      </div>
    </div>
  )
}

export default App
