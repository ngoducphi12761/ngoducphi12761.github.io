const express = require('express')
const app = express()
const path = require('path')
const { send } = require('process')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const adminRoutes = require('./adminRoutes')
const productRoute = require('./productRoutes');

app.listen(80,()=>{
    console.log("The server has started, listen on port 80")
})

const database = [
    {username: 'abc', password:'1234'},
    {username: 'xyz', password:'1234'},
    {username: 'asd', password:'1234'}
]

let token = false
const isAuthorized = ()=>{
    return {
        setToken(val){
            token = val;
        },
        getToken(){
            return token;
        }
    }
}



const isAuthenticated = (username, password)=>{
   const response = database.filter(val=> val.username == username && val.password == password)

   if(response.length > 0){
    isAuthorized().setToken(true)
    return true;
   }
    isAuthorized().setToken(false)
    return false;

}

app.use('/admin',adminRoutes)
app.use('/product', productRoute);


app.post('/login',(req, res, next)=>{
    
    if(isAuthenticated(req.body.username, req.body.password)){
        res.send('Authenticated')
    }else{
        res.redirect('/login')
    }
    
    res.send(req.body)
})

app.get('/login',(req, res, next)=>{
    res.sendFile(path.join(__dirname,'html','addTolist.html'))
})

app.use((req,res,next)=>{
    if(isAuthorized().getToken()){
        next()
    }else{
        console.log('Not unathenticated')
        res.redirect('/login')
        
    }
})


app.get('/',(req, res, next)=>{
res.sendFile(path.join(__dirname,'html','homepage.html'))
})

app.use((req, res, next)=>{
    console.log("404 Page not found!")
    res.send('404 ---- ')
})
