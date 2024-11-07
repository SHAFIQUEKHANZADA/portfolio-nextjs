import React from 'react'

const Footer = () => {
  return (
    <div>
          <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          </>


          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full">
        {/* <hr className=""/> */}
        <p className="px-10 text-center py-6 font-extralight text-[12px] dark:text-zinc-200">
          © 2024 Shafique Ur Rehman™. All Rights Reserved.
        </p>
      </div>
    </div>
   
  )
}

export default Footer