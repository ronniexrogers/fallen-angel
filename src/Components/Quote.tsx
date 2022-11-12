import * as React from 'react'
import { useEffect, useState } from 'react'
import ScreenPrintingCalculator from './ScreenPrintingCalculator'
import EmbroideryCalculator from './EmbroideryCalculator'

const Quote = () => {

    const [total, setTotal ] = useState<number>(0)
    const [visibility, setVisibility] = useState<boolean>(false)

    return ( 
        <div className="quote">
            <h2>What type of work would you like?</h2>
            <label>
            <input onClick={ () => {
                setVisibility(false)
                setTotal(0)
            }} 
                name='type-of-work' type="radio" defaultChecked />
                Screen Printing
            </label>
            <label>
                <input onClick={ () => {
                setVisibility(true)
                setTotal(0)
            }} 
                name='type-of-work' type="radio" />
                Embroidery
            </label>
            <div className="screen-print" style={{
                display: visibility ? 'none' : 'block'
            }}>
                <ScreenPrintingCalculator total={total} setTotal={setTotal} />
            </div>
            <div className="embroidery" style={{
                display: visibility ? 'block' : 'none'
            }}>
                <EmbroideryCalculator total={total} setTotal={setTotal} />
            </div>
            <h1>Total: { total }</h1>
        </div>
     )
}
 
export default Quote