import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

function App() {
  let [currentUser, setCurrentUser] = React.useState()
  return (
    <div className="App">
      <div style={{backgroundColor:"lightgray"}}>
        <Header/>
      </div>
      <div style={{flex:1}}>
        {currentUser?(<Dashboard user={currentUser}/>
        ):
        (<LoginScreen onLogin ={()=> setCurrentUser({name:"micheal"})}/> //passing function as a props
        )}
      </div>
      <div style={{backgroundColor:"lightgray"}}>
        <div>Footer</div>
      </div>
    </div>
  );
}

function Header(){
  return(
    <div>
      <h1>Header</h1>
    </div>
  )
}

function LoginScreen({onLogin}){ // accepting function as a props
  console.log(onLogin)
  return(
    <div>
      <h3>Please Login</h3>
      <button onClick = {onLogin}>Login</button> {/*executing function which is passed as props */}
    </div>
  )
}

function Dashboard({user}){
  return(
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav/>
      <DashboardContent user={user}/>
    </div>
  )
}

function DashboardNav({user}){
  return(
    <div>
      <h2>DashboardNav</h2>
    </div>
  )
}

function DashboardContent({user}){
  return(
    <div>
      <h3>DashboardContent</h3>
      <WelcomeMessage user={user.name}></WelcomeMessage>
    </div>
  )
}

function WelcomeMessage({user}){
  return(
    <div>
      <p>{user}</p>
    </div>
  )
}
export default App;
