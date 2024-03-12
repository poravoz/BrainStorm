import "./modal-login.css";
import {useContext } from 'react';
import { ThemeContext } from '../../../contexts/theme';

const ModalLogin = ({ active, setActive, children }) => {
const [{ theme }] = useContext(ThemeContext);

  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
        style={{backgroundColor: theme.backgroundColor_header}}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalLogin;