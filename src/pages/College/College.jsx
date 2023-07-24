import { useLoaderData } from "react-router-dom";
import Colleges from "../Colleges/Colleges";

const College = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div className="grid grid-cols-1  lg:grid-cols-3 md:grid-cols-2 gap-5">
            {
                data.map(detail =>
                    <Colleges
                        key={detail._id}
                        detail={detail}
                    ></Colleges>)
            }
        </div>
    );
};

export default College;