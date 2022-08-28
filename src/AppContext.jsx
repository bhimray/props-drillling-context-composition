import logo from './logo.svg';
import './App.css';
import React, {useState} from "react"

const AppContext = React.createContext()

function App() {
  let [currentUser, setCurrentUser] = React.useState()
  return (
    <div className="App">
      <AppContext.Provider value={{currentUser}}>
        <div style={{backgroundColor:"lightgray"}}>
          <Header/>
        </div>
        <div style={{flex:1}}>
          {currentUser?(<Dashboard />
          ):
          (<LoginScreen onLogin ={()=> setCurrentUser({name:"micheal"})}/> //passing function as a props
          )}
        </div>
        <div style={{backgroundColor:"lightgray"}}>
          <div>Footer</div>
        </div>
      </AppContext.Provider>
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

function Dashboard(){
  return(
    <div>
      <h2>The Dashboard</h2>
      <DashboardNav/>
      <DashboardContent/>
    </div>
  )
}

function DashboardNav(){
  return(
    <div>
      <h2>DashboardNav</h2>
    </div>
  )
}

function DashboardContent(){
  return(
    <div>
      <h3>DashboardContent</h3>
      <WelcomeMessage></WelcomeMessage>
    </div>
  )
}

function WelcomeMessage(){
  let {currentUser} = React.useContext(AppContext)
  console.log(currentUser, "currentUser")
  return(
    <div>
      <p>{currentUser.name}</p>
    </div>
  )
}
export default App;
