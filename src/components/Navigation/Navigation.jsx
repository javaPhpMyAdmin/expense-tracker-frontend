import { styled } from 'styled-components';
import avatar from '@/assets/avatar.png';
import { navItems, signout } from '@/utils';
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import { useGlobalContext } from '@/hooks';

export default function Navigation({ active, setActive }) {
  const { loginWithGoogle } = useGlobalContext();
  const handleLinkActive = (index) => {
    setActive(index);
  };

  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log('GOOGLE RESPONSE', tokenResponse),
        loginWithGoogle(tokenResponse.access_token);
    },
  });

  const onSuccess = async (res) => {
    try {
      loginWithGoogle(res.access_token);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  return (
    <NavContainer>
      <div className="user-con">
        <img src={avatar} alt="avatar" />
        <div className="nav-text">
          <h2>Marcelo</h2>
          <p>Your Money</p>
        </div>
      </div>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={() => handleLinkActive(item.id)}
            className={active === item.id ? 'active' : ''}
          >
            {item.icon}
            <span>{item.title}</span>
          </li>
        ))}
      </ul>
      <div className="bottom-nav" onClick={() => handleLoginWithGoogle()}>
        <li>{signout} Sign In with Google</li>
      </div>
      <GoogleLogin
        clientId="548284117977-i6o9pkvotmfhu3mgvoj0dt2uqoel82bj.apps.googleusercontent.com"
        onSuccess={onSuccess}
      />
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  padding: 2rem 1.5rem;
  width: 374px;
  height: 100%;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #ffffff;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  .user-con {
    height: 100px;
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      object-fit: cover;
      background: #fcf6f9;
      padding: 0.2rem;
      box-shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);
    }
  }
  .nav-items {
    flex: 1;
    display: flex;
    flex-direction: column;
    li {
      display: grid;
      grid-template-columns: 40px auto;
      align-items: center;
      margin: 0.6rem 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s ease-in-out;
      color: rgba(34, 34, 96, 0.6);
      padding-left: 1rem;
      position: relative;
      i {
        color: rgba(34, 34, 96, 0.6);
        font-size: 1.4rem;
        transition: all 0.4s ease-in-out;
      }
    }
  }
  .active {
    color: rgba(34, 34, 96, 1) !important;
    i {
      color: rgba(34, 34, 96, 1) !important;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 4px;
      height: 100%;
      background: #222260;
      border-radius: 0 10px 10px 0;
    }
  }
  .navText h2 {
    color: rgba(34, 34, 96, 1);
  }
  .navText p {
    color: rgba(34, 34, 96, 0.6);
  }
`;
