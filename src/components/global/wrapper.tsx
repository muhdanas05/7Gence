import React from "react";
import { cn } from "@/lib";

interface Props {
    className?: string;
    children: React.ReactNode;
    ctaRef?: React.Ref<HTMLDivElement>;
}

const Wrapper = ({ children, className, ctaRef }: Props) => {
    // If a CTA child is present, clone it and attach the ref
    const childrenWithRef = React.Children.map(children, child => {
        if (
            React.isValidElement(child) &&
            child.type &&
            (child.type as any).displayName === "CTA"
        ) {
            return React.cloneElement(child, { ref: ctaRef } as any);
        }
        return child;
    });
    return (
        <div
            className={cn(
                "w-full mx-auto lg:max-w-screen-xl lg:mx-auto px-4 md:px-12",
                className
            )}
        >
            {childrenWithRef}
        </div>
    )
};

export default Wrapper
