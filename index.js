import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Profile from './components/Profile';
import Wallet from './components/Wallet';
import Purchases from './components/Purchases';
const App=()=>{
  return(
    <section>
      <section className="a">
      <Profile name="Johne" lastname="Doe" age="37" job="Employee" email="Johndeo@gmail.com" phonenumber="+21342323" hobbies="Tennis,Rugby,Reading" education="Lndustrial engineering"/>
      </section>
      <section className="b">
      <Wallet money="3$"/>
      </section>
      <section className="c">
     <Purchases moneyy="4Purchases"/>
      </section>
    </section>
  )
}
ReactDOM.render(<App/>,document.getElementById("root"))
