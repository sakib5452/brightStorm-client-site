import { useLoaderData } from "react-router-dom";

const CollegeDetail = () => {
    const toyDetail = useLoaderData()
    const { collegeImg, collegeName, events, sports, research, collegeRating, admissionDate } = toyDetail
    return (
        <div className="ml-96 mb-20">
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


                </div>
            </div>
        </div>
    );
};

export default CollegeDetail;