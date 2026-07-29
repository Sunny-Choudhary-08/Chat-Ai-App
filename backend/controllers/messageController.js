const conversationModel = require('../models/conversationModel');
const messageModel = require('../models/messageModel')
const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;
        let gotConversation = await conversationModel.findOne({ participants: { $all: [senderId, receiverId] } });

        if(!gotConversation) {
            gotConversation = await conversationModel.create({
                participants:[senderId,receiverId]
            })
        };

        const newMessage = await messageModel.create({
            senderId,
            receiverId,
            message
        });

        if(newMessage) {
            gotConversation.messages.push(newMessage._id);
        };

        await gotConversation.save();

        return res.status(400).json({
            message:"Message sent successfully"
        })

    } catch (error) {

    }
}


const getMessage =async (req,res)=>{
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await conversationModel.findOne({
            participants:{$all:[senderId,receiverId]}
        }).populate('messages');

        return res.status(200).json(conversation ?. messages);

    } catch (error) {
        console.log(error);
        
    }
}


module.exports = getMessage;
module.exports = sendMessage;