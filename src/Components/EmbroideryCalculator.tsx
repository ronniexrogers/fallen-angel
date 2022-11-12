import React, { useEffect, useState, Dispatch, SetStateAction } from "react"

interface EmbroideryProps {
    total: number
    setTotal: Dispatch<SetStateAction<number>>
}

const EmbroideryCalculator = ({total, setTotal}: EmbroideryProps) => {

        const [quantity, setQuantity] = useState<number>(12)
        const [size, setSize] = useState<number>(0)
        // const [visibility, setVisibility] = useState<boolean>(false)
        
        const priceTierOne: number[] = [14, 16, 18]
        const priceTierTwo: number[] = [13.50, 15.50, 17.50]
        const priceTierThree: number[] = [13, 15, 17]
    
    
        useEffect(() => {
            costCalculationHats(quantity, size)
        }, [quantity, size])
    
    
        const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
            if (parseFloat(e.target.value) > 144) {
                setQuantity(144)
                alert('Garment quantity must be less than 144')
            } else if (parseFloat(e.target.value) < 0) {
                setQuantity(12)
                alert('Garment quantity must be greater than 12')
            }
            setQuantity((parseFloat(e.target.value)))
        }
    
        const costCalculationHats = (quantity: number, size: number) : number => {
            if (quantity < 24) {
                if (size === 1) setTotal(((quantity * priceTierOne[0]) + 30))
                if (size === 2) setTotal(((quantity * priceTierOne[1]) + 30))
                if (size === 3) setTotal(((quantity * priceTierOne[2]) + 30))
            }
            if (quantity > 23 && quantity < 72) {
                if (size === 1) setTotal(((quantity * priceTierTwo[0]) + 30))
                if (size === 2) setTotal(((quantity * priceTierTwo[1]) + 30))
                if (size === 3) setTotal(((quantity * priceTierTwo[2]) + 30))
            }
            if (quantity > 71 && quantity < 145) {
                if (size === 1) setTotal(((quantity * priceTierThree[0]) + 30))
                if (size === 2) setTotal(((quantity * priceTierThree[1]) + 30))
                if (size === 3) setTotal(((quantity * priceTierThree[2]) + 30))
            }
            return total
        }
    
        return ( 
            <div className="embroidery-calculator">
                <div className="embroidery-location-one">
                <form>
                    <h1>Embroidery Location #1</h1>
                    <h2>Design Size</h2>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={1} />
                    4" x 4"
                    </label>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={2} />
                    7" x 5"
                    </label>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={3} />
                    12" x 8"
                    </label>
                </form>
                </div>
                {/* <h3>Second Embroidery Location?</h3>
                <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => setVisibility(true) } 
                        name='second-embroidery-location' type="radio" />
                    Yes
                </label>
                <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => setVisibility(false) } 
                        name='second-embroidery-location' type="radio" />
                    No
                </label>
    
                <div className="print-location-two" style={{
                    display: visibility ? 'block' : 'none'
                }}>
                <form>
                    <h1>Embroidery Location #2</h1>
                    <h2>Design Size</h2>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={1} />
                    1
                    </label>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={2} />
                    2
                    </label>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={3} />
                    3
                    </label>
                    <label>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                        setSize(Number((e.target as HTMLInputElement).value)) } 
                        name='design-size' type="radio" value={4} />
                    4
                    </label>
                </form>
                </div> */}
                <h2>Number of Pieces</h2>
                    <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                        handleQuantityChange(e) } 
                        placeholder={quantity.toString()} type="number" id="quantity" name="quantity" min="12" max="144" />
            </div>
         )
}
 
export default EmbroideryCalculator;