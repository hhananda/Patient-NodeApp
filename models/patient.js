var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    id: Number,
    fname: String,
    mname: String,
    lname: String,
    email: String,
    DOB: Date,
    gender: { type: String, enum: ['male', 'female'], default: 'male' },
    lastCheck: Date,
    status: { type: String, enum: ['Draft', 'Saved', 'Deleted', 'Canceled'], default: 'Draft' },
    active: Boolean,
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'users' },
    creationDate: { type: Date, default: Date.now }
}, { collection: "patients" });

module.exports = mongoose.model("patients", PatientSchema);