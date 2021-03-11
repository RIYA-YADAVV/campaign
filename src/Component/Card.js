import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { BiRupee  } from 'react-icons/bi';
import { HiOutlineDatabase  } from 'react-icons/hi';
import { useHistory } from "react-router-dom";
const Box=(props)=>{
    return(
        <div className="border-blue-200 border-2 bg-blue-50 py-1 px-3 mt-3 mr-3">{props.value}</div>
    )
};



function Card(props) {
    const history = useHistory();
    
    const Details=()=>{   
        // console.log(props.id); 
       return history.push('/details/'+props.id)
    };
    return (
        <div onClick={Details}  className="cursor-pointer min-h-96 w-auto md:w-96 mb-20 rounded-md mr-0 md:mr-8 p-8 text-blue-900 bg-white">
            <h1 className="text-lg font-extrabold ">{props.name}</h1>
            <p className="h-16 overflow-clip overflow-hidden  text-sm py-2 pr-2 text-gray-300">{props.description}</p>
            <div className="flex flex-col-reverse md:flex-row justify-between pt-4 text-sm" >
                <div className="flex flex-row mt-4 md:mt-0">
                    <FiUsers className=" text-red-400 text-lg"/>
                    <h3 className="mx-3">{props.followers[1]}</h3>
                </div>
                <div className="mr-0">
                    <div className="flex-row hidden md:flex ">
                        <h3 className="mx-1">{props.budgetMin}-{props.budgetMax}</h3>
                        <BiRupee className=" text-red-400 text-lg"/>
                    </div>
                    <div className="flex flex-row  md:hidden ">
                        <BiRupee className=" text-red-400 text-lg"/>
                        <h3 className="mx-3">{props.budgetMin}-{props.budgetMax}</h3>   
                    </div>
                    
                </div>
            </div>

            <div className="font-medium text-sm">
            <div className="my-4">
                <div className="flex flex-row ">
                    <FaMapMarkerAlt className=" text-red-400 text-lg"/>
                    <h2 className="mx-3">Locations</h2>    
                </div>
                <div className="mx-8 flex flex-row flex-wrap">
                    {
                        props.location.map((l)=>{
                            return(
                                <Box value={l.Location}/>
                            )
                        })
                    }
                </div>
            </div>
            <div>
                <div className="flex flex-row">
                    <HiOutlineDatabase className="text-red-400 text-lg"/>
                    <h2 className="mx-3">Categories</h2>
                </div>
                <div>
                    <div className=" mx-8 flex flex-row flex-wrap">

                    {
                        props.category.map((c)=>{
                            return(
                                <Box value={c.Category}/>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card
