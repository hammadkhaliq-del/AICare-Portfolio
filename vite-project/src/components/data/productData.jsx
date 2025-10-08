import React from 'react';
import { RiHealthBookLine } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { LuBookHeart } from "react-icons/lu";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { FaSearchPlus } from "react-icons/fa";

export const productData = [
  // -----------------------------------------------------------
  // 0. Dx2D (Original Card - Corrected & Shortened)
  // -----------------------------------------------------------
  {
    title: "Dx2D",
    subtitle: "2D Medical Imaging Analysis",
    description: "Advanced AI-powered analysis for X-rays, CT scans, and MRI images with real-time diagnostic assistance and anomaly detection.",
    features: [
      "Real-time image analysis",
      "Diagnostic suggestions",
      "Multi-format support",
      "DICOM Compatible"
    ],
    icon: <GiHealthNormal />,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    tag: "Popular"
  },
  // -----------------------------------------------------------
  // 1. Dx3D (3D Radiology DICOM Viewer - Shortened)
  // -----------------------------------------------------------
  {
    title: "Dx3D",
    subtitle: "3D Volumetric Imaging",
    description: "3D volumetric imaging analysis with advanced reconstruction and AI-driven pathology detection for complex medical cases.",
    features: [
      "3D Reconstruction",
      "Volume Analysis",
      "Cross-sectional Views",
      "Advanced Rendering"
    ],
    icon: <RiHealthBookLine />,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700"
  },
  // -----------------------------------------------------------
  // 2. TSS (Tuberculosis Screening System - Shortened)
  // -----------------------------------------------------------
  {
    title: "TSS",
    subtitle: "Treatment Support System",
    description: "Treatment Support System that provides personalized treatment recommendations based on patient data and medical history.",
    features: [
      "Personalized Plans",
      "Evidence-based",
      "Drug Interactions",
      "Outcome Tracking"
    ],
    icon: <LuBookHeart />,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
    tag: "New"
  },
  // -----------------------------------------------------------
  // 3. MedScribe (Medical Documentation - Shortened)
  // -----------------------------------------------------------
  {
    title: "MedScribe",
    subtitle: "AI Medical Transcription",
    description: "AI-powered medical transcription and documentation system that converts voice notes into structured medical records.",
    features: [
      "Voice Recognition",
      "Medical Terminology",
      "Auto-formatting",
      "HIPAA Secure"
    ],
    icon: <FaHeartbeat />,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700"
  },
  // -----------------------------------------------------------
  // 4. Rx Scan (Prescription Analysis for Patients - Shortened)
  // -----------------------------------------------------------
  {
    title: "Rx Scan",
    subtitle: "Prescription Intelligence",
    description: "Prescription scanning and verification system with drug interaction checking and dosage optimization.",
    features: [
      "OCR Technology",
      "Drug Database",
      "Interaction Alerts",
      "Dosage Verification"
    ],
    icon: <FaHeartCirclePlus />,
    iconBg: "bg-red-100",
    iconColor: "text-red-700"
  },
  // -----------------------------------------------------------
  // 5. SearchDoc (Medical Document Search)
  // -----------------------------------------------------------
  {
    title: "SearchDoc",
    subtitle: "Medical Document Search",
    description: "Intelligent medical document search and retrieval system with natural language processing capabilities.",
    features: [
      "Natural Language",
      "Smart Search",
      "Document Analysis",
      "Quick Retrieval"
    ],
    icon: <FaSearchPlus />,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-700"
  }
];