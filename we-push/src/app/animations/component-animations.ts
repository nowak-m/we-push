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

const ZOOM_IN_TIMING = '250ms ease';

export const zoomIn = trigger('zoomIn', [
  state('zoom', style({ transform: 'scale(1.1)' })),
  transition('* <=> *', [animate(ZOOM_IN_TIMING)])
]);
