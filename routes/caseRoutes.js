const express= require("express");
const router= express.Router();
const Case= require("../models/caseModel");
const { createCase, getCases, updateCase, deleteCase } = require("../controllers/caseController");
const { authMiddleware, roleCheck } = require("../middleware/authMiddleware");

// Create case (Client)
router.post("/submit", authMiddleware, createCase);

// Get all cases (Admin/Lawyer)
router.get("/getcases", authMiddleware, roleCheck(["admin", "lawyer"]), getCases);

// Get specific case by ID
router.get("/cases/:id", authMiddleware, getCases);

// Update case (Admin)
router.put("/cases/:id", authMiddleware, roleCheck(["admin"]), updateCase);

// Delete case (Admin)
router.delete("/cases/:id", authMiddleware, roleCheck(["admin"]), deleteCase);

module.exports = router;