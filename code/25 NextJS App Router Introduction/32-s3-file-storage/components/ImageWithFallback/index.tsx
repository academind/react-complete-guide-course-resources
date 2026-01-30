'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps extends React.ComponentProps<typeof Image> {
  fallbackSrc: string;
}

const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

export default ImageWithFallback;