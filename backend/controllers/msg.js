import express from 'express';
import {db} from "../db.js"

export const msgClient = (req,res) => {
    // Query
    const q = "INSERT INTO clients(`first_name`,`last_name`,`comp_name`,`comp_msg`,`comp_no`) VALUES(?)";
    if(req.body.firstname=="" || req.body.lastname=="" || req.body.comp_no=="" || req.body.comp_name==""){
        res.status(409).json("You Cannot Leave this Fields Empty");
    }
    else{
        const values = [req.body.firstname, req.body.lastname ,req.body.comp_name ,req.body.comp_msg, req.body.comp_no];
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err.message);
            return res.status(200).json("Message Sent Successfully");
        });
    }
}