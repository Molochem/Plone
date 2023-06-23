import { defineMessages } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  credits: {
    id: 'Credits',
    defaultMessage: 'Credits',
  },
  linkTo: {
    id: 'Link to',
    defineMessage: 'Link to',
  },
  creditSettings: {
    id: 'Credit settings',
    defaultMessage: 'Credit settings',
  },
  openLinkInNewTab: {
    id: 'Open in new tab',
    defaultMessage: 'Open in new tab',
  },
});

export const VideoBlockSchemaEnhancer = ({ intl, formData, schema }) => {
  schema.properties.credits = {
    title: intl.formatMessage(messages.credits),
  };

  schema.properties.title = {
    title: intl.formatMessage(messages.title),
  };

  schema.properties.linkTo = {
    title: intl.formatMessage(messages.linkTo),
    widget: 'object_browser',
    mode: 'link',
    selectedItemAttrs: ['Title', 'Description', 'hasPreviewImage'],
    allowExternals: true,
  };

  schema.fieldsets = [
    ...schema.fieldsets,
    {
      id: 'credit settings',
      title: intl.formatMessage(messages.creditSettings),
      fields: [...['title', 'credits', 'linkTo']],
    },
  ];

  //schema.fieldsets[0].fields = [...schema.fieldsets[0].fields, ...['']];

  return schema;
};
