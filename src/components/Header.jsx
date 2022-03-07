const Header = ({userName, text}) => {
  return (
    <div className="headerContainer">
      {userName && (
        <h1 className="header">
          Hello {userName.name.first}! Welcome to RC e-Wallet
        </h1>
      )}   
      
      <h3 className="headerTag">        
         {text}
      </h3>
    </div>
  );
};

export default Header;
