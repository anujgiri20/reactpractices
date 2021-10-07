import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { Mobile } from './Mobile';
import { Navbar } from './Navbar';






function App() {

  return (
    <div className="App">
      <Navbar />

      <ul>
        <li>
          <a href="/about">About with anchor</a>
        </li>

        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          {/* Change the url bar but dont refresh */}
          <Link to="/somewhere">Name of the link</Link>
        </li>

        {/* <li>
            <a href="/about" >Go to about</a>
          </li> */}
      </ul>

      <hr />

      {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
      <Switch>
        {/* Each route is case, eg. - case '/about': */}
        <Route exact path="/somewhere">
          <Name />
          <Route path="/somewhere/:id"> 
          detail
          </Route>

        </Route>
        <Route path="/about">
          {/* Matcht url display the below component */}
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <hr style={{ borderCollapse: "collapse", backgroundColor: "red" }} />
      <Mobile />
    </div>

  );
}
export default App;










// code for cards
export function Card(props) {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [show, setShow] = useState(false);
  const history = useHistory()
  const styles = {
    background: like > disLike ? "green" : "red",
    width: "30%",
    margin: "auto",
    marginTop: "30px",
    
    
  };
  return (
    <div className="card" style={styles}>


      <p className="name">{props.name}</p>

      <p className="name">{props.model}</p>

      <button onClick={() => setShow(!show)}>
        Show {show ? "Less" : "More"}
      </button>
   
      {show ? <p>{props.desc}</p> : ""}
      <button onCLick={()=> history.push("/somewhere/" + props.id)}>
        more details
        </button>
      <button className="btn" onClick={() => setLike(like + 1)}>👍{like}</button>
      <button className="btn" onClick={() => setDisLike(disLike + 1)}>👎{disLike}</button>
      {/* now from here we start for minimize button and  color chnage on like or dislike*/}
    </div>
  );

}

function Name() {
  return <p>abubjjjejvh</p>
}
function Home() {
  const history = useHistory();
  return (
    <div>
      <button onClick={() => history.goBack("/about")} > go back to about </button>


      <h2>Home, Welcome All!!!</h2>
      {/* <TableComp /> */}
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About, this nice!!!</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}


//if you want to save the component  inside other file then what you want to do that is 
//jus select the full component and preess refactor
//the save to new file
//it is vscode fucntionality that to save file as new other component 
//and do import export stuff 
//otherwise we also do manually

