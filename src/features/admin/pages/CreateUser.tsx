import React from 'react'

const CreateUser = () => {
    return (
        <div className='px-5'>
            <div className='bg-white h-auto rounded-[15px] p-9'>
                <h1 className='text-center pt-2 font-bold text-2xl'>CREATE USER</h1>
                <div className='pt-6'>
                    <form action="" className='flex flex-col gap-4'>
                       <div className='flex gap-4'>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label className='font-medium' htmlFor="fullname">Full Name</label>
                                <input 
                                    id="fullname"
                                    name="fullname"
                                    className='w-full p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300' 
                                    type="text" 
                                    placeholder='Fullname'
                                />
                            </div>
                            <div className='flex flex-col gap-2 flex-1'>
                                <label className='font-medium' htmlFor="username">Username</label>
                                <input 
                                    id="username"
                                    name="username"
                                    className='w-full p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300' 
                                    type="text" 
                                    placeholder='Username'
                                />
                            </div>
                        </div>
                        <div className="flex gap-4">
  {/* Email */}
  <div className="flex flex-col gap-2 flex-1">
    <label className="font-medium" htmlFor="email">Email</label>
    <input
      id="email"
      type="email"
      placeholder="ex: myname@gmail.com"
      className="w-full p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300"
    />
    <span className="text-gray-400">example@example.com</span>
  </div>

  {/* Cột trống để giữ đúng chiều */}
  <div className="flex-1"></div>
</div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-medium' htmlFor="">Phone Number</label>
                            <input className='  p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300' type="text" placeholder='Phone number' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='font-medium' htmlFor="">Date Of Birth</label>
                            <input className='  p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300' type="date" />
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='font-medium' htmlFor="">Gender</label>
                            <select
                                id="gender"
                                name="gender"
                                className='p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300 bg-white'
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='font-medium' htmlFor="address">Address</label>
                            <textarea
                                id="address"
                                name="address"
                                className='p-3 focus:ring-2 focus:outline-none focus:ring-amber-400 rounded-xl border border-gray-300 resize-none'
                                placeholder='Address'
                            ></textarea>
                        </div>



                        <button type='submit' className='mt-6 bg-amber-600 p-4 rounded-xl text-white'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateUser