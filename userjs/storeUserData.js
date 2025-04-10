const buyermodel = require('../model/usermodel');
const { v4: uuidv4 } = require('uuid');
async function storeUserData(req,res) {
        const data = {
            email: req.session.email,
            password: req.session.password,
            name: req.body.name,
            phone:req.body.phone,
            type: req.body.constructionOptions,
            uniqueId: uuidv4()
            
        };
    console.log(req.body.name)
        try {
            req.session.user=data
            
            await buyermodel.create(data);
            console.log(data)
            return { success: true };
        } catch (error) {
            console.error('Error saving data:', error);
            return { success: false };
        
        }
    }

module.exports = { storeUserData };
