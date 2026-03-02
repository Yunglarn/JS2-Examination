function LogoPicture({ image }) {  // tar emot image som prop
  return (
    <div className="header-logo">
      <img src={image} alt="Logo" width="200" />
    </div>
  );
}

export default LogoPicture;