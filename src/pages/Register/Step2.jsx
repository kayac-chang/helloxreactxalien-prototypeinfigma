import * as Button from "components/Button";
import * as Input from "components/Input";
import * as Template from "components/templates";
import Link from "components/Link";

export function Step2() {
  return (
    <Template.Form title="Register">
      <Input.Text placeholder="Enter your name" />

      <Link to="/login" className="block">
        <Button.Black className="text-xs">SIGN UP</Button.Black>
      </Link>

      <p className="text-xs">
        {`By signing up, you agree to Photo's `}

        <a href="/" className="underline">
          Terms of Service
        </a>

        {` and `}

        <a href="/" className="underline">
          Privacy Policy
        </a>

        {`.`}
      </p>
    </Template.Form>
  );
}
