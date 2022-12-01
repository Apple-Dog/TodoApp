// Todo Schema
import mongoose from "mongoose";
const { Schema } = mongoose;

const TodoSchema = new Schema(
    {
        title : {
            type : String,
            required : true,
        },
        tasks : {
            type : [String],
            default : undefined,
        },
        tags : {
            type : [String],
            default : undefined,
        }
    },

    {
        timestamps:true,
    },
);


const TodoModel = mongoose.model("Todo",TodoSchema);

export default TodoModel;