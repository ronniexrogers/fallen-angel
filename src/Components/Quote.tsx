import * as React from 'react'
import { useEffect, useState } from 'react'
import ScreenPrintingCalculator from './ScreenPrintingCalculator'
import EmbroideryCalculator from './EmbroideryCalculator'

const Quote = () => {
    const [total, setTotal ] = useState<number>(0)

    return ( 
        <div className="quote">
            <ScreenPrintingCalculator total={total} setTotal={setTotal} />
            <h1>Total: { total }</h1>
        </div>
     )
}
 
export default Quote