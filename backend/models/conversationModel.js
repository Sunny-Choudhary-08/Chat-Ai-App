const mongoose = require('mongoose');

const conversationModel = new mongoose.Schema({
    participants:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }],
    messages:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'message'
    }],
},{timestamps:true});

mongoose.exports = mongoose.model('conversation',conversationModel);