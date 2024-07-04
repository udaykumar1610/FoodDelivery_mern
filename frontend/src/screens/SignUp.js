// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export default function SignUp() {
//   const [credentials, setcredentials] = useState({
//     name: "",
//     email: "",
//     password: "",
//     geolocation: "",
//   });
//   const onchange = (e) => {
//     setcredentials({ ...credentials, [e.target.name]: e.target.value });
//   };
//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/creatUser", {
//       method: "POST",
//       header: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify({
//         name: credentials.name,
//         email: credentials.email,
//         password: credentials.password,
//         location: credentials.geolocation,
//       }),
//     });
//     const json = await response.json();
//     console.log(json);
//     if (!json.success) {
//       alert("Enter valid credentials");
//     }
//   };
//   return (
//     <>
//       <div className="container">
//         <form onSubmit={submitHandler}>
//           <div className="form-group">
//             <label htmlhtmlFor="name"> Name</label>
//             <input
//               type="text"
//               className="form-control"
//               name="name"
//               value={credentials.name}
//               onChange={onchange()}
//               placeholder=" name"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               name="email"
//               value={credentials.email}
//               onChange={onchange()}
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               name="password"
//               value={credentials.password}
//               onChange={onchange()}
//               placeholder="Password"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="location">Address</label>
//             <input
//               type="text"
//               className="form-control"
//               id="location"
//               name="geoloction"
//               value={credentials.geolocation}
//               onChange={onchange()}
//               placeholder="Password"
//             />
//           </div>

//           <button type="submit" className=" m-3 btn btn-success">
//             Submit
//           </button>
//           <Link to="/login " className="m-3 btn btn-danger">
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      })
    );
    const response = await fetch("http://localhost:5000/api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        location: credentials.geolocation,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
  };

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={credentials.name}
            onChange={onChange}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="geolocation">Address</label>
          <input
            type="text"
            className="form-control"
            id="geolocation"
            name="geolocation"
            value={credentials.geolocation}
            onChange={onChange}
            placeholder="Address"
          />
        </div>
        <button type="submit" className="m-3 btn btn-success">
          Submit
        </button>
        <Link to="/login" className="m-3 btn btn-danger">
          Already a user
        </Link>
      </form>
    </div>
  );
}
