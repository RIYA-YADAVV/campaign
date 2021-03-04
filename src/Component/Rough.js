const validationSchema = Yup.object({
    budgetMin: Yup.number().min(0,"Fill correctly"),
    budgetMax: Yup.number().moreThan(Yup.ref('budgetMin'),"Should be > than min budget"),
  })
  const onSubmit = (values) => {
    // console.log('Form data', values);
    search=values;
    // console.log('Search',JSON.stringify(search));
    // // resetForm({values:initialValues});
    // console.log(JSON.stringify(searchResults));

    const ans=searchResults.filter(i=>{
        console.log('Item',i)
            if(search.budgetMin)
            {
              var a=  i.budgetMin>=search.budgetMin;
            }

            if(search.budgetMax)
            {
                var b=i.budgetMax<=search.budgetMax;
            }

            if(a&b)
            {
                console.log('A',a);
                console.log('B',b);
               
                return a&b;  
            }
            return null;
        });
    console.log('ANS',ans);
    
    // setSearchResults([]);
    // console.log('Result',searchResults);
    // setSearchResults(ans);

  }
//   React.useEffect(() => {
//     const results = searchResults.filter(i=>{
//         console.log('Item',i)
//             if(search.budgetMin)
//             {
//               var a=  i.budgetMin>=search.budgetMin;
//             }

//             if(search.budgetMax)
//             {
//                 var b=i.budgetMax<=search.budgetMax;
//             }

//             if(a&b)
//             {
               
//                 return a&b;  
//             }
//             return null;
//         });
//     setSearchResults(results);
//   }, [searchResults]);

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
                    <label htmlFor="location">Location</label><br/>
                    <div className=" mt-3 mb-1 w-72 md:w-62 mr-10  pl-2 rounded-md border-blue-200 border-2 ">
                        <Multiselect name="location" id="location" placeholder="Select" style={dropdown} closeIcon="cancel"   showArrow="true" options={options3} displayValue="Location" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.location} onSelect={(selectedItem)=>{formik.values.location=selectedItem}} />
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
