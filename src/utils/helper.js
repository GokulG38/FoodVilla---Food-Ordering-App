export function FilterText(text, restaurants){
    const lowerText=text.toLowerCase()
    return restaurants.filter((restaurant)=>
        restaurant.info.name.toLowerCase().includes(lowerText)
        
    )  
    }