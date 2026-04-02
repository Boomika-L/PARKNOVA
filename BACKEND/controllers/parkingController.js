const pool = require("../models/parkingModel");
exports.getSlot = async(req,res)=>{
    const result = await pool.query("SELECT * FROM SLOTS");
    res.json(result.rows);
}
exports.bookSlot = async(req,res)=>{
    const {user_id,slot_id} = req.body;
    await pool.query( "INSERT INTO bookings (user_id, slot_id) VALUES ($1, $2)",
    [user_id, slot_id]);
      await pool.query(
    "UPDATE slots SET is_available = false WHERE id = $1",
    [slot_id]
  );
  res.json({
    message:"Slot added successfully"
  });
};