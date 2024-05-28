import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface MdxTabProps {
    children: React.ReactNode;
    items: string[];
}

export const MdxTabs = ({ children, items }: MdxTabProps) => {
    return (
        <Tabs defaultValue={items[0]}>
            <TabsList>
                {items.map((tab) => (
                    <TabsTrigger value={tab} key={tab} asChild>
                        <p>{tab}</p>
                    </TabsTrigger>
                ))}
            </TabsList>
            {children}
        </Tabs>
    );
};

export const MdxTab = ({
    children,
    value,
}: {
    children: React.ReactNode;
    value: string;
}) => {
    return <TabsContent value={value}>{children}</TabsContent>;
};