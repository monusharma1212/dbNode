const Category = require("../model/categroies.model");

const addCtaegory = async (req,res) =>{
    try{
        console.log(req.body)

        const data = await Category.create(req.body)

        if(!data){
            return res.status(400).json({status:false, data:false, Message:"Does Not Added the Data"});
        }
        return res.status(200).json({status:true, data:data, Message:"Data Added Succesfully"});
    }catch(error){
        return res.status(500).json({status:false, data:false, Message:"Internal Error"});
    }
}
const getCtaegory = (req,res) =>{
    try{
        
    }catch{
        
    }
    
}
const getAllCtaegory = (req,res) =>{
    try{
      
    }catch{
        
    }
    
}
const updateCategory = (req,res) =>{
    try{
        
    }catch{
        
    }
    
}
const deleteCategory = (req,res) =>{
    try{
        
    }catch{
        
    }

}

module.exports = {
    addCtaegory,
    getCtaegory,
    getAllCtaegory,
    updateCategory,
    deleteCategory
}