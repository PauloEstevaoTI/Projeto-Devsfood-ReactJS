import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container } from './styled';
import Header from '../../components/Header';
import api from '../../api';

export default () => {
    const history = useHistory();
    const [headerSearch, setHeaderSearch] = useState('');

    

    useEffect(()=> {

        const getCategories = async () => {
            const categories = api.getCategories();
            console.log(categories)
        };

        getCategories();
        
    },[])

    return (
        <Container>
            <Header search={headerSearch} onSearch={setHeaderSearch}/>
        </Container>
    );
}