import React, { useContext } from 'react'
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";

function Profile() {
  const history = useHistory();

  const { user, setUser } = useContext(UserContext);

  // useEffect(() => {
  //   if(user) history.push("/");
  // }, [user])


  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
    await res;
    setUser(null);
    history.push("/login");
  }



  return (
    <div className= "profilePageWrapper">
        <header className="profileTitleContainer">
          <h1 onClick={ () => history.push("/") } className="profileTitle">bopshop.</h1>
        </header>
        <div className="accountContainer">
          <h1 className="accountTitle">your account.</h1>
        </div>
        <footer className="signoutContainer">
          <button className="signoutButton" onClick={handleLogout}>sign out.</button>
        </footer>
    </div>
  )
}

export default Profile