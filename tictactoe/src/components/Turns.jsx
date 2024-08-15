import Square from "./Square.jsx"
import { TURNS } from "../constants.js"

export const Turns = ({ turn }) => {
    return (
        <section className='turn'>
            <Square isSelected={turn === TURNS.X} className>{TURNS.X}</Square>
            <Square isSelected={turn === TURNS.O} className>{TURNS.O}</Square>
        </section>
    )
}