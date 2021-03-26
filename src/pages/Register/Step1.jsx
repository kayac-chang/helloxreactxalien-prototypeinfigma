import * as Button from "components/Button";
import * as Input from "components/Input";
import * as Template from "components/templates";

export function Step1() {
  return (
    <Template.Form>
      <Input.Text placeholder="Email" />

      <Input.Password placeholder="Password" />

      <Button.Black className="text-xs">NEXT</Button.Black>
    </Template.Form>
  );
}
