import React from 'react';
import Logon from './pages/logon';
import Profile from './pages/Profile';
import Register from './pages/Register';
import NewIncident from './pages/NewIncident';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/register' component={Register}/>
                <Route path='/incidents/new' component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes