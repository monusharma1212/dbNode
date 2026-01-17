const Category = require("../model/categroies.model");

const addCtaegory = async (req,res) =>{
    try{
        console.log(req.body)

        const data = await Category.create(req.body)

        if(!data)
        {
            return res.status(400).json({status:false, data:false, Message:"Does Not Added the Data"});
        }
        return res.status(200).json({status:true, data:data, Message:"Data Added Succesfully"});
    }
    catch(error)
    {
        return res.status(500).json({status:false, data:false, Message:"Internal Error"});
    }
}
// allCategories 
const getAllCtaegory = async(req,res) =>{
try{
        console.log(req.body)

        const data = await Category.find();

        if(!data)
        {
            return res.status(400).json({status:false, data:[], Message:"Does Not Fetched the Data"});
        }
        return res.status(200).json({status:true, data:data, Message:"Data get Succesfully"});
    }
    catch(error)
    {
        return res.status(500).json({status:false, data:false, Message:"Internal Error"});
    }
    
}
const getCtaegory = async(req,res) =>{
   try{

        const data = await Category.findById(req.params.id);

        if(!data)
        {
            return res.status(400).json({status:false, data:[], Message:"Data Not Fetched SuccesFully"});
        }
        return res.status(200).json({status:true, data:data, Message:"Data Fetched SuccesFully"});
    }
    catch(error)
    {
        return res.status(500).json({status:false, data:[], Message:"Internal Error"});
    }
    
}
const updateCategory = async(req,res) =>{
   try{

        const data = await Category.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

        if(!data)
        {
            return res.status(400).json({status:false, data:[], Message:"Data Not Fetched SuccesFully"});
        }
        return res.status(200).json({status:true, data:data, Message:"Data Fetched SuccesFully"});
    }
    catch(error)
    {
        return res.status(500).json({status:false, data:[], Message:"Internal Error"});
    }
    
}
const deleteCategory = async(req,res) =>{
    try{

        const data = await Category.findByIdAndDelete(req.params.id);

        if(!data)
        {
            return res.status(400).json({status:false, data:[], Message:"Data Not Fetched SuccesFully"});
        }
        return res.status(200).json({status:true, data:data, Message:"Data Fetched SuccesFully"});
    }
    catch(error)
    {
        return res.status(500).json({status:false, data:[], Message:"Internal Error"});
    }

}

module.exports = {
    addCtaegory,
    getCtaegory,
    getAllCtaegory,
    updateCategory,
    deleteCategory
}