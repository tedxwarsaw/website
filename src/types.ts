export interface MarkdownDoc<Fields> {
    markdownRemark: {
        frontmatter: Fields,
    }
}