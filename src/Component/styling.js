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
        borderColor:"rgb(191, 219, 254)"
      },
      option: { 
        background: "rgb(239, 246, 255)",
        color:"rgb(30, 58, 138)" ,
        
      }
      
}


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

const followersData=[
    {Followers:5000, id:1},
    {Followers:10000, id:2},
    {Followers:20000, id:3},
    {Followers:50000, id:4},
    {Followers:100000, id:5}
]

const responseData=[
    {Time:'<1 Day', id:1},
    {Time:'1-2 Days', id:2},
    {Time:'1 Week', id:3},
    {Time:'More than a week', id:4}
]

export {dropdown,locationData,responseData,brandData,categoryData,followersData}