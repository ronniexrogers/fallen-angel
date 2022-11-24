import React, { useEffect, useState, Dispatch, SetStateAction } from "react"

interface ScreenPrintingProps {
    total: number
    setTotal: Dispatch<SetStateAction<number>>
}

interface Garments {
    type: string
    price: number
}

const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

const ScreenPrintingCalculator = ({ total, setTotal }: ScreenPrintingProps) => {


    const [quantity, setQuantity] = useState<number>(12)
    const [colorsOne, setColorsOne] = useState<number>(0)
    const [visibility, setVisibility] = useState<boolean>(false)
    const [garment, setGarment] = useState<any>({type: 'Basic 100% Cotton Tee', price: 4})
    const [totalOne, setTotalOne] = useState<number>(0)
    const [totalTwo, setTotalTwo] = useState<number>(0)
    const [colorsTwo, setColorsTwo] = useState<number>(0)

    
    const priceTierOne: number[] = [5, 6.25, 7.50, 8.75]
    const priceTierTwo: number[] = [4.5, 5.75, 7, 8.25]
    const priceTierThree: number[] = [4, 5.25, 6.50, 7.75]
    const priceTierFour: number[] = [3.5, 4.75, 6, 7.25]

    const garments: Garments[] = [
         {type: '-Shirts',
         price: 0},
        {type: 'Basic 100% Cotton Tee',
        price: 4}, 
        {type: 'Heavyweight 100% Cotton Tee',
         price: 5}, 
        {type: 'Premium Heavyweight 100% Cotton Tee',
         price: 7}, 
         {type: '-Sweaters',
         price: 0},
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
        costCalculationOne(quantity, colorsOne, garment)
        costCalculationTwo(colorsTwo, quantity)
        console.log(colorsTwo)
    }, [quantity, colorsOne, garment, colorsTwo])

    useEffect(() => {
        if(typeof garment === 'string') {
            setGarment(JSON.parse(garment))
    }
    }, [garment])


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

    const costCalculationOne = (quantity: number, colorsOne: number, garment: Garments) : number => {
        if (quantity < 24) {
            if (colorsOne === 1) setTotalOne(((colorsOne * 25) + (quantity * priceTierOne[0]) + (quantity * garment.price)))
            if (colorsOne === 2) setTotalOne(((colorsOne * 25) + (quantity * priceTierOne[1]) + (quantity * garment.price)))
            if (colorsOne === 3) setTotalOne(((colorsOne * 25) + (quantity * priceTierOne[2]) + (quantity * garment.price)))
            if (colorsOne === 4) setTotalOne(((colorsOne * 25) + (quantity * priceTierOne[3]) + (quantity * garment.price)))
        }
        if (quantity > 23 && quantity < 72) {
            if (colorsOne === 1) setTotalOne(((colorsOne * 25) + (quantity * priceTierTwo[0]) + (quantity * garment.price)))
            if (colorsOne === 2) setTotalOne(((colorsOne * 25) + (quantity * priceTierTwo[1]) + (quantity * garment.price)))
            if (colorsOne === 3) setTotalOne(((colorsOne * 25) + (quantity * priceTierTwo[2]) + (quantity * garment.price)))
            if (colorsOne === 4) setTotalOne(((colorsOne * 25) + (quantity * priceTierTwo[3]) + (quantity * garment.price)))
        }
        if (quantity > 71 && quantity < 145) {
            if (colorsOne === 1) setTotalOne(((colorsOne * 25) + (quantity * priceTierThree[0]) + (quantity * garment.price)))
            if (colorsOne === 2) setTotalOne(((colorsOne * 25) + (quantity * priceTierThree[1]) + (quantity * garment.price)))
            if (colorsOne === 3) setTotalOne(((colorsOne * 25) + (quantity * priceTierThree[2]) + (quantity * garment.price)))
            if (colorsOne === 4) setTotalOne(((colorsOne * 25) + (quantity * priceTierThree[3]) + (quantity * garment.price)))
        }
        if (quantity > 144) {
            if (colorsOne === 1) setTotalOne(((colorsOne * 25) + (quantity * priceTierFour[0]) + (quantity * garment.price)))
            if (colorsOne === 2) setTotalOne(((colorsOne * 25) + (quantity * priceTierFour[1]) + (quantity * garment.price)))
            if (colorsOne === 3) setTotalOne(((colorsOne * 25) + (quantity * priceTierFour[2]) + (quantity * garment.price)))
            if (colorsOne === 4) setTotalOne(((colorsOne * 25) + (quantity * priceTierFour[3]) + (quantity * garment.price)))
        }
        return totalOne
    }

    const costCalculationTwo = (colorsTwo: number, quantity: number) : number => {
        if (quantity < 24) {
            if (colorsTwo === 1) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierOne[0])))
            if (colorsTwo === 2) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierOne[1])))
            if (colorsTwo === 3) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierOne[2])))
            if (colorsTwo === 4) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierOne[3])))
        }
        if (quantity > 23 && quantity < 72) {
            if (colorsTwo === 1) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierTwo[0])))
            if (colorsTwo === 2) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierTwo[1])))
            if (colorsTwo === 3) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierTwo[2])))
            if (colorsTwo === 4) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierTwo[3])))
        }
        if (quantity > 71 && quantity < 145) {
            if (colorsTwo === 1) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierThree[0])))
            if (colorsTwo === 2) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierThree[1])))
            if (colorsTwo === 3) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierThree[2])))
            if (colorsTwo === 4) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierThree[3])))
        }
        if (quantity > 144) {
            if (colorsTwo === 1) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierFour[0])))
            if (colorsTwo === 2) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierFour[1])))
            if (colorsTwo === 3) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierFour[2])))
            if (colorsTwo === 4) setTotalTwo(((colorsTwo * 25) + (quantity * priceTierFour[3])))
        }
        return totalTwo
    }

    return ( 
        <div className="screen-print-calculator">
            <div className="print-location-one">
            <form>
                <h1>Garment Type</h1>
                <select onChange={(e) => {
                    setGarment(String((e.target as HTMLSelectElement).value))}} 
                    name="garment-type" 
                    id="garment-type"
                    >
                    { garments.map((item, i) => {
                        if(item.price === 0) return (
                        <option disabled={true} value={JSON.stringify(item)} key={i}> { `${item.type}` } </option>
                        )
                        else return (
                        <option value={JSON.stringify(item)} key={i}> { `${item.type} || $${item.price}` } </option>
                    )}) }
                </select>
                <h1>Print Location #1</h1>
                <h2>Design Colors</h2>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={1} />
                1
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={2} />
                2
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={3} />
                3
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsOne(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={4} />
                4
                </label>
            </form>
            </div>
            <h3>Second Print Location?</h3>
            <label>
                <input onChange={ () : void => {
                    setVisibility(true) 
                }} 
                    name='second-print' type="radio" />
                Yes
            </label>
            <label>
                <input onChange={ () : void => {
                    setVisibility(false) 
                    setTotalTwo(0)
                }} 
                    name='second-print' type="radio" />
                No
            </label>

            <div className="print-location-two" style={{
                display: visibility ? 'block' : 'none'
            }}>
            <form>
                <h1>Print Location #2</h1>
                <h2>Design Colors</h2>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsTwo(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={1} />
                1
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsTwo(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={2} />
                2
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsTwo(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={3} />
                3
                </label>
                <label>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    setColorsTwo(Number((e.target as HTMLInputElement).value)) } 
                    name='design-colorsOne' type="radio" value={4} />
                4
                </label>
            </form>
            </div>
            <h2>Number of Pieces</h2>
                <input onChange={ (e: React.ChangeEvent<HTMLInputElement>) : void => 
                    handleQuantityChange(e) } 
                    placeholder="12" type="number" id="quantity" name="quantity" min="12" max="200" />

                    <h3>Total: { currencyFormatter.format(totalOne + totalTwo) } | { currencyFormatter.format((totalOne + totalTwo) / quantity) } per piece</h3>
        </div>
     )
}
 
export default ScreenPrintingCalculator;