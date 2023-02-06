import React, {useState} from "react";
import { Container, Logo, SearchInput } from "./styled";

const Header = ({search, onSearch}) => {

    const [inputActive, setInputActive] = useState(false);
    
    
    const handleInputFocus = () => {
        setInputActive(true);
    }
    
    const handleInputBlur = () => {
        if(search === ''){
            setInputActive(false);
        }
        
    }

    const handleChange = (e) => {
        console.log(e);
    }

    return(
        <Container>
            <Logo src="assets/logo.png" />
            <SearchInput 
                type="text" 
                placeholder="Digite um produto"
                value={search}
                onChange={handleChange}
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </Container>
    )
}

export default Header;