import { useEffect, useState } from "react"
import BorderStruktur from "../components/BorderStruktur"
import AOS from "aos"
import "aos/dist/aos.css"

const StrukturKelas = () => {
	const [aosLoaded, setAosLoaded] = useState(false)

	useEffect(() => {
		if (!aosLoaded) {
			AOS.init()
			AOS.refresh()
			setAosLoaded(true)
		}
	}, [aosLoaded])

	return (
		<div className="z-1 relative h-auto lg:overflow-hidden">
			<div className="flex flex-col justify-center items-center mt-14 md:mt-10">
				{/* Owner dan Wakil */}
				<div className="flex relative top-[-3rem] mt-10" data-aos="fade-up" data-aos-duration="1200">
					<div className="relative left-[0.2rem]">
						<BorderStruktur Jabatan="Owner" Nama="Iki" Width="120px" />
					</div>
					<img src="LineHorizontalPendek.svg" className="relative top-3" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<img src="LineHorizontalPendek.svg" className="relative top-3 hidden lg:flex" />
					<div className="relative right-[0.2rem]">
						<BorderStruktur Jabatan="Co Owner" Nama="Arshal" Width="120px" />
					</div>
				</div>

				<div data-aos="fade-up" data-aos-duration="120" className="">
					<img src="LineVertikal2.svg" alt="" className="relative top-[-3.8rem]" />
				</div>

				{/* admin */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-5.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				 </div>

				<div
					className="flex gap-[10.6rem] relative top-[-6.45rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-7.2rem] lg:gap-[27.4rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className="flex gap-[5rem] relative top-[-7.3rem] lg:gap-[22rem]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Pion" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Azel" Width="120px" />
					</div>
				</div>

				<div className="relative top-[-15rem]" data-aos="fade-up" data-aos-duration="900">
					<img src="LineVertikal3.svg" alt="" />
				</div>

				{/* admin */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.5rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.44rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" className="hidden lg:flex" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.3rem] lg:gap-[23.1rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" className="hidden lg:flex" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.5rem] lg:gap-[17.5rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Erik" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Kulub Hytam" Width="120px" />
					</div>

				{/*	<div className="flex-col hidden lg:flex">
						<BorderStruktur Jabatan="Admin" Nama="m" Width="120px" />
					</div> */}
				</div>

				{/* Admin */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					{/* 	<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex lg:w-[50px]"
						data-aos="fade-up"
						data-aos-duration="600"
					/> */}

					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[23.1rem] relative top-[-17.85rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[23.1rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[17.5rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Gibe" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Atha" Width="120px" />
					</div>
				</div>

				{/* admin */}
				<div className="lg:flex">
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem]"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
					<img
						src="LineHorizontal.svg"
						alt=""
						className="relative top-[-16.9rem] hidden lg:flex"
						data-aos="fade-up"
						data-aos-duration="600"
					/>
				</div>

				<div
					className="flex gap-[10.6rem] lg:gap-[35.6rem] relative top-[-17.85rem]"
					data-aos="fade-up"
					data-aos-duration="800">
					<img src="LineKananKiri.svg" alt="" />
					<img src="LineKananKiri.svg" alt="" />
				</div>
				<div
					className="flex gap-[10.6rem] relative top-[-18.6rem] lg:gap-[35.6rem]"
					data-aos="fade-up"
					data-aos-duration="1000">
					<img src="Circle.svg" alt="" />
					<img src="Circle.svg" alt="" />
				</div>

				<div
					className=" flex gap-[5rem] relative top-[-18.9rem] lg:gap-[29.7rem]"
					data-aos="fade-up"
					data-aos-duration="1100">
					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Onyx" Width="120px" />
					</div>

					<div className="flex-col">
						<BorderStruktur Jabatan="Admin" Nama="Yuki" Width="120px" />
					</div>
				</div>

			{/*	<div className=" absolute bottom-[15%] " data-aos="fade-up" data-aos-duration="1000">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" className="" />
						<img src="LineVertikal3.svg" alt="" className="lg:h-[120px] lg:-z-50" />
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="flex-col">
							<BorderStruktur Jabatan="Admin" Nama="Rahmat" Width="120px" />
						</div>
					</div>
				</div> */}

				{/* Kesehatan */}
				 	<div
					className=" absolute bottom-[14.5%]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<div className="flex justify-center items-center flex-col">
						<img src="LineVertikal3.svg" alt="" className="lg:hidden" />
						<img src="LineVertikal3.svg" alt="" className="" />
						<img src="LineVertikal3.svg" alt="" className="lg:h-[120px] lg:-z-50" />
						<img src="Circle.svg" alt="" className="relative top-[-0.7rem]" />
						<div className="relative bottom-3">
							<BorderStruktur Jabatan="Admin" Nama="Rahmat" Width="120px" />
							<div className="py-[3%]"></div>
							<BorderStruktur Jabatan="" Nama="Amat" Width="120px" />
						</div>
					</div>
				</div>  
			</div>
		</div>
	)
}

export default StrukturKelas
