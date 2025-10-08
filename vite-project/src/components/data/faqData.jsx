import React from "react";

export const faqData = [
  {
    title: "AI-Care (General & Company)",
    id: "general",
    faqs: [
      {
        q: "What is AI-Care's core mission?",
        a: "AI-Care's mission is to leverage cutting-edge artificial intelligence to develop solutions that enhance the accuracy, efficiency, and accessibility of medical imaging diagnostics and documentation.",
      },
      {
        q: "Who is AI-Care affiliated with?",
        a: [
          "AI-Care operates under the umbrella of the ",
          <strong key="a1">Medical Imaging and Data Analytics Lab (MIDL)</strong>,
          " and the ",
          <strong key="a2">National Center of Artificial Intelligence (NCAI)</strong>,
          " at Comsats University Islamabad.",
        ],
      },
      {
        q: "What is AI-Care's main specialization?",
        a: [
          "Our specialization is in creating ",
          <strong key="a1">AI-driven medical imaging solutions</strong>,
          " and ",
          <strong key="a2">data solutions</strong>,
          " for documentation and communication that integrate seamlessly into existing medical workflows.",
        ],
      },
      {
        q: "How quickly can we implement AI Care solutions?",
        a: [
          "Implementation typically takes ",
          <strong key="a1">2-4 weeks</strong>,
          " depending on your existing infrastructure and the specific products you choose. Our team provides full support throughout the process.",
        ],
      },
      {
        q: "Is AI Care HIPAA compliant?",
        a: [
          "Yes, all AI Care products are fully ",
          <strong key="a1">HIPAA compliant</strong>,
          " and meet the highest standards for medical data security and privacy protection.",
        ],
      },
      {
        q: "Do you offer training for our staff?",
        a: [
          "Absolutely! We provide comprehensive ",
          <strong key="a1">training programs</strong>,
          ", documentation, and ongoing support to ensure your team can effectively use our AI solutions.",
        ],
      },
    ],
  },
  {
    title: "Dx2D (2D Radiology DICOM Viewer)",
    id: "dx2d",
    faqs: [
      {
        q: "What is the primary function of Dx2D?",
        a: [
          "Dx2D is an ",
          <strong key="a1">AI-powered DICOM viewer</strong>,
          " designed specifically for the viewing and analysis of 2D radiology imaging.",
        ],
      },
      {
        q: "Which medical imaging modalities does Dx2D support?",
        a: [
          "Dx2D supports 2D modalities such as ",
          <strong key="a1">X-ray, Mammography, and Fluoroscopy</strong>,
          ".",
        ],
      },
      {
        q: "How does Dx2D improve a radiologist's workflow?",
        a: [
          "It enhances workflows through intelligent tools, automated measurements, seamless ",
          <strong key="a1">PACS integration</strong>,
          ", and an integrated report generation module for ",
          <strong key="a2">faster reporting</strong>,
          " and ",
          <strong key="a3">reduced errors</strong>,
          ".",
        ],
      },
      {
        q: "Does Dx2D offer features for radiology learning?",
        a: [
          "Yes, users can type in anatomical terms, and the system will automatically ",
          <strong key="a1">highlight the corresponding structures</strong>,
          " on the X-ray image for training and learning purposes.",
        ],
      },
    ],
  },
  {
    title: "Dx3D (3D Radiology DICOM Viewer)",
    id: "dx3d",
    faqs: [
      {
        q: "What is Dx3D and what modalities does it support?",
        a: [
          "Dx3D is an ",
          <strong key="a1">AI-powered DICOM viewer</strong>,
          " for 3D radiology imaging, supporting modalities such as ",
          <strong key="a2">CT, MRI, and Ultrasound</strong>,
          ".",
        ],
      },
      {
        q: "What advanced 3D visualization tools are included in Dx3D?",
        a: [
          "It offers the ability for ",
          <strong key="a1">3D model reconstruction</strong>,
          " from images and advanced 3D tools like ",
          <strong key="a2">Multi-Planar Reconstruction (MPR)</strong>,
          ".",
        ],
      },
      {
        q: "Does Dx3D have a feature for 3D anatomy learning?",
        a: [
          "Yes, similar to Dx2D, it allows users to type anatomical terms to automatically ",
          <strong key="a1">highlight the corresponding structures on the 3D images</strong>,
          " for enhanced learning.",
        ],
      },
    ],
  },
  {
    title: "TSS (Tuberculosis Screening System)",
    id: "tss",
    faqs: [
      {
        q: "What is the main purpose of the TSS product?",
        a: [
          "TSS (Tuberculosis Screening System) is an AI-powered system dedicated to the ",
          <strong key="a1">efficient and accurate screening and diagnosis of tuberculosis</strong>,
          " from X-ray images.",
        ],
      },
      {
        q: "How accurate is the TSS system?",
        a: [
          "The system achieves a remarkable ",
          <strong key="a1">98% accuracy worldwide</strong>,
          ". It has been recognized as a top performer in competitions since 2021 and was validated on a local Pakistani dataset of 10,000 samples.",
        ],
      },
      {
        q: "What are the key automation features of TSS?",
        a: [
          "Key features include ",
          <strong key="a1">auto-detection of TB-related anomalies</strong>,
          ", automated impression generation for reports, and a ",
          <strong key="a2">voice control</strong>,
          " feature for hands-free interaction.",
        ],
      },
    ],
  },
  {
    title: "MSS / Tahkhees (Mammography Screening System)",
    id: "mss",
    faqs: [
      {
        q: "What is the function of the MSS / Tahkhees system?",
        a: [
          "MSS (Mammography Screening System), also referred to as Tahkhees, is an AI-powered system designed for mammography screening that ",
          <strong key="a1">accurately predicts tumors</strong>,
          " and ",
          <strong key="a2">assesses mammography density</strong>,
          ".",
        ],
      },
      {
        q: "What is the reported accuracy of the MSS product?",
        a: [
          "MSS achieves an exceptional ",
          <strong key="a1">98% accuracy worldwide</strong>,
          ". It has been a top performer in competitions since 2021 and was rigorously validated on a Pakistani local dataset of 8,000 samples.",
        ],
      },
    ],
  },
  {
    title: "Medscribe (Medical Documentation App)",
    id: "medscribe",
    faqs: [
      {
        q: "What is Medscribe?",
        a: [
          "Medscribe is an innovative mobile and web application that uses AI to ",
          <strong key="a1">accurately transcribe medical communications</strong>,
          " and intelligently format them into structured reports.",
        ],
      },
      {
        q: "What types of communication does Medscribe transcribe?",
        a: [
          "It transcribes various interactions, including ",
          <strong key="a1">doctor-patient consultations</strong>,
          ", radiologist notes, surgeon operation notes, nurse-patient monitoring, and triage officer communication.",
        ],
      },
      {
        q: "Does Medscribe support regional languages/dialects?",
        a: [
          "Yes, Medscribe has multi-dialect support for regional languages including ",
          <strong key="a1">Urdu, Punjabi, Sindhi, and Pashto</strong>,
          ", with a high ",
          <strong key="a2">95% transcription accuracy</strong>,
          ".",
        ],
      },
    ],
  },
  {
    title: "RxScan (Prescription Management App)",
    id: "rxscan",
    faqs: [
      {
        q: "What is RxScan for?",
        a: [
          "RxScan is a mobile and web application that helps individuals securely ",
          <strong key="a1">scan their prescriptions</strong>,
          " and understand them using an advanced AI assistant.",
        ],
      },
      {
        q: "What kind of information does the RxScan AI provide to the user?",
        a: [
          "The AI provides clear, concise information about the medication, including ",
          <strong key="a1">side effects, duration of treatment, dosage</strong>,
          ", and potential ",
          <strong key="a2">drug interaction alerts</strong>,
          ", all through an intuitive chat interface.",
        ],
      },
      {
        q: "What are the benefits of using RxScan as a patient?",
        a: [
          "Benefits include improved medication safety, better adherence to doctor's instructions, secure digital storage of all prescriptions, and overall peace of mind.",
        ],
      },
    ],
  },
];