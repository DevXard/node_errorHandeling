const express =  require('express');
const {mean, median, mode} = require('./helpers');
const ExpressError = require('./expressError')


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/mean', function (req, res, next) {
    
    try {
        if (typeof mean(req.query.name.split(',')) === 'string') {
            throw new ExpressError(`${mean(req.query.name.split(','))} is not a number`, 400)
        }
        if(isNaN(mean(req.query.name.split(',')))){
            throw new ExpressError('Invalid query', 400)
        }
        res.json({operation: 'mean', value: mean(req.query.name.split(','))})
    }catch (err) {
        next(err)
    }
})

app.use('/median', function (req, res, next) {
    try {
        if (typeof median(req.query.name.split(',')) === 'string') {
            throw new ExpressError(`${median(req.query.name.split(','))} is not a number`, 400)
        }
        if(isNaN(median(req.query.name.split(',')))){
            throw new ExpressError('Invalid query', 400)
        }
        res.json({operation: 'median', value: median(req.query.name.split(','))})
    }catch (err) {
        next(err)
    }
})

app.use('/mode', function (req, res, next) {
    try {
        if (typeof mode(req.query.name.split(',')) === 'string') {
            throw new ExpressError(`${mode(req.query.name.split(','))} is not a number`, 400)
        }
        if(isNaN(mode(req.query.name.split(',')))){
            throw new ExpressError('Invalid query', 400)
        }
        res.json({operation: 'mode', value: mode(req.query.name.split(','))})
    }catch (err) {
        next(err)
    }
})


app.use(function(err, req, res, next) {
    let status = err.status || 500;
    let message = err.msg;

    return res.status(status).json({err: {message, status}})
})

app.listen(3000, function(){
    console.log('Server running port 3000')
})  