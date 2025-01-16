import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import {AuthContext}  from"../../Providers/AuthProvider";
import dropdownIcon from "../../assets/svg/arrow.png";

const Checkout = () => {
  const events = useLoaderData();
  const { title, _id, img, price } = events;
  const { user } = useContext(AuthContext);

  // State to manage the dropdown visibility and selected segments
  const [segments, setSegments] = useState([
    { id: 1, label: "Segment 1", selected: false },
    { id: 2, label: "Segment 2", selected: false },
    { id: 3, label: "Segment 3", selected: false },
  ]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelect = (id) => {
    setSegments(
      segments.map((segment) =>
        segment.id === id
          ? { ...segment, selected: !segment.selected }
          : segment
      )
    );
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const number = form.number.value;
    const studentId = form.studentId.value;
    const eventTitle = title;
    const registration = {
      participantName: name,
      email,
      number,
      studentId,
      eventTitle,
      segment: title,
      service_id: _id,
      price: price,
    };
    // previous line segment title/evenet title/service title

    console.log(registration);

    fetch("http://localhost:5000/Registers", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(registration),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
          alert("Registration successful");
          // form.reset();
        }
      });
  };

  
  return (
    <div>
      <h1>Checkout {title} </h1>

      <form onSubmit={handleCheckout} className="card-body">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Student ID</span>
            </label>
            <input
              type="text"
              name="studentId"
              placeholder="student id"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone </span>
            </label>
            <input
              type="number"
              name="number"
              placeholder="phone number"
              className="input input-bordered"
              required
            />
          </div>

          {/* drowpdown section */}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Event Segments</span>
            </label>
            <div className="relative">
              <div
                className="input input-bordered cursor-pointer flex items-center justify-between"
                onClick={toggleDropdown}
              >
                <span>Select Segments</span>
                <span className="material-icons"> <img className="w-5" src={dropdownIcon} alt="icon" /> </span>
              </div>
              {dropdownOpen && (
                <div className="absolute z-10 bg-white shadow-lg border rounded w-full mt-1">
                  {segments.map((segment) => (
                    <div key={segment.id} className="p-2 hover:bg-gray-100">
                      <label>
                        <input
                          type="checkbox"
                          checked={segment.selected}
                          onChange={() => handleSelect(segment.id)}
                        />
                        {segment.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block "
            type="submit"
            value="Register Confirm"
          />
        </div>
      </form>
    </div>
  );
};


export default Checkout;










// import { useContext, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";

// const Checkout = () => {
//   const events = useLoaderData();
//   const { title } = events;
//   const { user } = useContext(AuthContext);

//   // State to manage the dropdown visibility and selected segments
//   const [segments, setSegments] = useState([
//     { id: 1, label: "Segment 1", selected: false },
//     { id: 2, label: "Segment 2", selected: false },
//     { id: 3, label: "Segment 3", selected: false },
//   ]);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleSelect = (id) => {
//     setSegments(
//       segments.map((segment) =>
//         segment.id === id
//           ? { ...segment, selected: !segment.selected }
//           : segment
//       )
//     );
//   };

//   const handleCheckout = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = user?.email;
//     const number = form.number.value;
//     const studentId = form.studentId.value;
//     const eventTitle = title;
//     const selectedSegments = segments
//       .filter((segment) => segment.selected)
//       .map((segment) => segment.label);

//     console.log({
//       name,
//       email,
//       number,
//       studentId,
//       eventTitle,
//       selectedSegments,
//     });
//   };

//   return (
//     <div>
//       <h1>Checkout {title} </h1>

//       <form onSubmit={handleCheckout} className="card-body">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* Other input fields */}
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Event Segments</span>
//             </label>
//             <div className="relative">
//               <div
//                 className="input input-bordered cursor-pointer flex items-center justify-between"
//                 onClick={toggleDropdown}
//               >
//                 <span>Select Segments</span>
//                 <span className="material-icons">arrow_drop_down</span>
//               </div>
//               {dropdownOpen && (
//                 <div className="absolute z-10 bg-white shadow-lg border rounded w-full mt-1">
//                   {segments.map((segment) => (
//                     <div key={segment.id} className="p-2 hover:bg-gray-100">
//                       <label>
//                         <input
//                           type="checkbox"
//                           checked={segment.selected}
//                           onChange={() => handleSelect(segment.id)}
//                         />
//                         {segment.label}
//                       </label>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="form-control mt-6">
//           <input
//             className="btn btn-primary btn-block"
//             type="submit"
//             value="Register Confirm"
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Checkout;
