import Header from "../Common/Header";

const NormalLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default NormalLayout;
