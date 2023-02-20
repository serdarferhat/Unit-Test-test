import { screen, render } from "@testing-library/react";
import { UserEvent } from "@testing-library/user-event";
import Sos from "../Sos";

test("sos tiklendi mi çıktı mı", async () => {
  const user = UserEvent.setup();
  render(<Sos />);

  //sayfa olup denenecekler
const sosSepet =screen.getByRole("heading",{name:/ücret toplam/i});
const bearSos=await screen.findByRole("checkbox",{name:"/gumi bears/i"});
const cherySos=await screen.findByRole("checkbox",{name:"/cherries/i"});
const mochiSos=await screen.findByRole("checkbox",{name:"/machi/i"});


//sos ekleme
await user.click(bearSos);
await user.click(mochiSos);

expect(sosSepet).toHaveTextContent("2");
//sos çıkar
await user.click(bearSos);
expect(sosSepet).toHaveTextContent("1");
//çift tık
await user.dblClick(cherySos);
expect(sosSepet).toHaveTextContent("1")
});
