import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome'
//import Nameof from './components/welcome'
import Hello from './components/hello'
import Namepassed from './components/namepassed';
import Change from './components/changestate'
import Counter from './components/counter'
import Name from './components/destructProps'
import Funclick from './components/functionclick'
import Classcl from './components/classclick'
import Eventbind from './components/eventbind'
import Pare from './components/parentcom'
import Login from './components/login'
import Namelist from './components/namelist'
function App() {
  return (
    <div className="App">
      <h1>This is App.js</h1>
      
      <Counter></Counter>
     <Greet/>
     <Welcome name='class using props'></Welcome>
     {/*<Nameof></Nameof> */}
     <Namepassed name='arwin nn' lname='prakadis'></Namepassed> {/*passed name is replaced with props.name*/}
     <Namepassed name="example1" lname="hsjsh">
        <p>this is the text</p>
      </Namepassed> 
     <Namepassed>
    </Namepassed>
    <Hello></Hello>
    <Change></Change>
    <Name fname='kumar'></Name>
    <Funclick></Funclick>
    <Classcl></Classcl>
    <Eventbind></Eventbind>
    <Pare></Pare>
    <Login></Login>
    <Namelist/>
    </div>
  )
}
export default App
//imported multiple times with same name name of & welcome are same//
