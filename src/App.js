import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { ColorModeContext, useMode } from './theme';
import Topbar from './pages/global/Topbar';
import Dashboard from './pages/dashboard';
import Messages from './pages/messages';
import Project from './pages/project';
import Staffing from './pages/staffing';
import SideNavbar from './pages/global/Sidebar';

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideNavbar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Project" element={<Project />} />
              <Route path="/Staffing" element={<Staffing />} />
              <Route path="/Messages" element={<Messages />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
