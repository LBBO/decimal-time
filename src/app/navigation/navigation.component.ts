import { Component, OnInit } from '@angular/core'
import { fromEvent, Observable } from 'rxjs'
import {
  distinctUntilChanged,
  map,
  startWith,
  throttleTime,
} from 'rxjs/operators'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isScreenSmall$?: Observable<boolean>

  constructor() {}

  ngOnInit(): void {
    // Checks if screen size is less than 1024 pixels
    const checkScreenSize = () => document.body.offsetWidth < 540

    // Create observable from window resize event throttled so only fires every 500ms
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(
      map(checkScreenSize),
      distinctUntilChanged(),
    )

    // Start off with the initial value use the isScreenSmall$ | async in the
    // view to get both the original value and the new value after resize.
    this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()))
  }
}
