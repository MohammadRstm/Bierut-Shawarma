import type { MenuItem } from '../../types';
import { getProductPhoto } from '../../data/photos';

interface ProductPhotoProps {
  item: MenuItem;
  className?: string;
}

export function ProductPhoto({ item, className }: ProductPhotoProps) {
  const classes = className ? `product-photo ${className}` : 'product-photo';
  return <img src={getProductPhoto(item)} alt={item.name} className={classes} loading="lazy" />;
}
