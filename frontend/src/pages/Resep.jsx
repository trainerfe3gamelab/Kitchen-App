import { Icon } from "@iconify/react";
import Card from "../components/common/Card";

const Resep = () => {
  return (
    <div className='md:px-20 xl:px-20'>
        {/* HEADER */}
        <img 
            src="/resep/header.svg" 
            className="mx-auto md:mt-32 xl:mt-32 md:w-[900px] xl:w-[1080px]"/>
        {/* MAIN */}
        <div className='flex md:flex-col lg:flex-col xl:flex-row flex-col'>
        {/* KIRI */}
         {/* LIKE SHARE SIMPAN */}
        <div className="p-5 flex-initial">
        <div className="flex justify-between">
            <div className="flex gap-5 ">
            <div className="flexp flex-col items-center">
            <Icon icon="mingcute:heart-line"  className="text-black text-[10px] md:text-[20px]  xl:text-[20px]"></Icon>
            <p className="text-[7px] md:text-[14px]">1.2k</p>
            </div>
            <div className="flexp flex-col items-center">
            <Icon icon="material-symbols:bookmark-outline"  className="text-black text-[10px] md:text-[20px]  xl:text-[20px] mx-auto"></Icon>
            <p className="text-[7px] md:text-[14px]">Simpan</p>
            </div>
            <div className="flexp flex-col items-center">
            <Icon icon="material-symbols:share-outline"  className="text-black text-[10px] md:text-[20px]  xl:text-[20px] mx-auto"></Icon>
            <p className="text-[7px] md:text-[14px]">Bagikan</p>
            </div>
            </div>
            <div className="  md:flex w-fit gap-1 items-center  rounded-full bg-accent-2 px-4 py-1 hidden md:w-[83px] md:h-[31px] text-bg ">
          <Icon className="text-sm" icon="mingcute:time-line" />
          <p className="text-xs font-medium">30m</p>
        </div>
        </div>
        <hr className="mb-5" />
        <div className="flex flex-col ">
            <div className="flex gap-5 items-center mb-2 ">
                <img src="profile-cards/Ellipse 3.png" alt="" />
                <p className="font-bold">
                    Ruth Stewart
                </p>
            </div>
        <p className="xl:text-[16px] text-[6px] md:text-[16px]">
        Nikmati kesegaran dan kelezatan dalam setiap mangkuk Sop Buah kami. Dibuat dari kombinasi buah-buahan segar seperti melon, semangka, anggur, dan pepaya, yang dipadu dengan sirup manis dan susu kental manis, Sop Buah ini adalah pilihan sempurna untuk menghilangkan dahaga dan memberikan sensasi segar di hari yang panas.
        </p>
        <hr className="mt-5 mb-2" />
        {/* BAHAN BAHAN */}
        <div>
            <p className="text-[10px] md:text-[20px] font-semibold">Bahan-bahan</p>
            <p className="text-[8px] md:text-[16px]">Untuk 1 Porsi</p>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px] flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">100 gram Melon</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px] flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">100 gram Semangka</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px]  flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">100 gram Pepaya</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px] flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">100 gram Anggur</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px] flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">100 gram Nanas</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px]  flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">1 pcs Apel</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px]  flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">200 ml Sirup</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px] flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">200 ml Susu Kental Manis</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px]  flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">500 ml Air Minum</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>
            {/* LIST BAHAN */}
            <div className="w-[177.12px] h-[24.87px] xl:w-[530px] xl:h-[55px] md:w-[530px] md:h-[55px]  flex justify-between border-[1px] bg-[#FBFAF7] border-slate-300 rounded-[6px] p-3 items-center mt-2">
                <p className="text-[8px] md:text-[16px] xl:text-[16px]">Secukupnya, Es batu</p>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-red-500">Cek Harga</p>
            </div>

        </div>
        </div>
        <hr className="mt-5 mb-2" />
        {/* INFORMASI NILAI GIZI */}
        <p className="text-[10px] md:text-[20px] xl:text-[20px] font-bold mb-2">Informasi Nilai Gizi</p>
        <div className="w-[320px] h-[60px] xl:w-[784px] xl:h-[107px] md:w-[650px] md:h-[107px] rounded-[6px] bg-[#FBFAF7] border-slate-300 border-[1px] flex flex-row p-3 items-center gap-5 md:px-10 xl:px-10 ">
        <div className="flex justify-around flex-row md:gap-5 xl:gap-8 gap-2 mx-auto">
            <div className="w-[45px] h-[30px] md:w-[75px] md:h-[41px] xl:w-[85px] xl:h-[41px]">
                <p className="text-[8px] md:text-[14px] xl:text-[16px] font-medium text-center">
                    Energi Total <br />
                    <span className="font-normal text-[8px] md:text-[14px] xl:text-[16px]">219 Kkal</span>
                </p>
            </div>
            <div>
                <p className="text-[8px] md:text-[14px] xl:text-[16px] font-medium text-center">
                    Lemak Total <br />
                    <span className="font-normal text-[8px] md:text-[16px] xl:text-[16px]">10 g</span>
                </p>
            </div>
            <div>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-center">
                    Lemak Jenuh <br />
                    <span className="font-normal text-[8px] md:text-[16px] xl:text-[16px]">4 g</span>
                </p>
            </div>
            <div>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-center">
                    Protein <br />
                    <span className="font-normal text-[8px] md:text-[16px] xl:text-[16px]">7 g</span>
                </p>
            </div>
            <div>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-center">
                    Karbohidrat <br />
                    <span className="font-normal text-[8px] md:text-[16px] xl:text-[16px]">10 g</span>
                </p>
            </div>
            <div>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-center">
                    Gula <br />
                    <span className="font-normal text-[8px] md:text-[16px] xl:text-[16px]">23 g</span>
                </p>
            </div>
            <div>
                <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium text-center">
                    Garam <br />
                    <span className="font-normal text-[8px] md:text-[16px] xl:text-[16px]">2 mg</span>
                </p>
            </div>
        </div>
        </div>
        <p className="italic text-[7px] md:text-[10px] mt-1">*Nilai gizi yang ditampilkan merupakan perkiraan dan mungkin tidak sepenuhnya akurat.</p>
        <hr className="mt-5 mb-2" />
        <p className="text-[10px] md:text-[20px] xl:text-[20px] font-bold mb-2">Langkah - langkah</p>
        <iframe className="w-[330px] h-[176.07px] md:w-[650px] md:h-[440px] xl:w-[784px] xl:h-[440px] " src="https://www.youtube.com/embed/Zbwr2aOpHrM" title="Resep Sop buah segar"  allowFullScreen="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        {/* LANGKA LANGKAH PAKE NOMOR */}
        {/* 1 */}
        <div className="flex gap-3 mt-5">
            <div className="rounded-full bg-black">
                <p className="text-[6px] md:text-[16px] xl:text-[16px] text-white text-center w-[15px] h-[15px] md:w-[24px] md:h-[24px]">
                    1
                </p>
            </div>
            <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium">Cuci bersih semua buah-buahan.</p>
        </div>
        <img 
            src="/resep/langkah1.png" 
            alt=""
            className="ml-5 w-[80px] h-[80px] md:w-[166px] md:h-[166px]" />
            {/* 2 */}
        <div className="flex gap-3 mt-5">
            <div className="">
                <p className="text-[6px] md:text-[16px] xl:text-[16px] text-white text-center  w-[15px] h-[15px] md:w-[24px] md:h-[24px] rounded-full bg-black ">
                    2
                </p>
            </div>
            <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium">Potong-potong semua buah sesuai ukuran yang diinginkan. Usahakan ukuran potongan buah seragam agar tampilannya menarik dan mudah disantap.</p>
        </div>
        <img 
            src="/resep/2.svg" 
            alt=""
            className="ml-5 w-[80px] h-[80px] md:w-[166px] md:h-[166px]" />
            {/* 3 */}
        <div className="flex gap-3 mt-5">
            <div>
                <p className="text-[6px] md:text-[16px] xl:text-[16px] text-white text-center w-[15px] h-[15px] md:w-[24px] md:h-[24px] rounded-full bg-black">
                    3
                </p>
            </div>
            <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium">Campurkan air matang dengan sirup cocopandan dan susu kental manis dalam sebuah mangkuk besar. Aduk rata hingga tercampur sempurna.</p>
        </div>
        <img 
            src="/resep/3.svg" 
            alt=""
            className="ml-5 w-[80px] h-[80px] md:w-[166px] md:h-[166px]" />
            {/* 4 */}
        <div className="flex gap-3 mt-5">
            <div >
                <p className="text-[6px] md:text-[16px] xl:text-[16px] text-white text-center w-[15px] h-[15px] md:w-[24px] md:h-[24px] rounded-full bg-black">
                    4
                </p>
            </div>
            <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium">Masukkan semua buah yang sudah dipotong ke dalam mangkuk berisi campuran kuah sirup dan susu.</p>
        </div>
        <img 
            src="/resep/4.svg" 
            alt=""
            className="ml-5 w-[80px] h-[80px] md:w-[166px] md:h-[166px]" />
            {/* 5 */}
        <div className="flex gap-3 mt-5">
            <div className="rounded-full bg-black">
                <p className="text-[6px] md:text-[16px] xl:text-[16px] text-white text-center w-[15px] h-[15px] md:w-[24px] md:h-[24px]">
                    5
                </p>
            </div>
            <p className="text-[8px] md:text-[16px] xl:text-[16px] font-medium">Aduk perlahan agar buah tercampur rata dengan kuah.</p>
        </div>
        <img 
            src="/resep/langkah1.png" 
            alt=""
            className="ml-5 w-[80px] h-[80px] md:w-[166px] md:h-[166px]" />
        </div>
        {/* KANAN */}
        <div className="p-5 flex-none">
            <p className="font-semibold text-[8px] md:text-[16px] xl:text-[16px] mb-2">Resep Lainnya Untuk Kamu</p>
            <div className="grid grid-cols-2 xl:grid-cols-1 ">
                <Card
                    image="/profile-cards/image 1.png"
                    time="30m"
                    likes="10k"
                    tittle="Martabak Manis Cokelat Kacang Teflon"
                    creatorName="Martin Joseph"
                    creatorImage="/profile-cards/Ellipse 1.png"
                    />
                <Card
                    image="/profile-cards/image 1.png"
                    time="30m"
                    likes="10k"
                    tittle="Martabak Manis Cokelat Kacang Teflon"
                    creatorName="Martin Joseph"
                    creatorImage="/profile-cards/Ellipse 1.png"
                    />
                <Card
                    image="/profile-cards/image 1.png"
                    time="30m"
                    likes="10k"
                    tittle="Martabak Manis Cokelat Kacang Teflon"
                    creatorName="Martin Joseph"
                    creatorImage="/profile-cards/Ellipse 1.png"
                    />
                <Card
                    image="/profile-cards/image 1.png"
                    time="30m"
                    likes="10k"
                    tittle="Martabak Manis Cokelat Kacang Teflon"
                    creatorName="Martin Joseph"
                    creatorImage="/profile-cards/Ellipse 1.png"
                    />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Resep