import * as Button from "components/Button";
import * as Input from "components/Input";
import * as Template from "components/templates";

export default function Login() {
  return (
    <Template.Form title="Log in">
      <Input.Text placeholder="Email" />

      <Input.Password placeholder="Password" />

      <Button.Black className="text-xs">LOG IN</Button.Black>
    </Template.Form>
  );
}
