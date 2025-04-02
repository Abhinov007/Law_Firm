import React from 'react'

const Blogs = () => {
  return (
<div className='flex h-[900px] justify-self-center'>

<div className="w-[1200px] h-auto p-4 bg-gray-100">
{/* Parent Grid */}
<div className="grid grid-rows-2 gap-4 h-auto">

{/* First Element (Takes Full Row) */}
<div className="bg-blue-500 h-full flex items-center  justify-center text-white text-xl">
Full Row Element
</div>

{/* Second Row with Two Sections */}
<div className="grid grid-cols-2 gap-4 h-full">

{/* Left Half */}
<div className="bg-green-500 flex items-center justify-center text-white text-xl">
Left Half
</div>

{/* Right Half - Divided into 4 Subparts */}
<div className="grid grid-cols-2 grid-rows-2 gap-4">
<div className="bg-red-500 flex items-center justify-center text-white">1</div>
<div className="bg-yellow-500 flex items-center justify-center text-white">2</div>
<div className="bg-purple-500 flex items-center justify-center text-white">3</div>
<div className="bg-pink-500 flex items-center justify-center text-white">4</div>
</div>

</div>
</div>
</div>
</div>

  )
}

export default Blogs