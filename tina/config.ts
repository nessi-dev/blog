import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
            description: "Add a cover image to your post"
          },
          {
            type: "string",
            name: "excerpt",
            label: "Excerpt",
            description: "A short summary of your post",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "datetime",
            name: "publishedAt",
            label: "Publication Date",
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "string",
            name: "authorBio",
            label: "Author Bio",
            ui: {
              component: "textarea"
            }
          },
          {
            type: "image",
            name: "authorAvatar",
            label: "Author Avatar"
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            description: "Add relevant tags to help readers discover your post"
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: [
              "Technology",
              "Programming",
              "Design",
              "Career",
              "Productivity",
              "Tutorial",
              "Opinion",
              "Other"
            ]
          },
          {
            type: "number",
            name: "readingTime",
            label: "Reading Time (minutes)",
            description: "Estimated reading time in minutes"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: "CodeBlock",
                label: "Code Block",
                fields: [
                  {
                    name: "language",
                    label: "Language",
                    type: "string",
                    options: ["javascript", "typescript", "python", "java", "html", "css", "shell", "json"]
                  },
                  {
                    name: "code",
                    label: "Code",
                    type: "string",
                    ui: {
                      component: "textarea"
                    }
                  }
                ]
              },
              {
                name: "Callout",
                label: "Callout",
                fields: [
                  {
                    name: "type",
                    label: "Type",
                    type: "string",
                    options: ["info", "warning", "success", "error"]
                  },
                  {
                    name: "text",
                    label: "Text",
                    type: "string"
                  }
                ]
              }
            ]
          },
        ],
      },
    ],
  },
});
