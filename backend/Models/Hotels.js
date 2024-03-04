import mongoose from 'mongoose';

// const BedTypeoptions = ['Twin Bed' , 'Double Bed'];

// const MealOptions = ['Self Catering', 'All meals included' ,'Breakfast & lunch included'];

// const PropertyType = ['Hotels' ,'Apartments' ,'Villas' ,'Entire homes & apartments']

const HotelSchema = new mongoose.Schema({
    Hotelname : {
        type:String,
        required : [true,'Please Enter Hotel Name'],
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
    BedType : {
        type :String,
        required : [true , "Please Enter Bed Type"],
        // enum  : BedTypeoptions
    },
    Meals: {
        type:String,
        required : [true , "Please Enter Meal Type"],
        // enum : MealOptions
    },
    PropertyType : {
        type : String,
        required : [true , "Please Enter Property Type"],
        // enum : PropertyType
    }
})

const Hotel = mongoose.model('Hotel' , HotelSchema);

export default Hotel;



// startdate // endatate for calendar 
// no of adults , bed rooms 

