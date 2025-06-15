// import SpinnerMini from "./SpinnerMini.jsx";

// const Form = ({
//     username,
//     setUsername,
//     password,
//     setPassword,
//     label,
//     onSubmit,
//     isLoading,
// }) => {
//     return (
//         <div className="w-full sm:w-1/2 mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
//             <form onSubmit={onSubmit} className="space-y-4">
//                 <h2 className="text-2xl font-semibold text-center">{label}</h2>
//                 <div className="flex flex-col">
//                     <label htmlFor="username" className="text-gray-600">
//                         Username:
//                     </label>
//                     <input
//                         type="text"
//                         id="username"
//                         value={username}
//                         onChange={e => {
//                             setUsername(e.target.value);
//                         }}
//                         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//                     />
//                 </div>
//                 <div className="flex flex-col">
//                     <label htmlFor="password" className="text-gray-600">
//                         Password:
//                     </label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={password}
//                         onChange={e => {
//                             setPassword(e.target.value);
//                         }}
//                         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={isLoading}
//                     className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//                 >
//                     {isLoading ? <SpinnerMini /> : label}
//                 </button>
//             </form>
//             {/*{isLoading && (*/}
//             {/*    <div className="text-center mt-4">*/}
//             {/*        <h1 className="text-xl font-semibold">Loading...</h1>*/}
//             {/*    </div>*/}
//             {/*)}*/}
//         </div>
//     );
// };

// export default Form;


import SpinnerMini from "./SpinnerMini.jsx";

const Form = ({
    username,
    setUsername,
    password,
    setPassword,
    label,
    onSubmit,
    isLoading,
}) => {
    return (
        <div className="max-w-md mx-auto mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-2xl shadow-xl">
            <div className="text-center mb-8">
                <div className="mx-auto bg-gradient-to-r from-purple-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">{label}</h2>
                <p className="text-gray-500 mt-2">Enter your credentials to continue</p>
            </div>

            <form onSubmit={onSubmit} className="space-y-6">
                <div className="space-y-5">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="Enter username"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                            placeholder="Enter password"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>
                    <div className="text-sm">
                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Forgot password?
                        </a>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center items-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white font-medium shadow-lg transition-all duration-300"
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <SpinnerMini />
                            <span className="ml-2">Processing...</span>
                        </span>
                    ) : (
                        label
                    )}
                </button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Form;