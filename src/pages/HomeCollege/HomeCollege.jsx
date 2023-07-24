import { useEffect, useState } from "react";
import HomeCollegeDetail from "../HomeCollegeDetail/HomeCollegeDetail";



const HomeCollege = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('https://brightstorm-server-site.vercel.app/college')
            .then(res => res.json())
            .then(data => { setDetails(data) })
    }, [])


    return (
        <div>
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                        <span className="relative">College</span>
                    </span>{' '}

                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Our Admission Site provides comprehensive information about our programs, admission requirements.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    details.slice(3, 6).map(data => <HomeCollegeDetail
                        key={data._id}
                        data={data}
                    ></HomeCollegeDetail>)
                }
            </div>
        </div>
    );
};

export default HomeCollege;