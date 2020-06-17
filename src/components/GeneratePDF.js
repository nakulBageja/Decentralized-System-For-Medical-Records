import * as jsPDF from 'jspdf'

const GeneratePDF = (name,age,gender,occupation,bloodP,sugarL,heartB,text) => {
    var doc = new jsPDF()
    let data = new Date()
    let date = data.getFullYear() + '-' + (data.getMonth() + 1) + '-' + data.getDate()
    let x1 = 30;
    let x2 = 40;
    doc.text('MEDICAL CERTIFICATE', 80, 20)
    doc.text(`${date}`, 170, 20)
    doc.text("Name: ", 30, 40)
    doc.text(name, 50, 40)
    doc.text("Age: ", 120, 40) 
    doc.text(age, 140, 40)
    doc.text("Gender: ", 30, 50)
    doc.text(gender, 55, 50)
    doc.text("Occupation: ", 120, 50)
    doc.text(occupation, 150, 50)
    doc.text("Blood Pressure: ",  30, 60)
    doc.text(`${bloodP} mmHg`, 70, 60)
    doc.text("Sugar Level: ", 120, 60)
    doc.text(`${sugarL} mg/dL`,  160, 60)
    doc.text("Heart Rate",  30, 70)
    doc.text(`${heartB} bpm`,  60, 70)
    doc.text("Description of problem: ", 30,80)
    doc.text(text, 90,80)
    doc.save(`${name}_MedicalCertificate.pdf`)
    return true;
}
export default GeneratePDF;