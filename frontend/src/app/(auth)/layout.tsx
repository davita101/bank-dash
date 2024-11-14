// import { useAuth } from '@clerk/nextjs'
// import { redirect } from 'next/navigation'
// import React, { ReactNode } from 'react'

// import { getAuth } from '@clerk/nextjs/server'
// import type { NextApiRequest, NextApiResponse } from 'next'

// export default  function AuthLayout({children ,req, res}: {children: ReactNode, req: NextApiRequest, res: NextApiResponse}) {
//   const {userId} =  getAuth(req)
//   if(userId !== null ) redirect("/")
    
//   return (
//     <div>
//       {children}
//       bro
//     </div>
//   )
// }
