import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Content = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/comidas" component={ Recipes }>
        <Route exact path=":id-da-receita" component={ Recipes } />
        <Route path=":id-da-receita/in-progress" component={ Recipes } />
      </Route>
      <Route exact path="/bebidas" component={ Drinks }>
        <Route exact path=":id-da-receita" component={ Drinks } />
        <Route path=":id-da-receita/in-progress" component={ Drinks } />
      </Route>
      <Route exact path="/explorar" component={ Explore } />
      <Route exact path="/explorar/comidas" component={ ExploreRecipes } />
      <Route exact path="/explorar/bebidas" component={ ExploreDrinks } />
      <Route path="/explorar/comidas/ingredientes" component={ ExploreRecipesI } />
      <Route path="/explorar/bebidas/ingredientes" component={ ExploreDrinksI } />
      <Route path="/explorar/comidas/area" component={ ExploreRecipesArea } />
      <Route path="/perfil" component={ Profile } />
      <Route path="/receitas-feitas" component={ MadeRecipes } />
      <Route path="/receitas-favoritas" component={ FavoriteRecipes } />
    </Switch>
  </BrowserRouter>
);

export default Content;
