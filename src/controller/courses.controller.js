const Course = require("../model/courses.model");

const addCourse = async (req,res) =>{
    try{
        console.log(req.body)

        const data = await Course.create(req.body)

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
const getAllCourse = async (req, res) => {
    try {
        const data = await Course.find();

        if (data.length === 0) {
            return res.status(404).json({
                status: false,
                data: [],
                message: "No courses found"
            });
        }

        return res.status(200).json({
            status: true,
            data: data,
            message: "Courses fetched successfully"
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: "Internal Server Error"
        });
    }
};

const getCourse = async(req,res) =>{
   try{

        const data = await Course.findById(req.params.id);

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

const updateCourse = async(req,res) =>{
   try{

        const data = await Course.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});

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
const deleteCourse = async(req,res) =>{
    try{

        const data = await Course.findByIdAndDelete(req.params.id);

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
    addCourse,
    getCourse,
    getAllCourse,
    updateCourse,
    deleteCourse
}