import React from "react";
import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import Hero from '../home/Hero';


// test Suite 

describe('Hero Componet',()=>{
    test('renders here image',()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    })
})



