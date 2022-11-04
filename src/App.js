
import { Route, Router, BrowserRouter } from 'react-router-dom';
import Main from './header/main';

function App() {
  return (
    <BrowserRouter>
      <div className='body'>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
