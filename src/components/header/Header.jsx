import Brands from "../brand/Brands";

const Header = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/DV4k9pk/super-sale-promotion-social-media-3d-render-template-design-banner-template-502896-377.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md"></div>
        </div>
      </div>
      <Brands></Brands>
    </div>
  );
};

export default Header;
