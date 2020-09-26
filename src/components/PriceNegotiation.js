import React, { useState } from 'react'
import DropdownMenu from './DropdownMenu'
import './PriceNegotiation.css'

export default function PriceNegotiation(props) {
    const [states] = useState({
        0: 'не требуется',
        1: 'требуется',
        2: 'согласовано',
        3: 'не согласовано'
    })

    const [state, setState] = useState(props.state)

    if (state === 0) {
        return (
            <div className="container">
                    Согласование цены: Не требуется
            </div>
        );
    }

    if (state === 1) {
        return (
            <div className="container">
                <div>
                    Согласование цены: Требуется
                </div>
                <div>
                    <button className="button-decision apply-price-button" onClick={() => setState(2)}>
                        Согласовать цену
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.50013 9.47487L2.02513 5.99987L0.841797 7.17487L5.50013 11.8332L15.5001 1.8332L14.3251 0.658203L5.50013 9.47487Z" fill="white"/>
                        </svg>
                    </button>
                    <button className="button-decision decline-price-button" onClick={() => setState(3)}>
                        Отказать
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3337 1.34102L11.1587 0.166016L6.50033 4.82435L1.84199 0.166016L0.666992 1.34102L5.32533 5.99935L0.666992 10.6577L1.84199 11.8327L6.50033 7.17435L11.1587 11.8327L12.3337 10.6577L7.67533 5.99935L12.3337 1.34102Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    if (state === 2 || state === 3) {
        return (
            <div className="container">
                <div>
                    Согласование цены: {states[state]} <br />
                </div>
                <div>
                    <DropdownMenu text="Изменить статус согласования" actions={[{ state: 0, action: 'не требуется'}, { state: 1, action: 'требуется'}]} hook={setState} />
                </div>
            </div>
        );
    }
}