const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("successfully connected");
}).catch((err) => {
    console.log(err);
});

// This code defines a schema for the "Student" collection.
const studentSchema = new mongoose.Schema({
    name: String,
    workout: Boolean,
    height: Number
});

// This line creates a model for the "Student" collection based on the defined schema.

const Student = mongoose.model("Student", studentSchema);

// const adder = async () => {
    
        // const ss = new Student({
        //     name: "ritu",
        //     workout: true,
        //     height: 6
         // await ss.save();

        //  efficient way
        // Inside the adder function, you use the await keyword to wait for the completion of the Student.
        // create() method. This method creates a new student document and saves it to the MongoDB database. 
        
        const adder = async () => {
            const ss = await Student.create({
                name: "ritu",
                workout: true,
                height: 6
            });
           
            console.log(ss);
           

        };
        
 adder();