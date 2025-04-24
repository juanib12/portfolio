
export const functions = {
    makeSlug: (text) => {
        return text.replaceAll(" ", "-")
    }
}