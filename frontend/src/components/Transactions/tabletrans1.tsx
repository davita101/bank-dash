import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const invoices = [
    {
      Description: "Spotify Subscription",
      paymentStatus: "#12548796",
      totalAmount: "$2,500",
      paymentMethod: "Shopping",
      cardCode:"1234 ****",
      Date:"28 Jan, 12.30 AM",
      DownloadButton:"Download",
    },
    {
      Description: "Freepik Sales",
      paymentStatus: "#12548796",
      totalAmount: "$750",
      paymentMethod: "Transfer",
      cardCode:"1234 ****",
      Date:"25 Jan, 10.40 PM",
      DownloadButton:"Download",
      
    },
    {
      Description: "Mobile Service",
      paymentStatus: "#12548796",
      totalAmount: "$150",
      paymentMethod: "Service",
      cardCode:"1234 ****",
      Date:"20 Jan, 10.40 PM",
      DownloadButton:"Download",
      
    },
    {
      Description: "Wilson",
      paymentStatus: "#12548796",
      totalAmount: "$1050",
      paymentMethod: "Transfer",
      cardCode:"1234 ****",
      Date:"15 Jan, 03.29 PM",
      DownloadButton:"Download",
    },
    {
      Description: "Emilly",
      paymentStatus: "#12548796",
      totalAmount: "$840",
      paymentMethod: "Transfer",
      cardCode:"1234 ****",
      Date:"14 Jan, 10.40 PM",
      DownloadButton:"Download",
    },

  ]
  
  export function TableDemo() {
    return (
      <Table >
        <TableHeader>
          <TableRow>
            <TableHead className="text-body--100 text-primary--700">Description</TableHead>
            <TableHead className="text-body--100 text-primary--700" >Transaction ID</TableHead>
            <TableHead className="text-body--100 text-primary--700">Type</TableHead>
            <TableHead className="text-body--100 text-primary--700">Card</TableHead>
            <TableHead className="text-body--100 text-primary--700">Date</TableHead>
            <TableHead className="text-body--100 text-primary--700">Amount</TableHead>
            
            <TableHead className="text-body--100 text-primary--700">Reciept</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {invoices.map((invoice) => (
            <TableRow className="text-body--100 text-primary--007" key={invoice.Description}>
              <TableCell>{invoice.Description}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.cardCode}</TableCell>
              <TableCell>{invoice.Date}</TableCell>
              <TableCell className="">{invoice.totalAmount}</TableCell>
              <TableCell className=""><button className="'w-[10px] h-[35px] border   flex justify-center items-center  border-primary--014  hover:border-primary--013  text-primary--014 hover:text-primary--013 rounded-[50px] cursor-pointer">{invoice.DownloadButton}</button></TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    )
  }
  