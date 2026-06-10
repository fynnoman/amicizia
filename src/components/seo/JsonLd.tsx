/**
 * Renders one or more JSON-LD blocks. Inline <script> with type
 * "application/ld+json" — never client-hydrated.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schema.org payloads are author-controlled, never user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
