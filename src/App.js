import './App.css';
import Inicio from './pages/Inicio';
import { Provider } from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

  return (
    <Provider store={store}>
      <div className="App">
        <Inicio />
      </div>
    </Provider>
  );
}

export default App;
