/**
 * Global Type Declarations
 * TypeScript type definitions for modules without types
 */

/**
 * CSS Modules and CSS imports
 */
declare module '*.css' {
  const content: Record<string, string>
  export default content
}

/**
 * Image imports
 */
declare module '*.png' {
  const content: string
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.jpeg' {
  const content: string
  export default content
}

declare module '*.gif' {
  const content: string
  export default content
}

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.webp' {
  const content: string
  export default content
}

declare module '*.avif' {
  const content: string
  export default content
}
