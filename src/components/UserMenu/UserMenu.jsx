import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import defaultAvatar from '../../images/avatar.png'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { styled } from '@mui/system';

const UserMenuContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: 20,
});

const UserName = styled(Typography)({
  marginRight: '20px',
});

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onLogout = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuContainer>
       <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="46"
        border-radius='50%'
      />
      <UserName>Welcome, {user.name}</UserName>
      <Button variant="outlined" color="error" ButtononClick={onLogout} endIcon={<LogoutIcon />}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
