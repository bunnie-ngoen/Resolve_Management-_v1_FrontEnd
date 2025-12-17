import { default as logo } from '../../../assets/images/avatar.jpg'
const AdminProfile = () => {
    return (
        <div className="px-5">
            <div className='flex flex-col'>
                <div className='h-[300px] bg-amber-600 relative rounded-2xl'>
                <div className='absolute bottom-0 left-0'>
                    <div className='flex justify-center items-center'>
                        <img src={logo} className='w-[90px] h-[90px] m-4 rounded-2xl' alt="" />
                        <div className=''>
                            <h1 className='text-2xl font-medium text-white'>Duy Khanh</h1>
                            <h1 className='text-xl font-medium text-white'>Nam</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex'>
                 <div className='bg-amber-500 h-[500px] flex-1'></div>
                 <div className='flex-1'></div>
            </div>
            </div>
        </div>
    )
}

export default AdminProfile