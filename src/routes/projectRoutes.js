import { Blip } from '../components/projects/Blip';
import { ReactSnake } from '../components/projects/ReactSnake';
import { GroupRandomizer } from '../components/projects/GroupRandomizer';
import { ThisCity } from '../components/projects/ThisCity';
import { Geofindr } from '../components/projects/Geofindr';
import { Lendit } from '../components/projects/Lendit';
import { Miser } from '../components/projects/Miser';

export const projectRoutes = [
  {
    path: '/react_snake',
    comp: ReactSnake
  },
  {
    path: '/group_randomizer',
    comp: GroupRandomizer
  },
  {
    path: '/blip',
    comp: Blip
  },
  {
    path: '/this.city',
    comp: ThisCity
  },
  {
    path: '/geofindr',
    comp: Geofindr
  },
  {
    path: '/lendit',
    comp: Lendit
  },
  {
    path: '/miser',
    comp: Miser
  }
];
