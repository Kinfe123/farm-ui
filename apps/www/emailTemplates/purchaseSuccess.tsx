import * as React from 'react';
import { Html, Button } from "@react-email/components";

export function Email(props: {firstName: string , lastName?:string , amount: string}) {

  return (
    <Html lang="en">
      <Button>Click me</Button>
    </Html>
  );
}

export default Email;
