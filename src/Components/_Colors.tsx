import { __ } from "@wordpress/i18n";
// @ts-ignore
import { URLInput, __experimentalLinkControl as LinkControl, InspectorControls, BlockControls } from "@wordpress/block-editor";

import { Context } from "../Tools/Context";

import type { Attr } from "../Tools/Types";

type LinkOptions = {
    href: Attr;
} & Record<string, any>;

export const Color = ({ href, children, ...props }: LinkOptions) => {
    const context = new Context().get();

    // Force convert string to object
    if (typeof href.value === "string") {
        href.value = { url: href.value, rel: "noopener" };
    }

    if (context === "edit") {
        return (
            <>
                {href.value?.url ? (
                    <a
                        href="#"
                        {...props}>
                        {children}
                    </a>
                ) : (
                    <span {...props}>{children}</span>
                )}
            </>
        );
    }

    return null;
};
