interface Iprops {
  imageURL: string;
  alt: string;
  className: string;
}
function Image({ imageURL, alt, className }: Iprops) {
  return <img src={imageURL} alt={alt} className={` ${className}`} />;
}
export default Image;
