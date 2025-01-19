import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import RegisterRow from "./RegisterRow";
import Swal from "sweetalert2";
import axios from "axios";

const Registers = () => {
  const { user } = useContext(AuthContext);
  const [registers, setRegisters] = useState([]);

  const url = `http://localhost:5000/registers?email=${user?.email}`;
  
  useEffect(() => {
    axios
      .get(url, { withCredentials: true })
      .then( res => setRegisters(res.data));

    // check previous line setRegister

  //   fetch(url, {Credential: "include"})
  //     .then((res) => res.json())
  //     .then((data) => setRegisters(data));
  });

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete?");
    if (proceed) {
      fetch(`http://localhost:5000/registers/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire("Deleted Successfully");
            const remaining = registers.filter(
              (register) => register._id !== id
            );
            setRegisters(remaining);
          }
        });
    }
  };
  const handleRegisterConfirm = (id) => {
    fetch(`http://localhost:5000/registers/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.confirmed > 0) {
          // update state
          const remaining = registers.filter((register) => register._id !== id);
          const updated = registers.find((register) => register._id === id);

          updated.status = "confirm";
          const newRegisters = [updated, ...remaining];
          setRegisters(newRegisters);
        }
      });
  };

  return (
    <div>
      <h1 className="text-5xl">Your Booking: {registers.length} </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Segments</th>
              <th>Email</th>
              <th>Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {registers.map((register) => (
              <RegisterRow
                key={register._id}
                registers={register}
                handleDelete={handleDelete}
                handleRegisterConfirm={handleRegisterConfirm}
              ></RegisterRow>
            ))} */}
            {registers.map((register)=>(
              <RegisterRow
              key={register._id}  
              registers={register}
              handleDelete={handleDelete}
              handleRegisterConfirm={handleRegisterConfirm}
            ></RegisterRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registers;
