import "./scroll-to-top.css"
import { IoMdRocket } from "react-icons/io";
import { ThemeContext } from "../../contexts/theme"
import { useContext } from "react";

const top = () => {window.scrollTo(0, 0)}

export default function ScrollToTop() {
    const [{ theme }] = useContext(ThemeContext);
    return (
        <div className="scrollToTop" onClick={top}>
            <IoMdRocket size={40} style={{color: theme.color_icon_scroll_up}} />
        </div>
    )
  }