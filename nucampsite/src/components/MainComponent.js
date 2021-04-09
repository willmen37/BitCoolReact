import React, {Component} from "react";
import Directory from "./DirectoryComponent";
import CurrencieInfo from "./CurrencieInfoComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { Switch, Route, Redirect } from "react-router-dom";
import {CURRENCIES} from "../components/shared/currencies";
import {COMMENTS} from "../components/shared/comments";
import {PARTNERS} from "../components/shared/partners";
import {PROMOTIONS} from "../components/shared/promotions";

class Main extends Component{
  constructor(props) {
    super(props);
    this.state ={
      currencies: CURRENCIES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS

      
  };
}
   
  
  render() {
      const HomePage = ()=> {
        return (
          <Home
            currencie={this.state.currencies.filter(currencie => currencie.featured)[0]}
            promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
            partner={this.state.partners.filter(partner => partner.featured)[0]}
          />
        );
      }

      const CurrencieWithId = ({match}) => {
        return (
            <CurrencieInfo 
                currencie={this.state.currencies.filter(currencie => currencie.id === +match.params.currencieId)[0]}
                comments={this.state.comments.filter(comment => comment.currencieId === +match.params.currencieId)}
            />
        );
      };    
      return (
        <div>
            <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/directory" render={() => <Directory currencies={this.state.currencies}/>} />
              <Route path='/directory/:currencieId' component={CurrencieWithId} />
              <Route exact path="/contactus" component={Contact}/>
              <Redirect to = "/home" />
            </Switch>
            <Footer/>
        </div>
      );
  };
}

export default Main;