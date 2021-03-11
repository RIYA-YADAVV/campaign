import React from 'react'
import {data} from './CForm'
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import NoData from '../images/undraw_No_data_re_kwbl.svg'
function Details() {
   
    const { id } = useParams();
    const c_data=data[id];
    console.log('id',id )
    console.log(c_data);
    console.log(data);

    const Box=(props)=>{
        return(
            <div className="text-red-400 border-red-400 border-2 bg-red-50 py-1 px-3 mt-3 mr-3">{props.value}</div>
        )
    };

    return (
        <>
            <div className="py-10 bg-blue-900 md:bg-blue-50 w-full min-h-screen max-h-auto justify-center">
            {c_data!==undefined?<div>
            <div className="-mt-10 p-4 pr-12 text-white bg-blue-900 md:bg-white">
                <div className="flex flex-row justify-end">
                    <Link className="bg-red-400 w-max h-max p-3 text-sm" to="/">Home</Link>
                </div>    
            </div>

            <div className="m-12 text-blue-900 md:m-20 mb-8 px-10 py-8 mx-auto w-4/5 h-auto rounded-md bg-white">
                <h1 className="text-red-400 text-2xl md:text-3xl mb-4">{c_data.name}</h1>
                <h2 className="text-lg md:text-xl font-medium">Description</h2>
                <p className="text-red-400 text-base mb-3">{c_data.description}</p>

                <h1 className="text-lg md:text-xl font-medium">Location</h1>
                <div className="flex flex-row flex-wrap mb-3">
                    {
                        c_data.location.map((l)=>{
                            return(
                                <Box value={l.Location}/>
                            )
                        })
                    }
                </div>

                <h1 className="text-lg md:text-xl font-medium">Category</h1>
                <div className="flex flex-row flex-wrap mb-3">
                    {
                        c_data.category.map((l)=>{
                            return(
                                <Box value={l.Category}/>
                            )
                        })
                    }
                </div>

                <h2 className="text-lg md:text-xl font-medium">Followers</h2>
                <p className="text-red-400 text-base mb-3">{c_data.followers[0]}-{c_data.followers[1]}</p>
                
                <h2 className="text-lg md:text-xl font-medium">Response Time</h2>
                <p className="text-red-400 text-base mb-3">{c_data.responsetime[0].Time}</p>

                <h2 className="text-lg md:text-xl font-medium">Budget</h2>
                <p className="text-red-400 text-base mb-3">{c_data.budgetMin}-{c_data.budgetMax}</p>

                <h2 className="text-lg md:text-xl font-medium">Post Engagement</h2>
                <p className="text-red-400 text-base mb-3">{c_data.postEngagement}</p>

                <h2 className="text-lg md:text-xl font-medium">Brand Collaboration</h2>
                <div className="flex flex-row flex-wrap mb-3">
                    {
                        c_data.brandCollab.map((l)=>{
                            return(
                                <Box value={l.Brand}/>
                            )
                        })
                    }
                </div>
                <h2 className="text-lg md:text-xl font-medium">Experience</h2>
                <p className="text-red-400 text-base mb-3">{c_data.brandWork}</p>
                
            </div>
        </div>:<div  className="p-24 md:p-10 h-64 w-auto sm:h-96 md:w-96 mx-auto mt-5 text-white md:text-blue-900 font-bold md:mx-auto">
                <figure className="px-auto">
                    <img src={NoData} className="bg-white p-4 sm:bg-transparent h-auto" />
                    <figcaption className="ml-0 mt-8 text-center text-lg sm:text-2xl" >Wrong Campaign..</figcaption>
                </figure>
            </div>
            }
            </div>
        </>
    )
}

export default Details
