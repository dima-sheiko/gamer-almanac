type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return <header>{title}</header>;
};
