import PageContainer from "../page-container/page-container";

export default function Header() {
  return (
    <header className="Header">
      <PageContainer>
        <div className="Header__right">
          <h1 className="Header__right__logo">Hd.</h1>
          <nav className="Header__right__nav">
            <a href="#" className="Header__right__nav__link">
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
      </PageContainer>
    </header>
  );
}
