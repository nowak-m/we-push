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
            '600ms ease',
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
            '600ms ease',
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
