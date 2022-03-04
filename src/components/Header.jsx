const Header = ({userName}) => {
  return (
    <div className="headerContainer">
      {userName && (
        <h1 className="header">
          Hello {userName.name.first}! Welcome to RC e-Wallet
        </h1>
      )}   
      
      <h4 className="headerTag">
        A <strong className="strong">R</strong>eliable{" "}
        <strong className="strong">C</strong>ard Management system
      </h4>
    </div>
  );
};

export default Header;
