'use client';

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title?: string;
  location?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  location,
}: BeforeAfterSliderProps) {
  return (
    <div className="space-y-3">
      <div className="relative rounded-lg overflow-hidden border border-border">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={beforeImage}
              alt={`${title || 'Proyek'} - Sebelum`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={afterImage}
              alt={`${title || 'Proyek'} - Sesudah`}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          }
          style={{
            width: '100%',
            height: '400px',
          }}
        />
      </div>
      {(title || location) && (
        <div className="text-sm">
          {title && <p className="font-semibold">{title}</p>}
          {location && <p className="text-muted-foreground">{location}</p>}
        </div>
      )}
    </div>
  );
}
