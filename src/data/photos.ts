import wrap from '../assets/photos/wrap.jpg';
import plate from '../assets/photos/plate.jpg';
import salad from '../assets/photos/salad.jpg';
import dip from '../assets/photos/dip.jpg';
import fries from '../assets/photos/fries.jpg';
import dessert from '../assets/photos/dessert.jpg';
import pepsi from '../assets/photos/pepsi.jpg';
import mirinda from '../assets/photos/mirinda.jpg';
import sevenUp from '../assets/photos/7up.jpg';
import water from '../assets/photos/water.jpg';
import sparklingWater from '../assets/photos/sparkling-water.jpg';
import ayran from '../assets/photos/ayran.jpg';
import limonana from '../assets/photos/limonana.jpg';
import jallab from '../assets/photos/jallab.jpg';
import orangeJuice from '../assets/photos/orange-juice.jpg';
import type { IllustrationKind, MenuItem } from '../types';

const KIND_PHOTOS: Record<IllustrationKind, string> = {
  wrap,
  plate,
  salad,
  dip,
  fries,
  dessert,
  can: pepsi,
  bottle: water,
  glass: orangeJuice,
  cup: ayran,
};

const ITEM_PHOTOS: Partial<Record<string, string>> = {
  pepsi,
  mirinda,
  '7up': sevenUp,
  water,
  'sparkling-water': sparklingWater,
  ayran,
  limonana,
  jallab,
  'orange-juice': orangeJuice,
};

export function getProductPhoto(item: MenuItem): string {
  return ITEM_PHOTOS[item.id] ?? KIND_PHOTOS[item.illustration];
}
