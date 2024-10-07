import { CollectionConfig } from "payload/types";

const Contents: CollectionConfig = {
  slug: "contents",
  fields: [
    {
      name: "title",
      type: "text",
      localized: true,
    },
    {
      name: "body",
      type: "richText",
      localized: true,
    },
    {
      name: "type",
      type: "select",
      admin: {
        position: "sidebar",
      },
      options: [
        {
          label: "Tutorial",
          value: "tutorial",
        },
        {
          label: "Education",
          value: "education",
        },
      ],
    },
  ],
};

export default Contents;
