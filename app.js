import express from "express";
import mongoose from "mongoose";
import tripsRoutes from "./routes/trips.js"

const app = express()

mongoose.connect('mongodb+srv://ElisabethTravelPlan:TravelPlan2022@cluster0.mpuqdph.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.get('/', (req,res) => {
 res.send('Welcome to the travel planner')
})

app.listen(4000, () => {
    console.log("listening to port 4000");
})

app.use('/trips', tripsRoutes);