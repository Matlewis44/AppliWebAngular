import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { sliderData } from 'src/app/api/api-slider';
import { Slide } from '../models/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  slider: Slide[] = sliderData;
  currentSlide: Slide = this.slider[0]
  currentIndex: number = 0

  indexObs: Observable<number> = interval(5000)
  indexObsSub: Subscription | undefined

  constructor() { }

  ngOnInit(): void {
    //On s'abonne à l'observable
    this.indexObsSub = this.indexObs.subscribe({
      next: (value: number) => {
        //console.log(value);
        this.handleChangImage(1)
      }
    })
  }
  ngOnDestroy(): void {
      this.indexObsSub?.unsubscribe()
  }

  /* Changement statique*/
  handleChangImage(index: number){
    let newIndex
    if(index === -1){
      //console.log("previous : ", index)
      //Previous
      const newIndex = this.currentIndex - 1
      if(newIndex >= 0){
        // ok
        this.currentIndex = newIndex
      }
      else{
        //error
        this.currentIndex = this.slider.length -1
      }
    }

    else{
     // console.log("next : ", index)
      //Next
      const newIndex = this.currentIndex +1

      if(newIndex > (this.slider.length -1)){
        //error
        this.currentIndex = 0
      }else{
        //ok
        this.currentIndex = newIndex
      }

    }
  }

}
