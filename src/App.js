import React from "react"
import Card from "./components/Card"
import Header from "./components/Header"

import Data from "./data"

export default function App(){
    const newData = Data.map(elem =>{
        
        return(

            <Card 
            elem ={elem}
            />
        )}
    )

    return(
        <div className="background">
            <div className="row">
                        
                <Header />
                {newData}                    
            </div>
        </div>
    )}