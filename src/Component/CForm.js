import React,{useState} from 'react'
import {Formik, Form,ErrorMessage} from 'formik';
import {Multiselect} from 'multiselect-react-dropdown';
import { BiRupee  } from 'react-icons/bi';
import { FiPercent  } from 'react-icons/fi';
import * as Yup from 'yup'
import TextError from './TextError'
import { useHistory } from "react-router-dom";
import ReactSlider from 'react-slider';
import styled from 'styled-components';

var data=[];

const StyledSlider = styled(ReactSlider)`
    height: 10px;
`;

const StyledThumb = styled.div`
    height: 20px;
    line-height: 75px;
    outline: none;
    width: 20px;
    text-align: center;
    background-color: rgb(30, 58, 138);
    color: rgb(30, 58, 138);
    border-radius: 50%;
    cursor: grab;
    margin-top:-4px;
    font-size:12px;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#ddd' : props.index === 1 ? 'rgba(239, 68, 68,0.7)' : '#ddd'};
    
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

function CForm() {

    const dropdown={
        chips: { 
            background: "rgb(239, 246, 255)",
            color:"rgb(30, 58, 138)" ,
            borderWidth:"2px ",
            borderColor:"rgb(191, 219, 254)",
            borderRadius:0,
            margin:"4px",

        }, 
        searchBox: { 
            border: "none",
            outline:"none" ,
        },
        optionContainer: {
            background: "rgb(239, 246, 255)",
            color:"rgb(30, 58, 138)" ,
            borderWidth:"2px ",
            borderColor:"rgb(191, 219, 254)",
            borderRadius:0,
            '&:hover':{
                background: 'rgb(30, 58, 138)'
              }
          },
          option: { 
            background: "rgb(239, 246, 255)",
            color:"rgb(30, 58, 138)" ,
          }
          
    }


    const history = useHistory();
    const multiselectRef1 = React.createRef();
    const multiselectRef2 = React.createRef();
    const multiselectRef3 = React.createRef();
    const multiselectRef4 = React.createRef();

    const locationData=[
        {Location:'Delhi', id:1},
        {Location:'Gurugram', id:2},
        {Location:'Mumbai', id:3},
        {Location:'Chennai', id:4},
        {Location:'Bangalore', id:5}
    ]

    const categoryData=[
        {Category:'Food', id:1},
        {Category:'Art', id:2},
        {Category:'Fashion', id:3},
        {Category:'Media', id:4},
        {Category:'Tv', id:5}
    ]

    const brandData=[
        {Brand:'Free', id:1},
        {Brand:'Free Food', id:2},
        {Brand:'Free Shoes', id:3},
        {Brand:'Free Earphones', id:4},
        {Brand:'Free Clothes', id:5}
    ]

    const responseData=[
        {Time:'<1 Day', id:1},
        {Time:'1-2 Days', id:2},
        {Time:'1 Week', id:3},
        {Time:'More than a week', id:4}
    ]

    const [options4]=useState(responseData);
    const [options3]=useState(brandData);
    const [options2]=useState(categoryData);
    const [options]=useState(locationData);

    const initialValues={
        name:'',
        description:'',
        location:'',
        category:'',
        followers:0,
        responsetime:'',
        budgetMin:'',
        budgetMax:'',
        postEngagement:'',
        brandCollab:'',
        brandWork:''
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        description: Yup.string().required('Required').max(500,'Should be less than 500 characters'),
        location: Yup.array().required('Required'),
        category: Yup.array().required('Required'),
        followers: Yup.number().required('Required'),
        responsetime: Yup.array().required('Required'),
        budgetMin: Yup.number().required('Required').min(0,"Fill correctly"),
        budgetMax: Yup.number().required('Required').moreThan(Yup.ref('budgetMin'),"Should be > than min budget"),
        postEngagement: Yup.number().required('Required').min(0, "Should be >= to 0").max(100,"Should be <= 100"),
        brandCollab: Yup.array().required('Required'),
        brandWork: Yup.string().required('Required')
      })
      const onSubmit = (values,{resetForm}) => {
        console.log('Form data', values);
        data.push(values);
        console.log('Data',data);
        resetForm({values:initialValues});
        multiselectRef1.current.resetSelectedValues();
        multiselectRef2.current.resetSelectedValues();
        multiselectRef3.current.resetSelectedValues();
        multiselectRef4.current.resetSelectedValues(); 
        history.push('/')
      }

      

    return (
        <div className="bg-blue-50 min-h-screen w-auto m-0 md:py-20 p-0 md:px-32">
            <div className="py-4 px-6 md:py-8 md:px-12 bg-white border-2 border-white rounded-md text-blue-900 font-medium">
                <h1 className="text-2xl font-bold  my-6">Create Campaign</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
            {formik=>(    
                <Form>  
                    <div className="mb-5">
                        <label htmlFor="name">Name of campaign:</label><br/>
                        <div className="text-md mt-3 mb-1 max-w-96 md:w-96 px-2 py-3 rounded-md border-blue-200 border-2  ">
                            <input className="w-full outline-none" type="text" name="name" id="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />  
                        </div>
                        <ErrorMessage component={TextError} name='name' />   
                    </div>

                    <div className="mb-5" >
                        <label htmlFor="description">Description</label><br/>
                        <div className="text-md drop mt-3 mb-1 max-w-96 md:w-96  px-2 py-3 rounded-md border-blue-200 border-2">
                            <textarea name="description"  id="description" className="w-full outline-none" rows="4" cols="50" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.description} /> 
                        </div>
                        <ErrorMessage component={TextError} name='description' /> 
                    </div>
                    
                    <div className="mb-5">
                        <label htmlFor="location">Target location of your campaign</label><br/>
                        <div className="min-h-12 mt-3 mb-1 max-w-96 md:w-96   rounded-md border-blue-200 border-2 ">
                            <Multiselect name="location" id="location" placeholder="" style={dropdown} closeIcon="cancel" ref={multiselectRef1}  showArrow="true" options={options} displayValue="Location" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.location} onSelect={(selectedItem)=>{formik.values.location=selectedItem}} />
                        </div>
                        <ErrorMessage component={TextError} name='location' /> 
                        
                    </div>

                    <div className="mb-5">
                        <label htmlFor="category">Category(s) for your campaign</label><br/>
                        <div className="min-h-12 mt-3 mb-1 max-w-96 md:w-96  rounded-md border-blue-200 border-2 ">
                            <Multiselect id="category" name="category" placeholder="" options={options2} style={dropdown} showArrow="true" ref={multiselectRef2}  closeIcon="cancel"  displayValue="Category" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.category} onSelect={(selectedItem)=>{formik.values.category=selectedItem}} />
                        </div>
                        <ErrorMessage component={TextError} name='category' /> 
                        
                    </div>

                    <div className="mb-12">
                        <label htmlFor="followers">No. of followers</label><br/>
                        <div className="text-mb mt-3 mb-1 max-w-96 md:w-96  py-2">
                        <StyledSlider
                            defaultValue={[0,10000]}
                            renderTrack={Track}
                            renderThumb={Thumb}
                            min="0"
                            max="100000"
                            minDistance="1000"
                        />
                        </div>

                        {/* <div className="text-mb mt-3 mb-1 max-w-96 md:w-96  py-2">
                            <input id="followers" name="followers" className="w-full outline-none" type="range"  min="0" max="10000" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.followers}/> 
                            <div className="border-blue-200 border-2 w-min bg-blue-50 py-1 px-3 mt-3">{formik.values.followers}</div>
                        </div> */}
                        <ErrorMessage component={TextError} name='followers' /> 
                        
                    </div>

                    <div className="mb-5">
                        <label htmlFor="responsetime">Average response time of the infuencers</label><br/>
                        <div className="h-12 mt-3 mb-1 max-w-96 md:w-96  rounded-md border-blue-200 border-2 ">
                            <Multiselect  id="responsetime" name="responsetime" placeholder="" style={dropdown}  className="outline-none border-none" ref={multiselectRef3}  closeIcon="cancel" singleSelect="true" showArrow="true" options={options4} displayValue="Time" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.responsetime} onSelect={(selectedItem)=>{formik.values.responsetime=selectedItem}}/>  
                        </div> 
                        <ErrorMessage component={TextError} name='responsetime' /> 
                    </div>

                    <div className="mb-5" >
                        <label htmlFor="budget">What is the budget  for this campagain?</label><br/>
                        <div className="flex flex-row">
                            <div className="flex flex-col">
                                <div className="text-md mt-3 mb-1 mr-4 px-2 py-1 flex flex-row rounded-md border-blue-200 border-2 max-w-30 ">
                                    <input id="budget" name="budgetMin" className="outline-none mr-4 px-2 w-24" type="number" placeholder="Min" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.budgetMin}/>
                                    <BiRupee className="text-gray-300 my-3 mr-2"/>
                                </div>
                                <ErrorMessage component={TextError}  name='budgetMin' /> 
                            </div>
                            <div className="flex flex-col">
                                <div className= " flex-grow-0 text-md mt-3 mb-1 px-2 py-1  flex flex-row rounded-md border-blue-200 border-2 max-w-30 ">
                                    <input name="budgetMax" className="outline-none mr-4 px-2 w-24" type="number" placeholder="Max" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.budgetMax}/>
                                    <BiRupee className="text-gray-300 my-3 mr-2 float-right"/>
                                </div>
                                <ErrorMessage component={TextError}  name='budgetMax' />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="postEngagement">Post Engagement rate of the Influencers</label><br/>
                        <div className="text-md mt-3 mb-1 px-2 py-1  flex flex-row rounded-md border-blue-200 border-2 max-w-96 md:w-96 ">
                                <input id="postEngagement" name="postEngagement" className="w-full outline-none" type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.postEngagement}/>
                                <FiPercent className="text-gray-300 my-3 mr-2"/>
                            </div>
                            <ErrorMessage component={TextError} name='postEngagement' /> 
                    </div>

                    <div className="mb-5">
                        <label htmlFor="brandCollab">Kind of brand collab</label><br/>
                        <div className="min-h-12 mt-3 mb-1 max-w-96  rounded-md border-blue-200 border-2 md:w-96 ">
                            <Multiselect id="brandCollab" name="brandCollab" placeholder="" style={dropdown} options={options3} ref={multiselectRef4}  closeIcon="cancel"  displayValue="Brand" showArrow="true" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.brandCollab } onSelect={(selectedItem)=>{formik.values.brandCollab=selectedItem}}  />
                        </div>
                        <ErrorMessage component={TextError} name='brandCollab' />   
                    </div>

                    <div className="mb-5">
                        <label htmlFor="brandWork">Have you worked with any brand?</label><br/>
                        <div className="my-3 w-96">
                        <input id="brandWork" className="mr-1"  type="radio" id="yes" name="brandWork"  onChange={formik.handleChange} onBlur={formik.handleBlur} value="Yes" />
                        <label className="mr-8" htmlFor="yes">Yes</label>
                        <input className="mr-1" type="radio" id="no" name="brandWork"  onChange={formik.handleChange} onBlur={formik.handleBlur} value="No" />
                        <label htmlFor="no">No</label>
                        </div>
                        <ErrorMessage component={TextError} name='brandWork' /> 
                    </div>
                    <button type="submit" className="my-3 bg-red-400 text-white w-48  rounded-md p-3">Create</button>
                </Form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default CForm
export {data}
