import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  const logout = () => {
    history.push("/");
    localStorage.removeItem("userinfo");
    localStorage.removeItem("user");
  };

  const userinfo = JSON.parse(localStorage.getItem("userinfo"));
  const username = userinfo.user_title.split("");
  const usernamefirstalpha = username[0].charAt(0);
  const usernamesecondalpha = username[username.length - 1].charAt(0);
  const usertitle = usernamefirstalpha.concat(usernamesecondalpha);

  return (
    <div className="logoutuser">
      <Button
        className="btn"
        onClick={logout}
        data-toggle="tooltip"
        data-placement="bottom"
        title="Çıkış Yap"
      >
        <span>{usertitle}</span>
        <i className="fas fa-user-times" />
      </Button>
    </div>
  );
}

export default Logout;
