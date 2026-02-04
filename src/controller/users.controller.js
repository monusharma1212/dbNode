const registerUser = async(req,res) =>{
    try {
        const {email} = req.body

        const useExist = await Users.findOne({email : email})

        if(useExist){
            return res.status(400).json({
                 success:false,
                 data:null,
                 message:"user Alredady Exist"
            })
        }
    } catch (error) {
        
    }

}

module.exports = {
    registerUser
}

// har ek function ko module.export ke andar dalna h and uska route banana h 
// 