import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './router.tsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Router />
  </HashRouter>,
);
