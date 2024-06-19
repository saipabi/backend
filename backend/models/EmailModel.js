const mongoose = require ('mongoose')

const Schema = mongoose.Schema;

const EmailSchema = new Schema (
    {
         
    from: {
        type: String,
        require: true
    },
    to: {
        type: String,
        require: true
    },
    reply: {
        type: String,
        
    },
    subject: {
        type: String,

    },

    message: {
        type: String,
        
    },

}

);

module.exports = mongoose.model("Email",EmailSchema);