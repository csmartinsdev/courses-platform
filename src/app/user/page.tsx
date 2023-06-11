export default function User() {
    return (
        <div className="min-h-screen bg-gray-700 bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-center">
                <div className="p-7 mt-10 bg-gray-700 border border-gray-500">
                    <strong className="text-2xl mb-6 block uppercase text-center">
                        Cadastrar novo usuario
                    </strong>
                    <form className="flex flex-col gap-2">
                        <input className="bg-gray-900 rounded px-5 h-14 active:border-purple-950"
                            placeholder="Nome"
                            type="text" />

                        <input className="bg-gray-900 rounded px-5 h-14 active:border-purple-950"
                            placeholder="CPF"
                            type="text" />

                        <input className="bg-gray-900 rounded px-5 h-14 active:border-purple-950"
                            placeholder="E-mail"
                            type="email" />

                        <input className="bg-gray-900 rounded px-5 h-14 active:border-purple-950"
                            placeholder="Password"
                            type="password" />

                        <input className="bg-gray-900 rounded px-5 h-14 active:border-purple-950"
                            placeholder="Confirm. Password"
                            type="password" />

                        <button className="mt-3 h-12 bg-purple-800 uppercase rounded font-bold text-sm hover:bg-purple-950">
                            Confirmar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}