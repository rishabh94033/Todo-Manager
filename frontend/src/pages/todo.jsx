import React from "react";

export default function Todo({ title, description,completed }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{description}</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                        {completed? "Completed": "Mark as Done"}
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}
