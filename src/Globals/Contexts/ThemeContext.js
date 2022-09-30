import React from "react";

/* Import themes */
import { LightTheme } from "../Themes/LightTheme";
import { DarkTheme } from "../Themes/DarkTheme";
/* Import themes */

export const Context = React.createContext();

export class ThemeProvider extends React.Component {
  
  state = {
    theme: LightTheme,
    updateTheme: (theme) => {
      this.setState({ theme: theme })
    }
  }

  render() {
    const { theme } = this.state
    return (
      <Context.Provider value={this.state} theme={theme} >
        { this.props.children }
      </Context.Provider>
    )
  }
}

export default ThemeProvider;