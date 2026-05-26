// Renders a schema.org JSON-LD <script>. Data is server-built from trusted
// constants; we additionally escape `<`, `>` and `&` to their unicode forms so
// no string value can ever break out of the <script> element (defense in depth).
export function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: escaped, server-built JSON-LD
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
