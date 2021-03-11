import React from 'react' ;
import fof from '../images/undraw_page_not_found_su7k.png'

function NoMatch() {
    return (
        <div className="py-10 bg-blue-900 md:bg-blue-50 w-full min-h-screen max-h-auto justify-center">
            <div  className="mt-20 md:mt-64 xl:mt-52 p-24 md:p-10 h-64 w-auto sm:h-96 md:w-96 mx-auto  text-white md:text-blue-900 font-bold md:mx-auto">
                    <figure className="px-auto">
                        <img src={fof} className="bg-white p-4 sm:bg-transparent h-auto" />
                    </figure>
                </div>
            </div>
    )
}

export default NoMatch
