import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <div className="mb-5">
                <h1 className='text-9xl font-bold text-center'>404</h1>
                <p className="text-3xl text-center">Page Not Found</p>
            </div>
            <div className=" mt-5 text-center">
                <Link className="px-4 py-2 rounded bg-[red] text-white" to={'/'}>Go Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;