import axios from "axios";
import { use } from "react";

const useNumber = () => {
    const useNumber = () => {
        const [number, setNumber] = useState(0);
        useEffect(() => {
            axios
                .get("/getNumber")
                .then( res => setNumber(res.data));
        })
    }
   return number ;
   
};

export default useNumber;