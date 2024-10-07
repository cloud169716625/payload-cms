import { CollectionConfig } from "payload/types";

const Video: CollectionConfig = {
  slug: "videos",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "url",
      type: "text",
    },
  ],
};

export default Video;
