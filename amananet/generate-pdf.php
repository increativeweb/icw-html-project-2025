<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Generate PDF with jsPDF</title>

    <!-- jsPDF (v1.5.3) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.debug.js" crossorigin="anonymous"></script>

    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 40px;
        }
        #content {
            background: #f0f0f0;
            padding: 20px;
            width: 600px;
            margin-bottom: 20px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
        }
    </style>
</head>
<body>

    <h1>PDF Generator Demo</h1>

    <div id="content">
        <h2>Invoice #001</h2>
        <p><strong>Date:</strong> <?php echo date('Y-m-d'); ?></p>
        <p><strong>Customer:</strong> John Doe</p>
        <p><strong>Total:</strong> $199.00</p>
        <p>Thank you for your purchase!</p>
    </div>

    <button id="download-pdf">Download PDF</button>

    <script>
        document.getElementById('download-pdf').addEventListener('click', function () {
            var doc = new jsPDF();

            // Get plain text from the div (no styles)
            var content = document.getElementById("content").innerText;

            // Add text to PDF (starting at x:10, y:20)
            doc.text(content, 10, 20);

            // Save the PDF
            doc.save("invoice.pdf");
        });
    </script>

</body>
</html>
