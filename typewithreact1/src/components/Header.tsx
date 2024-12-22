import { ReactNode } from "react";

interface HeaderProps {
  image: { src: string; alt: string };
  children: ReactNode;
}

const Header = (props: HeaderProps) => {
  const {
    image: { src, alt },
    children,
  } = props;
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
};

export default Header;
