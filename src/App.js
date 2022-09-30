import React from 'react';

import {Provider as AuthProvider} from './Globals/Contexts/AuthContext';
import ThemeProvider from './Globals/Contexts/ThemeContext';


/* Import Router */
import DispatchRouter from './Routers/DispatchRouter';

const App = () => {

  return (
    <ThemeProvider>
      <AuthProvider>
        <DispatchRouter/>
      </AuthProvider>
    </ThemeProvider>
  )
}
export default App;