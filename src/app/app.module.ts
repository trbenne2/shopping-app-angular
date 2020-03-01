import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";

// Recipe components
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipe/recipe-list/recipe-item/recipe-item.component";

// Shopping componets
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeItemComponent,
    RecipeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
