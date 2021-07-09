import React from 'react'
import {BrowserRouter , Router , Route, Switch} from 'react-router-dom'

import history from '../history'

import Header from '../components/Header/header'
import Dashboard from '../components/Dashboard/dashboard'
import AddExpens from '../components/addExpens/addExpens'
import EditExpens from '../components/Edit/editExpens'
import Help from '../components/Help/help'
import notFoundPage from '../components/notFound/notFound'

import 'react-dates/lib/css/_datepicker.css';



const AppRouter = () => (
    <BrowserRouter >
        <Header />
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/create" component={AddExpens} />
            <Route path="/edit/:id" component={EditExpens} />
            <Route path="/Help" component={Help} />
            <Route component={notFoundPage}/>
        </Switch>`
    </BrowserRouter>
)


export default AppRouter