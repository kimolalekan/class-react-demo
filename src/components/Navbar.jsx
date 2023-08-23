export default function Navbar({ username }) {
  return (
    <>
      <div className="navbar">
        <div className="inner">
          <a>Logo</a>
          <span>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/faq">FAQ</a>
            <a href="#">{username} &#9660;</a>
          </span>
        </div>
      </div>
    </>
  );
}
