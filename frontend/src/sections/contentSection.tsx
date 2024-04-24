import React from "react";

interface ContentProps {
    content: React.ReactNode
}
export default function ContentSection({content} : ContentProps) {

    return(
        <main>
            {content}
        </main>
    )
}