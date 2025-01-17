const RegisterRow = ({ registers , handleDelete , handleRegisterConfirm }) => {
  const {
    participantName,
    email,
    _id,
    number,
    img,
    studentId,
    eventTitle,
    segment,
    service_id,
    price,
    status,
  } = registers;
  
//  const handleDelete = (id) => {
//    const proceed = confirm("Are you sure you want to delete?");
//    if (proceed) {
//      fetch(`http://localhost:5000/registers/${id}`, {
//        method: "DELETE",
//      })
//        .then((res) => res.json())
//        .then((data) => {
//          console.log(data);
//          if (data.deletedCount > 0) {
//            alert("deleted successfully");
//            const remaining = registers.filter((register) => register._id !== id);
//            setRegisters(remaining);

//          }
//        });
//    }
//  };


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm btn-error btn-outline "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded h-24 w-24">
            {img && <img src={img} alt="img" />}
          </div>
        </div>
      </td>
      <td>{eventTitle}</td>
      <td>{email}</td>
      <td>BDT- {price}/-</td>
      <th>
        {
            status === "confirm" ? <span className="font-bold text-primary" > Confirmed </span> :
          <button
            onClick={() => handleRegisterConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        }
      </th>
    </tr>
  );
};

export default RegisterRow;
