import mongoose from "mongoose";
import config from "../config/envConfig"

exports.connect = () => {
    mongoose.connect(config.MONGODB_URL,
         {
            useNewUrlParser: true,
            useUnifiedTopology: true,
         }
    ).then(console.log("Database Connected Successfully."))
    .catch((error)=>{
         console.log("Database Cannot be Connected");
        console.log(error);
        process.exit(1);
    })
};