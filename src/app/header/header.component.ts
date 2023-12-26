import { Component ,EventEmitter, Output} from "@angular/core";


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
    
})
export class HeaderComponent{
    @Output() featuredSelected=new EventEmitter<string>();

    onSelect(feauter:string){
this.featuredSelected.emit(feauter)
    }

}