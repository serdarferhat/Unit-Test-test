import Cesit from "../Cesit"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
/*
!get  //domda var ise yerelden 
!guery  //domda yok ise
!find   //async/element dom yok ise,veri çekiliyorsa
*/


test("Veriler ekrana basıldı mı?",async()=>{
    render(<Cesit/>)
    const image =await screen.findAllByRole('img',{name:'cesit'})
    expect(image).toHaveLength(4);
})

test("Sepete çeşit ekleme işlemi", async()=>{
    const user = userEvent.setup();
    render(<Cesit/>)
//butonlar
    const [mintBtn, vanillaBtn, chocoBtn, caramelBtn] =
    await screen.findAllByRole("button",{name:/ekle/i});
//vanilla ekle
    await user.dblClick(vanillaBtn);

    await user.click(mintBtn)
//shop seçelim
    const shop = screen.getByText(/ücret toplam:/i);
//beklenti-ummak
expect(shop).toHaveTextContent("6")
});

test("Sepeti sıfırlama",async()=>{
    render(<Cesit/>);
    const user=userEvent.setup();

    //sıfırlama ve ekleme ortak yukardaki
    const addBtn= await screen.findAllByRole('button',{name:/ekle/i});
    const resetBtn = await screen.findAllByRole('button',{name:/sıfırla/i});
    const shop = screen.getByText(/ücret toplam:/i);
//ekle
    await user.click(addBtn[2]);
    await user.dblClick(addBtn[3]);

    expect(shop).toHaveTextContent('6');
//sıfırlama
    await user.click(resetBtn[3]);

    expect(shop).toHaveTextContent('2')

    await user.click(resetBtn[2]);

    expect(shop).toHaveTextContent('0')

    

})

