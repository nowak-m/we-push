import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from '@angular/animations';

const ROUTE_ANIMATION_TIMING = '600ms ease';

export const slider = trigger('routeAnimations', [
  transition('* => *', [
    group([
      query(
        ':leave',
        [
          style({
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translateX(0%)'
          })
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({
            position: 'absolute',
            left: 0,
            top: 0,
            transform: 'translateX(100%)'
          })
        ],
        { optional: true }
      )
    ]),
    group([
      query(
        ':enter',
        [
          animate(
            ROUTE_ANIMATION_TIMING,
            style({
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translateX(0)'
            })
          )
        ],
        { optional: true }
      ),
      query(
        ':leave',
        [
          animate(
            ROUTE_ANIMATION_TIMING,
            style({
              position: 'absolute',
              left: 0,
              top: 0,
              transform: 'translateX(-100%)'
            })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
