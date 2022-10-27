import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Calculator = () => {

    const [quantity, setQuantity] = useState(12)
    const [colors, setColors] = useState(0)
    const [total, setTotal] = useState(0)
    
    const priceTierOne = [5, 6.25, 7.50, 8.75]
    const priceTierTwo = [4.5, 5.75, 7, 8.25]
    const priceTierThree = [4, 5.25, 6.50, 7.75]
    const priceTierFour = [3.5, 4.75, 6, 7.25]


    useEffect(() => {
        costCalculation(quantity, colors)
    }, [quantity, colors])


    const handleQuantityChange = (e) => {
        if (e.target.value > 200) {
            setQuantity(200)
            alert('Garment quantity must be less than 200')
        } else if (e.target.value < 0) {
            setQuantity(12)
            alert('Garment quantity must be greater than 12')
        }
        setQuantity(e.target.value)
    }

    // const handleColorChange = (e) => {
    //     let tempTotal = 0
    //     if(e.target.value == 1) tempTotal = (total + 10)
    //     if(e.target.value == 2) tempTotal = (total + 20)
    //     if(e.target.value == 3) tempTotal = (total + 30)
    //     if(e.target.value == 4) tempTotal = (total + 40)
    //     setTotal(tempTotal)
    // }

    const costCalculation = (quantity, colors) => {
        if (quantity < 24) {
            if (colors === 1) setTotal((colors * 25) + (quantity * priceTierOne[0]))
            if (colors === 2) setTotal((colors * 25) + (quantity * priceTierOne[1]))
            if (colors === 3) setTotal((colors * 25) + (quantity * priceTierOne[2]))
            if (colors === 4) setTotal((colors * 25) + (quantity * priceTierOne[3]))
        }
        if (quantity > 23 && quantity < 72) {
            if (colors === 1) setTotal((colors * 25) + (quantity * priceTierTwo[0]))
            if (colors === 2) setTotal((colors * 25) + (quantity * priceTierTwo[1]))
            if (colors === 3) setTotal((colors * 25) + (quantity * priceTierTwo[2]))
            if (colors === 4) setTotal((colors * 25) + (quantity * priceTierTwo[3]))
        }
        if (quantity > 71 && quantity < 145) {
            if (colors === 1) setTotal((colors * 25) + (quantity * priceTierThree[0]))
            if (colors === 2) setTotal((colors * 25) + (quantity * priceTierThree[1]))
            if (colors === 3) setTotal((colors * 25) + (quantity * priceTierThree[2]))
            if (colors === 4) setTotal((colors * 25) + (quantity * priceTierThree[3]))
        }
        if (quantity > 144) {
            if (colors === 1) setTotal((colors * 25) + (quantity * priceTierFour[0]))
            if (colors === 2) setTotal((colors * 25) + (quantity * priceTierFour[1]))
            if (colors === 3) setTotal((colors * 25) + (quantity * priceTierFour[2]))
            if (colors === 4) setTotal((colors * 25) + (quantity * priceTierFour[3]))
        }
        return total
    }

    return ( 
        <div className="calculator">
            <form>
                <h2>Design Colors</h2>
                <label>
                <input onClick={(e) => setColors(Number(e.target.value))} name='design-colors' type="radio" value={1} />
                1
                </label>
                <label>
                <input onClick={(e) => setColors(Number(e.target.value))} name='design-colors' type="radio" value={2} />
                2
                </label>
                <label>
                <input onClick={(e) => setColors(Number(e.target.value))} name='design-colors' type="radio" value={3} />
                3
                </label>
                <label>
                <input onClick={ (e) => setColors(Number(e.target.value)) } name='design-colors' type="radio" value={4} />
                4
                </label>
                <h2>Number of Pieces</h2>
                <input onChange={ (e) => handleQuantityChange(e) } placeholder="12" type="number" id="quantity" name="quantity" min="12" max="200" />
                {/* <h2>Color Changes?</h2>
                <input onChange={ (e) => handleColorChange(e) } placeholder="0" type="number" id="quantity" name="quantity" min="0" max="4" /> */}
            </form>
            <h1>Total: {total}</h1>
        </div>
     );
}
 
export default Calculator;