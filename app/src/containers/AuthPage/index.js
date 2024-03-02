import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, register } from "../../redux/actions/auth";
import { NotificationManager } from "react-notifications";
import LoginPage from "./form/login";
import RegisterPage from "./form/register";

export function Index(props) {
  const [page, setPage] = useState("loginPage");

  useEffect(() => {
    if (props.auth.isAuthorised === true) {
      localStorage.setItem("isAuthorised", true);
      window.location = "/";
    }
  }, [props.auth.isAuthorised]);

  useEffect(() => {
    if (props.auth.error) {
      const errorMsg =
        props.auth.error?.response?.data.message || "Something went wrong";
      NotificationManager.error(errorMsg);
    }
  }, [props.auth.error]);

  const handleLogin = (inputs) => {
    props.dispatch(login(inputs));
  };

  const handleRegister = (inputs) => {
    props.dispatch(register(inputs));
  };

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <main className="auth-page">
      {page === "loginPage" ? (
        <LoginPage
          handlePage={handlePage}
          handleLogin={handleLogin}
          loading={props.auth.loading}
        />
      ) : (
        <RegisterPage
          handlePage={handlePage}
          handleRegister={handleRegister}
          loading={props.auth.loading}
        />
      )}
    </main>
  );
}
export default connect((state) => ({
  auth: state.auth,
}))(Index);
