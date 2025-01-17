import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import RegisterRow from "./RegisterRow";

const Registers = () => {
  const { user } = useContext(AuthContext);
  const [registers, setRegisters] = useState([]);

  const url = `http://localhost:5000/registers?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setRegisters(data));
  });
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
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
                {registers.map((register) => (
             
                <RegisterRow key={register._id} registers={register}></RegisterRow>
                ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registers;
