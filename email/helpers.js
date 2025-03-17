import { Key } from "lucide-react";

export const stripHTMLTags = (htmlString) => {
    return htmlString.replace(/<br>/g, '/\n').replace(/<[^>]+>/g, '');
}

export const replaceMergeTags = (data, htmlString) => {
    Object.keys(data)?.forEach(keys => {
        if (htmlString.includes(`{{${keys}}}`)) {
            let val = data[keys];

            const regexPattern = new RegExp(`\\{\\{\\s*${keys}\\s*\\}\\}`,'g')
            htmlString = htmlString.replace(regexPattern, val)
        }
    });
    return htmlString;
}