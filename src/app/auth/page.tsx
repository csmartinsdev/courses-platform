import { Logo } from "../components/Logo";

export default function Auth() {
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className=".w-full.max-w-[1100px].flex.items-center.justify-content-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <Logo />
                </div>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500">
                <strong className="text-2xl mb-6 block uppercase text-center">Login</strong>
                <form className="flex flex-col gap-2">
                    <input className="bg-gray-900 rounded px-5 h-14" 
                        placeholder="E-mail"
                        type="text" />
                    
                    <input className="bg-gray-900 rounded px-5 h-14"
                        placeholder="Password"
                        type="password" />

                    <button className="mt-3 h-12 bg-purple-800 uppercase rounded font-bold text-sm hover:bg-purple-950"
                     >Entrar</button>
                </form>
            </div>
        </div>
    )
}