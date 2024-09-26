import bgDesktopDark from "../assets/images/bg-desktop-dark.jpg";
import bgMobileDark from "../assets/images/bg-mobile-dark.jpg";
import bgDesktopLight from "../assets/images/bg-desktop-light.jpg";
import bgMobileLight from "../assets/images/bg-mobile-light.jpg";

export default function Picture({ theme }) {
  let bgDesktop = bgDesktopDark;
  let bgMobile = bgMobileDark;

  if (theme === "light") {
    bgDesktop = bgDesktopLight
    bgMobile = bgMobileLight
  }

  return (
    <picture>
      <source srcSet={bgDesktop} media="(min-width: 37.5rem)" />
      <img src={bgMobile} alt="background image" />
    </picture>
  );
}
