import * as XLSX from 'xlsx'

export async function GET(
  request: Request,
  { params }: { params: { genid: string } }
) {
  const tags = Array.from({ length: 1000 }).map(
    (_, i, a) => `DEV0-LM00-LKG00-13${a.length - i}`
  );
  const messageId = params.genid;
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(tags.map(tag => ({ Tag: tag })));

  // Append the worksheet to the workbook: 
  XLSX.utils.book_append_sheet(workbook, worksheet, "MySheet")
  
  // Create data buffer 
  const buffer = XLSX.write(workbook, { type: "buffer", bookType: "xlsx" })
  
  // Create and send a new Response
  return new Response(buffer, {
      status: 200,
      headers: {
          'Content-Disposition': `attachment; filename="${messageId}.xlsx"`,
          'Content-Type': 'application/vnd.ms-excel',
      }
  })

}
