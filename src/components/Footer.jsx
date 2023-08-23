const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="inner">
          <span>
            Company &copy; {new Date().getFullYear()} All Rights Reserved.
          </span>
          <span className="links">
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Teams</a>
            <a href="/">Refund Policy</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
