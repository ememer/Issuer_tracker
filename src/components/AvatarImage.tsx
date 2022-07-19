type Props = {
  id?: string;
  className?: string;
  src?: string;
  style?: string;
  photoAlt?: string;
};

const AvatarImage = ({ id, className, src, style, photoAlt = "" }: Props) => {
  return (
    <img
      id={id}
      alt={photoAlt}
      className={className}
      src={src}
      style={{
        border: `0.3rem solid ${style}`,
      }}
    />
  );
};

export default AvatarImage;
