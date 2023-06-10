"use client";
import { useState } from "react";
import { Logo } from "../components/Logo";


export default function Auth() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    return (
        <div className="min-h-screen bg-gray-700 bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto" >
                <div className="max-w-[640px]">
                    <Logo />
                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Alcançando
                        <strong className="text-purple-500"> pessoas e nações </strong>com a excelência do treinamento pela
                        <strong className="text-purple-500"> palavra de Deus</strong>
                    </h1>                    
                </div>

                <div className="p-7 mt-10 bg-gray-700 border border-gray-500" >
                    <strong className="text-2xl mb-6 block uppercase text-center">Entrar</strong>
                    <form className="flex flex-col gap-2">
                        <input className="bg-gray-900 rounded px-5 h-14 active:border-purple-950" 
                            placeholder="E-mail"
                            type="text" />
                        
                        <input className="bg-gray-900 rounded px-5 h-14"
                            placeholder="Password"
                            type="password" />

                        <button className="mt-3 h-12 bg-purple-800 uppercase rounded font-bold text-sm hover:bg-purple-950">
                            Entrar
                        </button>
                        
                        <a className="mt-2 text-center text-purple-600 hover:text-purple-950" href="#">
                            <span>Esqueceu sua senha?</span>
                        </a>
                            
                    </form>
                </div>
            </div>
            {/* <img src="/code-mockup.png" alt="" /> */}
        </div>
    )
}