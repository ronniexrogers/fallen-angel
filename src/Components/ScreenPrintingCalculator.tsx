import React, { useEffect, useState, Dispatch, SetStateAction } from "react"
import CSS from 'csstype'

interface ScreenPrintingProps {
    total: number
    setTotal: Dispatch<SetStateAction<number>>
}

const ScreenPrintingCalculator = ({ total, setTotal }: ScreenPrintingProps) => {


    const [quantity, setQuantity] = useState<number>(12)
    const [colorsOne, setcolorsOneOne] = useState<number>(0)
    const [visibility, setVisibility] = useState<boolean>(false)
    const [secondPrint, setSecondPrint] = useState<boolean>(false)
    const [garment, setGarment] = useState<object>({})
    const [garmentPrice, setGarmentPrice] = useState<number>(0)

    
    const priceTierOne: number[] = [5, 6.25, 7.50, 8.75]
    const priceTierTwo: number[] = [4.5, 5.75, 7, 8.25]
    const priceTierThree: number[] = [4, 5.25, 6.50, 7.75]
    const priceTierFour: number[] = [3.5, 4.75, 6, 7.25]

    interface Garments {
        type: string
        price: number
    }

    const garments: Garments[] = [
        {type: 'Basic 100% Cotton Tee',
        price: 4}, 
        {type: 'Heavyweight 100% Cotton Tee',
         price: 5}, 
        {type: 'Premium Heavyweight 100% Cotton Tee',
         price: 7}, 
        {type: '100% Cotton Hoodie',
         price: 15}, 
        {type: 'Heavyweight 100% Cotton Hoodie',
         price: 18}, 
        {type: 'Super Heavyweight Premium Hoodie',
         price: 32}, 
        {type: '100% Cotton Crewneck Sweater',
         price: 14}, 
        {type: 'Super Heavyweight Premium Crewneck',
         price: 26}
    ]


    useEffect(() => {
        costCalculation(quantity, colorsOne)
        console.log(garmentPrice)
    }, [quantity, colorsOne, garmentPrice])


    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        if (parseFloat(e.target.value) > 200) {
            setQuantity(200)
            alert('Garment quantity must be less than 200')
        } else if (parseFloat(e.target.value) < 0) {
            setQuantity(12)
            alert('Garment quantity must be greater than 12')
        }
        setQuantity((parseFloat(e.target.value)))
    }

    const costCalculation = (quantity: number, colorsOne: number) : number => {
        if (quantity < 24) {
            if (colorsOne === 1) setTotal(((colorsOne * 25) + (quantity * priceTierOne[0])))
            if (colorsOne === 2) setTotal(((colorsOne * 25) + (quantity * priceTierOne[1])))
            if (colorsOne === 3) setTotal(((colorsOne * 25) + (quantity * priceTierOne[2])))
            if (colorsOne === 4) setTotal(((colorsOne * 25) + (quantity * priceTierOne[3])))
        }
        if (quantity > 23 && quantity < 72) {
            if (colorsOne === 1) setTotal(((colorsOne * 25) + (quantity * priceTierTwo[0])))
            if (colorsOne === 2) setTotal(((colorsOne * 25) + (quantity * priceTierTwo[1])))
            if (colorsOne === 3) setTotal(((colorsOne * 25) + (quantity * priceTierTwo[2])))
            if (colorsOne === 4) setTotal(((colorsOne * 25) + (quantity * priceTierTwo[3])))
        }
        if (quantity > 71 && quantity < 145) {
            if (colorsOne === 1) setTotal(((colorsOne * 25) + (quantity * priceTierThree[0])))
            if (colorsOne === 2) setTotal(((colorsOne * 25) + (quantity * priceTierThree[1])))
            if (colorsOne === 3) setTotal(((colorsOne * 25) + (quantity * priceTierThree[2])))
            if (colorsOne === 4) setTotal(((colorsOne * 25) + (quantity * priceTierThree[3])))
        }
        if (quantity > 144) {
            if (colorsOne === 1) setTotal(((colorsOne * 25) + (quantity * priceTierFour[0])))
            if (colorsOne === 2) setTotal(((colorsOne * 25) + (quantity * priceTierFour[1])))
            if (colorsOne === 3) setTotal(((colorsOne * 25) + (quantity * priceTierFour[2])))
            if (colorsOne === 4) setTotal(((colorsOne * 25) + (quantity * priceTierFour[3])))
        }
        return total
    }

    return ( 
        <div className="screen-print-calculator">
            <div className="print-location-one">
            <form>
                <h1>Garment Type</h1>
                <select onChange={(e) => setGarmentPrice(Number((e.target as HTMLSelectElement).value))} name="garment-type" id="garment-type">
                    { garments.map((item, i) => {
                        return (
                        <option value={item.price} key={i}> { `${item.type} || $${item.price}` } </option>
                    )}) }
                </select>
                <h1>Print Location #1</h1>
                <h2>Design colorsOne</h2>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={1} />
                1
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={2} />
                2
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={3} />
                3
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={4} />
                4
                </label>
            </form>
            </div>
            <h3>Second Print Location?</h3>
            <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => {
                    setVisibility(true) 
                    setSecondPrint(true)
                }} 
                    name='second-print' type="radio" />
                Yes
            </label>
            <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setVisibility(false) } 
                    name='second-print' type="radio" />
                No
            </label>

            <div className="print-location-two" style={{
                display: visibility ? 'block' : 'none'
            }}>
            <form>
                <h1>Print Location #2</h1>
                <h2>Design colorsOne</h2>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={1} />
                1
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={2} />
                2
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={3} />
                3
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setcolorsOneOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={4} />
                4
                </label>
            </form>
            </div>
            <h2>Number of Pieces</h2>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    handleQuantityChange(e) } 
                    placeholder="12" type="number" id="quantity" name="quantity" min="12" max="200" />
        </div>
     )
}
 
export default ScreenPrintingCalculator;