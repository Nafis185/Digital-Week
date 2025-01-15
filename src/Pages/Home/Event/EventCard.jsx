import { Link } from "react-router-dom";


const EventCard = ({event}) => {
    const { title , _id ,  img , price} = event;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-blue-500  ">Price: ${price}</p>

          <div className="card-actions">
            {/* <Link to={`/checkout/${_id}`}>
              <button className="btn btn-primary">Register Now</button>
            </Link> */}
            
              <Link to={`/checkout/${_id}`} >
                <button className="btn btn-primary">Register Now</button>
              </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
