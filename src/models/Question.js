const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
            response_code: Number,
            results:[]
    }

)

module.exports = mongoose.model('Question', QuestionSchema)

