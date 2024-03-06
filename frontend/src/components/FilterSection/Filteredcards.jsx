import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom' ;
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { AllHotels } from '../Actions/UserActions';
// import { AllHotels } from '../Actions/UserActions';

const Filteredcards = () => {

  const dispatch = useDispatch();

  const Destinations = [
    { id :1, Place : 'New Delhi' ,  img : '/NewDelhi.jpg'  , Hotelname :'Hilton New Delhi Embassy' , Distance : '5k from centre'  , BedType : 'Twin Bed' , Rating: 8.5 , Reservation : ' Free Cancellation'  , adults : 2 , nights : 4 },
    { id :2 ,Place : 'Banglore ' ,  img : '/Banglore.jpg'  , Hotelname :'ObEROI  Bengaluru Embassy' , Distance : '2k from centre'  , BedType : 'Double Bed' , Rating: 6.5 , Reservation : 'No Prepayment Needed '   , adults : 2 , nights : 2},
    { id :3 ,Place : 'Mumbai'    ,  img : '/Mumbai.jpg'    , Hotelname :'tAJ Hotel Mumbai Embassy' , Distance : '4k from centre'  , BedType : 'Double Bed' , Rating: 7.5 , Reservation : 'Book wihout Credit Card' , adults : 1 , nights : 2},
    { id :4 ,Place : 'Chennai'   ,  img : '/Chennai.jpg'   , Hotelname :'Hilton CHennai Embassy' , Distance : '4k from centre'  , BedType : 'Twin Bed' , Rating: 7.0 , Reservation : ' Free Cancellation'     ,adults : 4 , nights : 3} ,
    { id :5 ,Place : 'Hyderabad' ,  img : '/Hyderabad.jpg' , Hotelname :'Hilton Hyderabad Embassy' , Distance : '3k from centre'  , BedType : 'Twin Bed' , Rating: 8     ,Reservation : 'Book wihout Credit Card' ,adults : 3 , nights : 3}
   ]
  
   const {loading } = useSelector(state => state?.hotel);
   console.log('loading - ',loading);

   const {allhotels} = useSelector(state => state?.hotel);
   console.log('allHotelssss -' ,allhotels);

    //  const results = useCallback(async() => {
    //     const res = await dispatch(AllHotels());
    //     console.log('res is -',res);
    //     return res;
    //  })

    //   useEffect(() => {
    //     console.log('results -');
    //      results();
    //   },[])


    // useEffect(() => {
    //   console.log('inside EFFECT -');
    //   (async() => {
    //     const result = await dispatch(AllHotels());
    //     console.log('result is -',result);
    //   })();
    // },[])

  //  const AllHotels = () => async(dispatch) => {
  //     try {
  //         dispatch({type:"AllHotelsListPending"});
  //         const {data} = await axios.get('/api/allHotels' ,
  //         {
  //             withCredentials : true,
  //             headers : {
  //                 'Content-Type' : 'application/json'
  //             }
  //         });
  
  //          console.log('all Hotels data -',data);
  //          dispatch({type:"AllHotelsListSuccess" , payload : data?.allhotels})
          
  //     } catch (error) {
  //         console.log('error -',error);
  //         dispatch({type:"AllHotelsListFailed" ,payload :  error.response.data?.message})
  //     }
  //  }   

    //  useEffect(() => {
    //   (async () => {
    //     console.log('inside effect');
    //     await dispatch(AllHotels())
    //   })();
    //  },[])

    // useEffect(() => {
    //   if(loading === 'true'){
    //     console.log('inside Effect true -');
    //   }else{
    //     // dispatch(AllHotels());
    //     console.log('inside ssEffect false -');
    //   }
    // },[])


    // const [hotels, setHotels] = useState([]);

    // useEffect(() => {
    //     const fetchHotels = async () => {
    //         try {
    //             const response = await axios.get('/api/allhotels'); // Replace with your actual API endpoint
    //             setHotels(response.data.allhotels);
    //         } catch (error) {
    //             console.error('Error fetching hotels:', error);
    //         }
    //     };

    //     fetchHotels();
    // }, []); 

    // console.log('hotels -',hotels);

    if(!allhotels) return  <h1> Loading..... </h1>

  return (
    <div>
      <div className='flex flex-row justify-center flex-wrap gap-5 my-12'>
          { allhotels && allhotels?.map((data) => 
          {
            return (
              <>
                 <h2> {data.Hotelname} </h2>
                 <h2> {data.BedType} </h2>
              </>
            )
          }
          )}

        {/* {Destinations.map(main => 
            <div className='grid justify-center text-center'  key = {main.id}>
                <div className='bg-slate-600 p-2 grid grid-cols-[0.5fr,2fr]'>

                      <div className='w-[250px] h-[250px] text-center'>
                            <img  className='w-full h-full object-cover overflow-hidden rounded-2xl' src = {main.img} alt = "Holiday" />
                      </div>

                      <div className='text-xl'>  
                        <div> {main.Hotelname} </div>
                        <div> {main.Place}  </div>
                        <div> {main.Distance} </div>
                        <div> {main.BedType} </div>
                        <div> {main.Rating} </div>
                        <div> {main.Reservation} </div>
                        <div> Adults - {main.adults} Nights - {main.nights}  </div>
                        <button className='bg-black text-white p-2'>  
                          <Link to = {`/card/${main.id}`}>  Check Availability   </Link>
                         </button>
                      </div>
                </div>
            </div>  
        )} */}
      </div>
    </div>
  )
}

export default Filteredcards