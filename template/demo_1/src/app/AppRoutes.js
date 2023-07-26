import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

// const Buttons = lazy(() => import('./basic-ui/Buttons'));
// const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const Product = lazy(() => import('./form-elements/orderItems'));   

// const BasicTable = lazy(() => import('./tables/BasicTable'));

const Mdi = lazy(() => import('./icons/Mdi'));

const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));


const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));



const BoxFraming = lazy(()=> import('./screens/BoxFraming'))

const OrderForm = lazy(() => import('./form-elements/BasicElements'));
const SubOrderForm  = lazy(()=> import('./screens/subOrderForm'))

const GSreceive  = lazy(()=> import('./screens/GSreceive'))



class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/dashboard" component={ Dashboard } />

          <Route path="/customer-order-form/order-form" component={ OrderForm } />
          <Route path="/customer-order-form/sub-order-form" component={ SubOrderForm } />

          <Route path="/gold-smith/receive" component={ GSreceive } />
          <Route path="/gold-smith/issuance" component={ Typography } />
          <Route path="/box-framing" component={ BoxFraming } />

          {/* path */}
          <Route path="/product" component={ Product } /> 

          <Route path="/tables/basic-table" component={ GSreceive } />

          <Route path="/icons/mdi" component={ Mdi } />

          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route path="/stock-transfer" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;