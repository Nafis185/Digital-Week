const RegisterRow = ({ registers }) => {
  const {
    participantName,
    email,
    number,
    img,
    studentId,
    eventTitle,
    segment,
    service_id,
    price,
  } = registers;

  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            { img && <img
              src={img}
              alt="img"
            />}
          </div>
        </div>
      </td>
      <td>{eventTitle}</td>
      <td>{email}</td>
      <td>BDT- {price}/-</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default RegisterRow;
