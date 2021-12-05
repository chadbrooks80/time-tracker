import { Grid } from 'semantic-ui-react';
import SidePanel from './components/side-panel/SidePanel.component';
import TopPanel from './components/top-panel/TopPanel.component';
import ProjectListing from './components/project-listing/ProjectListing';
import {} from 'fire'

import './App.css';


function App() {
  return (
      <>
        <Grid className='app' columns="equal" style={{background: '#eee'}} >
          <SidePanel />
          <Grid.Row>
            <TopPanel />
          </Grid.Row>
          <Grid.Column style={{marginLeft: 300, marginTop: 100}} >
            <ProjectListing />
          </Grid.Column>
        </Grid>
      </>
    
      

  )
}

export default App;
