const express = require('express')
const options = {
    "caseSensitive":true
}

const router = express.Router({"caseSensitive":false,"strict":false})

router.get('/',(req,res,next)=>{
    res.send('We are in the admin routes')
})
router.get('/edit',(req,res,next)=>{
    res.send('This is the admin edit screen')
})

module.exports = router