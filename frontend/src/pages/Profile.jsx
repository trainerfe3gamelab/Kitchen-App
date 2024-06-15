import React from 'react';
import { Link } from 'react-router-dom';
import CardProfile from '../components/common/CardProfile';

const Profile = () => {
   const  data_kartu={
        "pertama":[{
            "nama":"Martin Joseph",
            "image" : "/profile-cards/image 1.png",
            "user" : "/profile-cards/Ellipse 1.png",
            "time": "30m",
            "likes":"10k",
            "title":"Martabak Manis Cokelat Kacang Teflon",
        }],
        "kedua":[{
            "nama":"Bella Haddad",
            "image" : "/profile-cards/image 2.png",
            "user" : "/profile-cards/Ellipse 2.png",
            "time": "1,5j",
            "likes":"2.3k",
            "title":"Resep Opor Ayam Yang Mantap Untuk Lebaran",
        }],
        "ketiga":[{
            "nama":"Ruth Stewart",
            "image" : "/profile-cards/image 3.png",
            "user" : "/profile-cards/Ellipse 3.png",
            "time": "30 m",
            "likes":"2.3k",
            "title":"Resep Sop Buah Mutiara, Minuman Dingin yang Cocok untuk Musim Panas",
        }],
        "empat":[{
            "nama":"Marelyn Johanson",
            "image" : "/profile-cards/image 4.png",
            "user" : "/profile-cards/Ellipse 4.png",
            "time": "30 m",
            "likes":"2.3k",
            "title":"Resep Babi Kurma By LastHope Kitchen, Bikin Masuk Penjara",
        }],
        "kelima":[{
            "nama":"Martin Joseph",
            "image" : "/profile-cards/image 1.png",
            "user" : "/profile-cards/Ellipse 1.png",
            "time": "30m",
            "likes":"10k",
            "title":"Martabak Manis Cokelat Kacang Teflon",
        }],
        "enam":[{
            "nama":"Bella Haddad",
            "image" : "/profile-cards/image 2.png",
            "user" : "/profile-cards/Ellipse 2.png",
            "time": "1,5j",
            "likes":"2.3k",
            "title":"Resep Opor Ayam Yang Mantap Untuk Lebaran",
        }],
        "tujuh":[{
            "nama":"Ruth Stewart",
            "image" : "/profile-cards/image 3.png",
            "user" : "/profile-cards/Ellipse 3.png",
            "time": "30 m",
            "likes":"2.3k",
            "title":"Resep Sop Buah Mutiara, Minuman Dingin yang Cocok untuk Musim Panas",
        }],
        "delapan":[{
            "nama":"Marelyn Johanson",
            "image" : "/profile-cards/image 4.png",
            "user" : "/profile-cards/Ellipse 4.png",
            "time": "30 m",
            "likes":"2.3k",
            "title":"Resep Babi Kurma By LastHope Kitchen, Bikin Masuk Penjara",
        }],
        "9":[{
            "nama":"Martin Joseph",
            "image" : "/profile-cards/image 1.png",
            "user" : "/profile-cards/Ellipse 1.png",
            "time": "30m",
            "likes":"10k",
            "title":"Martabak Manis Cokelat Kacang Teflon",
        }],
        "10":[{
            "nama":"Bella Haddad",
            "image" : "/profile-cards/image 2.png",
            "user" : "/profile-cards/Ellipse 2.png",
            "time": "1,5j",
            "likes":"2.3k",
            "title":"Resep Opor Ayam Yang Mantap Untuk Lebaran",
        }],
        "11":[{
            "nama":"Ruth Stewart",
            "image" : "/profile-cards/image 3.png",
            "user" : "/profile-cards/Ellipse 3.png",
            "time": "30 m",
            "likes":"2.3k",
            "title":"Resep Sop Buah Mutiara, Minuman Dingin yang Cocok untuk Musim Panas",
        }],
        "12":[{
            "nama":"Marelyn Johanson",
            "image" : "/profile-cards/image 4.png",
            "user" : "/profile-cards/Ellipse 4.png",
            "time": "30 m",
            "likes":"2.3k",
            "title":"Resep Babi Kurma By LastHope Kitchen, Bikin Masuk Penjara",
        }],
    };

  return (
    <div className='xl:px-36'>
 
        <div className='mt-28 md:mt-26 lg:mt-26 sm:px-4'>
              {/* PROFILE IMG */}
              <div className="flex justify-between px-4 md:px-1">
                <div className='flex gap-5'>
                    <img 
                        src="/profile/user-profile.png" 
                        alt="profile picture"
                        className='w-[55px] h-[55px] sm:w-[121px] sm:h-[121px] rounded-full' />
                
                    <div className="flex lg:justify-between xl:justify-between  ">
                        <div className="flex flex-col">
                                    {/* NAMA USER */}
                                    <p className='text-[10px] sm:text-[32px] font-semibold'>
                                    Joseph Indera Rabbanni
                                    </p>
                                    {/* BIO USER */}
                                    <p className='text-[6px] sm:text-[16px] w-[262px] xl:w-[768px] md:w-[600px]'>Halo, saya Joseph Indera Rabbani, seorang pecinta kuliner dan penulis resep yang berdedikasi. Dengan lebih dari 1 Abad pengalaman di dapur, saya telah menjelajahi berbagai macam masakan dari seluruh dunia dan menemukan kegembiraan dalam berbagi resep yang lezat dan mudah diikuti.</p>
                                    {/* SETTING BTN */}
                                    <div className='text-right'>
                                        <Link
                                            to={""} 
                                            className='w-[35px] h-[10px] sm:w-[99px] sm:h-[33px] text-[6px] sm:text-[16px] border-2 border-black rounded-[27px] sm:px-6 sm:py-2 px-4 py-1 sm:hidden font-medium'>
                                        Settings
                                        </Link>
                                    </div>
                        </div>
                    </div>
                </div>
                        <div className=''>
                                <Link
                                    to={""} 
                                    className='w-[35px] h-[10px] sm:w-[99px] sm:h-[33px] text-[6px] sm:text-[16px] border-2 border-black rounded-[27px] sm:px-6 sm:py-2 px-4 py-1 hidden sm:flex items-center'>
                                   Settings
                                </Link>
                            </div>
                </div>
        </div>
        <div className="p-5">
            <hr className=' md:mt-12 mb-4 md:mb-8 ' />
        </div>

        <div className='mx-auto max-w-7xl px-4'>
            <div className='flex justify-between items-center mb-4 md:mb-8'>
                {/* TITLE */}
                <p className="font-semibold text-xs md:text-base">
                    Resep dari Joseph
                </p>
                
                {/* ADD RECIPE BUTTON */}
                <button className='bg-black rounded-full text-xs md:text-base text-white px-3 md:px-6 py-1 md:py-2'>
                    Tambah Resep
                </button>
            </div>

            {/* RECIPE CARDS */}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 mb-16'>
                {Object.keys(data_kartu).map((key, i)=>(
                    data_kartu[key].map((item, j) => (
                        <div key={i + '-' + j}>
                            <CardProfile
                                image={item.image}
                                time={item.time}
                                likes={item.likes}
                                tittle={item.title}
                                creatorName={item.nama}
                                creatorImage={item.user}
                            />
                        </div>
                    ))
                ))}
            </div>
        </div>
    </div>
  )
}

export default Profile;
