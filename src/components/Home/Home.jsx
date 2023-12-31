import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useAuth } from 'redux/auth/useAuth';
import { toast } from 'react-toastify';
import background from '../../images/background.jpg';

const Home = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      navigate('/contacts');
    } else {
      toast.info('Please login or register');
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 48,
        color: '#000',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <span style={{ color: '#757575', padding: '1px', textAlign: 'center'}}>Welcome to Phonebook!</span>
<span style={{ color: 'red', padding: '30px', textAlign: 'justify'}}>Now you will exactly not forget your contacts!</span>
<Button variant="contained" color="error" onClick={handleButtonClick}>
        Get started
      </Button>
    </div>
  );
};

export default Home;