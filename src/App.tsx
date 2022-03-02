import './App.scss';
import './styles/common.scss';
import './styles/form_items.scss';
import DATA_MULTI from './data_multi.json';

import Drawer from './components/custom_drawer/Drawer';
import Dashboard from './components/dashboard/Dashboard';


function App() {
  return (
    <div className="App">

      {/* <Drawer data={DATA_MULTI}></Drawer> */}
      <Dashboard></Dashboard>


    </div>
  );
}

export default App;
