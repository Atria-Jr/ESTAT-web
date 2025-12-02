import { useState } from 'react'
import Logo from './../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { X } from "lucide-react";

function Navbar() {

    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    function getMenu() {
        return (<>
            <h1 className={(location.pathname == '/' ? 'text-blue-500 underline underline-offset-4' : '') + " hover:cursor-pointer hover:text-blue-500 transition-all"}
                onClick={() => { navigate("/"); setOpen(false) }}
            >Home
            </h1>
            <h1 className={(location.pathname == '/quem-somos' ? 'text-blue-500 underline' : '') + " hover:cursor-pointer hover:text-blue-500 transition-all"}
                onClick={() => { navigate("/quem-somos"); setOpen(false) }}>
                Quem Somos
            </h1>
            <h1 className={(location.pathname == '/blog' ? 'text-blue-500 underline' : '') + " hover:cursor-pointer hover:text-blue-500 transition-all"}
                onClick={() => { navigate("/blog"); setOpen(false) }}>
                Blog
            </h1>
            <h1 className={(location.pathname == '/servicos' ? 'text-blue-500 underline' : '') + " hover:cursor-pointer hover:text-blue-500 transition-all"}
                onClick={() => { navigate("/servicos"); setOpen(false) }}>
                Serviços
            </h1>
            <h1 className={(location.pathname == '/contatos' ? 'text-blue-500 underline' : '') + " hover:cursor-pointer hover:text-blue-500 transition-all"}
                onClick={() => { navigate("/contatos"); setOpen(false) }}>
                Contatos
            </h1>
        </>)
    }

    return (
        <div className='justify-between flex h-20 lg:h-24 shadow-xl'>
            <div className='mt-auto mb-auto'>
                <img src={Logo} className='w-28 lg:w-32 m-4'></img>
            </div>

            {/* MENU DESKTOP */}
            <div className='lg:flex hidden justify-between w-200 font-extrabold mt-auto mb-auto text-2xl text-[#2F3D44]'>
                {getMenu()}
            </div>

            {/* MENU MOBILE */}
            <button
                className="lg:hidden flex text-3xl text-[#2F3D44] mt-auto mb-auto mr-[5%]"
                onClick={() => setOpen(!open)}
            >
                {!open? "☰" : <X></X>}
            </button>

            {open && (
                <div className="absolute top-18 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 text-xl font-bold lg:hidden z-50
                ">
                    {getMenu()}
                </div>
            )}

            <div className='lg:flex hidden w-32'></div>
        </div>
    )
}

export default Navbar
