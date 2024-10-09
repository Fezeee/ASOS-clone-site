import { createContext, useEffect, useRef, useState } from "react";

export const AsosContext = createContext();


const AsosContextProvider = (props) => {

    const [allProducts, setAllProducts] = useState([]);

    const fetchProducts = async() => {
        try{
            const item = await fetch('https://fakestoreapi.com/products');
            const data = await item.json();
            setAllProducts(data);
            console.log(data);
        }
        catch(error){
            console.error('Failed to fetch products', error);
        }
    };


    useEffect(()=>{
        fetchProducts();
    },[])


    const currency = '£';
    const profileRef = useRef();
    const profileIconRef = useRef();
    const [search, setSearch] = useState('');
    const [menActive, setMenActive] = useState(false);
    const [womenActive, setWomenActive] = useState(false);
    const [profileHover, setProfileHover] = useState(false);

    const value = {currency, profileRef, profileIconRef, 
                    menActive, womenActive, setMenActive, 
                    setWomenActive, profileHover, setProfileHover,
                     allProducts, search, setSearch};
    return(
        <AsosContext.Provider value={value}>
            {props.children}
        </AsosContext.Provider>
    )
}

export default AsosContextProvider