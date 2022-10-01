import React from 'react';

import {Provider as AuthProvider} from './Globals/Contexts/AuthContext';
import ThemeProvider from './Globals/Contexts/ThemeContext';


/* Import Router */
import DispatchRouter from './Routers/DispatchRouter';

/*Import Overlay */
import BasicOverlay from './Globals/UI/Overlays/BasicOverlay';

const App = () => {

  return (
    <ThemeProvider>
      <AuthProvider>
        <BasicOverlay>
          <DispatchRouter/>
        </BasicOverlay>
      </AuthProvider>
    </ThemeProvider>
  )
}
export default App;