import React from "react";
import { cn } from "@/lib";

interface Props {
    className?: string;
    children: React.ReactNode;
<<<<<<< HEAD
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
=======
}

const Wrapper = ({ children, className }: Props) => {
>>>>>>> 11a90d6765be9d68ca38d00f753ff591c6cf0221
    return (
        <div
            className={cn(
                "w-full mx-auto lg:max-w-screen-xl lg:mx-auto px-4 md:px-12",
                className
            )}
        >
<<<<<<< HEAD
            {childrenWithRef}
=======
            {children}
>>>>>>> 11a90d6765be9d68ca38d00f753ff591c6cf0221
        </div>
    )
};

export default Wrapper
