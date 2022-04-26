import './App.less';
import AppState from './context/app/appState';
import { Layout } from "antd";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import ListMovies from "./pages/ListMovies";

function App() {
  return (
    <AppState>
      <Layout className="layout" style={{height: "100%"}}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index/>} />
          <Route exact path="/lista-peilculas" element={<ListMovies/>} />
        </Routes>
      </Router>
      </Layout>
    </AppState>
  );
}



export default App;
