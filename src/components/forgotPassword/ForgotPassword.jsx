import React, { useState } from 'react';
import axios from "../../Axios/axios.js";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setMessage("");
            setError("");

            const res = await axios.post("/forgotPassword/forgotPassword", { email });
            setMessage(res.data.message);
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center text-indigo-700 mb-5">Forgot Password</h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        className="w-full p-3 rounded-md border focus:ring-2 focus:ring-indigo-500 outline-none"
                        placeholder="Enter your email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <button
                        className="w-full p-3 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all disabled:bg-indigo-400 flex justify-center items-center"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5 mr-2"></span>
                        ) : null}
                        {isLoading ? "Resetting..." : "Reset Password"}
                    </button>
                </form>

                {message && (
                    <div className="mt-5 p-3 bg-green-600 text-white text-center rounded-md shadow">
                        {message}
                    </div>
                )}
                {error && (
                    <div className="mt-5 p-3 bg-red-600 text-white text-center rounded-md shadow">
                        {error}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
