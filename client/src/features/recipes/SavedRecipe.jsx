import { useState } from "react";
import { useSavedRecipes } from "./useSavedRecipes.js";
import LoadingSpinner from "../../ui/LoadingSpinner.jsx";
import { FaBookmark, FaClock, FaChevronDown, FaChevronUp, FaUtensils } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SavedRecipe = () => {
    const { savedRecipes, isLoading: isLoadingSavedRecipes } = useSavedRecipes();
    const navigate = useNavigate();
    const [expandedRecipeId, setExpandedRecipeId] = useState(null);

    if (isLoadingSavedRecipes) 
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-50">
                <LoadingSpinner />
            </div>
        );

    const toggleExpandRecipe = (recipeId) => {
        setExpandedRecipeId(expandedRecipeId === recipeId ? null : recipeId);
    };

    const handleExploreRecipes = () => {
        navigate("/"); // Changed to navigate to home page
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 w-20 h-20 rounded-full mb-6">
                        <FaBookmark className="h-10 w-10 text-white" />
                    </div>
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                        Your Culinary Collection
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                        Recipes you've saved for later inspiration
                    </p>
                </div>

                {savedRecipes.data.savedRecipes.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
                        <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-full bg-amber-100">
                            <FaBookmark className="h-12 w-12 text-amber-500" />
                        </div>
                        <h3 className="mt-6 text-xl font-medium text-gray-900">Your recipe box is empty</h3>
                        <p className="mt-2 text-gray-500 max-w-md mx-auto">
                            Save recipes you love to find them here later
                        </p>
                        <button 
                            onClick={handleExploreRecipes}
                            className="mt-6 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium rounded-xl shadow-md hover:from-amber-600 hover:to-orange-700 transition-all"
                        >
                            Explore Recipes
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8">
                        {savedRecipes.data.savedRecipes.map(recipe => (
                            <motion.div
                                key={recipe._id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div 
                                    className="p-6 cursor-pointer"
                                    onClick={() => toggleExpandRecipe(recipe._id)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-xl font-bold text-gray-800">
                                                {recipe.name}
                                            </h2>
                                            <div className="flex items-center text-gray-600 mt-2">
                                                <FaClock className="h-4 w-4 mr-1 text-amber-500" />
                                                <span>{recipe.cookingTime} minutes</span>
                                            </div>
                                        </div>
                                        <button className="text-amber-600 hover:text-amber-700 p-2">
                                            {expandedRecipeId === recipe._id ? (
                                                <FaChevronUp className="h-5 w-5" />
                                            ) : (
                                                <FaChevronDown className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {expandedRecipeId === recipe._id && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-gray-100"
                                        >
                                            <div className="p-6">
                                                <div className="relative mb-6">
                                                    <img
                                                        src={recipe.imageUrl || "/placeholder-recipe.jpg"}
                                                        alt={recipe.name}
                                                        className="w-full h-64 object-cover rounded-xl"
                                                        onError={(e) => {
                                                            e.target.onerror = null; 
                                                            e.target.src = "/placeholder-recipe.jpg";
                                                        }}
                                                    />
                                                </div>
                                                
                                                <div className="mb-6">
                                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Instructions</h3>
                                                    <div className="prose max-w-none text-gray-600">
                                                        {recipe.instructions.split('\n').map((step, i) => (
                                                            <p key={i} className="mb-3">
                                                                <span className="font-bold text-amber-600 mr-2">{i + 1}.</span>
                                                                {step}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        {recipe.ingredients.map((ingredient, index) => (
                                                            <div key={index} className="flex items-start">
                                                                <span className="flex-shrink-0 h-5 w-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5 mr-2">
                                                                    <span className="text-xs text-amber-800">•</span>
                                                                </span>
                                                                <span className="text-gray-700">{ingredient}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                                
                                                <button
                                                    className="mt-8 w-full flex justify-center items-center py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-white font-medium shadow-lg transition-all duration-300"
                                                >
                                                    <FaUtensils className="h-5 w-5 mr-2" />
                                                    Start Cooking
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SavedRecipe;