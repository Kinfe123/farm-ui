
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface SuccessPurchaseProps {
  firstName: string,
  lastName?: string,
  amount: string,
  templateName: string,
  currency: string,

}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const SuccessPurchase = ({
  firstName,
  lastName,
  amount,
  templateName,
  currency
}: SuccessPurchaseProps) => {
  const previewText = `Thanks for purchasing the ${templateName}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mr-auto p-[20px] flex flex-col gap-2 max-w-[465px]">
            <Section className="mt-[32px]">

            </Section>
            <Heading className="text-black text-[24px] font-normal text-left p-0 my-[30px] mx-0">
              Yo , {firstName + " " + lastName}{" "}, You have purchased <strong>{templateName}</strong> on <strong>FARMUI</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {firstName},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">

              You have successfully purchased {templateName} on farmui with the following details.

            </Text>
            <Section>
              <Row>
                <Column align="right">
                </Column>
                <Column align="center">
                </Column>
                <Column align="left">
                </Column>
              </Row>
            </Section>

            <Text className="text-black text-left text-[14px] leading-[24px] flex">
              Amount {" "}<strong>- {currency} {" "}{amount}</strong>
            </Text>


            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This is the automatic email sent to you while purchasing the template. You can unsubscribe to it if you want to by link below

            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

SuccessPurchase.PreviewProps = {
  firstName: "alanturing",
  lastName: "Alan",
  amount: "50",
  templateName: "docy",
  currency: 'ETB'
} as SuccessPurchaseProps;

export default SuccessPurchase
