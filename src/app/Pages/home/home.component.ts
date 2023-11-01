import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit,OnDestroy{

  tittle: string = "this is home component";
 
constructor(){}
ngAfterViewInit(): void {
  console.log("html view after init")
    
}
ngOnDestroy(): void {
    console.log("home is destroyed")
}

ngOnInit(): void {
  console.log("home initialised")
    
}

}
