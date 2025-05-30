import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />

        {/* Show image only if user is NOT logged in */}
        {!userData && (
          <div className="w-full flex justify-center my-4">
            <img
              src="https://images.pexels.com/photos/2818118/pexels-photo-2818118.jpeg?auto=compress&cs=tinysrgb&w=1200" // Replace with your image URL or import
              alt="Banner"
              className="max-w-[90%] h-[500px] rounded-md"
            />
          </div>
        )}

        <main>
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
