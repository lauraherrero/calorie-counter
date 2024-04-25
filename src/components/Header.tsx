import { HeaderProps } from "../types"

export const Header = ({ canRestartApp, dispatch }: HeaderProps) => {

  return (
    <>
      <header className="bg-lime-700 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">Contador de calorías</h1>
          <button
            className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg text-sm disabled:opacity-10"
            disabled={!canRestartApp()}
            onClick={() => dispatch({ type: 'RESET_APP' })}
          >
            Reiniciar App
          </button>
        </div>
      </header>
    </>
  )
}
