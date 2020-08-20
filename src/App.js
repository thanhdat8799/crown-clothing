import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfile} from './firebase/firebase.utils';

import Header from './components/header/header.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser :null
    }
  }

  unsubcribeFromAuth = null

  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth => {
       if(userAuth) {
         const userRef = await createUserProfile(userAuth);

         userRef.onSnapshot(snapShot => {
            this.setState({ currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
            }, () => console.log(this.state))
         });
       }
       else this.setState({currentUser: userAuth}, () => console.log(this.state));
    })
  }

  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  

  render() {
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/shop" component={ShopPage}/>
            <Route exact path="/signin" component={SignInAndSignUp}/>
          </Switch>
        </BrowserRouter>  
      </div>
    );
  }
  
}

export default App;
