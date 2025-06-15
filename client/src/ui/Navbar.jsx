// import { Link } from "react-router-dom";
// import { useUser } from "../features/authentication/useUser.js";
// import { useLogout } from "../features/authentication/useLogout.js";

// const Navbar = () => {
//     const { logout } = useLogout();
//     const { user } = useUser();

//     return (
//         <div className="bg-blue-500 p-4">
//             <div className="container mx-auto max-w-5xl flex justify-between items-center">
//                 <Link to="/home" className="text-white text-lg font-semibold">
//                     Home
//                 </Link>
//                 <div className="space-x-4">
//                     <Link to="/create-recipe" className="text-white">
//                         Create
//                     </Link>
//                     <Link to="/saved-recipes" className="text-white">
//                         Saved
//                     </Link>
//                     {user ? (
//                         <button onClick={logout} className="text-white">
//                             Logout
//                         </button>
//                     ) : (
//                         <>
//                             <Link to="/login" className="text-white">
//                                 Login
//                             </Link>
//                             <Link to="/register" className="text-white">
//                                 Register
//                             </Link>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import { Link } from "react-router-dom";
import { useUser } from "../features/authentication/useUser.js";
import { useLogout } from "../features/authentication/useLogout.js";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useUser();

    return (
        <div className="bg-gradient-to-r from-purple-700 to-indigo-800 py-5 px-6 shadow-lg">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                {/* Left-aligned brand and main nav */}
                <div className="flex items-center gap-10">
                    <Link to="/home" className="text-amber-300 text-2xl font-bold italic tracking-wide">
                        FlavorFolio
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex gap-8">
                        <Link to="/create-recipe" className="text-indigo-100 hover:text-amber-300 transition font-medium">
                            New Dish
                        </Link>
                        <Link to="/saved-recipes" className="text-indigo-100 hover:text-amber-300 transition font-medium">
                            My Collection
                        </Link>
                    </div>
                </div>

                {/* Right-aligned auth section */}
                <div className="flex items-center gap-6">
                    {user ? (
                        <>
                            <span className="text-cyan-200 hidden sm:inline">
                                Welcome, {user?.email?.split('@')[0] || 'User'}
                            </span>
                            <button 
                                onClick={logout} 
                                className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-1.5 rounded-full text-sm shadow transition"
                            >
                                Exit
                            </button>
                        </>
                    ) : (
                        <div className="flex gap-5">
                            <Link 
                                to="/login" 
                                className="text-indigo-100 hover:text-amber-300 transition font-medium"
                            >
                                Sign In
                            </Link>
                            <Link 
                                to="/register" 
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1.5 rounded-full text-sm shadow transition"
                            >
                                Join Free
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Navigation - only shows on small screens */}
            <div className="md:hidden flex justify-center mt-4 gap-8">
                <Link to="/create-recipe" className="text-indigo-100 hover:text-amber-300 transition text-sm">
                    New Dish
                </Link>
                <Link to="/saved-recipes" className="text-indigo-100 hover:text-amber-300 transition text-sm">
                    My Collection
                </Link>
            </div>
        </div>
    );
};

export default Navbar;