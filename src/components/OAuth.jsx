import { GoogleAuthProvider, getAuth, getRedirectResult, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import { app } from "../../firebaseConfig";
import { useEffect } from "react";

export default function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    getRedirectResult(auth).then( async(response) => {
        if (!response) return
        const res = await fetch("/api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: response?.user.displayName,
            email: response?.user.email,
            photo: response?.user.photoURL,
          }),
        });
        const data = await res.json();
        dispatch(signInSuccess(data));
        navigate("/");

        // Your code here
    }).catch(error => {
        console.error(error);
    })
}, []);

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.log("Could not sign in with google", error);
    }
  };

  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95"
    >
      Continue with google
    </button>
  );
}
