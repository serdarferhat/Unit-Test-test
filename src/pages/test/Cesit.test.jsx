import Cesit from "../Cesit"
import { render, screen } from "@testing-library/react";
/*
!get  //domda var ise yerelden 
!guery  //domda yok ise
!find   //async/element dom yok ise,veri çekiliyorsa
*/


test("Veriler ekrana basıldı mı?",async()=>{
    render(<Cesit/>)
    const images =await screen.findAllByRole("img",{name:"cesit"})
    expect(images).toHaveLength(4);
})