import React from 'react'

function Tabletrans() {
    return (
        <div className='w-[1110px] h-[397px] flex flex-col rounded-[25px]  bg-primary--003'>
            <table className=' mt-[22px] ml-[30px] mr-[30px]  '>
                <tr className=' border-b text-body--100 text-primary--700 text-left'>
                    <th>Description</th>
                    <th>Transaction ID</th>
                    <th>Type</th>
                    <th>Card</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Receipt</th>
                </tr>
                <tr className='text-start text-body--100 pl-[15px] h-[65px] text-primary--007'>
                    <td>Spotify Subscription</td>
                    <td>#12548796</td>
                    <td>Shopping</td>
                    <td>1234 ****</td>
                    <td>28 Jan, 12.30 AM</td>
                    <td>-$2,500</td>
                    <td>
                        <div className='w-[80px] h-[30px] border   flex justify-center items-center  border-primary--014  hover:border-primary--013  text-primary--014 hover:text-primary--013 rounded-[50px] cursor-pointer'>
                            <button className='text-body--200  cursor-pointer'>Download</button>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Tabletrans