import mongoose from 'mongoose';

// const BedTypeoptions = ['Twin Bed' , 'Double Bed'];

// const MealOptions = ['Self Catering', 'All meals included' ,'Breakfast & lunch included'];

// const PropertyType = ['Hotels' ,'Apartments' ,'Villas' ,]

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
    Meals: {
        type:String,
        required : [true , "Please Enter Meal Type"],
        // enum : MealOptions
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

    PropertyType : {
        type : String,
        required : [true , "Please Enter Property Type"],
        // enum : PropertyType
    },
    Adults : {
        type :Number,
        required : [true , "Please Enter Adult Type"],
        min: [0, 'TotalAdutls Number cannot be negative'] 
    },
})

const Hotel = mongoose.model('Hotel' , HotelSchema);

export default Hotel;



// startdate        // endDate for calendar 
// no of adults , bed rooms 

