/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const HomeCollegeDetail = ({ data }) => {
    // eslint-disable-next-line react/prop-types
    const { _id, collegeName, collegeImg, research, events, sports, collegeRating, admissionDate } = data
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={collegeImg} alt="Shoes" className="rounded-xl h-80" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{collegeName}</h2>
                    <p><span className="text-lg font-semibold">Research:</span> {research}</p>
                    <p><span className="text-lg font-semibold">Events:</span> {events}</p>
                    <p><span className="text-lg font-semibold">Sports:</span> {sports}</p>
                    <p><span className="text-lg font-semibold">College Rating:</span> {collegeRating}</p>
                    <p><span className="text-lg font-semibold">Admission Date:</span> {admissionDate}</p>

                    <div className="card-actions">
                        <Link to={`/collegeDetail/${_id}`}> <button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCollegeDetail;