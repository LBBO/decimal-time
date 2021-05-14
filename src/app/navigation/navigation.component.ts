import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core'
import { fromEvent, Observable } from 'rxjs'
import { distinctUntilChanged, filter, map, startWith } from 'rxjs/operators'
import { NavigationEnd, Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  isScreenSmall$?: Observable<boolean>
  url$ = this.router.events.pipe(
    filter((event): event is NavigationEnd => event instanceof NavigationEnd),
    map((event) => event.url),
  )
  baseURI = document.baseURI

  constructor(
    public router: Router,
    @Inject(LOCALE_ID) public locale: string,
  ) {}

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
