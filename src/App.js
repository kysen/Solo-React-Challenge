import React from 'react';

import Homepage from "./views/Homepage"
import { Container, ThemeProvider } from '@material-ui/core';

import theme from "./assets/theme"
function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Homepage />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App