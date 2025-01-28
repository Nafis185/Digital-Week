// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import {  useNavigate } from "react-router-dom";





// const axiosSecure = axios.create({
//   baseURL: "http://localhost:5173",
//   withCredentials: true,
// });

// const useAxiosSecure = () => {
//     const {logOut} = useAuth();
//    const navigate = useNavigate();

//   useEffect(() => {
//     const requestInterceptor = axiosSecure.interceptors.request.use(
//       response => response,
//       // ------------------------------------------------------/
//       // axiosSecure.interceptors.response.use(
//       //   res => {
//       //     return res;
//       //   },
//       // ------------------------------------------------------/
//       (error) => {
//         console.log("error tracked in the interceptors", error.response);
//         // if (error.response.status === 401 || error.response.status === 403)
//         if (
//           error.response &&
//           (error.response.status === 401 || error.response.status === 403)
//         ) {
//           logOut()
//             .then(() => {
//               // ------------------------------------------------------/
//               //    localStorage.removeItem("token");
//               //    sessionStorage.removeItem("token");
//               // ------------------------------------------------------/
//               navigate("/login");
//             })
//             .catch((error) => console.log("logout error", error));
//         }
//         return Promise.reject(error);
//       }
//     );

 
//   return () =>{
//     axiosSecure.interceptors.request.eject(requestInterceptor);
//   };
// },[ logOut,navigate] );
// return axiosSecure;
// };

// export default useAxiosSecure;




// ------------------------------------------------------/





// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:5173",
//   withCredentials: true,
// });


// const useAxiosSecure = () => {

//     const {logOut} = useAuth();
//    const navigate = useNavigate();
//     useEffect(() => {
//       axiosSecure.interceptors.request.use((res) => {
//         useEffect(() => {
//           axiosSecure.interceptors.request.use(
//             (res) => {
//               return res;
//             },
//             (error) => {
//               console.log("error tracked in the interceptors", error.response);
//               if (
//                 error.response.status === 401 ||
//                 error.response.status === 403
//               ) {
//                 console.log("logout the user");
//                 logOut()
//                   .then(() => {
//                     navigate("/login");
//                   })
//                   .catch((error) => console.log(error));
//               }
//             }
//           );
//         });
//       });
//     }, []);
//     return axiosSecure;
// };

// export default useAxiosSecure;













// last correct one


// import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

// const axiosSecure = axios.create({
//   baseURL: "https://digital-week-server-updated.vercel.app",
//   withCredentials: true,
//   });

// const useAxiosSecure = () => {
// const {logOut} = useAuth ();
// const navigate = useNavigate();


//   useEffect(() => {
//     axiosSecure.interceptors.response.use((res) => {
//       return res;
//     },
//     (error) => {
//       console.log("error tracked in the interceptors", error.response)
//       if(error.response.status === 401 || error.response.status === 403){
//         console.log("logout the user")
//         logOut()
//         .then(() => {
//           navigate("/login")
//         })
//         .catch((error) => console.log(error));
//       }
//     });
//   });


//  return axiosSecure;
// };

// export default useAxiosSecure;






// from chatgpt

import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://digital-week-server-updated.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Add an interceptor
    const interceptor = axiosSecure.interceptors.response.use(
      (response) => response, // Pass successful responses through
      (error) => {
        console.error("Error tracked in the interceptor:", error?.response);
        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          // console.log("Logging out the user due to unauthorized access");
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => console.error("Error during logout:", err));
        }
        return Promise.reject(error); // Propagate the error
      }
    );

    // Cleanup: Eject the interceptor when the component using this hook unmounts
    return () => {
      axiosSecure.interceptors.response.eject(interceptor);
    };
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
