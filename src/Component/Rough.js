import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import {data} from './CForm'
import {Formik, Form,ErrorMessage} from 'formik';
import {Multiselect} from 'multiselect-react-dropdown';
import { BiRupee  } from 'react-icons/bi';
import * as Yup from 'yup'
import TextError from './TextError'
import {dropdown,followersData} from './styling'
import NoData from '../images/undraw_No_data_re_kwbl.svg'

function LandingPage() {
    // const [search, setSearch] = useState({});
    const [options]=useState(followersData);
    // const [searchResults, setSearchResults] = useState(data);
    const [showingData, setShowingData] = useState(data);

    const initialValues={
        followers:[],
        budgetMin:'',
        budgetMax:''
    }

    const validationSchema = Yup.object({
        budgetMin: Yup.number().min(0,"Fill correctly"),
        budgetMax: Yup.number().min(1,"Fill correctly").moreThan(Yup.ref('budgetMin'),"Should be > than min budget"),
      })
      var search;
      const onSubmit = (values) => {
        console.log('Form data', values);
        search=values;
        console.log('Search Params',JSON.stringify(search));
        // const ans=data.filter(i=>{
        //         if(search.budgetMin && search.budgetMax)
        //         {
        //           var a= ((i.budgetMin>=search.budgetMin &&i.budgetMin<=search.budgetMax) ||(i.budgetMin<=search.budgetMin && i.budgetMax<=search.budgetMax) ||(i.budgetMin<=search.budgetMin &&i.budgetMin<=search.budgetMax) );
        //         }

        //         if(search.followers.length>=1){
        //             var c=i.followers[1]>=search.followers[0].Followers;
        //         }
                  
        //         if(a & c!==false)
        //         {
        //             if(c){
        //                 return (a&c);
        //             }
                   
        //             return a;  
        //         }
        //         else if(c & (a===undefined||a) )
        //         {
        //             return c;
        //         }
        //         return null;
        //     });

        // console.log('Search Result',ans);
        // setShowingData(ans);

        const ans=data.filter(i=>{
            if(search.budgetMin && search.budgetMax)
            {
              var a= (i.budgetMin>=search.budgetMin && i.budgetMin<=search.budgetMax);
            }
            else{
                var a= (i.budgetMin>=search.budgetMin || i.budgetMin<=search.budgetMax);
            }


            
            if(search.followers.length>=1){
                var c=i.followers[1]>=search.followers[0].Followers;
            }else c=true;
            
            return (a && c);
        });

        console.log('Search Result',ans);
        setShowingData(ans);
  }

      
    
    return (
        <div className="bg-blue-900 md:bg-blue-50 w-full min-h-screen max-h-auto justify-center">
            <div className="p-4 pr-12 text-white bg-blue-900 md:bg-white">
                <div className="flex flex-row justify-end">
                <Link className="bg-red-400 w-max h-max p-3 text-sm" to="/form">Create Campaign</Link>
                </div>    
            </div>
            {showingData.length>0?<div>
                <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
            {formik=>(    
                <Form>
                
            <div className="mt-10 flex flex-col md:flex-row px-8 md:px-14 py-4 h-auto mx-auto bg-white w-full text-blue-900 font-semibold  justify-around">
                <h1 className="md:hidden text-3xl my-4">Filter</h1>
                <div className="mb-4 md:mb-0">
                    <label htmlFor="followers">No. of Followers</label><br/>
                    <div className=" mt-3 mb-1 w-72 md:w-62 mr-10  pl-2 rounded-md border-blue-200 border-2 ">
                        <Multiselect name="followers" id="followers" placeholder="Select" style={dropdown} singleSelect="true" closeIcon="cancel"   showArrow="true" options={options} displayValue="Followers" onChange={formik.handleChange} onBlur={formik.handleBlur}  onSelect={(selectedItem)=>{formik.values.followers=selectedItem}} />
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col ">
                        <label htmlFor="budget">Budget</label><br/>
                        <div className="h-10 ml-1 mb-1 w-32 -m-3 mr-4 flex flex-row rounded-md border-blue-200 border-2 ">
                            <input id="budget" name="budgetMin" className="outline-none text-base mr-4 px-2 w-20" type="number" placeholder="Min" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.budgetMin}  />                                
                            <BiRupee className="text-gray-300 my-2 mr-2"/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className= "h-10 mb-1 w-32 mt-9 mr-10 flex flex-row rounded-md border-blue-200 border-2 ">
                            <input name="budgetMax" className="outline-none mr-4 px-2 w-20" type="number" placeholder="Max" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.budgetMax} />
                            <BiRupee className="text-gray-300 my-3 mr-2 float-right"/>
                        </div>
                        <ErrorMessage component={TextError}  name='budgetMax' />
                    </div>
                </div>
                <button type="submit" className="mb-4 md:mb-0 outline-none bg-red-400 text-white w-32 max-h-10 mt-8 rounded-md p-2">Filter</button>
            </div>

            </Form>
                )}
            </Formik>
            </div>:null}
                        
            <div className="p-0 md:p-16 mt-4 md:mt-0 flex flex-col md:flex-row flex-wrap">
                {showingData.length>0?showingData.map((item) => {
                    // console.log('LPage data',JSON.stringify(data))
                    // console.log('Name',item)
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
            }):<div  className="p-10 h-64 w-72 sm:h-96 md:w-96 mx-auto mt-5 text-white md:text-blue-900 font-bold md:mx-auto">
                <figure className="px-auto">
                    <img src={NoData} className="bg-white p-4 sm:bg-transparent h-52 w-52 md:h-72 md:w-72" />
                    <figcaption className="ml-0 mt-8 text-center text-2xl" >No campaign..</figcaption>
                </figure>
            </div>
            // <div style= className=" mx-auto mt-5 text-white md:text-blue-900 font-bold md:mx-auto"><h1 className="text-xl md:text-3xl ">No campaign has been added yet.</h1></div>
        }
            </div>
        </div>
    )
}

export default LandingPage
