const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactoSchema = new Schema(
    {
      nombre: { type: String, required: true },
      email: { type: String, required: true },
      ciudad: { type: String },
      Latitude: { type: String },
      Longitude: { type: String },      
      numTel1: { type: String, required: true },
      numTel2: { type: String }
    }
  );
  
  export default model('Contacto', contactoSchema);