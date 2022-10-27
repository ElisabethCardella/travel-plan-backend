import Trip from "../models/trips.js";

const get = (req, res) => {
    Trip.find({})
    .then((trips)=>{
        return res.send(trips)
    })
    .catch((error)=>{
        res.status(500).json({error})
    })}


const create = (req, res) => {
    const trip = new Trip ({
        name: req.body.name,
    });
    trip
    .save()
    .then((trip)=> {
        res.status(201).json({
            message : "My Trip has been created succesffully",
            trip,
        })
    })
    .catch((error)=>{
        res.status(400).json({
            error: error,
        })
    })
}

export default {create,get};