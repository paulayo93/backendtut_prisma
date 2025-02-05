const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.createProduct = async (req, res) => {
    try {
        
        if(!req.body.name) {

        return res.status(422).json({error: 'Name is required'})
        }
        if(!req.body.price) {
            
            return res.status(422).json({error: 'Price is required'})

        } else {
            if(typeof req.body.price !== 'number' || req.body.price < 0) {
                return res.status(422).json({error: 'Price must be a non-negative number'})  
            }
        }

    } catch(error) {

        return res.status(500).json({error: error.message})

    }


}
