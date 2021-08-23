

import { BrowserRouter,  Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import DemateScreen from './screen/DemateScreen';
import HomeScreen from './screen/HomeScreen';
import LoginScreen from './screen/LoginScreen';
import PortfolioScreen from './screen/PortfolioScreen';
import ProfileScreen from './screen/ProfileScreen';
import QrCode from './screen/QrCode';
import Withdraw from './screen/Withdraw';

const defaultScreens = () => (
  <>
    <Header />
   
    <Route path="/demate"  component={DemateScreen} exact/>
      <Route path="/profile"  component={ProfileScreen} exact/>
      <Route path="/portfolio"  component={PortfolioScreen} exact/>
    <Footer />
  </>
);
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route exact path="/qrcode" component={QrCode} />
        <Route exact path="/withdraw" component={Withdraw} />
        <Route exact path="/login" component={LoginScreen} />
        {/* <Route exact path="/forgotpassword" component={ForgotPasswordScreen} />
        <Route
          exact
          path="/passwordreset/:resetToken"
          component={PasswordResetScreen}
        /> */}
        <Route component={defaultScreens} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;

