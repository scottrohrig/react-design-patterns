import { Header } from './components/Header';
import { Main } from './components/Main';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplitScreenApp from "./components/sample-apps/SplitScreenApp";
import "./styles.css";

const links = [
  {
    path: '/',
    label: 'Home',
    Element: Main
  },
  {
    path: '/splitscreen',
    label: 'Split Screen',
    Element: SplitScreenApp
  },
  {
    path: '/container-components',
    label: 'Containers',
    Element: Main
  }
]

export default function App() {
  return (
    <div>
      <Router >
        <Header links={links}/>
        <Routes >
          {links?.length && links.map((link,i)=>(
            <Route key={i} path={link.path} element={<link.Element />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
