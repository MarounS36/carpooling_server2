const mongoose = require('mongoose');

const {Schema}= mongoose;
const evaluationSchema = new Schema(
    {
        rating:{
            type: Number,
            required: true,
        },
        comment:{
            type: String,
            required: true,
        }

    }
)
const Evaluation = mongoose.model("Evaluation", evaluationSchema);
module.exports = Evaluation; 