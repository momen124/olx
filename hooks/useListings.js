// src/hooks/useListings.js
import { useContext } from 'react';
import { ListingsContext } from '../context/ListingsContext';

const useListings = () => {
    return useContext(ListingsContext); // Accesses the listings context
};

export default useListings;

// This hook manages listing data and functionality.
