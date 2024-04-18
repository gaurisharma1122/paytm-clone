import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="w-full h-[100vh] bg-gray-600 relative">
            <div className="w-[40%] bg-white mx-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg">
                <h1 className="text-2xl font-bold text-center my-4">Sign Up</h1>
                <p className="text-center text-md text-gray-600">Enter your information to create an account</p>
                <form className="mx-[2rem] my-[1rem]">
                    <label className="text-md font-semibold ">First Name</label>
                    <input type="text" placeholder="Enter your first name" className="w-full border-2 py-2 px-4 rounded-md outline-none block mt-2 mb-4" required/>
                    
                    <label className="text-md font-semibold ">Last Name</label>
                    <input type="text" placeholder="Enter your last name" className="w-full border-2 py-2 px-4 rounded-md outline-none block mt-2 mb-4" required/>
                    
                    <label className="text-md font-semibold ">Email</label>
                    <input type="email" placeholder="Enter your email" className="w-full border-2 py-2 px-4 rounded-md outline-none block mt-2 mb-4" required />
                    
                    <label className="text-md font-semibold ">Password</label>
                    <input type="password" placeholder="Enter your password" className="w-full border-2 py-2 px-4 rounded-md outline-none block mt-2 mb-4" required />
                    
                    <button type="submit" className="py-4 px-4 text-center w-full bg-black rounded-md text-white text-md font-bold ">Sign Up</button>

                </form>
                <p className="text-center text-md text-gray-600 pb-4">Already have an account? <Link to='/signin' className="hover:underline">Login</Link></p>
            </div>
            
        </div>
    )
};

export default Signup