import PageContainer from "../page-container/page-container";

export default function Header() {
  return (
    <header>
      <PageContainer>
        <div className="Header">
          <div className="Header__right">
            <h1 className="Header__right__logo">
              <a href="#hello">Hd.</a>
            </h1>
            <nav className="Header__right__nav">
              <a href="#about" className="Header__right__nav__link">
                A propos
              </a>
              <a href="#" className="Header__right__nav__link">
                Projets
              </a>
              <a href="#" className="Header__right__nav__link">
                Contact
              </a>
            </nav>
          </div>
          <div className="Header__left"></div>
        </div>
      </PageContainer>
    </header>
  );
}
