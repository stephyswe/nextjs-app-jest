import Home from "@/app/page";
import { renderServerComponent } from "./renderServerComponent";

test("should do this", async () => {
  await renderServerComponent(<Home />);
});
