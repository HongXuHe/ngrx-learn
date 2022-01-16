import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterComponent } from "./custom-counter/custom-counter.component";
import { _counterReducer } from "./state/counter.reducer";

const routes:Routes =[
    {
        path:'',component:CounterComponent
    }
];
@NgModule({
    declarations:[
        CounterComponent,
        CounterOutputComponent,
        CounterButtonComponent,
        CustomCounterComponent,
    ],
    imports:[CommonModule,
        FormsModule,
        StoreModule.forFeature('counter',_counterReducer),
        RouterModule.forChild(routes)],
    exports:[]
})
export class CounterModule{

}