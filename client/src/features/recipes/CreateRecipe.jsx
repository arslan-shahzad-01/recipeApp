// import { useState } from "react";

// import { useUser } from "../authentication/useUser.js";
// import { useCreateRecipe } from "./useCreateRecipe.js";
// import SpinnerMini from "../../ui/SpinnerMini.jsx";

// const CreateRecipe = () => {
//     const { createRecipe, isCreating } = useCreateRecipe();
//     const { user } = useUser();
//     const [recipe, setRecipe] = useState({
//         name: "",
//         ingredients: [],
//         instructions: "",
//         imageUrl: "",
//         cookingTime: 0,
//         userOwner: user.data.user._id,
//     });

//     const handleChange = e => {
//         const { name, value } = e.target;
//         setRecipe(prevState => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleIngredientChange = (e, index) => {
//         const { value } = e.target;
//         const ingredients = recipe.ingredients;
//         ingredients[index] = value;
//         setRecipe(prevState => ({
//             ...prevState,
//             ingredients,
//         }));
//     };

//     const addIngredient = () => {
//         setRecipe(prevState => ({
//             ...prevState,
//             ingredients: [...prevState.ingredients, ""],
//         }));
//     };

//     const handleSubmit = async e => {
//         e.preventDefault();
//         createRecipe(recipe);
//     };
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <h2 className="text-2xl font-semibold mb-4">Create Recipe</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label htmlFor="name" className="text-gray-600">
//                         Name
//                     </label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="ingredients" className="text-gray-600">
//                         Ingredients
//                     </label>
//                     {recipe.ingredients.map((ingredient, index) => (
//                         <input
//                             type="text"
//                             key={index}
//                             name="ingredients"
//                             value={ingredient}
//                             onChange={e => handleIngredientChange(e, index)}
//                             className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
//                         />
//                     ))}
//                     <button
//                         onClick={addIngredient}
//                         type="button"
//                         className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
//                     >
//                         Add Ingredient
//                     </button>
//                 </div>

//                 <div>
//                     <label htmlFor="instructions" className="text-gray-600">
//                         Instructions
//                     </label>
//                     <textarea
//                         id="instructions"
//                         name="instructions"
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
//                     ></textarea>
//                 </div>

//                 <div>
//                     <label htmlFor="imageUrl" className="text-gray-600">
//                         Image
//                     </label>
//                     <input
//                         type="text"
//                         id="imageUrl"
//                         name="imageUrl"
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
//                     />
//                 </div>

//                 <div>
//                     <label htmlFor="cookingTime" className="text-gray-600">
//                         Cooking Time (minutes)
//                     </label>
//                     <input
//                         type="number"
//                         id="cookingTime"
//                         name="cookingTime"
//                         onChange={handleChange}
//                         className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-full"
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     disabled={isCreating}
//                     className={`px-4 py-2 rounded-md ${
//                         isCreating
//                             ? "bg-blue-200 text-gray-600 cursor-not-allowed"
//                             : "bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
//                     }`}
//                 >
//                     {isCreating ? <SpinnerMini /> : "Create Recipe"}
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default CreateRecipe;


import { useState } from "react";
import { useUser } from "../authentication/useUser.js";
import { useCreateRecipe } from "./useCreateRecipe.js";
import SpinnerMini from "../../ui/SpinnerMini.jsx";

const CreateRecipe = () => {
    const { createRecipe, isCreating } = useCreateRecipe();
    const { user } = useUser();
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: user.data.user._id,
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setRecipe(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleIngredientChange = (e, index) => {
        const { value } = e.target;
        const ingredients = [...recipe.ingredients];
        ingredients[index] = value;
        setRecipe(prevState => ({
            ...prevState,
            ingredients,
        }));
    };

    const addIngredient = () => {
        setRecipe(prevState => ({
            ...prevState,
            ingredients: [...prevState.ingredients, ""],
        }));
    };

    const removeIngredient = (index) => {
        const ingredients = [...recipe.ingredients];
        ingredients.splice(index, 1);
        setRecipe(prevState => ({
            ...prevState,
            ingredients,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        createRecipe(recipe);
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl shadow-xl p-8">
                <div className="text-center mb-10">
                    <div className="mx-auto bg-gradient-to-r from-amber-500 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800">Create New Recipe</h2>
                    <p className="text-gray-500 mt-2">Share your culinary masterpiece with the world</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Recipe Name */}
                        <div className="col-span-full">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Recipe Name
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={recipe.name}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="Enter recipe name"
                                />
                            </div>
                        </div>

                        {/* Cooking Time */}
                        <div>
                            <label htmlFor="cookingTime" className="block text-sm font-medium text-gray-700 mb-1">
                                Cooking Time (minutes)
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="number"
                                    id="cookingTime"
                                    name="cookingTime"
                                    value={recipe.cookingTime}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="Estimated time"
                                    min="0"
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                                Image URL
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="imageUrl"
                                    name="imageUrl"
                                    value={recipe.imageUrl}
                                    onChange={handleChange}
                                    className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                    placeholder="Paste image URL"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ingredients */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-gray-700">
                                Ingredients
                            </label>
                            <button
                                onClick={addIngredient}
                                type="button"
                                className="flex items-center text-sm text-amber-600 hover:text-amber-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Ingredient
                            </button>
                        </div>
                        
                        <div className="space-y-2">
                            {recipe.ingredients.map((ingredient, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="relative flex-grow">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            value={ingredient}
                                            onChange={e => handleIngredientChange(e, index)}
                                            className="block w-full pl-10 pr-10 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                            placeholder={`Ingredient #${index + 1}`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => removeIngredient(index)}
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500 hover:text-red-600"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Instructions */}
                    <div>
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
                            Instructions
                        </label>
                        <div className="relative">
                            <div className="absolute top-3 left-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <textarea
                                id="instructions"
                                name="instructions"
                                value={recipe.instructions}
                                onChange={handleChange}
                                rows={6}
                                className="block w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                                placeholder="Step-by-step instructions..."
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={isCreating}
                            className="w-full flex justify-center items-center py-4 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-white font-medium shadow-lg transition-all duration-300"
                        >
                            {isCreating ? (
                                <span className="flex items-center">
                                    <SpinnerMini />
                                    <span className="ml-2">Creating Recipe...</span>
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Create Recipe
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRecipe;