import blitzLogo from "../../assets/blitz.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const Nav = () => {
  return (
    <>
      <a href=".">
        <img src={blitzLogo} className="logo" alt="Blitz!" />
      </a>
      <SettingsOutlinedIcon
        className="settings icon"
        fontSize="large"
        onClick={() => console.log("Icon : Settings clicked")}
      />
    </>
  );
}

export default Nav;
