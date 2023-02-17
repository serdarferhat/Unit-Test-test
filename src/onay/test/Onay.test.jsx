import {fireEvent,getByRole,render,screen} from "@testing-library/react"
import Onay from "../Onay"
import userEvent from "@testing-library/user-event"

test("checkbox tıklama ve buton değişimi", async()=>{ //asekron veri çekimde .then .catch gibii
    //userEvent kurulum
    const user = userEvent.setup();
     
    render(<Onay/>); // hangi compenent üzerinde çalışma

    //gereksinimler
    const amac = screen.getByRole("checkbox",{name:"Kosulları anladım ve kabul ediyorum"})
    const button = screen.getByRole("button",{name:/siparişi onayla/i})
     //tikli mi?
     expect(amac).not.toBeChecked()

    //butonun tiklenince çalışması
    expect(button).toBeDisabled()

    //sözleşme kabul etti mi?
    await user.click(amac)

    // buton aktif
    expect(button).toBeEnabled()
    // buton aktif değil
    await user.click(amac);
    expect(button).toBeDisabled()
})