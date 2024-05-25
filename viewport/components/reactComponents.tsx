import FUIFaqsWithDividedRows from "previewsComponents/FUIFaqsWithDividedRows";
import FUIFaqsWithSearchBox from "previewsComponents/FUIFaqsWithSearchBox";
import FUIForm from "previewsComponents/FUIForm";
import React from "react";

type ComponentProps = {
    [key: string]: {
        component: React.ReactNode,
        description: string

    }
}
export const componentToPreview: ComponentProps = {

    "001": {
        component: <FUIForm />,
        description: "Form Input UI"
    },
    "bb87ffac-1579-4670-80be-7c1180404b4e": {
        component: <FUIFaqsWithSearchBox />,
        description: "FAQ with Search Box"
    },
    "639934f5-ad80-4b22-aa0f-86cc9726a658": {
        component: <FUIFaqsWithDividedRows />,
        description: "FAQ with divided row"
    }
    

}