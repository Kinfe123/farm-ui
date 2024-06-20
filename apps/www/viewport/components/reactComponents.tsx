import FUIDarkHeroSection from "previewsComponents/FUIDarkHeroSection";
import FUIFaqsWithDividedRows from "previewsComponents/FUIFaqsWithDividedRows";
import FUIFaqsWithSearchBox from "previewsComponents/FUIFaqsWithSearchBox";
import FUIFeatureSectionWithCards from "previewsComponents/FUIFeatureSectionWithCards";
import FUIForm from "previewsComponents/FUIForm";
import FUIHeroSectionWithBottomImage from "previewsComponents/FUIHeroSectionWithBottomImage";
import FUIHeroSectionWithImage from "previewsComponents/FUIHeroSectionWithImage";
import FUIHeroSectionWithLogoClouds from "previewsComponents/FUIHeroSectionWithLogoClouds";
import FUIHeroWithGrid from "previewsComponents/FUIHeroWithGrid";
import FUIHeroWithGridSimple from "previewsComponents/FUIHeroWithSimple";
import FUIHeroWithSlayBackground from "previewsComponents/FUIHeroWithSlayBackground";
import FUILoginWithCardLayout from "previewsComponents/FUILoginWithCardLayout.tsx";
import FUILoginWithGridProvider from "previewsComponents/FUILoginWithGridProvider.tsx";
import FUILoginWithListedProvider from "previewsComponents/FUILoginWithListedProvider";
import FUINewsletterWithBackground from "previewsComponents/FUINewsletterWithBackground";
import FUIPricingSectionWithBadge from "previewsComponents/FUIPricingSectionWithBadge";
import FUIPricingSectionWithOnePlan from "previewsComponents/FUIPricingSectionWithOnePlan";
import FUIPricingSectionWithTable from "previewsComponents/FUIPricingSectionWithTable";
import FUIPricingWithSpecialTwo from "previewsComponents/FUIPricingWithSpecialTwo";
import FUISignUpWithLeftBackground from "previewsComponents/FUISignUpWithLeftBackground";
import FUITestimonialWithGrid from "previewsComponents/FUITestimonialGrid";
import FUITestimonialWithThreeColumn from "previewsComponents/FUITestimonialWithThreeColumn";
import React from "react";

