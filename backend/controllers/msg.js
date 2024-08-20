import express from 'express';
import { db } from "../db.js";

export const msgClient = (req, res) => {
    // Input validation
    const { firstname, lastname, comp_name, comp_msg, comp_no } = req.body;

    // Check if fields are empty
    if (!firstname || !lastname || !comp_name || !comp_no || !comp_msg) {
        return res.status(400).json({ message: "You cannot leave these fields empty" });
    }

    // Validate that comp_no is an integer
    if (isNaN(comp_no) || !Number.isInteger(Number(comp_no))) {
        return res.status(400).json({ message: "Company number must be an integer" });
    }

    // Ensure comp_no is within acceptable range
    const comp_no_int = Number(comp_no);
    if (comp_no_int < 0 || comp_no_int > 2147483647) {
        return res.status(400).json({ message: "Company number is out of range" });
    }

    // Query
    const q = "INSERT INTO clients (`first_name`, `last_name`, `comp_name`, `comp_msg`, `comp_no`) VALUES (?, ?, ?, ?, ?)";

    const values = [firstname, lastname, comp_name, comp_msg, comp_no_int];

    db.query(q, values, (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        return res.status(201).json({ message: "Message sent successfully" });
    });
};

export const msgJoiner = (req, res) => {
    const { name, phone, email, experience, position, resume } = req.body;
    console.log(req.body);

    // Check if any required field is empty
    if (!name || !phone || !email || !experience || !position || !resume) {
        console.log("Name:", name, "Phone:", phone, "Email:", email, "Position:", position, "Resume:", resume);
        return res.status(400).json({ message: "Field is Empty" });
    }

    // Insert query
    const q = "INSERT INTO joiners (name, email, phoneno, position, experience, resume) VALUES (?, ?, ?, ?, ?, ?)";
    const values = [name, email, phone, position, experience, resume];

    // Execute the query
    db.query(q, values, (err, data) => {
        if (err) {
            return res.status(500).json({ message: err.message });
        }
        return res.status(201).json({ message: "Data inserted successfully" });
    });
};


