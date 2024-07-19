// ExportData.js
import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const ExportData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "your-collection-name"),
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(docs);
        exportToExcel(docs); // Automatically export to Excel on data change
      }
    );

    return () => unsubscribe();
  }, []);

  const exportToExcel = async (data) => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Firestore Data");

    if (data.length > 0) {
      // Add column headers
      const columns = Object.keys(data[0]).map((key) => ({ header: key, key }));
      worksheet.columns = columns;

      // Add rows
      data.forEach((item) => {
        worksheet.addRow(item);
      });

      // Create Excel file and download
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      saveAs(blob, "FirestoreData.xlsx");
    }
  };

  return (
    <div>
      <h2>Real-time Firestore to Excel Export</h2>
      <p>Data will be automatically exported to Excel whenever it changes.</p>
    </div>
  );
};

export default ExportData;
