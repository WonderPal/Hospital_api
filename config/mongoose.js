const mongoose = require("mongoose");
const db = "mongodb+srv://pallavi:Palvi1999@cluster0.0aqja7i.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('Successfully connected to the database');
}).catch((err)=> console.log('Failed to connect to the database', err));
 
