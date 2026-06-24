import React, {useState} from 'react';

type DocImageProps = {
  src: string;
  alt?: string;
  title?: string;
};

/** Image doc optionnelle : masquée silencieusement si le fichier est absent. */
export default function DocImage({src, alt = '', title}: DocImageProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <p className="doc-image">
      <img
        src={src}
        alt={alt}
        title={title}
        loading="lazy"
        onError={() => setVisible(false)}
      />
    </p>
  );
}
