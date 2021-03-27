import * as Button from "components/Button";
import * as Input from "components/Input";
import * as Template from "components/templates";
import Link from "components/Link";

export function Step1() {
  return (
    <Template.Form title="Register">
      <Input.Text placeholder="Email" />

      <Input.Password placeholder="Password" />

      <Link to="/register/step2" className="block">
        <Button.Black className="text-xs">NEXT</Button.Black>
      </Link>
    </Template.Form>
  );
}
