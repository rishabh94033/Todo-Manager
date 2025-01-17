import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Todo({ title, description,completed,id }) {
    const[selected,setselected]=useState(false);
    console.log(selected);
    return (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-6">
            <div className="flex justify-between items-start">
                <div>
                    <input className="cursor cursor-pointer w-4 h-5 border-4 border-gray-200 rounded-md " type="checkbox" 
                    onChange={()=>{
                        {setselected(selected? false: true)}
                    }}/>
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500 mt-2">{description}</p>
                </div>
                <div className="flex gap-4">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                        {completed? "Completed": "Mark as Done"}
                    </button>
                    <Link to={"/edit"} state={{idoftodo:id}}>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                        Edit
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
