import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import {data} from './CForm'

function LandingPage() {
    return (
        <div className="bg-blue-900 md:bg-blue-50 w-full min-h-screen">
            <div className="p-4 pr-12 text-white bg-blue-900 md:bg-white">
                <div className="flex flex-row justify-end">
                <Link className="bg-red-400 w-max h-max p-3 text-sm" to="/form">Create Campaign</Link>
                </div>    
            </div>
            <div className="p-0 md:p-16 mt-4 md:mt-0 flex flex-col md:flex-row flex-wrap">
                {data.length>0?data.map((item) => {
                    console.log('LPage data',JSON.stringify(data))
                    console.log('Name',item)
                    return (
                        <Card
                        name={item.name}
                        description={item.description}
                        followers={item.followers}
                        budgetMin={item.budgetMin}
                        budgetMax={item.budgetMax}
                        location={item.location}
                        category={item.category}
                        />    
                    );
            }):<div className="ml-12 mr-4 text-white md:text-blue-900 font-bold md:mx-auto"><h1 className="text-3xl ">No campaign has been added yet.</h1></div>
        }
            </div>
        </div>
    )
}

export default LandingPage