type ComponentProps = {
  [id: string]: {
    component: React.ReactNode;
    description: string;
    path: string;
    codeCopy: {
      [codeType: string]: string;
    };
  };
};
export const componentToPreview: ComponentProps = {
  "farmui-form-01": {
    component: <FUIForm />,
    description: "Form Input UI",
    path: "previewsComponents/FUIForm",
    codeCopy: {
      react: `
            \n\"use client\";\n\nimport {\n  CardTitle,\n  CardDescription,\n  CardHeader,\n  CardContent,\n  CardFooter,\n  Card,\n} from \"@/components/ui/card\";\nimport { Label } from \"@/components/ui/label\";\nimport { Input } from \"@/components/ui/input\";\nimport { Textarea } from \"@/components/ui/textarea\";\nimport { ChevronRight, Loader2 } from \"lucide-react\";\nimport { useState, useTransition } from \"react\";\nimport { useToast } from \"@/components/ui/use-toast\";\n// raplace it with your actions.\nimport { saySomething } from \"actions/emailSubRelated\";\nimport {Button} from \"@/components/ui/button\";\ntype FormType = {\n  firstName: string;\n  lastName?: string;\n  email: string;\n  message: string;\n};\nexport default function FUIForm() {\n  const [pending, startTransition] = useTransition();\n  const { toast } = useToast()\n\n  const [forms, setForms] = useState({\n    firstName: \"\",\n    lastName: \"\",\n    email: \"\",\n    message: \"\",\n  });\n  \n  const handleChange = (e: any) => {\n    setForms({ ...forms, [e.target.name]: e.target.value });\n  };\n  const onSubmit = (e:any) => {\n    e.preventDefault();\n    startTransition(async () => {\n      saySomething({\n        firstName: forms.firstName,\n        lastName: forms.lastName,\n        email: forms.email,\n        message: forms.message,\n      })\n        .then((res) => {\n          toast({\n            position: \"bottom-left\",\n            title: \"Message submitted\",\n            description:\n              \"You have successfully submitted your message. we will keep in touch with you with the speed of light :)\",\n          });\n          setForms({\n            firstName:\"\",\n            lastName:\"\",\n            email: \"\",\n            message: \"\"\n          })\n        })\n        .catch((err) => {\n          toast({\n            position: \"bottom-left\",\n\n            title: \"Something went wrong\",\n            description:\n              \"There is an error while submitting the form, Please try again later :(\",\n            variant: \"destructive\",\n\n          });\n        });\n    });\n  };\n  return (\n    <section className=\"custom-screen-lg mx-auto z-20\">\n      <div className=\"relative backdrop-blur-3xl z-10 max-w-4xl mx-auto  space-y-4\">\n        <Card className=\"relative mt-20 py-10 z-20 backdrop-blur-3xl\">\n          <CardHeader>\n            <CardDescription>\n              Fill out the form below and we'll get back to you as soon as\n              possible.\n            </CardDescription>\n          </CardHeader>\n          <CardContent>\n            <div className=\"\"></div>\n            <form className=\"space-y-4 z-20\" onSubmit={onSubmit}>\n              <div className=\"grid grid-cols-1 md:grid-cols-2 gap-4 z-20\">\n                <div className=\"space-y-2\">\n                  <Label htmlFor=\"first-name\">First Name</Label>\n                  <Input\n\n                    value={forms.firstName}\n                    onChange={(e) => handleChange(e)}\n                    name=\"firstName\"\n                    placeholder=\"Enter your first name\"\n                    required\n                  />\n                </div>\n                <div className=\"space-y-2\">\n                  <Label htmlFor=\"last-name\">Last Name</Label>\n                  <Input\n                    value={forms.lastName}\n                    onChange={handleChange}\n                    name=\"lastName\"\n                    placeholder=\"Enter your last name\"\n                  />\n                </div>\n              </div>\n              <div className=\"space-y-2\">\n                <Label htmlFor=\"email\">Email</Label>\n                <Input\n\n                  value={forms.email}\n                  name=\"email\"\n                  onChange={handleChange}\n                  placeholder=\"Enter your email\"\n                  type=\"email\"\n                  required\n                />\n              </div>\n              <div className=\"space-y-2\">\n                <Label htmlFor=\"message\">Message</Label>\n                <Textarea\n                  required\n                  value={forms.message}\n                  \n                   className=\"bg-transparent\"\n                   onChange={handleChange}\n                  name=\"message\"\n                  maxLength={200}\n                  \n                  placeholder=\"Enter your message\"\n                />\n              </div>\n                <Button\n                  disabled={pending}\n                  variant=\"default\"\n                  className=\"inline-flex rounded-3xl  text-center group items-center w-full justify-center bg-gradient-to-tr from-black/90 via-zinc-800 to-black  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-6 px-10\"\n                >\n                  Submit\n                  {pending ? (\n                    <Loader2 className=\"animate-spin ml-3 w-4 h-4 flex items-center\" />\n                  ) : (\n                    <ChevronRight className=\"w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n                  )}\n                </Button>\n            </form>\n          </CardContent>\n        </Card>\n      </div>\n    </section>\n  );\n}\n\n\n

            
            `,
    },
  },

  "farmui-hero-00": {
    component: <FUIHeroWithGrid />,
    description: "Hero Section With Grid",
    path: "previewsComponents/FUIHeroWithGrid",
    codeCopy: {
      react: `
      \nimport LinkItem from \"components/ui/LinkItem\";\nimport { IconGithub } from \"components/icons\";\nimport { ChevronRight } from \"lucide-react\";\nimport HeroAnimated from \"components/HeroAnimated\";\nconst FUIHeroWithGrid = () => {\n  return (\n    <>\n      <section className=\"min-h-[800px] w-full  mt-0 relative\">\n        <div className=\"absolute -z-1 inset-0 opacity-15  h-[600px] w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div>\n        <img\n          className=\"absolute inset-x-0 -top-20 opacity-75 \"\n          src={\n            \"https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75\"\n          }\n          width={1000}\n          height={1000}\n          alt=\"back bg\"\n        />\n        <div className=\"relative z-10 max-w-4xl translate-y-[33%]  mx-auto space-y-4\">\n          <HeroAnimated\n            header=\"Take shadcn to the next level for modern web dev experience\"\n            headerClassName=\"text-center max-w-5xl text-5xl md:text-6xl tracking-tighter mx-auto lg:text-7xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1\"\n            description=\"Move faster with beautiful, responsive UI components and website\n            templates with modern design, 100% free and open-source.\"\n            descriptionClassName=\"mx-auto text-zinc-400 text-center text-md lg:max-w-2xl md:py-5\"\n          >\n            <div className=\"flex flex-wrap items-center justify-center  gap-3\">\n              <LinkItem\n                href=\"/components\"\n                variant=\"default\"\n                className=\"inline-flex text-center group items-center w-full justify-center bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-transparent  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10\"\n              >\n                Browser Components\n                <ChevronRight className=\"w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n              </LinkItem>\n              <LinkItem\n                href=\"https://github.com/Kinfe123/farm-ui\"\n                variant=\"shiny\"\n                className=\"inline-flex w-full justify-center items-center gap-x-2 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10\"\n                target=\"_blank\"\n              >\n                <IconGithub className=\"w-5 h-5\" />\n                Star on GitHub\n              </LinkItem>\n            </div>\n          </HeroAnimated>\n        </div>\n      </section>\n   \n    </>\n  );\n};\nexport default FUIHeroWithGrid;\n\n            
            `,
    },
  },
  "farmui-hero-01": {
    component: <FUIHeroSectionWithLogoClouds />,
    description: "Hero Section With Clouds and Logo",
    path: "previewsComponents/FUIHeroSectionWithLogoClouds",
    codeCopy: {
      react: `
      \nimport React from \"react\";\nimport * as Avatar from \"@radix-ui/react-avatar\";\nimport * as ContextMenu from \"@radix-ui/react-context-menu\";\nimport * as Dialog from \"@radix-ui/react-dialog\";\nimport * as Select from \"@radix-ui/react-select\";\nimport * as Tabs from \"@radix-ui/react-tabs\";\nimport * as DropdownMenu from \"@radix-ui/react-dropdown-menu\";\nimport { ChevronRight } from \"lucide-react\";\nexport default function FUIHeroSectionWithLogoClouds() {\n  const [state, setState] = React.useState(false);\n\n  // Replace javascript:void(0) path with your path\n  const navigation = [\n    { title: \"Partners\", path: \"javascript:void(0)\" },\n    { title: \"Customers\", path: \"javascript:void(0)\" },\n    { title: \"Team\", path: \"javascript:void(0)\" },\n  ];\n\n  return (\n    <div className=\"relative w-full flex flex-col\">\n      <img\n        className=\"absolute top-0 z-0 -translate-y-1/2\"\n        src={\"https://farmui.vercel.app/bg-back.png\"}\n        width={1000}\n        height={1000}\n        alt=\"back bg\"\n      />\n\n      <div className=\"absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div>\n      <nav className=\"relative items-center pt-5 px-4 mx-auto w-full sm:px-8 lg:flex md:space-x-6\">\n        <div className=\"flex justify-between\">\n          <a href=\"javascript:void(0)\">\n            <img\n              src=\"https://www.farmui.com/logo.svg\"\n              width={120}\n              height={50}\n              alt=\"FarmUI logo\"\n            />\n          </a>\n          <button\n            className=\"text-gray-500 outline-none md:hidden\"\n            onClick={() => setState(!state)}\n          >\n            {state ? (\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                className=\"h-6 w-6\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke=\"currentColor\"\n              >\n                <path\n                  strokeLinecap=\"round\"\n                  strokeLinejoin=\"round\"\n                  strokeWidth={2}\n                  d=\"M6 18L18 6M6 6l12 12\"\n                />\n              </svg>\n            ) : (\n              <svg\n                xmlns=\"http://www.w3.org/2000/svg\"\n                className=\"h-6 w-6\"\n                fill=\"none\"\n                viewBox=\"0 0 24 24\"\n                stroke=\"currentColor\"\n              >\n                <path\n                  strokeLinecap=\"round\"\n                  strokeLinejoin=\"round\"\n                  strokeWidth={2}\n                  d=\"M4 6h16M4 12h16M4 18h16\"\n                />\n              </svg>\n            )}\n          </button>\n        </div>\n        <ul\n          className={\`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 \${\n            state\n              ? \"absolute inset-x-0 px-4 border-b bg-white md:border-none md:static\"\n              : \"hidden\"\n          }\`}\n        >\n          <div className=\"items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12\">\n            {navigation.map((item, idx) => (\n              <li className=\"text-gray-500 hover:text-indigo-600\" key={idx}>\n                <a href={item.path}>{item.title}</a>\n              </li>\n            ))}\n          </div>\n          <li className=\"order-2 py-5 md:py-0\">\n            <button className=\"inline-flex h-12 items-center justify-center font-geist rounded-md border border-gray-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 \">\n              Get Started\n            </button>\n          </li>\n        </ul>\n      </nav>\n      <section className=\"py-28 z-10\">\n        <div className=\"max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8\">\n          <div className=\"flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl\">\n            <h1 className=\"text-sm  text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit\">\n              Over 200+ deals finished\n              <ChevronRight className=\"inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n            </h1>\n            <h2 className=\"text-4xl md:text-5xl font-geist font-normal tracking-tighter lg:text-5xl text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]\">\n              We help startups to grow and make money\n            </h2>\n            <p className=\"font-geist\">\n              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium\n              doloremque laudantium, totam rem aperiam, eaque ipsa quae.\n            </p>\n            <div className=\"items-center gap-x-3 space-y-3 sm:flex sm:space-y-0\">\n              <button className=\"inline-flex h-12 items-center justify-center font-geist rounded-md border border-gray-800 bg-gradient-to-t from-[#8678f9] from-0% to-[#c7d2fe] px-6 font-medium text-gray-950 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 \">\n                Get Started \n                <svg\n                  xmlns=\"http://www.w3.org/2000/svg\"\n                  viewBox=\"0 0 20 20\"\n                  fill=\"currentColor\"\n                  className=\"w-5 h-5 ml-2\"\n                >\n                  <path\n                    fillRule=\"evenodd\"\n                    d=\"M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z\"\n                    clipRule=\"evenodd\"\n                  />\n                </svg>\n              </button>\n             \n            </div>\n          </div>\n          <div className=\"flex-none mt-14 md:mt-0 md:max-w-xl\">\n            <img\n              src=\"https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80\"\n              className=\" md:rounded-tl-[108px]\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n        <div className=\"mt-14 px-4 md:px-8\">\n          <p className=\"text-center font-displayAlt text-sm text-gray-700 font-semibold\">\n            Trusted by the best companies\n          </p>\n          <div className=\"flex justify-center items-center flex-wrap gap-x-12 gap-y-6 mt-6\">\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"190\"\n              height=\"33\"\n              fill=\"none\"\n            >\n              <g fill=\"#4B5563\" clip-path=\"url(#a)\">\n                <path d=\"M16.416 32.17v-6.175c6.554 0 11.596-6.49 9.106-13.36-.945-2.552-2.961-4.6-5.514-5.514-6.869-2.49-13.36 2.552-13.36 9.106H.473c0-10.43 10.083-18.559 21.016-15.156 4.79 1.481 8.57 5.294 10.052 10.052 3.403 10.965-4.695 21.048-15.125 21.048Z\" />\n                <path\n                  fill-rule=\"evenodd\"\n                  d=\"M16.416 25.995h-6.144v-6.144h6.144v6.144ZM10.272 30.721H5.546v-4.726h4.726v4.726ZM5.546 25.995h-3.97v-3.939h3.97v3.939Z\"\n                  clip-rule=\"evenodd\"\n                />\n                <path d=\"M57.19 9.516c-1.828-1.26-4.097-1.922-6.744-1.922H44.68V25.9h5.766c2.647 0 4.916-.661 6.743-2.016 1.008-.693 1.796-1.702 2.332-2.93.535-1.23.819-2.679.819-4.317 0-1.607-.284-3.057-.82-4.286-.535-1.197-1.323-2.174-2.33-2.835Zm-9.139 1.197h1.828c2.017 0 3.687.41 4.947 1.166 1.386.85 2.111 2.458 2.111 4.758 0 2.394-.725 4.064-2.111 4.978-1.197.788-2.867 1.198-4.916 1.198h-1.827l-.032-12.1ZM64.373 7.373c-.567 0-1.04.19-1.418.567-.378.378-.599.851-.599 1.387 0 .567.19 1.04.6 1.418.377.378.85.598 1.417.598.567 0 1.04-.189 1.418-.598.378-.378.599-.883.599-1.418 0-.567-.19-1.04-.6-1.387a1.975 1.975 0 0 0-1.417-.567ZM65.949 13.013h-3.246v12.919h3.246V13.013ZM77.764 14.085c-.976-.883-2.08-1.387-3.245-1.387-1.796 0-3.277.63-4.443 1.828-1.166 1.197-1.733 2.773-1.733 4.631 0 1.828.567 3.372 1.733 4.632 1.166 1.198 2.647 1.828 4.443 1.828 1.26 0 2.332-.347 3.214-1.04v.315c0 1.072-.284 1.89-.85 2.49-.568.566-1.356.85-2.332.85-1.513 0-2.427-.599-3.593-2.142l-2.205 2.11.063.095c.472.662 1.197 1.323 2.174 1.954.977.63 2.174.945 3.624.945 1.922 0 3.497-.599 4.631-1.764 1.166-1.166 1.733-2.742 1.733-4.695V13.013h-3.182l-.032 1.072Zm-.85 7.625c-.567.63-1.292.945-2.237.945-.946 0-1.67-.315-2.206-.945-.567-.63-.85-1.481-.85-2.521 0-1.04.283-1.922.85-2.552.567-.63 1.292-.977 2.206-.977.945 0 1.67.315 2.237.977.567.63.85 1.512.85 2.552s-.315 1.89-.85 2.52ZM86.965 13.013H83.72v12.919h3.245V13.013ZM85.39 7.373c-.567 0-1.04.19-1.418.567-.378.378-.599.851-.599 1.387 0 .567.19 1.04.599 1.418.378.378.85.598 1.418.598.567 0 1.04-.189 1.418-.598.378-.378.598-.883.598-1.418 0-.567-.189-1.04-.599-1.387a1.975 1.975 0 0 0-1.417-.567ZM94.086 9.547h-3.182v3.498h-1.86v2.962h1.86v5.356c0 1.67.346 2.867 1.008 3.56.662.694 1.828 1.04 3.497 1.04.536 0 1.072-.031 1.576-.063h.157V22.94l-1.102.063c-.788 0-1.292-.126-1.544-.41s-.378-.85-.378-1.701v-4.916h3.025v-2.962h-3.025V9.547h-.032ZM115.576 7.594h-3.246V25.9h3.246V7.594ZM148.376 21.3c-.567.662-1.166 1.229-1.638 1.512-.441.284-1.008.442-1.67.442-.945 0-1.733-.347-2.363-1.072-.631-.724-.946-1.638-.946-2.74 0-1.104.315-2.018.914-2.71.63-.725 1.387-1.072 2.332-1.072 1.04 0 2.142.662 3.088 1.764l2.142-2.048c-1.386-1.827-3.182-2.678-5.325-2.678-1.796 0-3.34.662-4.6 1.922-1.26 1.26-1.891 2.899-1.891 4.821 0 1.922.631 3.53 1.891 4.821 1.26 1.292 2.804 1.922 4.6 1.922 2.363 0 4.254-1.008 5.514-2.867l-2.048-2.017ZM161.705 14.81a5.263 5.263 0 0 0-1.859-1.545c-.788-.378-1.67-.567-2.679-.567-1.827 0-3.308.662-4.411 1.985-1.071 1.324-1.638 2.93-1.638 4.853 0 1.953.598 3.56 1.796 4.82 1.166 1.23 2.773 1.86 4.695 1.86 2.174 0 4.001-.883 5.325-2.647l.063-.095-2.111-2.048c-.19.252-.473.504-.725.756-.315.316-.63.536-.945.694-.473.252-1.04.346-1.639.346-.914 0-1.638-.252-2.206-.788-.535-.472-.85-1.134-.913-1.953h8.602l.031-1.198a8.48 8.48 0 0 0-.346-2.394 7.177 7.177 0 0 0-1.04-2.08Zm-7.09 3.056c.158-.63.441-1.135.851-1.544.441-.441 1.008-.662 1.701-.662.788 0 1.387.22 1.796.662.379.41.599.913.662 1.512h-5.01v.032ZM174.183 13.99c-.977-.85-2.332-1.26-4.034-1.26a6.85 6.85 0 0 0-2.993.693c-.851.44-1.67 1.134-2.206 2.08l.032.03 2.079 1.986c.851-1.355 1.796-1.827 3.057-1.827.693 0 1.229.188 1.67.535.441.347.63.82.63 1.386v.63a8.067 8.067 0 0 0-2.395-.377c-1.607 0-2.93.378-3.907 1.134-.977.756-1.481 1.859-1.481 3.214 0 1.197.41 2.206 1.261 2.93.85.693 1.89 1.072 3.119 1.072 1.229 0 2.395-.505 3.435-1.355v1.07h3.182v-8.318c.063-1.543-.441-2.772-1.449-3.623Zm-5.767 6.995c.378-.252.883-.378 1.544-.378.788 0 1.607.157 2.458.473v1.26c-.693.662-1.638.977-2.804.977-.567 0-1.009-.126-1.292-.378-.284-.253-.441-.536-.441-.946 0-.41.189-.756.535-1.008ZM188.173 14.242c-.914-1.008-2.175-1.512-3.782-1.512-1.291 0-2.331.378-3.119 1.102v-.787h-3.182v12.918h3.245v-7.152c0-.977.221-1.765.693-2.3.473-.567 1.072-.82 1.922-.82.725 0 1.292.252 1.702.725.409.504.63 1.166.63 2.017V25.9h3.245v-7.467c0-1.765-.441-3.183-1.354-4.19ZM108.265 13.99c-.976-.85-2.331-1.26-4.033-1.26a6.85 6.85 0 0 0-2.993.693c-.851.44-1.67 1.134-2.206 2.08l.032.03 2.079 1.986c.851-1.355 1.796-1.827 3.057-1.827.693 0 1.228.188 1.67.535.441.347.63.82.63 1.386v.63a8.067 8.067 0 0 0-2.395-.377c-1.607 0-2.93.378-3.907 1.134-.977.756-1.481 1.859-1.481 3.214 0 1.197.41 2.206 1.26 2.93.851.693 1.891 1.072 3.12 1.072s2.394-.505 3.434-1.355v1.07h3.183v-8.318c.031-1.543-.473-2.772-1.45-3.623Zm-5.766 6.995c.378-.252.882-.378 1.544-.378.788 0 1.607.157 2.458.473v1.26c-.693.662-1.639.977-2.805.977-.567 0-1.008-.126-1.291-.378-.284-.253-.442-.536-.442-.946 0-.41.158-.756.536-1.008ZM127.36 26.184c-5.199 0-9.453-4.222-9.453-9.453a9.44 9.44 0 0 1 9.453-9.452c5.199 0 9.453 4.222 9.453 9.452 0 5.23-4.254 9.453-9.453 9.453Zm0-15.534a6.118 6.118 0 0 0-6.113 6.113 6.118 6.118 0 0 0 6.113 6.113 6.12 6.12 0 0 0 6.113-6.113 6.12 6.12 0 0 0-6.113-6.113Z\" />\n              </g>\n              <defs>\n                <clipPath id=\"a\">\n                  <path fill=\"#fff\" d=\"M0 0h190v32.454H0z\" />\n                </clipPath>\n              </defs>\n            </svg>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"120\"\n              height=\"28\"\n              fill=\"none\"\n            >\n              <g clip-path=\"url(#a)\">\n                <path\n                  fill=\"#4B5563\"\n                  d=\"M60.128 7.467c-4.664 0-8.027 3.042-8.027 7.605 0 4.563 3.781 7.605 8.45 7.605 2.818 0 5.302-1.116 6.84-2.996l-3.232-1.867c-.854.934-2.15 1.479-3.608 1.479-2.024 0-3.743-1.056-4.381-2.746h11.838c.093-.474.148-.964.148-1.48 0-4.558-3.359-7.6-8.028-7.6Zm-3.992 6.126c.528-1.685 1.973-2.746 3.992-2.746 2.024 0 3.469 1.06 3.993 2.746h-7.985ZM55.18 2.82 43.474 23.1 31.763 2.82h4.39l7.317 12.675L50.787 2.82h4.394ZM15.611.708l15.61 27.039H0L15.61.707ZM85.14 15.072c0 2.535 1.656 4.225 4.225 4.225 1.74 0 3.046-.79 3.717-2.079l3.245 1.872c-1.343 2.24-3.861 3.587-6.962 3.587-4.669 0-8.028-3.042-8.028-7.605 0-4.563 3.363-7.605 8.028-7.605 3.1 0 5.615 1.348 6.962 3.587l-3.245 1.872c-.671-1.289-1.977-2.079-3.717-2.079-2.565 0-4.225 1.69-4.225 4.225ZM119.986 2.82v19.434h-3.802V2.82h3.802Zm-14.364 4.647c-4.664 0-8.027 3.042-8.027 7.605 0 4.563 3.785 7.605 8.449 7.605 2.818 0 5.303-1.116 6.84-2.996l-3.232-1.867c-.853.934-2.15 1.479-3.608 1.479-2.023 0-3.743-1.056-4.381-2.746h11.838c.093-.474.148-.964.148-1.48 0-4.558-3.359-7.6-8.027-7.6Zm-3.993 6.126c.529-1.685 1.969-2.746 3.993-2.746 2.023 0 3.468 1.06 3.992 2.746h-7.985ZM80.069 7.89v4.094a4.816 4.816 0 0 0-1.351-.207c-2.455 0-4.225 1.69-4.225 4.225v6.252h-3.802V7.89h3.802v3.887c0-2.147 2.497-3.887 5.577-3.887Z\"\n                />\n              </g>\n              <defs>\n                <clipPath id=\"a\">\n                  <path fill=\"#fff\" d=\"M0 .708h120v27.039H0z\" />\n                </clipPath>\n              </defs>\n            </svg>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"180\"\n              height=\"27\"\n              fill=\"none\"\n            >\n              <g fill=\"#4B5563\" clip-path=\"url(#a)\">\n                <path d=\"m39.535 25.951.296-1.025c.351-1.219.221-2.344-.37-3.173-.553-.762-1.454-1.21-2.557-1.263l-20.874-.265a.406.406 0 0 1-.373-.553.554.554 0 0 1 .483-.37l21.077-.276c2.487-.114 5.207-2.142 6.155-4.619l1.199-3.14a.74.74 0 0 0 .033-.425 13.727 13.727 0 0 0-26.39-1.42 6.177 6.177 0 0 0-9.674 6.472A8.77 8.77 0 0 0 .094 25.96a.406.406 0 0 0 .4.35h38.552a.506.506 0 0 0 .49-.358ZM46.492 11.505c-.184 0-.378.006-.58.017-.031 0-.061.007-.089.02a.323.323 0 0 0-.21.22l-.83 2.836c-.353 1.219-.223 2.344.371 3.173a3.22 3.22 0 0 0 2.554 1.263l4.452.276a.397.397 0 0 1 .385.355.414.414 0 0 1-.023.195.553.553 0 0 1-.483.37l-4.624.277c-2.512.116-5.218 2.142-6.166 4.615l-.334.874a.248.248 0 0 0 .218.337H57.06a.428.428 0 0 0 .426-.323 11.425 11.425 0 0 0-10.989-14.505h-.005ZM75.459 16.621h2.633v7.202H82.7v2.308h-7.242v-9.51ZM85.43 21.413v-.024c0-2.731 2.211-4.948 5.135-4.948s5.108 2.19 5.108 4.92v.027c0 2.731-2.211 4.945-5.135 4.945s-5.108-2.197-5.108-4.92Zm7.553 0v-.024c0-1.382-.992-2.568-2.445-2.568-1.454 0-2.405 1.166-2.405 2.54v.027c0 1.382.992 2.568 2.432 2.568s2.419-1.169 2.419-2.543M98.898 21.966v-5.345h2.678v5.284c0 1.382.691 2.026 1.752 2.026 1.062 0 1.752-.624 1.752-1.957v-5.353h2.676v5.27c0 3.071-1.752 4.423-4.455 4.423-2.703 0-4.403-1.382-4.403-4.348M111.791 16.621h3.667c3.397 0 5.367 1.957 5.367 4.699v.027c0 2.744-1.998 4.781-5.419 4.781h-3.615v-9.507Zm3.709 7.186c1.575 0 2.623-.87 2.623-2.407v-.025c0-1.523-1.048-2.407-2.623-2.407h-1.081v4.828l1.081.01ZM124.656 16.621h7.606v2.31h-4.969v1.617h4.496v2.187h-4.496v3.396h-2.637v-9.51ZM135.932 16.621h2.634v7.202h4.607v2.308h-7.241v-9.51ZM150.071 16.555h2.54l4.038 9.576h-2.824l-.694-1.697h-3.67l-.677 1.697h-2.764l4.051-9.576Zm2.308 5.826-1.058-2.703-1.084 2.703h2.142ZM160.043 16.621h4.497c1.456 0 2.459.382 3.098 1.034a2.937 2.937 0 0 1 .843 2.21v.028a3.013 3.013 0 0 1-1.957 2.922l2.269 3.316h-3.04l-1.918-2.88h-1.155v2.88h-2.637v-9.51Zm4.375 4.566c.898 0 1.415-.437 1.415-1.128v-.027c0-.75-.553-1.128-1.429-1.128h-1.724v2.283h1.738ZM172.284 16.621h7.65v2.242h-5.041v1.44h4.565v2.078h-4.565v1.509H180v2.241h-7.716v-9.51ZM69.688 22.519a2.333 2.333 0 0 1-2.178 1.426c-1.443 0-2.432-1.197-2.432-2.567v-.028c0-1.382.965-2.543 2.404-2.543a2.388 2.388 0 0 1 2.261 1.578h2.764c-.431-2.263-2.418-3.946-4.997-3.946-2.935 0-5.135 2.21-5.135 4.947v.027c0 2.731 2.172 4.92 5.107 4.92 2.51 0 4.472-1.625 4.989-3.803l-2.783-.011Z\" />\n              </g>\n              <defs>\n                <clipPath id=\"a\">\n                  <path fill=\"#fff\" d=\"M0 .133h180v26.189H0z\" />\n                </clipPath>\n              </defs>\n            </svg>\n            <svg\n              xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"123\"\n              height=\"27\"\n              fill=\"none\"\n            >\n              <path\n                fill=\"#4B5563\"\n                d=\"M46.72 6.111h-3.102v13.951h8.927v-2.053H46.72V6.111ZM63.495 12.03c-.396-.465-.957-.83-1.686-1.096a6.372 6.372 0 0 0-2.198-.398c-.953 0-1.825.13-2.616.388-.791.26-1.47.615-2.036 1.067a5 5 0 0 0-1.322 1.564 3.91 3.91 0 0 0-.472 1.863c0 .665.157 1.29.472 1.874a5.033 5.033 0 0 0 1.322 1.554c.566.452 1.244.808 2.036 1.067.79.259 1.663.388 2.616.388.737 0 1.47-.133 2.198-.398.729-.266 1.29-.631 1.686-1.096v1.255h2.94v-9.287h-2.94v1.255Zm-.27 4.524c-.18.36-.431.671-.755.937a3.79 3.79 0 0 1-1.173.638c-.459.16-.967.239-1.524.239-.558 0-1.061-.08-1.51-.24a3.818 3.818 0 0 1-1.16-.637 2.708 2.708 0 0 1-.742-.937 2.604 2.604 0 0 1-.256-1.136c0-.398.085-.777.256-1.136.17-.358.418-.67.742-.936a3.82 3.82 0 0 1 1.16-.638c.449-.16.952-.24 1.51-.24.557 0 1.065.08 1.524.24.458.16.85.372 1.173.638.324.266.575.578.755.936.18.36.27.738.27 1.136 0 .399-.09.778-.27 1.136ZM87.39 12.03c-.395-.465-.957-.83-1.685-1.096a6.372 6.372 0 0 0-2.198-.398c-.953 0-1.825.13-2.616.388-.791.26-1.47.615-2.036 1.067a5 5 0 0 0-1.322 1.564 3.91 3.91 0 0 0-.472 1.863c0 .665.157 1.29.472 1.874a5.033 5.033 0 0 0 1.322 1.554c.566.452 1.245.808 2.036 1.067.79.259 1.663.388 2.616.388.737 0 1.47-.133 2.198-.398.728-.266 1.29-.631 1.686-1.096v1.255h2.94v-9.287h-2.94v1.255Zm-.269 4.524c-.18.36-.431.671-.755.937a3.79 3.79 0 0 1-1.173.638c-.459.16-.967.239-1.524.239-.558 0-1.061-.08-1.51-.24a3.818 3.818 0 0 1-1.16-.637 2.708 2.708 0 0 1-.742-.937A2.604 2.604 0 0 1 80 15.418c0-.398.085-.777.256-1.136.17-.358.418-.67.742-.936a3.82 3.82 0 0 1 1.16-.638c.449-.16.952-.24 1.51-.24.557 0 1.065.08 1.524.24.458.16.85.372 1.173.638.324.266.575.578.755.936.18.36.27.738.27 1.136 0 .399-.09.778-.27 1.136ZM122.58 6.111h-2.939v13.951h2.939V6.112ZM68.754 20.062h2.94v-7.15h5.043v-2.137h-7.983v9.287ZM102.116 10.775l-3.695 7.112-3.694-7.112h-2.978l4.825 9.287h3.695l4.825-9.287h-2.978ZM111.506 10.536c-3.6 0-6.449 2.186-6.449 4.883 0 2.98 2.758 4.882 6.826 4.882 2.277 0 3.731-.643 5.507-2.044l-1.986-1.136c-.002.001-1.499 1.455-3.736 1.455-2.6 0-3.694-1.55-3.694-2.35h9.753c.512-3.068-2.218-5.69-6.221-5.69Zm-3.524 4.075c.022-.178.361-2.35 3.501-2.35 3.14 0 3.522 2.171 3.544 2.35h-7.045ZM34.671 6.002c-.004-.012-.014-.023-.02-.035-.01-.021-.02-.044-.035-.064-.01-.013-.026-.024-.039-.036-.016-.017-.03-.034-.05-.049-.016-.011-.036-.02-.054-.03-.02-.012-.039-.026-.062-.036l-6.715-2.857a.734.734 0 0 0-.559 0l-6.714 2.857c-.023.01-.042.023-.062.035-.018.01-.039.02-.055.031-.02.015-.034.032-.05.048-.012.013-.027.024-.038.037-.016.02-.025.042-.036.064-.006.012-.015.023-.02.035a.315.315 0 0 0-.02.108v5.425l-5.595 2.38V3.303a.317.317 0 0 0-.019-.108c-.004-.012-.014-.023-.02-.035-.01-.022-.02-.044-.035-.064-.011-.013-.026-.024-.039-.037-.016-.016-.03-.033-.05-.048-.016-.012-.036-.02-.054-.03-.02-.012-.04-.026-.062-.036L7.552.087a.734.734 0 0 0-.558 0L.28 2.944c-.023.01-.042.024-.062.035C.2 2.99.179 3 .163 3.01c-.02.015-.033.032-.05.048-.012.013-.027.024-.038.037-.016.02-.025.043-.036.064-.006.012-.015.023-.02.035A.315.315 0 0 0 0 3.302v16.993c0 .148.107.285.28.359l13.43 5.713c.029.012.06.02.092.028.014.004.028.01.043.013a.748.748 0 0 0 .287 0c.013-.003.025-.008.038-.012.033-.008.066-.016.097-.03l13.43-5.712c.173-.074.28-.21.28-.359V14.87l6.434-2.737c.173-.074.28-.21.28-.359V6.11a.326.326 0 0 0-.02-.108ZM13.987 19.82l-5.585-2.335 5.865-2.495 6.435-2.738 5.59 2.377-4.101 1.73-8.204 3.46Zm12.87-10.614v4.71l-2.35-1-3.245-1.38v-4.71l2.35.999 3.245 1.38Zm.56-5.475 5.593 2.38-5.593 2.379-5.593-2.38 5.593-2.38ZM10.183 15.773l-2.35 1V6.397l3.246-1.381 2.35-1v10.375l-3.246 1.38ZM7.273.923l5.593 2.38-5.593 2.379-5.593-2.38L7.273.922ZM1.118 4.017l2.35 1 3.246 1.38V17.49c0 .016.006.03.008.046.004.02.004.041.012.06v.002c.006.016.018.03.026.046.01.018.017.036.03.052v.001c.012.015.028.027.042.04.015.015.028.03.046.044l.002.001c.016.012.035.02.053.03.02.012.038.025.06.035h.003l.002.002 6.43 2.689v4.756l-12.31-5.236V4.017Zm25.74 16.04-12.31 5.236v-4.757l9.116-3.846 3.193-1.347v4.713Zm6.714-8.521-5.596 2.38v-4.71l3.246-1.381 2.35-1v4.71Z\"\n              />\n            </svg>\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n}\n\n

            `,
    },
  },
  "farmui-hero-02": {
    component: <FUIHeroSectionWithBottomImage />,
    description: "Hero Section With RetroGrid",
    path: "previewsComponents/FUIHeroSectionWithBottomImage",
    codeCopy: {
      react: `
      \nimport React from \"react\";\nimport RetroGrid from \"components/ui/Grid\";\n\nexport default function FUIHeroSectionWithBottomImage() {\n  return (\n    <div className=\"relative\">\n      <div class=\"absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]\"></div>\n      <section className=\"relative max-w-full mx-auto  z-1\">\n        <RetroGrid />\n\n        <div className=\"max-w-screen-xl z-10 mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8\">\n          <div className=\"space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center\">\n            <h1 className=\"text-sm text-gray-400 group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit\">\n              Build products for everyone\n              <ChevronRight className=\"inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n            </h1>\n\n            <h2 className=\"text-4xl tracking-tighter font-geist  bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] text-transparent   mx-auto md:text-6xl\">\n              Designing your projects faster with{\" \"}\n              <span className=\"text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-orange-200\">\n                the largest figma UI kit.\n              </span>\n            </h2>\n\n            <p className=\"max-w-2xl mx-auto text-gray-300\">\n              Sed ut perspiciatis unde omnis iste natus voluptatem accusantium\n              doloremque laudantium, totam rem aperiam, eaque ipsa quae.\n            </p>\n            <div className=\"items-center  justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0\">\n              <span className=\"relative inline-block overflow-hidden rounded-full p-[1.5px]\">\n                <span className=\"absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]\" />\n                <div className=\"inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950  text-xs font-medium text-gray-50 backdrop-blur-3xl\">\n                  <a\n                    href=\"javascript:void(0)\"\n                    className=\"inline-flex rounded-full text-center group items-center w-full justify-center   bg-gradient-to-tr from-zinc-300/5 via-purple-400/20 to-transparent    text-white border-input border-[1px] hover:bg-transparent/90 transition-colors sm:w-auto py-4 px-10\"\n                  >\n                    Browse courses\n                  </a>\n                </div>\n              </span>\n            </div>\n          </div>\n          <div className=\"mt-32 mx-10\">\n            <img\n              src=\"https://farmui.vercel.app/dashboard.png\"\n              className=\"w-full shadow-lg rounded-lg border\"\n              alt=\"\"\n            />\n          </div>\n        </div>\n      </section>\n    </div>\n  );\n}\n\n

            `,
    },
  },
  "farmui-hero-03": {
    component: <FUIHeroWithGridSimple />,
    description: "Hero Section With Simple and Aligned",
    path: "previewsComponents/FUIHeroWithGridSimpe",
    codeCopy: {
      react: `
      \nimport LinkItem from \"components/ui/LinkItem\";\nimport { IconGithub } from \"components/icons\";\nimport { ChevronRight } from \"lucide-react\";\nimport HeroAnimated from \"components/HeroAnimated\";\nimport BgGradient from \"components/ui/BgGradient\";\nconst FUIHeroWithGridSimple = () => {\n  return (\n    <>\n      <section className=\"min-h-[800px] w-full  mt-0 relative\">\n        <div className=\"absolute -top-0 inset-x-0 opacity-45\">\n          <BgGradient />\n        </div>\n\n        <svg\n          className=\"absolute inset-0 z-1 h-full w-full  stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_left  ,white,transparent)]\"\n          aria-hidden=\"true\"\n        >\n          <defs>\n            <pattern\n              id=\"983e3e4c-de6d-4c3f-8d64-b9761d1534cc\"\n              width={200}\n              height={200}\n              x=\"50%\"\n              y={-1}\n              patternUnits=\"userSpaceOnUse\"\n            >\n              <path d=\"M.5 200V.5H200\" fill=\"none\" />\n            </pattern>\n          </defs>\n          <svg x=\"50%\" y={-1} className=\"overflow-visible fill-gray-800/20\">\n            <path\n              d=\"M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z\"\n              strokeWidth={0}\n            />\n          </svg>\n          <rect\n            width=\"100%\"\n            height=\"100%\"\n            strokeWidth={0}\n            fill=\"url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)\"\n          />\n        </svg>\n        <div\n          className=\"absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]\"\n          aria-hidden=\"true\"\n        >\n          <div\n            className=\"aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#9c80ff] to-[#e546d5] opacity-20\"\n            style={{\n              clipPath:\n                \"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)\",\n            }}\n          />\n        </div>\n        {/* <div className=\"absolute -z-1 inset-0 opacity-15  h-[600px] w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div> */}\n\n        <div className=\"relative z-10 max-w-4xl ml-5 md:ml-10  translate-y-[33%]  mr-auto  space-y-4\">\n          <h1 className=\"text-sm  text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit\">\n            <pre className=\"tracking-tight uppercase\">\n              Build products for everyone\n              <ChevronRight className=\"inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n            </pre>\n          </h1>\n          <HeroAnimated\n            header=\"Take shadcn to the next level for modern web dev experience.\"\n            headerClassName=\"ml-2 text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1\"\n            description=\"\"\n            descriptionClassName=\"  \"\n          >\n            <div className=\"mr-auto text-[0.84rem] ml-2 text-zinc-400 text-left md:text-lg lg:max-w-2xl md:py-5\">\n              <pre className=\"tracking-tight uppercase max-w-md md:max-w-3xl text-wrap\">\n                Move faster with beautiful responsive UI components and website\n                templates with modern design, 100% free and open-source.\n              </pre>\n            </div>\n          </HeroAnimated>\n            <div className=\"mr-auto ml-2  flex flex-wrap gap-y-4 items-start justify-start gap-x-3\">\n              <LinkItem\n                href=\"/components\"\n                className=\"inline-flex rounded-none uppercase font-mono  text-center group items-center w-full justify-center  bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-zinc-900  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10\"\n              >\n                Browser Components\n                <ChevronRight className=\"w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n              </LinkItem>\n              <LinkItem\n                href=\"https://github.com/Kinfe123/farm-ui\"\n                variant=\"shiny\"\n                className=\"inline-flex font-mono uppercase tracking-tight rounded-none w-full justify-center items-center gap-x-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10\"\n                target=\"_blank\"\n              >\n                <IconGithub className=\"w-5 h-5 \" />\n                Star on GitHub\n              </LinkItem>\n            </div>\n        </div>\n      </section>\n    </>\n  );\n};\nexport default FUIHeroWithGridSimple;\n\n
      
      `,
    },
  },
  "farmui-hero-04": {
    component: <FUIHeroSectionWithImage />,
    description: "Hero Section With Simple and Aligned",
    path: "previewsComponents/FUIHeroWithGridSimpe",
    codeCopy: {
      react: `
import React from "react";
export default function FUIHeroSectionWithImage() {
  const [state, setState] = React.useState(false);

  const navigation = [
    { title: "Features", path: "javascript:void(0)" },
    { title: "Integrations", path: "javascript:void(0)" },
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Pricing", path: "javascript:void(0)" },
  ];

  React.useEffect(() => {
    document.onclick = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn")) setState(false);
    };
  }, []);

  const Brand = () => (
    <div className="flex items-center justify-between py-5 md:block">
      <a href="javascript:void(0)">
        <img
          src="https://www.farmui.com/logo.svg"
          className="rounded-full"
          width={50}
          height={50}
          alt="FarmUI logo"
        />
      </a>
      <div className="md:hidden">
        <button
          className="menu-btn text-white hover:text-white"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>
      <div className="relative">
        <header>
          <div className={\`md:hidden ${"state" ? "mx-2 pb-5" : "hidden"}\`}>
            <Brand />
          </div>
          <nav
            className={\`pb-5 md:text-sm ${
              "state"
                ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent"
                : ""
            }\`}
          >
            <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
              <Brand />
              <div
                className={\`flex-1 text-white/90 items-center mt-8 md:mt-0 md:flex ${
                  "state" ? "block" : "hidden"
                } \`}
              >
                <ul className="mx-auto flex justify-center items-center space-y-6  md:space-x-6 md:space-y-0 rounded-full dark:bg-zinc-800/10  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] px-6 py-4 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur  dark:text-zinc-200 dark:ring-white/10 w-fit ">
                  {navigation.map((item, idx) => {
                    return (
                      <li key={idx} className="text-white/70 hover:text-white">
                        <a href={item.path} className="block">
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
                <div className="items-center justify-end mt-6 space-y-6 md:flex md:mt-0">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex "
                  >
                    Sign in
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-white overflow-hidden md:px-8 md:flex justify-center items-center">
            <div className="flex-none space-y-5 max-w-xl">
              <a
                href="javascript:void(0)"
                className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border text-sm font-medium duration-150 hover:bg-transparent/10"
              >
                <span className="inline-block rounded-full px-3 py-1 bg-pink-600 text-white">
                  News
                </span>
                <p className="flex items-center">
                  Read the launch post from here
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </p>
              </a>
              <h1 className="text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1">
                Build your SAAS exactly how you want
              </h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="flex items-center gap-x-3 sm:text-sm">
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-3 px-4 text-white font-medium transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-full md:inline-flex"
                >
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  className="flex items-center justify-center gap-x-1 py-4 px-4 text-white hover:text-white font-medium duration-150 md:inline-flex"
                >
                  Contact sales
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
      `,
    },
  },
  "farmui-hero-05": {
    component: <FUIDarkHeroSection />,
    description: "Hero Section With Simple and Aligned",
    path: "previewsComponents/FUIHeroWithGridSimpe",
    codeCopy: {
      react: `
 \nimport React from \"react\";\nimport clsx from \"clsx\";\n\nexport default function FUIDarkHeroSection() {\n  const navigation = [\n    { title: \"Customers\", path: \"javascript:void(0)\" },\n    { title: \"Careers\", path: \"javascript:void(0)\" },\n  ];\n\n  return (\n    <div className=\"relative min-h-screen\">\n      <Container className=\"relative  py-20 sm:pb-24 sm:pt-36\">\n        <img\n          src=\"https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif\"\n          className=\"absolute z-2 -top-0 left-10\"\n        />\n\n        <div className=\"mx-auto max-w-2xl lg:max-w-4xl lg:px-12\">\n          <h1 className=\"font-geist text-5xl font-normal  tracking-tighter  bg-gradient-to-r from-zinc-100 via-stone-200/50 to-purple-200/70 bg-clip-text  text-transparent sm:text-7xl\">\n            <span className=\"sr-only\">DeceptiConf - </span>A design conference\n            for the dark side.\n          </h1>\n          <div className=\"mt-6 space-y-6 font-geist text-md sm:text-xl tracking-tight text-gray-500\">\n            <p>\n              The next generation of web users are tech-savvy and suspicious.\n              They know how to use dev tools, they can detect a phishing scam\n              from a mile away, and they certainly aren’t accepting any checks\n              from Western Union.\n            </p>\n            <p>\n              At DeceptiConf you’ll learn about the latest dark patterns being\n              developed to trick even the smartest visitors, and you’ll learn\n              how to deploy them without ever being detected.\n            </p>\n          </div>\n          <button className=\"mt-4 w-full md:w-52 font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2\">\n            Get Started\n          </button>\n        \n          <dl className=\"mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left\">\n            {[\n              [\"Speakers\", \"18\"],\n              [\"People Attending\", \"2,091\"],\n              [\"Venue\", \"Staples Center\"],\n              [\"Location\", \"Los Angeles\"],\n            ].map(([name, value]) => (\n              <div key={name}>\n                <dt className=\"font-mono text-sm text-gray-300\">{name}</dt>\n                <dd className=\"mt-0.5 text-2xl font-normal font-geist tracking-tight text-gray-300\">\n                  {value}\n                </dd>\n              </div>\n            ))}\n          </dl>\n        </div>\n      </Container>\n    </div>\n  );\n}\n\n\n\nexport function Container({\n  className,\n  ...props\n}: React.ComponentPropsWithoutRef<\"div\">) {\n  return (\n    <div\n      className={clsx(\"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8\", className)}\n      {...props}\n    />\n  );\n}\n\n\n  

      
      `,
    },
  },
  "farmui-hero-06": {
    component: <FUIHeroWithSlayBackground />,
    description: "Hero Section With Simple and Aligned",
    path: "previewsComponents/FUIHeroWithGridSimpe",
    codeCopy: {
      react: `
      \nimport LinkItem from \"components/ui/LinkItem\";\nimport { IconGithub } from \"components/icons\";\nimport { ChevronRight } from \"lucide-react\";\nimport HeroAnimated from \"components/HeroAnimated\";\nimport BgGradient from \"components/ui/BgGradient\";\nconst FUIHeroWithGridSimple = () => {\n  return (\n    <>\n      <section className=\"min-h-[800px] w-full  mt-0 relative\">\n        <div className=\"absolute -top-0 inset-x-0 opacity-45\">\n          <BgGradient />\n        </div>\n\n        <svg\n          className=\"absolute inset-0 z-1 h-full w-full  stroke-white/5 [mask-image:radial-gradient(100%_100%_at_top_left  ,white,transparent)]\"\n          aria-hidden=\"true\"\n        >\n          <defs>\n            <pattern\n              id=\"983e3e4c-de6d-4c3f-8d64-b9761d1534cc\"\n              width={200}\n              height={200}\n              x=\"50%\"\n              y={-1}\n              patternUnits=\"userSpaceOnUse\"\n            >\n              <path d=\"M.5 200V.5H200\" fill=\"none\" />\n            </pattern>\n          </defs>\n          <svg x=\"50%\" y={-1} className=\"overflow-visible fill-gray-800/20\">\n            <path\n              d=\"M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z\"\n              strokeWidth={0}\n            />\n          </svg>\n          <rect\n            width=\"100%\"\n            height=\"100%\"\n            strokeWidth={0}\n            fill=\"url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)\"\n          />\n        </svg>\n        <div\n          className=\"absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]\"\n          aria-hidden=\"true\"\n        >\n          <div\n            className=\"aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#9c80ff] to-[#e546d5] opacity-20\"\n            style={{\n              clipPath:\n                \"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)\",\n            }}\n          />\n        </div>\n        {/* <div className=\"absolute -z-1 inset-0 opacity-15  h-[600px] w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div> */}\n\n        <div className=\"relative z-10 max-w-4xl ml-5 md:ml-10  translate-y-[33%]  mr-auto  space-y-4\">\n          <h1 className=\"text-sm  text-gray-400 group font-geist mr-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-white/5 rounded-3xl w-fit\">\n            <pre className=\"tracking-tight uppercase\">\n              Build products for everyone\n              <ChevronRight className=\"inline w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n            </pre>\n          </h1>\n          <HeroAnimated\n            header=\"Take shadcn to the next level for modern web dev experience.\"\n            headerClassName=\"ml-2 text-left tracking-tight max-w-md md:max-w-3xl text-3xl md:text-4xl tracking-tighter mr-auto lg:text-6xl font-bold font-geist  font-normal  text-transparent bg-clip-text bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)] leading-0 md:leading-0 md:pb-0 mt-1\"\n            description=\"\"\n            descriptionClassName=\"  \"\n          >\n            <div className=\"mr-auto text-[0.84rem] ml-2 text-zinc-400 text-left md:text-lg lg:max-w-2xl md:py-5\">\n              <pre className=\"tracking-tight uppercase max-w-md md:max-w-3xl text-wrap\">\n                Move faster with beautiful responsive UI components and website\n                templates with modern design, 100% free and open-source.\n              </pre>\n            </div>\n          </HeroAnimated>\n            <div className=\"mr-auto ml-2  flex flex-wrap gap-y-4 items-start justify-start gap-x-3\">\n              <LinkItem\n                href=\"/components\"\n                className=\"inline-flex rounded-none uppercase font-mono  text-center group items-center w-full justify-center  bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent bg-zinc-900  border-input border-[1px] hover:bg-transparent/10 transition-colors sm:w-auto py-4 px-10\"\n              >\n                Browser Components\n                <ChevronRight className=\"w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n              </LinkItem>\n              <LinkItem\n                href=\"https://github.com/Kinfe123/farm-ui\"\n                variant=\"shiny\"\n                className=\"inline-flex font-mono uppercase tracking-tight rounded-none w-full justify-center items-center gap-x-3 border border-zinc-800 hover:border-zinc-600 bg-zinc-950 hover:text-zinc-100 duration-200 sm:w-auto py-4 px-10\"\n                target=\"_blank\"\n              >\n                <IconGithub className=\"w-5 h-5 \" />\n                Star on GitHub\n              </LinkItem>\n            </div>\n        </div>\n      </section>\n    </>\n  );\n};\nexport default FUIHeroWithGridSimple;\n\n
      
      `,
    },
  },
  "farmui-faq-00": {
    component: <FUIFaqsWithSearchBox />,
    description: "FAQ with Search Box",
    path: "previewsComponents/FUIDarkHeroSection",
    codeCopy: {
      react: `
      \nimport React from \"react\";\n\nexport default function FUIFaqsWithSearchBox() {\n  const faqsList = [\n    {\n      q: \"What are some random questions to ask?\",\n      a: \"That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.\",\n      href: \"javascript:void(0)\",\n    },\n    {\n      q: \"Do you include common questions?\",\n      a: \"This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.\",\n      href: \"javascript:void(0)\",\n    },\n    {\n      q: \"Can I use this for 21 questions?\",\n      a: \"Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.\",\n      href: \"javascript:void(0)\",\n    },\n    {\n      q: \"Are these questions for girls or for boys?\",\n      a: \"The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).\",\n      href: \"javascript:void(0)\",\n    },\n    {\n      q: \"What do you wish you had more talent doing?\",\n      a: \"If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.\",\n      href: \"javascript:void(0)\",\n    },\n  ];\n\n  return (\n    <section className=\"relative\">\n      <img\n        className=\"absolute inset-x-0 -top-20 opacity-25 \"\n        src={\n          \"https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75\"\n        }\n        width={1000}\n        height={1000}\n        alt=\"back bg\"\n      />\n\n      <div className=\"absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div>\n\n      <div className=\"pt-10 max-w-screen-xl mx-auto px-4 md:px-8\">\n        <div className=\"space-y-5 sm:text-left sm:max-w-md sm:mr-auto\">\n          <h3 className=\"text-gray-300 font-geist text-3xl font-extrabold sm:text-4xl\">\n            How can we help?\n          </h3>\n          <p className=\"text-gray-100\">\n            Everything you need to know about the product. Can’t find the answer\n            you’re looking for? feel free to{\" \"}\n            <a\n              className=\"text-cyan-700 font-semibold whitespace-nowrap\"\n              href=\"javascript:void(0)\"\n            >\n              contact us\n            </a>\n            .\n          </p>\n          <form\n            onSubmit={(e) => e.preventDefault()}\n            className=\"mx-auto sm:mx-auto \"\n          >\n            <div className=\"relative\">\n              <Mail className=\"w-6 h-6 text-gray-500 absolute left-3 inset-y-0 my-auto\" />\n              <input\n                type=\"text\"\n                placeholder=\"Enter your email\"\n                className=\"w-full pl-12 pr-3 py-2 text-gray-200 bg-transparent outline-none border focus:border-cyan-600 shadow-sm rounded-lg\"\n              />\n            </div>\n          </form>\n        </div>\n        <Separator className=\"h-[1px] bg-white/10 mt-4\" />\n        <div className=\"mt-12\">\n          <ul className=\"space-y-8 gap-12 grid-cols-2 sm:grid sm:space-y-0 lg:grid-cols-3\">\n            {faqsList.map((item, idx) => (\n              <li key={idx} className=\"space-y-3\">\n                <summary className=\"flex items-center justify-between font-semibold text-gray-500\">\n                  {item.q}\n                </summary>\n                <p\n                  dangerouslySetInnerHTML={{ __html: item.a }}\n                  className=\"text-gray-200 leading-relaxed\"\n                ></p>\n                <a\n                  href={item.href}\n                  className=\"flex items-center gap-x-1 text-sm text-cyan-600 hover:text-cyan-400 duration-150 font-medium\"\n                >\n                  Read more\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    viewBox=\"0 0 20 20\"\n                    fill=\"currentColor\"\n                    className=\"w-5 h-5\"\n                  >\n                    <path\n                      fillRule=\"evenodd\"\n                      d=\"M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z\"\n                      clipRule=\"evenodd\"\n                    />\n                  </svg>\n                </a>\n              </li>\n            ))}\n          </ul>\n        </div>\n      </div>\n    </section>\n  );\n}\n\n
            `,
    },
  },
  "farmui-faq-01": {
    component: <FUIFaqsWithDividedRows />,
    description: "FAQ with divided row",
    path: "previewsComponents/FUIFaqsWithDividedRows",
    codeCopy: {
      react: `
      \nimport React from \"react\";\nexport default function FUIFaqsWithDividedRows() {\n  const faqsList = [\n    {\n      q: \"What are some random questions to ask?\",\n      a: \"That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.\",\n    },\n    {\n      q: \"Do you include common questions?\",\n      a: \"This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.\",\n    },\n    {\n      q: \"Can I use this for 21 questions?\",\n      a: \"Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.\",\n    },\n    {\n      q: \"Are these questions for girls or for boys?\",\n      a: \"The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).\",\n    },\n    {\n      q: \"What do you wish you had more talent doing?\",\n      a: \"If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.\",\n    },\n  ];\n\n  return (\n    <section className=\"relative\">\n      <img\n        className=\"absolute inset-x-0 -top-20 opacity-20 \"\n        src={\n          \"https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75\"\n        }\n        width={1000}\n        height={1000}\n        alt=\"back bg\"\n      />\n\n      <div className=\"py-14 relative  max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8\">\n        <div className=\"flex-1 \">\n          <div className=\"max-w-lg\">\n            <h3 className=\"font-semibold text-cyan-600\">\n              Frequently asked questions\n            </h3>\n            <p className=\"mt-3 text-gray-400 text-3xl font-extrabold sm:text-4xl\">\n              All information you need to know\n            </p>\n            <Separator className=\"h-[1px] mt-5 bg-white/10\" />\n          </div>\n        </div>\n        <div className=\"flex-1 mt-12 md:mt-0\">\n          <ul className=\"space-y-4 divide-y\">\n            {faqsList.map((item, idx) => (\n              <li className=\"py-5\" key={idx}>\n                <summary className=\"flex items-center justify-between font-semibold text-gray-700\">\n                  {item.q}\n                </summary>\n                <p\n                  dangerouslySetInnerHTML={{ __html: item.a }}\n                  className=\"mt-3 text-gray-300 leading-relaxed\"\n                ></p>\n              </li>\n            ))}\n          </ul>\n        </div>\n      </div>\n    </section>\n  );\n}\n\n            
            `,
    },
  },
  "farmui-auth-00": {
    component: <FUILoginWithGridProvider />,
    description: "Login With Grid Providers",
    path: "previewsComponents/FUILoginWithGridProvider",
    codeCopy: {
      react: `\"use client\";\nimport { Input } from \"@/components/ui/input\";\nimport { cn } from \"@/lib/utils\";\nimport { ChevronRight } from \"lucide-react\";\nimport React, { useState } from \"react\";\n\nexport default function FUILoginWithGridProvider() {\n  const [reset, setReset] = useState(false);\n  return (\n    <main className=\"w-full min-h-screen flex flex-col items-center justify-center sm:px-4 relative\">\n      <div className=\"absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]\"></div>\n      <div className=\"w-full  space-y-6 text-gray-600 sm:max-w-md md:max-w-xl lg:max-w-xl px-5 py-10  rounded-2xl  transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]\">\n        <div className=\"text-center\">\n          <img\n            src=\"https://farmui.com/logo.svg\"\n            width={100}\n            className=\"mx-auto rounded-full\"\n          />\n          <div className=\"mt-5 space-y-2\">\n            <h3 className=\"text-gray-200 text-2xl font-normal sm:text-3xl tracking-tighter font-geist\">\n              Log in to your account\n            </h3>\n            <p className=\"text-gray-400\">\n              Don't have an account?{\" \"}\n              <a\n                href=\"javascript:void(0)\"\n                className=\"font-medium text-purple-600 hover:text-purple-500\"\n              >\n                Sign up\n              </a>\n            </p>\n          </div>\n        </div>\n        <div className=\"bg-transparent  shadow p-4 py-6 space-y-8 sm:p-6  sm:rounded-lg\">\n          <div className=\"grid grid-cols-3 gap-x-3\">\n            <button\n              onMouseEnter={() => setReset(false)}\n              onMouseLeave={() => setReset(true)}\n              className=\"group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50\"\n            >\n              <svg\n                className={cn(\n                  \"w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all \",\n                  reset ? \"translate-y-0\" : \"tranistion-transform\"\n                )}\n                viewBox=\"0 0 48 48\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <g clip-path=\"url(#clip0_17_40)\">\n                  <path\n                    d=\"M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z\"\n                    fill=\"#4285F4\"\n                  />\n                  <path\n                    d=\"M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z\"\n                    fill=\"#34A853\"\n                  />\n                  <path\n                    d=\"M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z\"\n                    fill=\"#FBBC04\"\n                  />\n                  <path\n                    d=\"M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z\"\n                    fill=\"#EA4335\"\n                  />\n                </g>\n                <defs>\n                  <clipPath id=\"clip0_17_40\">\n                    <rect width=\"48\" height=\"48\" fill=\"white\" />\n                  </clipPath>\n                </defs>\n              </svg>\n            </button>\n            <button\n              onMouseEnter={() => setReset(false)}\n              onMouseLeave={() => setReset(true)}\n              className=\"group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50\"\n            >\n              <svg\n                className={cn(\n                  \"w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all \",\n                  reset ? \"translate-y-0\" : \"tranistion-transform\"\n                )}\n                viewBox=\"0 0 48 48\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <path\n                  d=\"M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937\"\n                  fill=\"#1DA1F2\"\n                />\n              </svg>\n            </button>\n            <button\n              onMouseEnter={() => setReset(false)}\n              onMouseLeave={() => setReset(true)}\n              className=\"group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50\"\n            >\n              <svg\n                className={cn(\n                  \"w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all \",\n                  reset ? \"translate-y-0\" : \"tranistion-transform\"\n                )}\n                viewBox=\"0 0 48 48\"\n                fill=\"currentColor\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <g clip-path=\"url(#clip0_910_21)\">\n                  <path\n                    fill-rule=\"evenodd\"\n                    clip-rule=\"evenodd\"\n                    d=\"M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M11.0085 37.714C10.8614 37.8167 10.6111 37.714 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3297 10.3503 37.2771 10.3503 37.224C10.3503 37.1709 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9395C10.619 36.8407 10.8694 36.9395 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.714Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0059C13.222 39.9268 13.0432 39.7055 13.0948 39.5159C13.1465 39.3262 13.4207 39.2393 13.6949 39.3262C13.9691 39.4131 14.144 39.6226 14.0923 39.8162Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z\"\n                    fill=\"currentColor\"\n                  />\n                </g>\n                <defs>\n                  <clipPath id=\"clip0_910_21\">\n                    <rect width=\"48\" height=\"48\" fill=\"white\" />\n                  </clipPath>\n                </defs>\n              </svg>\n            </button>{\" \"}\n          </div>\n          <div className=\"relative\">\n            <span className=\"block w-full h-px bg-transparent\"></span>\n            <p className=\"inline-block w-fit text-sm text-gray-200 px-2 absolute -top-2 inset-x-0 mx-auto\">\n              Or continue with\n            </p>\n          </div>\n          <form onSubmit={(e) => e.preventDefault()} className=\"space-y-5\">\n            <div>\n              <label className=\"font-medium text-gray-100/50 font-geist\">\n                Email\n              </label>\n              <Input\n                type=\"email\"\n                required\n                className=\"w-full mt-2 px-3 py-6 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg\"\n              />\n            </div>\n            <div>\n              <label className=\"font-medium text-gray-100/50 font-geist\">\n                Password\n              </label>\n              <Input\n                type=\"password\"\n                required\n                className=\"w-full mt-2 px-3 py-6 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg\"\n              />\n            </div>\n            <button className=\"w-full group px-4 py-4 font-geist tracking-tighter text-xl text-white font-medium bg-purple-200/10 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] hover:bg-transparent/10 active:bg-purple-600 rounded-lg duration-150\">\n              Sign in\n              <ChevronRight className=\"inline-flex justify-center items-center w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n            </button>\n          </form>\n        </div>\n        <div className=\"text-center\">\n          <a href=\"javascript:void(0)\" className=\"hover:text-purple-600\">\n            Forgot password?\n          </a>\n        </div>\n      </div>\n    </main>\n  );\n}\n\n


            `,
    },
  },
  "farmui-auth-01": {
    component: <FUILoginWithListedProvider />,
    description: "Login With LIsted Providers",
    path: "previewsComponents/FUILoginWithListedProvider",
    codeCopy: {
      react: `\"use client\";\nimport { Input } from \"@/components/ui/input\";\nimport { ChevronRight } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function FUILoginWithListedProvider() {\n  return (\n    <main\n      style={{\n        background:\n          \"linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)\",\n      }}\n      className=\"w-full min-h-screen flex flex-col items-center justify-center sm:px-4 relative\"\n    >\n      <div className=\"max-w-sm w-full text-gray-600 space-y-8\">\n        <div className=\"text-left\">\n          <img\n            src=\"https://farmui.com/logo.svg\"\n            width={100}\n            className=\"mr-auto rounded-full\"\n          />\n          <div className=\"mt-5 space-y-2 mr-auto\">\n            <h3 className=\"text-gray-200 text-2xl font-normal sm:text-3xl tracking-tighter font-geist\">\n              Log in to your account\n            </h3>\n            <p className=\"text-gray-400\">\n              Don't have an account?{\" \"}\n              <a\n                href=\"javascript:void(0)\"\n                className=\"font-medium text-pink-600 hover:text-pink-500\"\n              >\n                Sign up\n              </a>\n            </p>\n          </div>\n        </div>\n        <form onSubmit={(e) => e.preventDefault()}>\n          <div>\n            <label className=\"font-medium\">Email</label>\n            <Input\n              type=\"email\"\n              required\n              className=\"w-full mt-2 px-3 py-4 text-gray-500 bg-transparent outline-none  focus:border-pink-600/50 shadow-sm rounded-lg border-white/20 border-[1px]\"\n            />\n          </div>\n          <button className=\"w-full mt-2 group px-4 py-4 font-geist tracking-tighter text-xl text-white font-medium bg-purple-200/10 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] hover:bg-transparent/10 active:bg-purple-600 rounded-lg duration-150\">\n            Sign in\n            <ChevronRight className=\"inline-flex justify-center items-center w-4 h-4 ml-2 group-hover:translate-x-1 duration-300\" />\n          </button>\n        </form>\n        <div className=\"relative\">\n          <span className=\"block w-full h-px \"></span>\n          <p className=\"inline-block w-fit text-sm  text-gray-200 px-2 absolute -top-2 inset-x-0 mx-auto\">\n            Or continue with\n          </p>\n        </div>\n        <div className=\"space-y-4 text-sm text-gray-200/50 font-medium\">\n          <button className=\"group w-full space-x-1 py-3 flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center border rounded-lg hover:bg-transparent/20 duration-150 active:bg-transparent/50\">\n            <svg\n              className=\"w-5 h-5 mr-2\"\n              viewBox=\"0 0 48 48\"\n              fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <g clip-path=\"url(#clip0_17_40)\">\n                <path\n                  d=\"M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z\"\n                  fill=\"#4285F4\"\n                />\n                <path\n                  d=\"M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z\"\n                  fill=\"#34A853\"\n                />\n                <path\n                  d=\"M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z\"\n                  fill=\"#FBBC04\"\n                />\n                <path\n                  d=\"M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z\"\n                  fill=\"#EA4335\"\n                />\n              </g>\n              <defs>\n                <clipPath id=\"clip0_17_40\">\n                  <rect width=\"48\" height=\"48\" fill=\"white\" />\n                </clipPath>\n              </defs>\n            </svg>\n            Continue with Google\n          </button>\n          <button className=\"group w-full space-x-1 py-3 flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center border rounded-lg hover:bg-transparent/20 duration-150 active:bg-transparent/50\">\n            <svg\n              className=\"w-5 h-5 mr-2\"\n              viewBox=\"0 0 48 48\"\n              fill=\"none\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <path\n                d=\"M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937\"\n                fill=\"#1DA1F2\"\n              />\n            </svg>\n            Continue with Twitter\n          </button>\n          <button className=\"group w-full space-x-1 py-3 flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center border rounded-lg hover:bg-transparent/20 duration-150 active:bg-transparent/50\">\n            <svg\n              className=\"w-5 h-5 mr-2\"\n              viewBox=\"0 0 48 48\"\n              fill=\"currentColor\"\n              xmlns=\"http://www.w3.org/2000/svg\"\n            >\n              <g clip-path=\"url(#clip0_910_21)\">\n                <path\n                  fill-rule=\"evenodd\"\n                  clip-rule=\"evenodd\"\n                  d=\"M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M11.0085 37.714C10.8614 37.8167 10.6111 37.714 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3297 10.3503 37.2771 10.3503 37.224C10.3503 37.1709 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9395C10.619 36.8407 10.8694 36.9395 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.714Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0059C13.222 39.9268 13.0432 39.7055 13.0948 39.5159C13.1465 39.3262 13.4207 39.2393 13.6949 39.3262C13.9691 39.4131 14.144 39.6226 14.0923 39.8162Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z\"\n                  fill=\"currentColor\"\n                />\n                <path\n                  d=\"M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z\"\n                  fill=\"currentColor\"\n                />\n              </g>\n              <defs>\n                <clipPath id=\"clip0_910_21\">\n                  <rect width=\"48\" height=\"48\" fill=\"white\" />\n                </clipPath>\n              </defs>\n            </svg>\n            Continue with Github\n          </button>\n        </div>\n        <div className=\"text-center\">\n          <a\n            href=\"javascript:void(0)\"\n            className=\"text-gray-200/40 hover:text-pink-500/90\"\n          >\n            Forgot password?\n          </a>\n        </div>\n      </div>\n    </main>\n  );\n}\n\n\n
            `,
    },
  },
  "farmui-auth-02": {
    component: <FUISignUpWithLeftBackground />,
    description: "Login With Left Alignment",
    path: "previewsComponents/FUISignUpWithLeftBackground",
    codeCopy: {
      react: `\"use client\";\nimport React from \"react\";\nimport { cn } from \"@/lib/utils\";\nimport { Input } from \"@/components/ui/input\";\nimport { Separator } from \"@/components/ui/separator\";\n\nexport default function FUISignUpWithLeftBackground() {\n  const [reset, setReset] = React.useState(false);\n  return (\n    <main className=\"w-full min-h-screen flex overflow-y-hidden\">\n      <div className=\"relative flex-1 hidden items-center justify-center min-h-screen bg-transparent lg:flex\">\n        <div className=\"relative z-10 w-full max-w-lg\">\n          <img\n            src=\"https://farmui.com/logo-dark.svg\"\n            width={100}\n            className=\"rounded-full\"\n          />\n          <div className=\" mt-10 space-y-3\">\n            <h3 className=\"text-white text-3xl md:text-4xl lg:text-5xl font-normal font-geist tracking-tighter\">\n              Start growing your business quickly\n            </h3>\n\n            <Separator className=\"h-px bg-white/20 w-[100px] mr-auto\" />\n            <p className=\"text-gray-300 text-md md:text-xl font-geist tracking-tight\">\n              Create an account and get access to all features for 30-days, No\n              credit card required.\n            </p>\n            <div className=\"flex items-center -space-x-2 overflow-hidden\">\n              <img\n                src=\"https://randomuser.me/api/portraits/women/79.jpg\"\n                className=\"w-10 h-10 rounded-full border-2 border-white\"\n              />\n              <img\n                src=\"https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg\"\n                className=\"w-10 h-10 rounded-full border-2 border-white\"\n              />\n              <img\n                src=\"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f\"\n                className=\"w-10 h-10 rounded-full border-2 border-white\"\n              />\n              <img\n                src=\"https://randomuser.me/api/portraits/men/86.jpg\"\n                className=\"w-10 h-10 rounded-full border-2 border-white\"\n              />\n              <img\n                src=\"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e\"\n                className=\"w-10 h-10 rounded-full border-2 border-white\"\n              />\n              <p className=\"text-sm text-gray-400 font-medium translate-x-5\">\n                Join 5.000+ users\n              </p>\n            </div>\n          </div>\n        </div>\n        <div\n          className=\"absolute inset-0 my-auto h-full\"\n          style={\n            {\n              // background: \"linear- gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)\", filter: \"blur(118px)\"\n            }\n          }\n        >\n          <div className=\"absolute  inset-0 opacity-15  w-full w-full bg-transparent  bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div>\n          <img\n            className=\"absolute inset-x-0 -top-20 opacity-25 \"\n            src={\n              \"https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75\"\n            }\n            width={1000}\n            height={1000}\n            alt=\"back bg\"\n          />\n        </div>\n      </div>\n      <div className=\"flex-1 relative flex items-center justify-center min-h-full\">\n        <img\n          className=\"absolute inset-x-0 -z-1 -top-20 opacity-75 \"\n          src={\n            \"https://pipe.com/_next/image?url=%2Fassets%2Fimg%2Fhero-left.png&w=384&q=75\"\n          }\n          width={1000}\n          height={1000}\n          alt=\"back bg\"\n        />\n        <div className=\"w-full max-w-md md:max-w-lg space-y-8 px-4  text-gray-600 sm:px-0 z-20\">\n          <div className=\"relative\">\n            <img\n              src=\"https://farmui.com/logo.svg\"\n              width={100}\n              className=\"lg:hidden rounded-full\"\n            />\n            <div className=\"mt-5 space-y-2\">\n              <h3 className=\"text-gray-200 text-3xl  font-semibold tracking-tighter sm:text-4xl\">\n                Sign up - Start journey\n              </h3>\n              <p className=\"text-gray-400\">\n                Already have an account?{\" \"}\n                <a\n                  href=\"javascript:void(0)\"\n                  className=\"font-medium text-indigo-600 hover:text-indigo-500\"\n                >\n                  Log in\n                </a>\n              </p>\n            </div>\n          </div>\n          <div className=\"grid grid-cols-3 gap-x-3\">\n            <button\n              onMouseEnter={() => setReset(false)}\n              onMouseLeave={() => setReset(true)}\n              className=\"group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50\"\n            >\n              <svg\n                className={cn(\n                  \"w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all \",\n                  reset ? \"translate-y-0\" : \"tranistion-transform\"\n                )}\n                viewBox=\"0 0 48 48\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <g clip-path=\"url(#clip0_17_40)\">\n                  <path\n                    d=\"M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z\"\n                    fill=\"#4285F4\"\n                  />\n                  <path\n                    d=\"M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z\"\n                    fill=\"#34A853\"\n                  />\n                  <path\n                    d=\"M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z\"\n                    fill=\"#FBBC04\"\n                  />\n                  <path\n                    d=\"M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z\"\n                    fill=\"#EA4335\"\n                  />\n                </g>\n                <defs>\n                  <clipPath id=\"clip0_17_40\">\n                    <rect width=\"48\" height=\"48\" fill=\"white\" />\n                  </clipPath>\n                </defs>\n              </svg>\n            </button>\n\n            <button\n              onMouseEnter={() => setReset(false)}\n              onMouseLeave={() => setReset(true)}\n              className=\"group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50\"\n            >\n              <svg\n                className={cn(\n                  \"w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all \",\n                  reset ? \"translate-y-0\" : \"tranistion-transform\"\n                )}\n                viewBox=\"0 0 48 48\"\n                fill=\"none\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <path\n                  d=\"M15.095 43.5014C33.2083 43.5014 43.1155 28.4946 43.1155 15.4809C43.1155 15.0546 43.1155 14.6303 43.0867 14.2079C45.0141 12.8138 46.6778 11.0877 48 9.11033C46.2028 9.90713 44.2961 10.4294 42.3437 10.6598C44.3996 9.42915 45.9383 7.49333 46.6733 5.21273C44.7402 6.35994 42.6253 7.16838 40.4198 7.60313C38.935 6.02428 36.9712 4.97881 34.8324 4.6285C32.6935 4.27818 30.4988 4.64256 28.5879 5.66523C26.677 6.68791 25.1564 8.31187 24.2615 10.2858C23.3665 12.2598 23.1471 14.4737 23.6371 16.5849C19.7218 16.3885 15.8915 15.371 12.3949 13.5983C8.89831 11.8257 5.81353 9.33765 3.3408 6.29561C2.08146 8.4636 1.69574 11.0301 2.2622 13.4725C2.82865 15.9148 4.30468 18.0495 6.38976 19.4418C4.82246 19.3959 3.2893 18.9731 1.92 18.2092V18.334C1.92062 20.6077 2.7077 22.8112 4.14774 24.5707C5.58778 26.3303 7.59212 27.5375 9.8208 27.9878C8.37096 28.3832 6.84975 28.441 5.37408 28.1567C6.00363 30.1134 7.22886 31.8244 8.87848 33.0506C10.5281 34.2768 12.5197 34.9569 14.5747 34.9958C12.5329 36.6007 10.1946 37.7873 7.69375 38.4878C5.19287 39.1882 2.57843 39.3886 0 39.0777C4.50367 41.9677 9.74385 43.5007 15.095 43.4937\"\n                  fill=\"#1DA1F2\"\n                />\n              </svg>\n            </button>\n            <button\n              onMouseEnter={() => setReset(false)}\n              onMouseLeave={() => setReset(true)}\n              className=\"group flex transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  border-white/10  items-center justify-center py-5 border rounded-lg hover:bg-transparent/50 duration-150 active:bg-transparent/50\"\n            >\n              <svg\n                className={cn(\n                  \"w-5 h-5 group-hover:-translate-y-1 duration-300 transition-all \",\n                  reset ? \"translate-y-0\" : \"tranistion-transform\"\n                )}\n                viewBox=\"0 0 48 48\"\n                fill=\"currentColor\"\n                xmlns=\"http://www.w3.org/2000/svg\"\n              >\n                <g clip-path=\"url(#clip0_910_21)\">\n                  <path\n                    fill-rule=\"evenodd\"\n                    clip-rule=\"evenodd\"\n                    d=\"M24.0005 1C18.303 1.00296 12.7923 3.02092 8.45374 6.69305C4.11521 10.3652 1.23181 15.452 0.319089 21.044C-0.593628 26.636 0.523853 32.3684 3.47174 37.2164C6.41963 42.0643 11.0057 45.7115 16.4099 47.5059C17.6021 47.7272 18.0512 46.9883 18.0512 46.36C18.0512 45.7317 18.0273 43.91 18.0194 41.9184C11.3428 43.3608 9.93197 39.101 9.93197 39.101C8.84305 36.3349 7.26927 35.6078 7.26927 35.6078C5.09143 34.1299 7.43223 34.1576 7.43223 34.1576C9.84455 34.3275 11.1123 36.6194 11.1123 36.6194C13.2504 40.2667 16.7278 39.2116 18.0949 38.5952C18.3095 37.0501 18.9335 35.999 19.621 35.4023C14.2877 34.8017 8.68408 32.7548 8.68408 23.6108C8.65102 21.2394 9.53605 18.9461 11.156 17.2054C10.9096 16.6047 10.087 14.1785 11.3905 10.8829C11.3905 10.8829 13.4054 10.2427 17.9916 13.3289C21.9253 12.2592 26.0757 12.2592 30.0095 13.3289C34.5917 10.2427 36.6026 10.8829 36.6026 10.8829C37.9101 14.1706 37.0875 16.5968 36.8411 17.2054C38.4662 18.9464 39.353 21.2437 39.317 23.6187C39.317 32.7824 33.7015 34.8017 28.3602 35.3905C29.2186 36.1334 29.9856 37.5836 29.9856 39.8122C29.9856 43.0051 29.9578 45.5736 29.9578 46.36C29.9578 46.9962 30.391 47.7391 31.6071 47.5059C37.0119 45.7113 41.5984 42.0634 44.5462 37.2147C47.4941 32.3659 48.611 26.6326 47.6972 21.0401C46.7835 15.4476 43.8986 10.3607 39.5587 6.68921C35.2187 3.01771 29.7067 1.00108 24.0085 1H24.0005Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M9.08887 35.264C9.03721 35.3826 8.84645 35.4181 8.69146 35.3351C8.53646 35.2522 8.42122 35.098 8.47686 34.9755C8.5325 34.853 8.71928 34.8214 8.87428 34.9044C9.02927 34.9874 9.14848 35.1455 9.08887 35.264Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M10.0626 36.3428C9.98028 36.384 9.88612 36.3955 9.79622 36.3753C9.70632 36.3551 9.62629 36.3045 9.56979 36.2321C9.41479 36.0662 9.38298 35.837 9.50221 35.7342C9.62143 35.6315 9.83606 35.6789 9.99105 35.8449C10.146 36.0108 10.1818 36.24 10.0626 36.3428Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M11.0085 37.714C10.8614 37.8167 10.6111 37.714 10.472 37.5085C10.4335 37.4716 10.4029 37.4274 10.382 37.3785C10.3611 37.3297 10.3503 37.2771 10.3503 37.224C10.3503 37.1709 10.3611 37.1183 10.382 37.0694C10.4029 37.0205 10.4335 36.9763 10.472 36.9395C10.619 36.8407 10.8694 36.9395 11.0085 37.141C11.1476 37.3425 11.1516 37.6112 11.0085 37.714Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M12.2921 39.0417C12.161 39.1879 11.8947 39.1484 11.6761 38.9508C11.4575 38.7532 11.4059 38.4845 11.537 38.3423C11.6682 38.2 11.9344 38.2395 12.161 38.4331C12.3875 38.6268 12.4312 38.8994 12.2921 39.0417Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M14.0923 39.8162C14.0327 40.0019 13.7625 40.0849 13.4922 40.0059C13.222 39.9268 13.0432 39.7055 13.0948 39.5159C13.1465 39.3262 13.4207 39.2393 13.6949 39.3262C13.9691 39.4131 14.144 39.6226 14.0923 39.8162Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M16.0557 39.9505C16.0557 40.1442 15.8331 40.3101 15.547 40.3141C15.2608 40.318 15.0264 40.16 15.0264 39.9663C15.0264 39.7727 15.2489 39.6067 15.535 39.6028C15.8212 39.5988 16.0557 39.753 16.0557 39.9505Z\"\n                    fill=\"currentColor\"\n                  />\n                  <path\n                    d=\"M17.8838 39.6463C17.9196 39.8399 17.7208 40.0414 17.4347 40.0888C17.1486 40.1363 16.8982 40.0217 16.8624 39.832C16.8267 39.6423 17.0333 39.4368 17.3115 39.3855C17.5897 39.3341 17.848 39.4526 17.8838 39.6463Z\"\n                    fill=\"currentColor\"\n                  />\n                </g>\n                <defs>\n                  <clipPath id=\"clip0_910_21\">\n                    <rect width=\"48\" height=\"48\" fill=\"white\" />\n                  </clipPath>\n                </defs>\n              </svg>\n            </button>\n          </div>\n          <Separator className=\"h-px bg-white/20\" />\n          <form onSubmit={(e) => e.preventDefault()} className=\"space-y-5 z-20\">\n            <div>\n              <label className=\"font-medium text-gray-100/50 font-geist\">\n                Name\n              </label>\n              <Input\n                type=\"text\"\n                required\n                className=\"w-full mt-2 px-3 py-5 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg\"\n              />\n            </div>\n            <div>\n              <label className=\"font-medium text-gray-100/50 font-geist\">\n                Email\n              </label>\n              <Input\n                type=\"email\"\n                required\n                className=\"w-full mt-2 px-3 py-5 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg\"\n              />\n            </div>\n            <div>\n              <label className=\"font-medium text-gray-100/50 font-geist\">\n                Password\n              </label>\n              <Input\n                type=\"password\"\n                required\n                className=\"w-full mt-2 px-3 py-5 text-gray-500 bg-transparent outline-none border focus:border-purple-600 shadow-sm rounded-lg\"\n              />\n            </div>\n            <button className=\"w-full font-geist tracking-tighter text-center rounded-md bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-blue-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70 flex items-center justify-center gap-2\">\n              Create account\n            </button>\n          </form>\n        </div>\n      </div>\n    </main>\n  );\n}\n\n\n

            `,
    },
  },
  "farmui-auth-03": {
    component: <FUILoginWithCardLayout />,
    description: "Login With Card Layout",
    path: "previewsComponents/FUILoginWithCardLayout",
    codeCopy: {
      react: `\"use client\";\n\nimport { Label } from \"@/components/ui/label\";\nimport { Input } from \"@/components/ui/input\";\nimport Link from \"next/link\";\n\nexport default function FUILoginWithCardLayout() {\n  return (\n    <div className=\"flex min-h-[100dvh] relative items-center justify-center bg-gray-100 px-4 dark:bg-white\">\n      <div className=\"absolute inset-0 z-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]\">\n        <div className=\"absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]\"></div>\n      </div>\n      <div className=\"absolute top-0 z-[-1] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]\"></div>\n      <div className=\"mx-auto z-10 text-gray-700 w-full max-w-[500px]\">\n        <div className=\"mb-8 text-center\">\n          <h1 className=\"text-3xl font-normal font-geist tracking-tighter\">\n            Welcome back\n          </h1>\n          <p className=\"text-gray-800/90 dark:text-gray-400 font-geist font-normal\">\n            Sign in to your account to continue\n          </p>\n        </div>\n        <form className=\"space-y-4\">\n          <div>\n            <Label htmlFor=\"email\">Email</Label>\n            <Input\n              id=\"email\"\n              placeholder=\"m@example.com\"\n              required\n              type=\"email\"\n            />\n          </div>\n          <div>\n            <Label htmlFor=\"password\">Password</Label>\n            <Input\n              id=\"password\"\n              placeholder=\"••••••••\"\n              required\n              type=\"password\"\n            />\n          </div>\n          <button className=\"relative h-12 w-full mx-auto text-center font-geist tracking-tighter  overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2\">\n            <span className=\"relative\">Sign In</span>\n          </button>\n        </form>\n        <div className=\"mt-6 text-center text-sm\">\n          <p className=\"text-gray-500 dark:text-gray-400\">\n            Don't have an account?\n            <Link\n              className=\"font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-500 ml-2\"\n              href=\"#\"\n            >\n              Sign up\n            </Link>\n          </p>\n          <p className=\"mt-4 text-gray-500 dark:text-gray-400\">\n            Forgot your password?\n            <Link\n              className=\"font-medium text-gray-900 underline-offset-4 hover:underline dark:text-gray-500 ml-2\"\n              href=\"#\"\n            >\n              Reset password\n            </Link>\n          </p>\n        </div>\n        <div className=\"mt-6 border-t pt-6\">\n          <div className=\"flex items-center justify-center gap-4\">\n           \n            <button className=\"relative flex justify-center items-center  h-12 w-full mx-auto text-center font-geist tracking-tighter  overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2\">\n              <GithubIcon className=\"mr-2 h-4 w-4\" />\n              Sign in with GitHub\n            </button>\n            <button className=\"relative flex justify-center items-center  h-12 w-full mx-auto text-center font-geist tracking-tighter  overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-300 hover:bg-neutral-800 hover:ring-2 hover:ring-neutral-800 hover:ring-offset-2\">\n              <ChromeIcon className=\"mr-2 h-4 w-4\" />\n              Sign in with Google\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}\n\nfunction ChromeIcon(props:any) {\n  return (\n    <svg\n      {...props}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"24\"\n      height=\"24\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      strokeWidth=\"2\"\n      strokeLinecap=\"round\"\n      strokeLinejoin=\"round\"\n    >\n      <circle cx=\"12\" cy=\"12\" r=\"10\" />\n      <circle cx=\"12\" cy=\"12\" r=\"4\" />\n      <line x1=\"21.17\" x2=\"12\" y1=\"8\" y2=\"8\" />\n      <line x1=\"3.95\" x2=\"8.54\" y1=\"6.06\" y2=\"14\" />\n      <line x1=\"10.88\" x2=\"15.46\" y1=\"21.94\" y2=\"14\" />\n    </svg>\n  );\n}\n\nfunction GithubIcon(props:any) {\n  return (\n    <svg\n      {...props}\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"24\"\n      height=\"24\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      strokeWidth=\"2\"\n      strokeLinecap=\"round\"\n      strokeLinejoin=\"round\"\n    >\n      <path d=\"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4\" />\n      <path d=\"M9 18c-4.51 2-5-2-7-2\" />\n    </svg>\n  );\n}\n\n\n\n\n        \n\n\n\n

      `,  
    },
  },
  "farmui-pricing-00": {
    component: <FUIPricingSectionWithBadge />,
    description: "Pricing page With Badge ",
    path: "previewsComponents/FUIPricingSectionWithBadge",
    codeCopy: {
      react: `
import { CheckIcon } from "@heroicons/react/20/solid";
const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$49",
    description:
      "Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Team",
    id: "tier-team",
    href: "#",
    priceMonthly: "$79",
    description:
      "Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
  },
];

export default function FUIPricingWithSpecialTwo() {
  return (
    <div className="isolate relative overflow-hidden bg-transparent">
      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-pink-400/90 ">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-geist md:leading-4">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute opacity-70 -top-10 left-1/2 -z-8 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root z-20 bg-transparent pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className="flex z-10 flex-col justify-between rounded-3xl bg-transparent/10 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
                >
                  <div>
                    <h3
                      id={tier.id}
                      className="text-base font-semibold leading-7 text-pink-600/90"
                    >
                      {tier.name}
                    </h3>
                    <div className="mt-4 flex items-baseline gap-x-2">
                      <span className="text-5xl font-bold tracking-tight text-gray-100">
                        {tier.priceMonthly}
                      </span>
                      <span className="text-base font-semibold leading-7 text-gray-200">
                        /month
                      </span>
                    </div>
                    <p className="mt-6 text-base leading-7 text-gray-200">
                      {tier.description}
                    </p>
                    <ul
                      role="list"
                      className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
                    >
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            className="h-6 w-5 flex-none text-pink-600/90"
                            aria-hidden="true"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-pink-600/90 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90"
                  >
                    Get started today
                  </a>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
                <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-pink-600/90">
                    Discounted
                  </h3>
                  <p className="mt-1 text-base leading-7 text-gray-200">
                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.
                    Odit omnis non voluptatem sunt eos nostrum.
                  </p>
                </div>
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-pink-600/90 ring-1 ring-inset ring-pink-200/90 hover:ring-pink-300/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90"
                >
                  Buy discounted license <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

            `,
    },
  },
  "farmui-pricing-01": {
    component: <FUIPricingSectionWithOnePlan />,
    description: "Pricing page With One Plan ",
    path: "previewsComponents/FUIPricingSectionWithOnePlan",
    codeCopy: {
      react: `\nimport React from \"react\";\nexport default function FUIPricingSectionWithOnePlan() {\n  const plan = {\n    name: \"Basic plan\",\n    desc: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\",\n    price: 32,\n    isMostPop: true,\n    features: [\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n      \"Curabitur faucibus\",\n    ],\n  };\n\n  const features = [\n    {\n      name: \"Scalable\",\n      desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\",\n      icon: (\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          strokeWidth={1.5}\n          stroke=\"currentColor\"\n          className=\"w-6 h-6\"\n        >\n          <path\n            strokeLinecap=\"round\"\n            strokeLinejoin=\"round\"\n            d=\"M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15\"\n          />\n        </svg>\n      ),\n    },\n    {\n      name: \"Flexible\",\n      desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\",\n      icon: (\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          strokeWidth={1.5}\n          stroke=\"currentColor\"\n          className=\"w-6 h-6\"\n        >\n          <path\n            strokeLinecap=\"round\"\n            strokeLinejoin=\"round\"\n            d=\"M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3\"\n          />\n        </svg>\n      ),\n    },\n    {\n      name: \"Smooth\",\n      desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\",\n      icon: (\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          strokeWidth={1.5}\n          stroke=\"currentColor\"\n          className=\"w-6 h-6\"\n        >\n          <path\n            strokeLinecap=\"round\"\n            strokeLinejoin=\"round\"\n            d=\"M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z\"\n          />\n        </svg>\n      ),\n    },\n    {\n      name: \"Secure\",\n      desc: \"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text\",\n      icon: (\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          fill=\"none\"\n          viewBox=\"0 0 24 24\"\n          strokeWidth={1.5}\n          stroke=\"currentColor\"\n          className=\"w-6 h-6\"\n        >\n          <path\n            strokeLinecap=\"round\"\n            strokeLinejoin=\"round\"\n            d=\"M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z\"\n          />\n        </svg>\n      ),\n    },\n  ];\n\n  return (\n    <section className=\"relative py-14\">\n      <div className=\"absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]\"></div>\n\n      <div className=\"max-w-screen-xl mx-auto text-gray-400 md:px-8\">\n        <div className=\"relative max-w-xl space-y-3 px-4 md:px-0\">\n          <h3 className=\"text-purple-600 font-semibold\">Pricing</h3>\n          <p className=\"mt-2 text-4xl font-geist text-white/90 font-normal  tracking-tighter  sm:text-5xl\">\n            The right price for you{\" \"}\n            <br className=\"hidden sm:inline lg:hidden\" />\n            whoever you are\n          </p>\n          <div className=\"max-w-xl\">\n            <p>\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam\n              efficitur consequat nunc.\n            </p>\n          </div>\n        </div>\n        <div className=\"mt-16 justify-between gap-8 md:flex\">\n          <ul className=\"flex-1 max-w-md space-y-10 px-4 md:px-0\">\n            {features.map((item, idx) => (\n              <li key={idx} className=\"flex gap-x-3\">\n                <div className=\"flex-none w-12 h-12 rounded-full  bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  text-purple-600 flex items-center justify-center\">\n                  {item.icon}\n                </div>\n                <div>\n                  <h4 className=\"text-lg text-gray-100  font-normal tracking-tight font-geist\">\n                    {item.name}\n                  </h4>\n                  <p className=\"text-gray-400 mt-2 md:text-sm\">{item.desc}</p>\n                </div>\n              </li>\n            ))}\n          </ul>\n          <div className=\"flex-1 flex flex-col border-y mt-6 md:max-w-xl md:rounded-xl md:border md:border-x-none md:shadow-lg md:mt-0 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]\">\n            <div className=\"p-4 py-8 border-b md:p-8\">\n              <div className=\"justify-between flex\">\n                <div className=\"max-w-xs\">\n                  <span className=\"text-2xl text-gray-100  font-semibold font-geist tracking-tighter sm:text-3xl\">\n                    {plan.name}\n                  </span>\n                  <p className=\"mt-3 sm:text-sm\">{plan.desc}</p>\n                </div>\n                <div className=\"flex-none text-gray-100  text-2xl font-semibold font-geist sm:text-3xl\">\n                  \${plan.price}{\" \"}\n                  <span className=\"text-xl text-gray-400 font-normal\">/mo</span>\n                </div>\n              </div>\n              <button className=\"mt-4 w-full font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-purple-400 to-purple-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-purple-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-purple-500/70 flex items-center justify-center gap-2\">\n                Get Started\n              </button>\n            </div>\n            <ul className=\"p-4 space-y-3 sm:grid sm:grid-cols-2 md:block md:p-8 lg:grid\">\n              <div className=\"pb-2 col-span-2 text-gray-100  font-medium\">\n                <p>Features</p>\n              </div>\n              {plan.features.map((featureItem, idx) => (\n                <li key={idx} className=\"flex items-center gap-5\">\n                  <svg\n                    xmlns=\"http://www.w3.org/2000/svg\"\n                    className=\"h-5 w-5 text-purple-600\"\n                    viewBox=\"0 0 20 20\"\n                    fill=\"currentColor\"\n                  >\n                    <path\n                      fill-rule=\"evenodd\"\n                      d=\"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z\"\n                      clip-rule=\"evenodd\"\n                    ></path>\n                  </svg>\n                  {featureItem}\n                </li>\n              ))}\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n  );\n}\n        \n\n\n\n
            
            `,
    },
  },
  "farmui-pricing-02": {
    component: <FUIPricingWithSpecialTwo />,
    description: "Pricing page With One Plan ",
    path: "previewsComponents/FUIPricingWithSpecialTwo",
    codeCopy: {
      react: `
      \nimport { CheckIcon } from \"@heroicons/react/20/solid\";\n\nconst tiers = [\n  {\n    name: \"Hobby\",\n    id: \"tier-hobby\",\n    href: \"#\",\n    priceMonthly: \"$49\",\n    description:\n      \"Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.\",\n    features: [\n      \"5 products\",\n      \"Up to 1,000 subscribers\",\n      \"Basic analytics\",\n      \"48-hour support response time\",\n    ],\n  },\n  {\n    name: \"Team\",\n    id: \"tier-team\",\n    href: \"#\",\n    priceMonthly: \"$79\",\n    description:\n      \"Explicabo quo fugit vel facere ullam corrupti non dolores. Expedita eius sit sequi.\",\n    features: [\n      \"Unlimited products\",\n      \"Unlimited subscribers\",\n      \"Advanced analytics\",\n      \"1-hour, dedicated support response time\",\n      \"Marketing automations\",\n    ],\n  },\n];\n\nexport default function FUIPricingWithSpecialTwo() {\n  return (\n    <div className=\"isolate relative overflow-hidden bg-transparent\">\n      <div className=\"absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]\"></div>\n      <div className=\"mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8\">\n        <div className=\"mx-auto max-w-4xl\">\n          <h2 className=\"text-base font-semibold leading-7 text-pink-400/90 \">\n            Pricing\n          </h2>\n          <p className=\"mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl font-geist md:leading-4\">\n            The right price for you,{\" \"}\n            <br className=\"hidden sm:inline lg:hidden\" />\n            whoever you are\n          </p>\n        </div>\n        <div className=\"relative mt-6\">\n          <p className=\"mx-auto max-w-2xl text-lg leading-8 text-white/60\">\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit\n            numquam eligendi quos odit doloribus molestiae voluptatum.\n          </p>\n          <svg\n            viewBox=\"0 0 1208 1024\"\n            className=\"absolute opacity-70 -top-10 left-1/2 -z-8 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0\"\n          >\n            <ellipse\n              cx={604}\n              cy={512}\n              fill=\"url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)\"\n              rx={604}\n              ry={512}\n            />\n            <defs>\n              <radialGradient id=\"6d1bd035-0dd1-437e-93fa-59d316231eb0\">\n                <stop stopColor=\"#7775D6\" />\n                <stop offset={1} stopColor=\"#E935C1\" />\n              </radialGradient>\n            </defs>\n          </svg>\n        </div>\n      </div>\n      <div className=\"flow-root z-20 bg-transparent pb-24 sm:pb-32\">\n        <div className=\"-mt-80\">\n          <div className=\"mx-auto max-w-7xl px-6 lg:px-8\">\n            <div className=\"mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2\">\n              {tiers.map((tier) => (\n                <div\n                  key={tier.id}\n                  className=\"flex z-10 flex-col justify-between rounded-3xl bg-transparent/10 p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10 dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]\"\n                >\n                  <div>\n                    <h3\n                      id={tier.id}\n                      className=\"text-base font-semibold leading-7 text-pink-600/90\"\n                    >\n                      {tier.name}\n                    </h3>\n                    <div className=\"mt-4 flex items-baseline gap-x-2\">\n                      <span className=\"text-5xl font-bold tracking-tight text-gray-100\">\n                        {tier.priceMonthly}\n                      </span>\n                      <span className=\"text-base font-semibold leading-7 text-gray-200\">\n                        /month\n                      </span>\n                    </div>\n                    <p className=\"mt-6 text-base leading-7 text-gray-200\">\n                      {tier.description}\n                    </p>\n                    <ul\n                      role=\"list\"\n                      className=\"mt-10 space-y-4 text-sm leading-6 text-gray-200\"\n                    >\n                      {tier.features.map((feature) => (\n                        <li key={feature} className=\"flex gap-x-3\">\n                          <CheckIcon\n                            className=\"h-6 w-5 flex-none text-pink-600/90\"\n                            aria-hidden=\"true\"\n                          />\n                          {feature}\n                        </li>\n                      ))}\n                    </ul>\n                  </div>\n                  <a\n                    href={tier.href}\n                    aria-describedby={tier.id}\n                    className=\"mt-8 block rounded-md bg-pink-600/90 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90\"\n                  >\n                    Get started today\n                  </a>\n                </div>\n              ))}\n              <div className=\"flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]\">\n                <div className=\"lg:min-w-0 lg:flex-1\">\n                  <h3 className=\"text-lg font-semibold leading-8 tracking-tight text-pink-600/90\">\n                    Discounted\n                  </h3>\n                  <p className=\"mt-1 text-base leading-7 text-gray-200\">\n                    Dolor dolores repudiandae doloribus. Rerum sunt aut eum.\n                    Odit omnis non voluptatem sunt eos nostrum.\n                  </p>\n                </div>\n                <a\n                  href=\"#\"\n                  className=\"rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-pink-600/90 ring-1 ring-inset ring-pink-200/90 hover:ring-pink-300/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600/90\"\n                >\n                  Buy discounted license <span aria-hidden=\"true\">→</span>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  );\n}\n\n\n\n

            `,
    },
  },
  "farmui-pricing-03": {
    component: <FUIPricingSectionWithTable />,
    description: "Pricing page With Table ",
    path: "previewsComponents/FUIPricingSectionWithTable",
    codeCopy: {
      react: `\n'use client'\nimport React from \"react\";\nexport default function FUIPricingSectionWithTable() {\n\n    const checkIcon = <svg className=\"w-5 h-5 mx-auto text-zinc-600\" fill=\"currentColor\" viewBox=\"0 0 20 20\"><path d=\"M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z\" /></svg>\n    const minusIcon = <svg className=\"w-5 h-5 mx-auto text-gray-500\" fill=\"currentColor\" viewBox=\"0 0 20 20\"><path d=\"M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z\" /></svg>\n\n    const plans = [\n        {\n            name: \"Basic\",\n            desc: \"Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.\",\n            price: \"15\"\n        },\n        {\n            name: \"Business\",\n            desc: \"Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.\",\n            price: \"20\"\n        },\n        {\n            name: \"Enterprise\",\n            desc: \"Lorem ipsum dolor sit amet torrel, consectet adipiscing elit.\",\n            price: \"50\"\n        },\n    ]\n\n    const tables = [\n        {\n            label: \"Features\",\n            label_icon:\n                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-6 h-6\">\n                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z\" />\n                </svg>,\n            items: [\n                {\n                    name: \"Aliquam finibus\",\n                    basic: checkIcon,\n                    business: checkIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Vestibulum tristique\",\n                    basic: minusIcon,\n                    business: checkIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Aliquam finibus\",\n                    basic: minusIcon,\n                    business: minusIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Praesent aliquet\",\n                    basic: minusIcon,\n                    business: \"150GB\",\n                    enterprise: \"Unlimited\"\n                },\n            ]\n        },\n        {\n            label: \"Analytics\",\n            label_icon:\n                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-6 h-6\">\n                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z\" />\n                </svg>,\n            items: [\n                {\n                    name: \"Aliquam finibus\",\n                    basic: checkIcon,\n                    business: checkIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Vestibulum tristique\",\n                    basic: minusIcon,\n                    business: checkIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Aliquam finibus\",\n                    basic: minusIcon,\n                    business: minusIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Lorinto dinor\",\n                    basic: \"30\",\n                    business: \"60\",\n                    enterprise: \"Custom\"\n                },\n                {\n                    name: \"Praesent aliquet\",\n                    basic: \"Limited\",\n                    business: \"Limited\",\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Praesent aliquet\",\n                    basic: minusIcon,\n                    business: \"150GB\",\n                    enterprise: \"Unlimited\"\n                },\n            ]\n        },\n        {\n            label: \"Support\",\n            label_icon:\n                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth={1.5} stroke=\"currentColor\" className=\"w-6 h-6\">\n                    <path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z\" />\n                </svg>,\n            items: [\n                {\n                    name: \"Aliquam finibus\",\n                    basic: checkIcon,\n                    business: checkIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Vestibulum tristique\",\n                    basic: minusIcon,\n                    business: checkIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Aliquam finibus\",\n                    basic: minusIcon,\n                    business: minusIcon,\n                    enterprise: checkIcon\n                },\n                {\n                    name: \"Praesent aliquet\",\n                    basic: minusIcon,\n                    business: \"150GB\",\n                    enterprise: \"Unlimited\"\n                },\n            ]\n        }\n    ]\n\n    const [selectedPlan, setSelectedPlan] = React.useState(plans[0].name)\n\n    return (\n        <section className=\"py-14 max-w-screen-xl mx-auto text-gray-100 relative\">\n        <img src='https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif' className=\"absolute top-0 left-0\"/>\n            <div className=\"\">\n                <div className='relative ml-6 max-w-xl mr-auto  space-y-3 px-4 sm:text-left md:px-0'>\n                    <h3 className=\"text-zinc-100 font-semibold\">\n                        Pricing\n                    </h3>\n                    <p className='text-gray-200 tracking-tighter font-geist text-3xl font-normal sm:text-6xl '>\n                        Compare our plans and find yours\n                    </p>\n                    <div className='max-w-xl'>\n                        <p>\n                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.\n                        </p>\n                    </div>\n                </div>\n                <div className=\"mt-16\">\n                    <div className=\"sticky top-0 py-6 border-b bg-transparent dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] rounded-xl\">\n                        <div className=\"max-w-screen-xl mx-auto\">\n                            <ul className=\"ml-auto flex gap-x-6 px-4 md:px-8 lg:max-w-3xl\">\n                                {\n                                    plans.map((item, idx) => (\n                                        <li key={idx} className={\`space-y-4 w-full hidden lg:block\`}>\n                                            <div className=\"flex items-center justify-between\">\n                                                <span className='text-gray-700 font-medium'>\n                                                    {item.name}\n                                                </span>\n                                                <div className=\"relative lg:hidden\">\n                                                    <svg className=\"w-5 h-5 text-gray-500 absolute right-0 inset-y-0 my-auto\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                                                        <path fillRule=\"evenodd\" d=\"M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z\" clipRule=\"evenodd\" />\n                                                    </svg>\n                                                    <select value=\"Switch plan\" className=\"bg-transparent appearance-none outline-none px-8 cursor-pointer\"\n                                                        onChange={(e) => setSelectedPlan(e.target.value)}\n                                                    >\n                                                        <option disabled selected>Switch plan</option>\n                                                        {plans.map((option, idx) => (\n                                                            <option key={idx}>{option.name}</option>\n                                                        ))}\n                                                    </select>\n                                                </div>\n                                            </div>\n                                            <div className='text-gray-200 text-3xl font-semibold'>\n                                                undefined <span className=\"text-xl text-gray-100 font-normal\">/mo</span>\n                                            </div>\n                                            <p className=\"text-sm\">\n                                                {item.desc}\n                                            </p>\n                                            <button className='mt-4 w-full font-geist tracking-tighter text-center rounded-md text-md bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-zinc-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70 flex items-center justify-center gap-2'>\n                                                Get Started\n                                            </button>\n                                        </li>\n                                    ))\n                                }\n                            </ul>\n                        </div>\n                    </div>\n                    <div className=\"max-w-screen-xl mx-auto mt-10 space-y-4 px-4 overflow-auto md:overflow-visible md:px-8\">\n                        {\n                            tables.map((table, idx) => (\n                                <table key={idx} className=\"w-full table-auto text-sm text-left\">\n                                    <thead className=\"text-gray-100 font-medium border-b\">\n                                        <tr>\n                                            <th className=\"z-20 top-12 py-6 lg:sticky\">\n                                                <div className=\"flex items-center gap-x-3\">\n                                                    <div className=\"w-12 h-12 text-zinc-600 rounded-full border flex items-center justify-center\">\n                                                        {table.label_icon}\n                                                    </div>\n                                                    <h4 className=\"text-gray-200 text-xl font-medium\">\n                                                        {table.label}\n                                                    </h4>\n                                                </div>\n                                            </th>\n                                        </tr>\n                                    </thead>\n                                    <tbody className=\"text-gray-100 divide-y\">\n                                        {\n                                            table.items.map((item, idx) => (\n                                                <>\n                                                    <tr key={idx}>\n                                                        <td className=\"px-6 py-4 whitespace-nowrap\">{item.name}</td>\n                                                     \n                                                        <td className=\"text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell\">{item.basic}</td>\n                                                        <td className=\"text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell\">{item.business}</td>\n                                                        <td className=\"text-center w-[250px] px-6 py-4 whitespace-nowrap hidden lg:table-cell\">{item.enterprise}</td>\n                                                    \n                                                        <td className=\"text-center w-[250px] px-6 py-4 whitespace-nowrap lg:hidden\">\n                                                            {item[selectedPlan.toLowerCase()]}\n                                                        </td>\n                                                    </tr>\n                                                </>\n                                            ))\n                                        }\n                                    </tbody>\n                                </table>\n                            ))\n                        }\n                    </div>\n                </div>\n            </div>\n        </section>\n    )\n}\n        \n\n\n\n`,
    },
  },
  "farmui-feature-00": {
    component: <FUIFeatureSectionWithCards />,
    description: "Feature Section With Cards ",
    path: "previewsComponents/FUIFeatureSectionWithCards",
    codeCopy: {
      react: `
import React from "react";
export default function FUIFeatureSectionWithCards() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
          />
        </svg>
      ),
      title: "Fast Refresh",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
          />
        </svg>
      ),
      title: "Analytics",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
      title: "Datacenter security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: "Build on your terms",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
      title: "Safe to use",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
          />
        </svg>
      ),
      title: "Flexible",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius.",
    },
  ];

  return (
    <section className="py-14 relative">
      <img
        src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
        className="absolute z-2 -top-0 left-10"
      />
      <div className="max-w-screen-xl mx-auto px-4 text-gray-400 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-gray-200 mt-4 text-3xl font-normal font-geist tracking-tighter md:text-5xl sm:text-4xl">
              Let’s help power your SaaS
            </h3>
            <p className="mt-3 font-geist text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              congue, nisl eget molestie varius, enim ex faucibus purus.
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <hr className="bg-white/30 h-px w-1/2 mx-auto  mt-5"/>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset]  space-y-3 p-4 border rounded-xl"
              >
                <div className="text-purple-600 rounded-full p-4 transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#8686f01f_inset] w-fit">{item.icon}</div>
                <h4 className="text-lg text-gray-300 font-bold font-geist tracking-tighter">
                  {item.title}
                </h4>
                <p className="text-gray-500">{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

      `,
    },
  },
  "farmui-newsletter-00": {
    component: <FUINewsletterWithBackground />,
    description: "Newsletter section with background",
    path: "previewsComponents/FUINewsletterWithBackground",
    codeCopy: {
      react: `
      
'use client'
import React from "react";

export default function FUINewsletterWithBackground() {

    return (
        <section className="py-14 max-w-screen-xl mx-auto ">
            <div className="relative overflow-hidden mx-4 px-4 py-14 bg-transparent rounded-2xl border border-input  bg-page-gradient md:px-8 md:mx-8">
                <div className="relative z-10 max-w-xl mx-auto sm:text-center">
                    <div className="space-y-3">

                        <h3 className="text-3xl text-white font-bold tracking-tighter font-geist">
                            Subscribe to our newsletter
                        </h3>
                        <hr className="w-1/2 h-[1px] mx-auto mb-5"/>
                        <p className="text-gray-100 leading-relaxed">
                            Stay up to date with the roadmap progress, announcements and exclusive discounts feel free to sign up with your email.
                        </p>
                    </div>
                    <div className="mt-6">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex items-center justify-center bg-white rounded-lg p-1 sm:max-w-md sm:mx-auto ocus-within:outline-none focus-within:ring-2 focus-within:ring-gray-500">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="text-gray-500 w-full p-2 outline-none border-none active:border-none focus:outline-none focus:ring-0 focus:border-none"
                            />
                            <button
                                className="p-2  rounded-lg font-medium bg-gradient-to-br from-zinc-400 to-zinc-700 px-4 py-2 text-lg text-zinc-50 ring-2 ring-white   transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-zinc-500/70  duration-150 outline-none shadow-md focus:shadow-none sm:px-4"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-5 max-w-lg text-[15px] text-gray-100 sm:mx-auto">
                            No spam ever, we are care about the protection of your data.
                            Read our <a className="underline" href="javascript:void(0)"> Privacy Policy </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
        
      `,
    },
  },
  "farmui-testimonial-00": {
    component: <FUITestimonialWithThreeColumn />,
    description: "Testimonial with three column",
    path: "previewsComponents/FUITestimonialWithThreeColumn",
    codeCopy: {
      react: `
import React from "react";
export default function FUITestimonialWithThreeColumn() {
  const testimonials = [
    {
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      name: "Martin escobar",
      title: "Founder of meta",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est hendrerit, porta nunc vitae.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      name: "Simon andrew",
      title: "Software engineer",
      quote:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      name: "Micheal worin",
      title: "Product designer",
      quote:
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain.",
    },
  ];

  return (
    <section className="relative min-h-screen">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <img
        src="https://tailwindcss.com/_next/static/media/docs@30.8b9a76a2.avif"
        className="absolute z-2 -top-0 left-10 opacity-30"
      />
      <div className="relative  py-14  z-10 max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-gray-200 text-3xl font-semibold sm:text-4xl font-geist tracking-tighter">
            Hear from our customers
          </h3>
          <p className="mt-3 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et est
            hendrerit, porta nunc vitae, gravida justo. Nunc fermentum magna
            lorem, euismod volutpat arcu volutpat et.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="bg-transparent bg-glass-gradient rounded-xl border shadow-md"
              >
                <div className="p-4">
                  <svg
                    className="w-9 h-9 text-gray-300"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.47895 14.5833C9.15374 14.5833 8.84166 14.6329 8.53103 14.6781C8.63166 14.3398 8.7352 13.9956 8.90145 13.6865C9.0677 13.2373 9.32728 12.8479 9.58541 12.4556C9.80124 12.0312 10.1819 11.7439 10.4619 11.3808C10.755 11.0279 11.1546 10.7931 11.471 10.5C11.7817 10.1937 12.1885 10.0406 12.5123 9.82478C12.8506 9.63082 13.1452 9.41645 13.4602 9.31437L14.2462 8.99062L14.9375 8.70332L14.2302 5.87708L13.3596 6.08707C13.081 6.15707 12.7412 6.23874 12.3548 6.33645C11.9596 6.40937 11.5381 6.60916 11.0685 6.79145C10.6048 6.99853 10.0681 7.13853 9.56937 7.47103C9.0677 7.78895 8.48874 8.05437 7.97833 8.4802C7.48395 8.91916 6.88749 9.29978 6.44708 9.85833C5.96583 10.3804 5.49041 10.9287 5.12145 11.5529C4.69416 12.1479 4.40395 12.8012 4.0977 13.4473C3.82062 14.0933 3.59749 14.754 3.4152 15.3956C3.06958 16.6819 2.91499 17.904 2.8552 18.9496C2.80562 19.9967 2.83478 20.8673 2.89603 21.4973C2.91791 21.7948 2.95874 22.0835 2.98791 22.2833L3.02437 22.5283L3.06228 22.5196C3.32167 23.7312 3.91877 24.8446 4.78452 25.7311C5.65028 26.6175 6.7493 27.2408 7.95447 27.5287C9.15963 27.8166 10.4217 27.7575 11.5946 27.3581C12.7676 26.9587 13.8035 26.2354 14.5825 25.2719C15.3616 24.3083 15.8519 23.1439 15.9969 21.9133C16.1418 20.6828 15.9353 19.4363 15.4014 18.3181C14.8675 17.2 14.028 16.2558 12.9799 15.5949C11.9318 14.934 10.718 14.5832 9.47895 14.5833ZM25.5206 14.5833C25.1954 14.5833 24.8833 14.6329 24.5727 14.6781C24.6733 14.3398 24.7769 13.9956 24.9431 13.6865C25.1094 13.2373 25.369 12.8479 25.6271 12.4556C25.8429 12.0312 26.2235 11.7439 26.5035 11.3808C26.7967 11.0279 27.1962 10.7931 27.5127 10.5C27.8233 10.1937 28.2302 10.0406 28.554 9.82478C28.8923 9.63082 29.1869 9.41645 29.5019 9.31437L30.2879 8.99062L30.9792 8.70332L30.2719 5.87708L29.4012 6.08707C29.1227 6.15707 28.7829 6.23874 28.3965 6.33645C28.0012 6.40937 27.5798 6.60916 27.1102 6.79145C26.6479 6.99999 26.1098 7.13853 25.611 7.47249C25.1094 7.79041 24.5304 8.05582 24.02 8.48166C23.5256 8.92062 22.9292 9.30124 22.4887 9.85833C22.0075 10.3804 21.5321 10.9287 21.1631 11.5529C20.7358 12.1479 20.4456 12.8012 20.1394 13.4473C19.8623 14.0933 19.6392 14.754 19.4569 15.3956C19.1112 16.6819 18.9567 17.904 18.8969 18.9496C18.8473 19.9967 18.8765 20.8673 18.9377 21.4973C18.9596 21.7948 19.0004 22.0835 19.0296 22.2833L19.066 22.5283L19.104 22.5196C19.3633 23.7312 19.9604 24.8446 20.8262 25.7311C21.6919 26.6175 22.791 27.2408 23.9961 27.5287C25.2013 27.8166 26.4634 27.7575 27.6363 27.3581C28.8093 26.9587 29.8452 26.2354 30.6242 25.2719C31.4033 24.3083 31.8936 23.1439 32.0385 21.9133C32.1834 20.6828 31.977 19.4363 31.4431 18.3181C30.9092 17.2 30.0697 16.2558 29.0216 15.5949C27.9735 14.934 26.7597 14.5832 25.5206 14.5833Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <figure>
                  <blockquote>
                    <p className="text-gray-500 tracking-tighter font-geist text-lg font-normal px-4 py-1">
                      {item.quote}
                    </p>
                  </blockquote>
                  <div className="flex items-center gap-x-4 p-4 mt-6 bg-page-gradient">
                    <img
                      src={item.avatar}
                      className="w-16 h-16 rounded-full border-2 border-gray-500"
                    />
                    <div>
                      <span className="block text-gray-500 font-semibold">
                        {item.name}
                      </span>
                      <span className="block text-gray-600 text-sm mt-0.5">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className="absolute top-0 w-full h-[350px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.1) 4.54%, rgba(232, 121, 249, 0.09) 34.2%, rgba(192, 132, 252, 0.09) 77.55%)" }}></div> */}
    </section>
  );
}
`,
    },
  },
  "farmui-testimonial-01": {
    component: <FUITestimonialWithGrid />,
    description: "Testimonial with grid",
    path: "previewsComponents/FUITestimonialWithGrid",
    codeCopy: {
      react: `
import clsx from 'clsx';
import Image from 'next/image'


const testimonials = [
  [
    {
      content:
        'TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.',
      author: {
        name: 'Sheryl Berge',
        role: 'CEO at Lynch LLC',
        image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
      },
    },
    {
      content:
        'I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
      },
    },
  ],
  [
    {
      content:
        'The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.',
      author: {
        name: 'Leland Kiehn',
        role: 'Founder of Kiehn and Sons',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    },
    {
      content:
        'There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.',
      author: {
        name: 'Erin Powlowski',
        role: 'COO at Armstrong Inc',
        image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
    },
  ],
  [
    {
      content:
        'I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.',
      author: {
        name: 'Peter Renolds',
        role: 'Founder of West Inc',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      },
    },
    {
      content:
        'This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.',
      author: {
        name: 'Amy Hahn',
        role: 'Director at Velocity Industries',
        image: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      },
    },
  ],
]

function QuoteIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  )
}

export default function FUITestimonialWithGrid() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className=" relative bg-transpaarent py-20 sm:py-10 z-1 bg-page-gradient"
    >
      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-5 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="absolute top-0 z-[0] h-screen opacity-20 w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div
        className="absolute inset-x-0 -top-10 opacity-50 z-10 m-auto h-[27rem] max-w-lg sm:h-64 sm:max-w-7xl"
      ></div>
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-geist text-3xl tracking-tighter text-gray-100 sm:text-6xl">
            <span className='bg-gradient-to-br from-indigo-400 via-indigo-300 to-indigo-700 bg-clip-text text-transparent'>Loved</span> by businesses worldwide.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300 font-geist">
            Our software is so simple that people can’t help but fall in love
            with it. Simplicity is easy when you just skip tons of
            mission-critical features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-transparent transform-gpu [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset] p-6 shadow-xl ">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-950" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-gray-100">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100/10 pt-6">
                        <div>
                          <div className="font-display text-base text-gray-100">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
    
      </Container>
    </section>
  )
}
export function Container({
    className,
    ...props
  }: React.ComponentPropsWithoutRef<"div">) {
    return (
      <div
        className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}
        {...props}
      />
    );
  }
  `,
    },
  },
};
