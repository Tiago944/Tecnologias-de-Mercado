import AppNav from "./AppNav";
import reactLogo from "../assets/react.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">
        <img
          src={
            "https://cdn.discordapp.com/attachments/1283836450835664916/1297280500385185853/underline-updated-logo.png?ex=67155a1d&is=6714089d&hm=ddb0c5f8cb44c7788a23a73793618c82c630db5d7835ffa639ea0c1471a90a68&"
          }
          alt=""
          className="logo"
        />
      </Link>
      <AppNav />
    </>
  );
};

export default Header;
