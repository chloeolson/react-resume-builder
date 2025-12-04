import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const DownloadPDF = () => {
  const exportPDF = async () => {
    const element = document.body; // or any specific div you want

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("resume.pdf");
  };

  return <button onClick={exportPDF}>Download PDF</button>;
};

export default DownloadPDF;
