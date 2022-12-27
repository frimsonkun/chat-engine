

const LogOutButton = ({isAuth, setIsAuth}) => {

  const handleLogout = () => {
    setIsAuth(false);
    localStorage.clear()
  };


  return isAuth ? (
    <button 
	 onClick={handleLogout}
	 style={{
		position: 'absolute',
		bottom: '20px',
		right: '20px',
		width: '50px',
		height: '50px',
		backgroundImage: 'url(data:image/png;base64,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)',
		zIndex: '1000', 
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		cursor: 'pointer',
		backgroundSize: 'contain'
	 }}
	 ></button>
  ) : (
    null
  );
};

export default LogOutButton;