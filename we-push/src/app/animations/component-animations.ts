import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

const FLY_IN_OUT_TIMING = '1000ms ease';

export const flyInOut = trigger('flyInOut', [
  state('in', style({ transform: 'translateX(0)' })),
  transition('void => *', [
    style({ transform: 'translateX(100vw)' }),
    animate(FLY_IN_OUT_TIMING)
  ]),
  transition('* => void', [
    animate(FLY_IN_OUT_TIMING, style({ transform: 'translateX(-100vw)' }))
  ])
]);
