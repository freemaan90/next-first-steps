import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'Pricing Page',
 description: 'SEO Description Pricing Page',
 keywords:['Pricing Page','Frederico','Informacion']
};

export default function PricingPage () {
    return(
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}