import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const ref = useRef();
  const [password, setPassword] = useState({
    site: "",
    username: "",
    pass: "",
  });
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);
  const ShowHide = () => {
    if (ref.current.src.includes("Icons/Show.svg")) {
      ref.current.src = "Icons/Hide.svg";
      ShowHideText();
    } else {
      ref.current.src = "Icons/Show.svg";
      ShowHideText();
    }
  };
  function ShowHideText() {
    let x = document.getElementsByName("pass")[0];
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  const SavePassword = () => {
    if (
      password.site === "" ||
      password.username === "" ||
      password.pass === ""
    ) {
      if (password.site === "") {
        SavedFailed("Website URL");
      }
      if (password.username === "") {
        SavedFailed("Username");
      }
      if (password.pass === "") {
        SavedFailed("Password");
      }
      return;
    }
    let id = uuidv4();
    setPasswordArray([...passwordArray, { ...password, id: id }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...passwordArray, { ...password, id: id }])
    );
    setPassword({ site: "", username: "", pass: "" });
    setTimeout(() => {
      SavedSuccessfully();
    }, 100);
  };
  const DeletePassword = (id) => {
    let confirm = window.confirm(
      "Are you sure you want to delete this password?"
    );
    if (confirm) {
      setPasswordArray(passwordArray.filter((pass) => pass.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(passwordArray.filter((pass) => pass.id !== id))
      );
      setTimeout(() => {
        DeletedSuccessfully();
      }, 100);
    }
  };
  const UpdatePassword = (id) => {
    setPassword(passwordArray.filter((pass) => pass.id === id)[0]);
    setPasswordArray(passwordArray.filter((pass) => pass.id !== id));
    localStorage.setItem(
      "passwords",
      JSON.stringify(passwordArray.filter((pass) => pass.id !== id))
    );
  };
  const SavedSuccessfully = () => {
    toast.success("Password Saved Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const SavedFailed = (field) => {
    toast.error(`Save failed, ${field} cannot be empty`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const DeletedSuccessfully = () => {
    toast.success("Password Deleted Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  const HandleChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  const copytext = (text) => {
    toast.success("Text Copied to ClipBoard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {}
      <ToastContainer />
      <div className="text-white absolute inset-0 -z-10 2xl:h-auto h-fit w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <Navbar />
        <div className="mx-auto md:container md:px-40 md:">
          <h1 className="text-4xl font-bold text-center">
            Welcome to
            <span className="font-bold text-4xl text-green-400">
              &lt;<span className="text-white ">Your Personal Password Manager</span>/&gt;
            </span>
          </h1>
          <p className="text-2xl text-center mt-4 mb-4 font-semibold">
            Your Own Password Manager which uses LocalStorage to save your password.
          </p>
          <div className="flex flex-col p-4 text-black sm:gap-8 gap-2 font-semibold">
            <input
              value={password.site}
              onChange={HandleChange}
              placeholder="Enter Website URL"
              className="rounded-full w-full py-1 px-2"
              type="text"
              name="site"
            />
            <div className="sm:flex sm:justify-center sm:items-center sm:gap-8 w-full m-auto">
              <input
                value={password.username}
                onChange={HandleChange}
                placeholder="Enter Username"
                className="rounded-full w-full py-1 px-2"
                type="text"
                name="username"
              />
              <div className="relative sm:mt-0 mt-2">
                <input
                  value={password.pass}
                  onChange={HandleChange}
                  placeholder="Enter Password"
                  className="rounded-full w-full py-1 px-2"
                  type="password"
                  name="pass"
                />
                <span
                  className="absolute top-[5px] right-1 w-6"
                  onClick={ShowHide}
                >
                  <img ref={ref} src="Icons/Hide.svg" alt="Show" />
                </span>
              </div>
            </div>
            <button
              onClick={SavePassword}
              className="bg-green-400 text-white font-semibold rounded-full w-fit m-auto py-1 px-6 flex justify-center items-center gap-2"
            >
              <lord-icon
                src="https://cdn.lordicon.com/jgnvfzqg.json"
                trigger="hover"
                colors="primary:#ffffff"
              ></lord-icon>
              Save
            </button>
          </div>
          <div className="overflow-auto sm:h-72 h-56">
            <h1 className="text-2xl font-bold">Your Passwords</h1>
            {passwordArray.length === 0 && (
              <div className="text-2xl font-bold text-center p-5">
                No Passwords to Show
              </div>
            )}
            {passwordArray.length !== 0 && (
              <table className="table-auto w-full text-xl font-semibold">
                <thead>
                  <tr>
                    <th className="py-2 w-1/6">Website</th>
                    <th className="py-2 w-1/6">Username</th>
                    <th className="py-2 w-1/6">Password</th>
                    <th className="py-2 w-1/6">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {passwordArray.map((pass, index) => (
                    <tr key={index}>
                      <td className="text-center py-2">
                        <div className="flex items-center justify-center">
                          <a href={pass.site} target="_blank">
                            {pass.site}
                          </a>
                          <div
                            className="w-fit"
                            onClick={() => {
                              copytext(pass.site);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              colors="primary:#ffffff"
                              style={{
                                padding: "5px 10px 5px 10px",
                                cursor: "pointer",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2">
                        <div className="flex items-center justify-center">
                          <span>{pass.username}</span>
                          <div
                            className="w-fit"
                            onClick={() => {
                              copytext(pass.username);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              colors="primary:#ffffff"
                              style={{
                                padding: "5px 10px 5px 10px",
                                cursor: "pointer",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2">
                        <div className="flex items-center justify-center">
                          <span>{"*".repeat(pass.pass.length)}</span>
                          <div
                            className="w-fit"
                            onClick={() => {
                              copytext(pass.pass);
                            }}
                          >
                            <lord-icon
                              src="https://cdn.lordicon.com/iykgtsbt.json"
                              trigger="hover"
                              colors="primary:#ffffff"
                              style={{
                                padding: "5px 10px 5px 10px",
                                cursor: "pointer",
                              }}
                            ></lord-icon>
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-2">
                        <span
                          onClick={() => {
                            UpdatePassword(pass.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/gwlusjdu.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{
                              padding: "5px 10px 5px 10px",
                              cursor: "pointer",
                              margin: "0px 5px 0px 5px",
                            }}
                          ></lord-icon>
                        </span>
                        <span
                          onClick={() => {
                            DeletePassword(pass.id);
                          }}
                        >
                          <lord-icon
                            src="https://cdn.lordicon.com/skkahier.json"
                            trigger="hover"
                            colors="primary:#ffffff"
                            style={{
                              padding: "5px 10px 5px 10px",
                              cursor: "pointer",
                              margin: "0px 5px 0px 5px",
                            }}
                          ></lord-icon>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
