import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Data Profile Berhasil disimpan!');

const EditProfile = () => {

    const [Inputs, setInputs] = useState({
        image: '',
        fullName: '',
        username: '',
        email: '',
        website: '',
        bio:'',
        sandiLama:'',
        sandiBaru:'',
        sandiKonfirmasi:''
    })
    const changeHandler = e => {
        setInputs({...Inputs, [e.target.name]: e.target.value})
        console.log(e.target.value)
     }
     const handleSubmit = (e) => {
        e.preventDefault();

        const dataProfile = {
            image: Inputs.image,
            fullName: Inputs.fullName,
            username: Inputs.username,
            email: Inputs.email,
            website: Inputs.website,
            bio: Inputs.bio,
            sandiLama:Inputs.sandiLama,
            sandiBaru: Inputs.sandiBaru,
            sandiKonfirmasi: Inputs.sandiKonfirmasi
          }
          console.log(dataProfile)
          notify()
      }

      
  return (
    <form
        onSubmit={handleSubmit} 
        className='p-5 lg:px-[227px] lg:py-[80px] mt-[80px] font-Outfit'>
        <div className='mt-5'>
                {/* PROFILE IMG */}
            <div className="flex gap-5 items-center">
                <img 
                    src="/profile/user-profile.png" 
                    alt="profile picture"
                    className='w-[55px] h-[55px] sm:w-[248px] sm:h-[248px] rounded-full' />
                <input 
                    type="file" 
                    name="image" 
                    id="image" 
                    onChange={changeHandler}
                    hidden
                     />
                <div>
                    <label 
                        htmlFor="image"
                        className='text-accent-1 texxt-[14px] sm:text-[24px]'
                        >
                        Unggah Gambar
                    </label>
                    <p className='text-[10px] sm:text-[20px]'>
                    Foto ukuran 300 x 300 px atau 300 x 400 px, tipe JPG/JPEG/PNG, max 1MB <br />
                    Foto harus memiliki ukuran rasio 1:1
                    </p>
                    <p>{Inputs.image[0]}</p>
                </div>
            </div>
        </div>
        <div className='p-2 border-1 sm:hidden'>
                <hr />
        </div>
        {/* FORM INPUT PROFILE DATA */}
        <div 
            className='sm:mt-10 flex flex-col gap-4'>
            {/* fullName*/}
            <div className="flex flex-col gap-1 ">
                <label 
                    htmlFor="fullName"
                    className='sm:font-bold text-[10px] sm:text-[20px]'
                    >
                    fullName
                </label>
                <input 
                    type="text" 
                    name='fullName' 
                    className='w-[300px] h-[40px] sm:w-[628px] sm:h-[58px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* USERNAME */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="username"
                    className='sm:font-bold  text-[10px] sm:text-[20px]'
                    >
                    USERNAME
                </label>
                <input 
                    type="text" 
                    name='username' 
                    className='w-[300px] h-[40px] sm:w-[628px] sm:h-[58px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* E_MAIL */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="email"
                    className='sm:font-bold text-[10px] sm:text-[20px]'
                    >
                    E-MAIL
                </label>
                <input 
                    type="text" 
                    name='email' 
                    className='w-[300px] h-[40px] sm:w-[628px] sm:h-[58px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* WEBSITE */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="website"
                    className='sm:font-bold text-[10px] sm:text-[20px]'
                    >
                    WEBSITE
                </label>
                <p className='text-[8px] sm:text-[14px]'>
                    Masukkan "http://" atau "https://" di awal.
                </p>
                <input 
                    type="text" 
                    name='website' 
                    className='w-[300px] h-[40px] sm:w-[628px] sm:h-[58px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* BIO */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="bio"
                    className='sm:font-bold text-[10px] sm:text-[20px]'
                    >
                    BIO
                </label>
                <p className='text-[8px] sm:text-[14px] w-[300px] h-[40px] sm:w-[628px] sm:h-[58px]'>
                    Tambahkan biodata singkat untuk memberi tahu komunitas KC lebih banyak tentang diri Anda. Apa makanan favorit Anda? Mengapa Anda suka memasak? Kami ingin tahu!
                </p>
                <textarea 
                    type="text" 
                    name='bio' 
                    className='w-[300px] h-[181px] sm:w-[627px] sm:h-[288px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* UBAH KATA SANDI */}
            <p className='font-bold text-[10px] sm:text-[20px]'>UBAH KATA SANDI <br />
                <span className='text-[8px] sm:text-[14px] font-normal'>Kata sandi Anda harus terdiri dari setidaknya 8 karakter.</span>
            </p>
            {/* KATA SANDI LAMA */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="sandiLama"
                    className=' text-[8px] sm:text-[14px]'
                    >
                    KATA SANDI LAMA
                </label>
                <input 
                    type="text" 
                    name='sandiLama' 
                    className='w-[150px] h-[25px] sm:w-[304px] sm:h-[57px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* KATA SANDI BARU DAN KONFIRMASI KATA SANDI BARU */}
            <div className="flex gap-4">
                {/* KATA SANDI BARU */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="sandiBaru"
                    className=' text-[8px] sm:text-[14px]'
                    >
                    KATA SANDI BARU
                </label>
                <input 
                    type="text" 
                    name='sandiBaru' 
                    className='w-[150px] h-[25px] sm:w-[304px] sm:h-[57px] rounded-[6px] border-black border-2 p-1' 
                    onChange={changeHandler}/>
            </div>
            {/* KATA SANDI BARU KONFIRMASI */}
            <div className="flex flex-col gap-1">
                <label 
                    htmlFor="sandiKonfirmasi"
                    className=' text-[8px] sm:text-[14px]'
                    >
                    KONFIRMASI KATA SANDI BARU
                </label>
                <input 
                    type="text" 
                    name='sandiKonfirmasi' 
                    className='w-[150px] h-[25px] sm:w-[304px] sm:h-[57px] rounded-[6px] border-black border-2 p-1'
                    onChange={changeHandler} />
            </div>
            
            </div>
            <div className="text-right sm:px-[180px] px-[18px]">
                <button 
                type="submit"
                className="bg-[#399B0A] rounded-[27px] w-[100px] h-[20px] sm:w-[181px] sm:h-[36px] text-white font-bold text-[10px] sm:text-[16px] ">
                    Simpan Perubahan
                </button>
            </div>
        </div>
       
    </form>
  )
}

export default EditProfile