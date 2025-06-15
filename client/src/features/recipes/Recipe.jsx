// import { useRecipes } from "./useRecipes.js";
// import { useUser } from "../authentication/useUser.js";
// import RecipeItem from "./RecipeItem.jsx";
// import LoadingSpinner from "../../ui/LoadingSpinner.jsx";

// const Recipe = () => {
//     const { recipes, isLoading: isLoadingRecipe } = useRecipes();
//     const { user, isLoading } = useUser();

//     if (isLoadingRecipe || isLoading) return <LoadingSpinner />;

//     return (
//         <div className="container mx-auto max-w-5xl px-4 py-8">
//             <h1 className="text-3xl font-semibold mb-4">All Recipes</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {recipes.data.recipes.map(recipe => (
//                     <RecipeItem key={recipe._id} recipe={recipe} user={user} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Recipe;


import { useRecipes } from "./useRecipes.js";
import { useUser } from "../authentication/useUser.js";
import RecipeItem from "./RecipeItem.jsx";
import LoadingSpinner from "../../ui/LoadingSpinner.jsx";
import { FaUtensils, FaSearch } from "react-icons/fa";

const Recipe = () => {
    const { recipes, isLoading: isLoadingRecipe } = useRecipes();
    const { user, isLoading } = useUser();

    if (isLoadingRecipe || isLoading) 
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
                <LoadingSpinner />
            </div>
        );

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 w-20 h-20 rounded-full mb-6">
                        <FaUtensils className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                        Flavour Folio
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Discover recipes crafted with passion and expertise
                    </p>
                    
                </div>

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        All Recipes <span className="text-amber-600">({recipes.data.recipes.length})</span>
                    </h2>
                    <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filter
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                            </svg>
                            Sort
                        </button>
                    </div>
                </div>

                {recipes.data.recipes.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-amber-100">
                            <FaUtensils className="h-12 w-12 text-amber-500" />
                        </div>
                        <h3 className="mt-6 text-xl font-medium text-gray-900">No recipes found</h3>
                        <p className="mt-2 text-gray-500 max-w-md mx-auto">
                            It seems no recipes have been added yet. Be the first to create one!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {recipes.data.recipes.map(recipe => (
                            <RecipeItem key={recipe._id} recipe={recipe} user={user} />
                        ))}
                    </div>
                )}

                <div className="mt-16 flex justify-center">
                    <nav className="flex items-center space-x-1">
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            Previous
                        </button>
                        <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 border border-transparent rounded-lg text-white font-medium">
                            1
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            2
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            3
                        </button>
                        <span className="px-4 py-2 text-gray-500">...</span>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            8
                        </button>
                        <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                            Next
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Recipe;