import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserForm } from './Components/TaksValid1';
import { NameForm } from './Components/Task1';
import { EssayForm } from './Components/Task2';
import { FlavorForm } from './Components/Task3';
import { FileInput } from './Components/Task4Ref';
import { CustomTextInput } from './Components/Task5Ref2';
import { CustomTextInput2 } from './Components/Task6Ref3';
import { Calculator } from './Components/Task7State-up';
import { FormPageToLogin } from './Components/dzComp';
import { FormPageToMakeAcc } from './Components/dzComp';
import { MainComponent } from './Components/mainPage'
import {Products} from './Components/dopComps'
import {Rooms} from './Components/dopComps'
import {Design} from './Components/dopComps'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainComponent />}></Route>
        <Route path='/register' element={<FormPageToMakeAcc></FormPageToMakeAcc>}></Route>
        <Route path='/login' element={<FormPageToLogin></FormPageToLogin>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/rooms' element={<Rooms></Rooms>}></Route>
        <Route path='/design' element={<Design></Design>}></Route>
      </Routes >
      {/* <NameForm/> */}
      {/* <EssayForm/> */}

      {/* <FlavorForm/> */}
      {/* <UserForm /> */}

      {/* <FileInput/> */}
      {/* <CustomTextInput/> */}

      {/* <FormPageToLogin></FormPageToLogin> */}
      {/* <FormPageToMakeAcc></FormPageToMakeAcc> */}
      {/* <MainComponent></MainComponent> */}
      {/* <CustomTextInput2/> */}


      {/* Подъем состояния */}
      {/* https://ru.legacy.reactjs.org/docs/lifting-state-up.html */}

      {/* <Calculator/> */}
    </BrowserRouter >
  );
}

export default App;
