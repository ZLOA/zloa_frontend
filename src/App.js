import { Reset } from 'styled-reset';
import RootRouter from "./router/RootRouter";

function App() {
  return (
    <div style={{backgroundColor:'#1f1e1f', minHeight:'100vh'}}>
      <Reset/>
      <RootRouter/>
    </div>
  );
}

export default App;
