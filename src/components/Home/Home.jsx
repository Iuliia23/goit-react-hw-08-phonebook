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
        fontSize: 36,
        color: '#000',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        resizeMode: 'cover',
        backgroundPosition: 'center',
      }}
    >
       <span style={{ color: ' #0095b6', padding: '20px', textAlign: 'center'}}>Welcome to Phonebook!</span>
<span style={{ color: ' #0095b6', padding: '20px', textAlign: 'justify'}}>PhoneBook app is an easy to use contact manager app that gives you facility of saving and viewing your contacts, so that you never lose your contacts. Try it today!</span>
<Button variant="contained" onClick={handleButtonClick}>
        Get started
      </Button>
    </div>
  );
};

export default Home;