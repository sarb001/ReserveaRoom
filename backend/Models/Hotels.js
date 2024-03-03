import mongoose from 'mongoose';

const BedTypeoptions = ['Twin Bed' , 'Double Bed']


const HotelSchema = new mongoose.Schema({
    Hotelname : {
        type:String,
        required : [true,'Please Enter Hotel Name'],
        unique : true
    },
    HoteltagLine : {
        type:String,
        required : [true,'Please Enter Hotel TagLine'],
        unique : true
    },
    // images - Hotel Image 
    HotelCity : {
        type :String,
        required : [true , "Please Enter City"]
    },
    HotelLocation: {
        type :String,
        required : [true , "Please Enter Proper Location "],
        unique : true
    },
  
    
    HotelDistance : {
        type :Number,
        required : [true , "Please Enter Distance"],
        min: [0, 'Distance cannot be negative'] 
    },
    TotalRooms : {
        type :Number,
        required : [true , " Enter Total Rooms "],
        min: [0, 'TotalRooms cannot be negative'] 
    },
    PricingPerRoom: {
        type :Number,
        required : [true , "Enter Price Per Room"],
        min: [0, 'Pricing cannot be negative']
    },

    // BedType : {
    //     type :String,
    //     required : [true , "Please Enter Bed Type"],
    //     // enum  : BedTypeoptions
    // },
})

const Hotel = mongoose.model('Hotel' , HotelSchema);

export default Hotel;