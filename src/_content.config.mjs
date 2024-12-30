import { defineCollection, z } from 'astro:content';
// import { docsLoader } from '@astrojs/starlight/loaders';
// import { docsSchema } from '@astrojs/starlight/schema';
import { glob, file } from 'astro/loaders'; // Not available with legacy API

export const collections = {
	// docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  blog: defineCollection({ 
    loader: glob({ pattern: "**/**/*.mdx", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.string()
    })
  }),
};
