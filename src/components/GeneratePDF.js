import * as jsPDF from 'jspdf'

const GeneratePDF = (name) => {
    var doc = new jsPDF()

    doc.text('Hello world!', 10, 10)
    doc.save('a4.pdf')
    return true;
}
export default GeneratePDF;