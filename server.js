const db = require('./dbconnection');


function getdata(req,res){
    db.query('select * from contacts',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data)
        }
    })
}

function postdata(req, res) {
    const { firstName, lastName, email, message } = req.body;
    const insertDiseaseQuery = `INSERT INTO contacts (firstName, lastName, email, message) VALUES (?, ?, ?, ?)`;

    db.query(insertDiseaseQuery, [firstName, lastName, email, message], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Error inserting data' }); // Send error response
        } else {
            res.json({ message: 'Data submitted successfully' }); // Send success response
        }
    });
}


module.exports = {getdata, postdata}





 