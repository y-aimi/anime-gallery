import { Const } from '@/common/Const';
import { MediaType } from '@/types/enum/MediaType';

const breakpoints: {
  id: MediaType;
  breakpoint: number;
}[] = [
  {
    id: 'pc',
    breakpoint: Const.BREAKPOINT_PC,
  },
  {
    id: 'sp',
    breakpoint: Const.BREAKPOINT_SP,
  },
];

export const MediaQuery: { [key in string]: string } = breakpoints.reduce((acc, { id, breakpoint }) => {
  return {
    ...acc,
    [id]: `@media (min-width: ${breakpoint}px)`,
  };
}, {});
